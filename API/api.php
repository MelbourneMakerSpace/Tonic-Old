<?php
//ini_set('display_errors', 1); 
// ini_set('display_startup_errors', 1); 
// error_reporting(E_ALL);
// header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0"); 
// header("Cache-Control: post-check=0, pre-check=0", false); 
// header("Pragma: no-cache");
require_once("Rest.inc.php");


class API extends REST {
     
    public $data = "";
    //Enter details of your database
    const DB_SERVER = "localhost";
    const DB_USER = "root";
    const DB_PASSWORD = "Makerspace1";
    const DB = "Tonic";
     
    private $db = NULL;
 
    public function __construct(){
        parent::__construct();              // Init parent contructor
        $this->dbConnect();                 // Initiate Database connection
}
     
private function dbConnect(){
        $this->db = mysqli_connect(self::DB_SERVER,self::DB_USER,self::DB_PASSWORD);
        if($this->db)
            mysql_select_db("members",$this->db);
}
     
    /*
     * Public method for access api.
     * This method dynmically call the method based on the query string
     *
     */
public function processApi(){

        //If we are posting a method (update, delete, etc)
        if(isset($_POST['_method']))
            $_method = $_POST['_method'];

        //if no method is posted, assume a read
        else
            $_method = "READ";


        

        $funcArray = explode("/",$_REQUEST['rquest']);
        $func = $funcArray[0];

        if(count($funcArray) == 2)
            $param = $funcArray[1];

        else if(count($funcArray) == 3)
        {
            $row = $funcArray[1];
            $param = $funcArray[2];
        }
        
        if((int)method_exists($this,$func) > 0 && !$param)
            $this->$func($_method);
        else if((int)method_exists($this,$func) > 0 && $param)
            $this->$func($_method,$param,$row);
        else
            $this->response('Error code 404, Page not found',404);   // If the method not exist with in this class, response would be "Page not found".
}


private function hello(){
    echo str_replace("this","that","HELLO WORLD!!");
 
}

//Member is a Contact with a user/login, key, etc.
private function member($_method,$param,$row){
    $dbconn = new mysqli(self::DB_SERVER,self::DB_USER,self::DB_PASSWORD,self::DB);

    if($this->get_request_method() == "GET"){
            //$myDatabase= $this->db;// variable to access your database
        if(!$param && !$row){
            $sql = "SELECT * from contact";
        }

        else if($param && !$row){
            $sql = "SELECT * from contact where cid = $param";
        }

        else if($param && $row)
            $sql = "SELECT * from contact where $row = '$param'";

            $result = $dbconn->query($sql);
            $dt = array();
            while($row = $result->fetch_assoc()){
                array_push($dt, $row);
            }
            $json = json_encode($dt);
            echo $json;
    }
// API/member/119
// "_method":"PUT"
// data: {}
        if($_method=="DELETE"){
            //$myDatabase= $this->db;// variable to access your database
            $sql = "delete from contact where cid = $param";
            echo $sql;
        }

        if($_method=="PUT"){
            //$myDatabase= $this->db;// variable to access your database
            $jsonData = json_decode($_POST['details'],true);
            $firstName = $jsonData['firstName'];
            $lastName = $jsonData['lastName'];
            $phone = $jsonData['phone'];
            $email = $jsonData['email'];
            $paypalEmail = $jsonData['paypalEmail'];
            $emergencyName = $jsonData['emergencyName'];
            $emergencyPhone = $jsonData['emergencyPhone'];
            $emergencyEmail = $jsonData['emergencyEmail'];
            
            $sql = "insert into contact (firstName, lastName, phone, email, paypalEmail,
            emergencyName, emergencyPhone, emergencyEmail) values ('$firstName',
            '$lastName', '$phone', '$email', '$paypalEmail', '$emergencyName', 
            '$emergencyPhone', '$emergencyEmail')";
            echo $sql;
        }
        if($_method=="POST"){
            //$myDatabase= $this->db;// variable to access your database
            
            $jsonData = json_decode($_POST['details'],true);
            $cid = $jsonData['cid'];
            $firstName = $jsonData['firstName'];
            $lastName = $jsonData['lastName'];
            $phone = $jsonData['phone'];
            $email = $jsonData['email'];
            $paypalEmail = $jsonData['paypalEmail'];
            $emergencyName = $jsonData['emergencyName'];
            $emergencyPhone = $jsonData['emergencyPhone'];
            $emergencyEmail = $jsonData['emergencyEmail'];
            
            $sql = "update contact (firstName, lastName, phone, email, paypalEmail,
            emergencyName, emergencyPhone, emergencyEmail) values ('$firstName',
            '$lastName', '$phone', '$email', '$paypalEmail', '$emergencyName', 
            '$emergencyPhone', '$emergencyEmail') WHERE cid = $cid";
            echo $sql;
        }

    
}

private function login(){

    /*
function user_check_password($password, $user) {
    if (!empty($user['hash'])) {
        if (user_hash($password, $user['salt']) === $user['hash']) {
            return true;
        }
    }
    return false;
}
*/
    $dbconn = new mysqli(self::DB_SERVER,self::DB_USER,self::DB_PASSWORD,self::DB);
    
    if($this->get_request_method() == "POST"){
        //$myDatabase= $this->db;// variable to access your database
    $param = json_decode($_POST['credentials'],true);
    $username = $param['username'];
    $password = $param['password'];
    //get hash
    //omg escape this stuff pls
     $sql = "SELECT hash from user where username = '$username'";
     
        $result = $dbconn->query($sql);
        $dt = array();
        while($row = $result->fetch_assoc()){
            array_push($dt, $row);
        }

        $hash = $dt[0]["hash"];   


    if (password_verify($password,$hash)){
        //generate session key
        //set session key
        
        if(!session_id())
            session_start();

        

        echo '{"verify":"true","key":"'.session_id().'"}';

    }
        if (!password_verify($password,$hash)){
        echo '{"verify":"false"}';
    }
    
    }
}
     
 
private function test(){    
    // Cross validation if the request method is GET else it will return "Not Acceptable" status
    if($this->get_request_method() != "GET"){
        $this->response('',406);
    }
    $myDatabase= $this->db;// variable to access your database
    $param=$this->_request['var'];
    // If success everythig is good send header as "OK" return param
    $this->response($param, 200);    
}
 
     
    /*
     *  Encode array into JSON
    */
    private function json($data){
        if(is_array($data)){
            return json_encode($data);
        }
    }
}
 
    // Initiiate Library
     
    $api = new API;
    $api->processApi();
?>