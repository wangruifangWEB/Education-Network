
<meta charset="utf-8" />

<?php


echo __DIR__;


 function read_all ($dir){
  if(!is_dir($dir)) return false;

    $handle = opendir($dir);

     if($handle){
         while(($fl = readdir($handle)) !== false){
                    $temp = $dir.DIRECTORY_SEPARATOR.$fl;
        //如果不加  $fl!='.' && $fl != '..'  则会造成把$dir的父级目录也读取出来
            if(is_dir($temp) && $fl!='.' && $fl != '..'){
                                 echo '目录：'.$temp.'<br>';
                read_all($temp);
             }else{
                            if($fl!='.' && $fl != '..'){

                    echo '文件：'.$temp.'<br>';
               }
            }
       }
     }
 }
read_all(__DIR__);


 ?>