<?php
session_start();
include_once('../config/database.php');
include_once('../config/Pdb.php');
include_once( 'config.php' );
include_once( 'saetv2.ex.class.php' );

$o = new SaeTOAuthV2( WB_AKEY , WB_SKEY );

if (isset($_REQUEST['code'])) {
	$keys = array();
	$keys['code'] = $_REQUEST['code'];
	$keys['redirect_uri'] = WB_CALLBACK_URL;
	try {
		$token = $o->getAccessToken( 'code', $keys ) ;
	} catch (OAuthException $e) {
	}
}

if ($token) {
	$_SESSION['oauth2']=$_SESSION['token'] = $token;
	setcookie( 'weibojs_'.$o->client_id, http_build_query($token) );
	$c = new SaeTClientV2( WB_AKEY , WB_SKEY , $_SESSION['oauth2']['access_token'] );
	$ms  = $c->home_timeline(); // done
	$uid_get = $c->get_uid();
	$uid = $uid_get['uid'];
	$user_message = $c->show_user_by_id( $uid);//根据ID获取用户等基本信息
	$db=Pdb::getDb();
	$rs=$db->getOne("select id from same_weibo_user where weiboid='".$uid."'");
	if($rs){
		$_SESSION['userId']=$rs;
	}else{
		$sql="insert into same_weibo_user(weiboid,screen_name,location,profile_image_url,gender) values(".
			$db->quote($user_message["idstr"]).",".$db->quote($user_message["screen_name"]).",".
			$db->quote($user_message["location"]).",".$db->quote($user_message["profile_image_url"]).",".
			$db->quote($user_message["gender"]).")";
		$db->execute($sql);
		$_SESSION['userId']=$db->lastInsertId;
	}
	header("Location: ".$_SESSION["callback_url"]);
	exit;
?>
<!--
授权完成,<a href="weibolist.php">进入你的微博列表页面</a><br />
-->
<?php
} else {
?>
授权失败。
<?php
}
?>
