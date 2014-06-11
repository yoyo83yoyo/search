function messageGo(){
  //���o "username" ������
  var username = $('#search').val();        
   //���o "message" ������        
  var message = $('#days').val();             
    $.ajax({
        //�i�D�{�������n�ǰe������ 
        url:"search.parseapp.com",
        //�ݭn�ǰe������
data:"&message="+message+"&username="+username, 
         //�ϥ�POST���k     
        type : "POST",         
        //�����^�Ǹ��ƪ��榡�A�b�o�ӨҤl���A�u�n�O����true�N�i�H�F
        dataType:'json', 
         //�ǰe���ѫh���X���ѰT��      
        error:function(){ 
        //���ƶǰe���ѫ��N�|�����o��function�����{���A�i�H�b�o�̼g�J�n���檺�{��  
        alert("132");
        },
        //�ǰe���\�h���X���\�T��
        success:function(){
        //���ƶǰe���\���N�|�����o��function�����{���A�i�H�b�o�̼g�J�n���檺�{��  
        alert("123123");
        }
    }); 
}
function send(){
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
