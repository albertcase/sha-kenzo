<?php
session_start();
include_once('./config/database.php');
include_once('./config/Pdb.php');
include_once( './sina/config.php' );
include_once( './sina/saetv2.ex.class.php' );
if(!isset($_POST['signed_request'])){
	//非框架
	/*
	if(stripos($_SERVER['HTTP_USER_AGENT'],"Mobile")){
		if(stripos($_SERVER['HTTP_USER_AGENT'],"Safari")){
			Header("Location: /sina");
			exit;
		}
	}
	*/
	if(stripos($_SERVER['HTTP_USER_AGENT'],"Mobile")){
		if(stripos($_SERVER['HTTP_USER_AGENT'],"Safari")){
			if(stripos($_SERVER['HTTP_USER_AGENT'],"iPad")){
			 	Header("Location:/ipad");
			}else{
			 	Header("Location:/mobile");
			}
		}		
	}
	Header("Location: http://apps.weibo.com/2279946754/Qp55MH8");
	exit;
}
$o = new SaeTOAuthV2( WB_AKEY , WB_SKEY );
$data=$o->parseSignedRequest($_POST['signed_request']);
if($data == '-2'){
	 die('sign is error!');
} else {
	$_SESSION['oauth2'] = $data;
}
//授权完成 查询用户是否存在

if(!isset($_SESSION['oauth2']['oauth_token'])){
	if(!isset($_SESSION['token']['access_token'])){
		//Header("Location: /sina");
		if(stripos($_SERVER['HTTP_USER_AGENT'],"Mobile")){
			if(stripos($_SERVER['HTTP_USER_AGENT'],"iPad")){
			 	Header("Location:/ipad");
			}else{
			 	Header("Location:/mobile");
			}
		}else{
			Header("Location:/pc");
		}
	}else
		$c = new SaeTClientV2( WB_AKEY , WB_SKEY , $_SESSION['token']['access_token']);
}else{
	$c = new SaeTClientV2( WB_AKEY , WB_SKEY , $_SESSION['oauth2']['oauth_token'] );
}
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
if(stripos($_SERVER['HTTP_USER_AGENT'],"Mobile")){
	if(stripos($_SERVER['HTTP_USER_AGENT'],"iPad")){
	 	Header("Location:/ipad");
	}else{
	 	Header("Location:/mobile");
	}
}else{
	Header("Location:/pc");
}

?>