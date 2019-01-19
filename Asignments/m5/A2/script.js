function checkerFun(value, i){
    // console.log(value)
    var selectedQuestion = data.quiz[i];
    var j;
    for(var k =0;k<2;k++){
        console.log(k);
        console.log(selectedQuestion.choices[k].option)
        if(value == selectedQuestion.choices[k].option){
            console.log(true);
            j = k;
            break;
        }
    }
    document.getElementById("Resp").innerHTML = selectedQuestion.choices[j].feedback;
    document.getElementById("Resp").style.display = "block";
}

function HintFun(){
    var x = document.getElementById("hint");
            if (x.style.display === "none") {
            x.style.display = "block";
            } else {
            x.style.display = "none";
            }
}
function nextQue(a){
    if(a == 0){
        questioner(a);
        document.getElementById("prev").style.display = "none";
        document.getElementById("next").style.display = "block";
    } else if(a == data.quiz.length - 1){
        questioner(a);
        document.getElementById("prev").style.display = "block";
        document.getElementById("next").style.display = "none";
    } else {
        questioner(a);
        document.getElementById("prev").style.display = "block";
        document.getElementById("next").style.display = "block";
    }
}

var temp = '{"quiz":[{"Q":"Q1. What is the capital of India?","choices":[{"option":"Hyderabad","iscorrect":false,"feedback":"Opps!, Your response is incorrect"},{"option":"New delhi","iscorrect":true,"feedback":"Hurray! Your response is correct!"}],"hint":"It is northern part"},{"Q":"Q2. Who prime minister of India?","choices":[{"option":"Modi","iscorrect":true,"feedback":"Hurray! Correct"},{"option":"KCR","iscorrect":false,"feedback":"Oops Incorrect"}],"hint":"He is from Gujarat."},{"Q":"Q3. Who is called the father of nation?","choices":[{"option":"Somesh","iscorrect":false,"feedback":"Oops!, Your response is Incorrect"},{"option":"Gandhi","iscorrect":true,"feedback":"Hurray! Your response is correct."}],"hint":"He is called Bapuji"}]}'
var data = JSON.parse(temp);
var i = 0;
questioner(i);
function questioner(i){
    document.getElementById("questioncontent").innerHTML ='<p>'+ data.quiz[i].Q +'</p>' +
            '<button type="button" class="btn btn-info" onclick="HintFun();"> Hint </button>'+
            '<br>'+
            '<div id="hint" class="alert alert-info" style="display:none"><p>'+data.quiz[i].hint+'</p></div>'+
            '<form>'+
                    '<label class="radio-inline">'+
                        '<input type="radio" name="optradio" value='+'"'+ data.quiz[i].choices[0].option +'"'+'onclick="checkerFun(value,i);">'+data.quiz[i].choices[0].option+
                    '</label>'+
                    '<br>'+
                    '<label class="radio-inline">'+
                        '<input type="radio" name="optradio" value='+'"'+ data.quiz[i].choices[1].option +'"'+'onclick="checkerFun(value,i);">'+data.quiz[i].choices[1].option+
                    '</label>'+
                    '<br>'+
            '</form>'+
            '<br>'+
            '<div id="Resp" class="alert alert-success alert-dismissible fade in" style="display:none">'+
                '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'+
                '<strong>Hurray! </strong> Your response &&&& is correct.'+
            '</div>'+
            '<div id=' + data.quiz[i].choices[1].option + 'class="alert alert-danger alert-dismissible fade in" style="display:none">'+
                    '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'+
                    '<strong>Oops!</strong> Your response is %%%% Incorrect.'+
                '</div>'
            
            
    
    document.getElementById("row").innerHTML = '<div class = "row">'+
    '<button type="button" id = "prev" class="btn btn-info" style= "float:left; display:none" onclick = "nextQue(--i)"> Previous Question </button>'+
    '<button type="button" id = "next" class="btn btn-info" style= "float:right;" onclick = "nextQue(++i)"> Next Question </button></div>'
    


}