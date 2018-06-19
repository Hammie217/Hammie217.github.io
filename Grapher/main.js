function Updater(){
    myFunction(document.getElementById("title").innerHTML);
}
var xleft =0;
function myFunction2(val) {
    xleft=parseInt(val); //MAKE THESE TAKE FLOATS TOO
}
var xright =100;
function myFunction4(val) {
    xright=val;
}
var spacing =1;
function myFunction3(val) {
    spacing=parseFloat(val);
}
function myFunction(val) {
    var e = nerdamer(val);
    document.getElementById("title").innerHTML=(e.text());
    data =[];
    for (i = xleft; i <= xright; i=i+spacing) {
        try{
            var thingy ={x:  i,y: nerdamer(val,{x:i}).evaluate().text()};
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


var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Scatter Dataset',
            data: [{x: -10,y: 0}, {x: 0,y: 10}, {x: 10,y: 5}]
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom',
            }]
        }
    }
});