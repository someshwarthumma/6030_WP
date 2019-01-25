var data = [];
var names = [];
function myFun(nam ,val, pas){
    console.log(pas);
    if (nam===null){
        document.getElementById('alerter').style.display = "block";
        document.getElementById('name').value = '';
        document.getElementById('password').value = '';
        
    // } else if (pas == 123){
    //     alert("password is not correct");
    // } else {
    } else {
        data.push(val);
        names.push(nam);
        var str = "";
        for (var i = data.length-1; i >=0 ; i--) {
            str = str + names[i]+ ": "+'<br>'+ '&nbsp;'+'<Strong>'+data[i]+'</Strong>' + '<br>'+'<br>';
        }
        console.log(str);
        document.getElementById('commentarea').innerHTML = str; 
        document.getElementById('comment1').value = '';
        document.getElementById('name').value = '';
        document.getElementById('password').value = '';
        
    }
    
}