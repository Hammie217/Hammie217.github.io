const questions = {
    questions:[
        {
            "id":0,
            "question":"What is this component?",
            "link":"diode.svg",
            "answer1":" Resistor",
            "answer2":" Capacitor",
            "answer3":" Inductor",
            "answer4":" Diode",
            "correct":"4"
        },
        {
            "id":1,
            "question":"What component has this VI curve?",
            "link":"IVCurve.png",
            "answer1":" Resistor",
            "answer2":" Capacitor",
            "answer3":" Inductor",
            "answer4":" Diode",
            "correct":"1"
        },
        {
            "id":2,
            "question":"What does this circuit do?",
            "link":"OpAmp.svg",
            "answer1":"Amplifier",
            "answer2":"Inverting amplifier",
            "answer3":"Differentiator",
            "answer4":"Integrator",
            "correct":"2"
        }
    ]
}
var currentQuestion=0;
var score =0;
var questionCount=questions.questions.length;
function submit(){
    
    let r = document.getElementsByName('input')
    let selectedValue=0

    for (let i = 0; i <= 3; i++) {
         if(r[i].checked)
            selectedValue=i+1;
        r[i].checked = false;
    }
    if(selectedValue==0){
        alert("Please select an answer before selecting");
    }
    else{
        questions.questions.forEach(el => {
            if(el["id"]==currentQuestion){
                if(el["correct"]==selectedValue){
                    console.log("Correct")
                    score++;
                }
            }
        });
        currentQuestion++;
        if(currentQuestion<questionCount){
            loadQuestion()
        }
        else{
            endQuiz()
        }
        
    }
      
}
function loadQuestion(){
    questions.questions.forEach(el => {
        if(el["id"]==currentQuestion){
            document.getElementById("question").innerHTML=el["question"];
            document.getElementById("Aone").innerHTML=el["answer1"];
            document.getElementById("Atwo").innerHTML=el["answer2"];
            document.getElementById("Athree").innerHTML=el["answer3"];
            document.getElementById("Afour").innerHTML=el["answer4"];
            document.getElementById("Qimage").src=el["link"];
        }
    });
}

function endQuiz(){
    document.getElementById("whole").style.display="none";
    document.getElementById("Qimage").style.display="none";
    document.getElementById("question").innerHTML="Quiz Complete! \n You scored " +score +'/' +questionCount;           
    
}

function loadedFunc(){
loadQuestion();
}

function divClicked(x){
    console.log("Hello")
    document.getElementsByName('input')[x].checked=true;
}
