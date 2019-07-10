function ajax(a,b,c){
    var xhr = null;
       if(window.XMLHttpRequest){
           xhr = new XMLHttpRequest();
       }else{
           xhr = new ActiveXObject('Microsoft.XMLHTTP');
       }
       xhr.open(a,b,true);
       xhr.send(null);
       xhr.onreadystatechange = function(){
           if(xhr.readyState == 4){
             if(xhr.status == 200){
             var data = xhr.responseText;
             c(data);
             }
           }
       }
}