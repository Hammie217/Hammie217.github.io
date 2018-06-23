function Updater(){
    myFunction(document.getElementById("one").value);
}
var xleft =-10;
function myFunction2(val) {
    xleft=parseInt(val); //MAKE THESE TAKE FLOATS TOO
}
var xright =10;
function myFunction4(val) {
    xright=val;
}
var spacing =0.1;
function myFunction3(val) {
    spacing=parseFloat(val);
}
function myFunction(val) {
    var e = nerdamer(val);
    document.getElementById("title").innerHTML=(e.text());
    data =[];
    if(((xright-xleft)/spacing)>2000){
        document.getElementById("title").innerHTML=("Too many points");
    }
    else if(((xright-xleft)/spacing)<2){
        document.getElementById("title").innerHTML=("Not enough points");
    }
    else{
    for (i = xleft; i <= xright; i=i+spacing) {
        try{
            var thingy ={x:  i,y: nerdamer(val,{x:i}).evaluate().text()};
            if((nerdamer(val,{x:i}).evaluate().text()>1000000000)||nerdamer(val,{x:i}).evaluate().text()<-1000000000){
                document.getElementById("title").innerHTML=("Number too large");
                break;
            }
            data.push(thingy)
        }
        catch(e){
            var thingy ={x:  i,y: NaN};
            data.push(thingy)
        }
        
        
    }
    
    myChart.data.datasets[0].data=data;
    myChart.update();
}
}


var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Scatter Dataset',
            data: [{x: -10,y: 0}, {x: 0,y: 10}, {x: 10,y: 5}],
            pointBackgroundColor: "#4CAF50",
            fill:false,
            borderColor: '#4CAF50',
            pointRadius: 0,
            borderWidth:10
        }]
    },
    options: {
        legend: {
            display: false
         },
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom',
                ticks: {
                    fontSize: 40
                }
            }],
            yAxes: [{
                type: 'linear',
                position: 'left',
                ticks: {
                    fontSize: 40
                }
            }]
        }
    }
});

function onResizeEvent(){
    myChart.options.scales.xAxes[0].ticks.fontSize = window.innerWidth/50;
    myChart.options.scales.yAxes[0].ticks.fontSize = window.innerWidth/50;
    if(window.innerWidth<600){
        myChart.options.scales.xAxes[0].ticks.fontSize = 15;
        myChart.options.scales.yAxes[0].ticks.fontSize = 15;
    }
}