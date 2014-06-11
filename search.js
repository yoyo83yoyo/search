function messageGo(){
  
  var username = $('#But1').val();        
  var message = $('#days').val();             
    $.ajax(
      {
        url:"",        
        data:"&message="+message+"&username="+username, 
        
        type : "POST",         
        dataType:'json', 
        error:function(){ 
        alert("132");
        },
        success:function(){
        alert("123123");
        }
    }); 
};
/*function send(){
 var query = $('#query').valueOf();
    $.ajax({
        url: '/yoyo83yoyo/search',
        type: "POST",
        data: query,
        dataType: 'application/json; charset=utf-8',
        success: function (data) {
            alert(data);
            for (var x = 0; x < data.length; x++) {
                content = data[x].Id;
                content += "<br>";
                content += data[x].Name;
                content += "<br>";
                $(content).appendTo("#ProductList");
            }
        }
    });
});
*/
