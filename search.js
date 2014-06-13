function messageGo2(num){
             
  var send='But'+num;
  
    $.ajax({

        url:"",                            
        data:send,  

        type : "POST",                                   
        dataType:'json', 

        error:function(){                              
        alert("失敗");

        },
        success:function(){                                                           
        alert("成功");
        }
    }); 
}

function Change(num){
    var cl=document.getElementById('But'+num);
  if(cl.className === "click"){
    cl.className = "type";
  }
  else{
  cl.className = "click";
  }
  }
