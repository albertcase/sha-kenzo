<?php
session_start();
include_once('./config/database.php');
include_once('./config/Pdb.php');
include_once('./config/getIpClass.php');
include_once('./sina/config.php' );
include_once('./sina/saetv2.ex.class.php' );
$_POST=$_REQUEST;
$db=Pdb::getDb();
if(isset($_POST['model'])){
	switch ($_POST['model']) {
		case 'islogin':
			if(!isset($_SESSION["userId"])){
				print json_encode(array("code"=>0,"msg"=>"未登录"));
				exit;
			}
			$sql="select * from same_weibo_user where id=".$db->quote($_SESSION["userId"]);
			$rs=$db->getRow($sql,true);
			print json_encode(array("code"=>1,"msg"=>$rs));
			exit;
			break;

		case 'loadfriend':
			if(!isset($_SESSION["userId"])){
				print json_encode(array("code"=>0,"msg"=>"未登录"));
				exit;
			}
			$c = new SaeTClientV2( WB_AKEY , WB_SKEY , $_SESSION['oauth2']['oauth_token'] );
			$friendsResult=$c->bilateral($_SESSION['oauth2']['user_id'],1,100);
		    $friendList=array();
	        if(isset($friendsResult['users'])){
	            foreach($friendsResult['users'] as $friend){
	                $friendList[]=array('screen_name'=>$friend['screen_name'],
	                    'name'=>$friend['name'],
	                    'profile_image_url'=>$friend['profile_image_url'],
	                    'avatar_large'=>$friend['avatar_large'],
	                    'avatar_hd'=>$friend['avatar_hd'],
	                );
	            }
	        }
			print json_encode(array("code"=>1,"msg"=>$friendList));
			exit;
			break;
		case 'update':
			if(!isset($_SESSION["userId"])){
				print json_encode(array("code"=>0,"msg"=>"未登录"));
				exit;
			}
			$txt=isset($_POST['content'])?$_POST['content']:"测试文案";
			$c = new SaeTClientV2( WB_AKEY , WB_SKEY , $_SESSION['oauth2']['oauth_token'] );
			$ret=$c->update($txt);
			if ( isset($ret['error_code']) && $ret['error_code'] > 0 ) {
				print json_encode(array("code"=>2,"msg"=>"发送失败","rs"=>$ret));
			} else {
				print json_encode(array("code"=>1,"msg"=>"发送成功"));
			}
			exit;
			break;
		case 'upload':
			if(!isset($_SESSION["userId"])){
				print json_encode(array("code"=>0,"msg"=>"未登录"));
				exit;
			}
			$txt=isset($_POST['content'])?$_POST['content']:"测试文案";
			$pic=isset($_POST['pic'])?$_POST['pic']:"test.jpg";
			$c = new SaeTClientV2( WB_AKEY , WB_SKEY , $_SESSION['oauth2']['oauth_token'] );
			$ret=$c->upload($txt,$pic);
			if ( isset($ret['error_code']) && $ret['error_code'] > 0 ) {
				print json_encode(array("code"=>2,"msg"=>"发送失败","rs"=>$ret));
			} else {
				print json_encode(array("code"=>1,"msg"=>"发送成功"));
			}
			exit;
			break;
		case 'finish':
			if(!isset($_SESSION["userId"])){
				print json_encode(array("code"=>0,"msg"=>"未登录"));
				exit;
			}
			$tag=false;
			$name=isset($_POST['name'])?$_POST['name']:$tag=true;
			$mobile=isset($_POST['mobile'])?$_POST['mobile']:$tag=true;
			$city=isset($_POST['city'])?$_POST['city']:$tag=true;
			$address=isset($_POST['address'])?$_POST['address']:$tag=true;
			if($tag){
				print json_encode(array("code"=>2,"msg"=>"请填写必填项"));
				exit;
			}
			$sql="update same_weibo_user set name=".$db->quote($name).",mobile=".$db->quote($mobile).",city=".$db->quote($city).",address=".$db->quote($address)." where id='".$_SESSION["userId"]."'";
			$db->execute($sql);
			print json_encode(array("code"=>1,"msg"=>"提交成功"));
			exit;
			break;
		case 'test':
			
			var_dump($_SESSION);
			break;	
		case 'search':
			if(!isset($_SESSION["userId"])){
				print json_encode(array("code"=>0,"msg"=>"未登录"));
				exit;
			}
			$tag=false;
			$q=isset($_REQUEST['name'])?$_REQUEST['name']:"";
			$c = new SaeTClientV2( WB_AKEY , WB_SKEY , $_SESSION['oauth2']['oauth_token'] );
			$friendsResult=$c->search_at_users($q,10);
			echo "<pre>";
			print_r($friendsResult);die;
		    $friendList=array();
	        if(isset($friendsResult['users'])){
	            foreach($friendsResult['users'] as $friend){
	                $friendList[]=array('screen_name'=>$friend['screen_name'],
	                    'name'=>$friend['name'],
	                    'profile_image_url'=>$friend['profile_image_url'],
	                    'avatar_large'=>$friend['avatar_large'],
	                    'avatar_hd'=>$friend['avatar_hd'],
	                );
	            }
	        }
			print json_encode(array("code"=>1,"msg"=>$friendList));
			exit;
		default:
			# code...
			print json_encode(array("code"=>9999,"msg"=>"No Model"));
			exit;
			break;
	}
}
print "error";
exit;

//getIpClass