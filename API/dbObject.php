<?php

class dbObject{
    public function __construct($tableName, $IdColumn, $dbconn) {
    // echo('received:' . $tableName);
    // exit;
   }

   public function getList(){
       echo("got to get list");
       exit;
   }

   public function getSingle($id){
       echo("got to getSingle with ID:".$id);
       exit;
   }

   public function delete($id){
       echo("got to delete with ID:".$id);
       exit;
   }
}

?>