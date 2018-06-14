
function myFunction(val) {
  var x = val;
  var mag;
  if((x.slice(-1)=='K')||(x.slice(-1)=='k')){
    mag= Math.floor(Math.log10(x.slice(0,x.length-1)))+2;
  }
  else if((x.slice(-1)=='m')||(x.slice(-1)=='M')){
    mag= Math.floor(Math.log10(x.slice(0,x.length-1)))+5;
  }
  else{
    mag= Math.floor(Math.log10(x))-1;
  }
  if(x.charAt(0)=='.'){
    var fi = Math.round(x.charAt(1));
    var se = Math.round(x.charAt(2));
    var th = Math.round(x.charAt(3));
  }
  else if(x.charAt(1)=='.'){
    var fi = Math.round(x.charAt(0));
  var se = Math.round(x.charAt(2));
  var th = Math.round(x.charAt(3));
  }
  else if (x.charAt(2)=='.'){
    var fi = Math.round(x.charAt(0));
  var se = Math.round(x.charAt(1));
  var th = Math.round(x.charAt(3));
  }
  else{
    var fi = Math.round(x.charAt(0));
  var se = Math.round(x.charAt(1));
  var th = Math.round(x.charAt(2));
  }
  switch(mag){
    case 0:
    document.getElementById("3").style.backgroundColor = "#000000";
    document.getElementById("14").style.backgroundColor = "#998100";
      break;
      case 1:
      document.getElementById("3").style.backgroundColor = "#996633";
      document.getElementById("14").style.backgroundColor = "#000000";
      break;
      case 2:
      document.getElementById("3").style.backgroundColor = "#ff0000";
      document.getElementById("14").style.backgroundColor = "#996633";
      break;
      case 3:
      document.getElementById("3").style.backgroundColor = "#ff9900";
      document.getElementById("14").style.backgroundColor = "#ff0000";
      break;
      case 4:
      document.getElementById("3").style.backgroundColor = "#ffff00";
      document.getElementById("14").style.backgroundColor = "#ff9900";
      break;
      case 5:
      document.getElementById("3").style.backgroundColor = "#00ff00";
      document.getElementById("14").style.backgroundColor = "#ffff00";
      break;
      case 6:
      document.getElementById("3").style.backgroundColor = "#0000ff";
      document.getElementById("14").style.backgroundColor = "#00ff00";
      break;
      case 7:
      document.getElementById("3").style.backgroundColor = "#ff00ff";
      document.getElementById("14").style.backgroundColor = "#0000ff";
      break;
      case 8:
      document.getElementById("3").style.backgroundColor = "#cccccc";
      document.getElementById("14").style.backgroundColor = "#ff00ff";
      break;
      case 9:
      document.getElementById("3").style.backgroundColor = "#ffffff";
      document.getElementById("14").style.backgroundColor = "#cccccc";
      break;
      case -1:
      document.getElementById("3").style.backgroundColor = "#998100";
      document.getElementById("14").style.backgroundColor = "#757575";
      break;
      case -2:
      document.getElementById("3").style.backgroundColor = "#757575";
      document.getElementById("14").style.backgroundColor = "#222222";
      break;
      default:
      document.getElementById("3").style.backgroundColor = "#222222";
      document.getElementById("14").style.backgroundColor = "#222222";
      break;
  }
  switch(fi){
    case 0:
    document.getElementById("1").style.backgroundColor = "#000000";
    document.getElementById("11").style.backgroundColor = "#000000";
      break;
      case 1:
      document.getElementById("1").style.backgroundColor = "#996633";
      document.getElementById("11").style.backgroundColor = "#996633";
      break;
      case 2:
      document.getElementById("1").style.backgroundColor = "#ff0000";
      document.getElementById("11").style.backgroundColor = "#ff0000";
      break;
      case 3:
      document.getElementById("1").style.backgroundColor = "#ff9900";
      document.getElementById("11").style.backgroundColor = "#ff9900";
      break;
      case 4:
      document.getElementById("1").style.backgroundColor = "#ffff00";
      document.getElementById("11").style.backgroundColor = "#ffff00";
      break;
      case 5:
      document.getElementById("1").style.backgroundColor = "#00ff00";
      document.getElementById("11").style.backgroundColor = "#00ff00";
      break;
      case 6:
      document.getElementById("1").style.backgroundColor = "#0000ff";
      document.getElementById("11").style.backgroundColor = "#0000ff";
      break;
      case 7:
      document.getElementById("1").style.backgroundColor = "#ff00ff";
      document.getElementById("11").style.backgroundColor = "#ff00ff";
      break;
      case 8:
      document.getElementById("1").style.backgroundColor = "#cccccc";
      document.getElementById("11").style.backgroundColor = "#cccccc";
      break;
      case 9:
      document.getElementById("1").style.backgroundColor = "#ffffff";
      document.getElementById("11").style.backgroundColor = "#ffffff";
      break;
      case -1:
      document.getElementById("1").style.backgroundColor = "#998100";
      document.getElementById("11").style.backgroundColor = "#998100";
      break;
      case -2:
      document.getElementById("1").style.backgroundColor = "#757575";
      document.getElementById("11").style.backgroundColor = "#757575";
      break;
      default:
      document.getElementById("1").style.backgroundColor = "#222222";
      document.getElementById("11").style.backgroundColor = "#222222";
      break;
  }
  switch(se){
    case 0:
    document.getElementById("2").style.backgroundColor = "#000000";
    document.getElementById("12").style.backgroundColor = "#000000";
      break;
      case 1:
      document.getElementById("2").style.backgroundColor = "#996633";
      document.getElementById("12").style.backgroundColor = "#996633";
      break;
      case 2:
      document.getElementById("2").style.backgroundColor = "#ff0000";
      document.getElementById("12").style.backgroundColor = "#ff0000";
      break;
      case 3:
      document.getElementById("2").style.backgroundColor = "#ff9900";
      document.getElementById("12").style.backgroundColor = "#ff9900";
      break;
      case 4:
      document.getElementById("2").style.backgroundColor = "#ffff00";
      document.getElementById("12").style.backgroundColor = "#ffff00";
      break;
      case 5:
      document.getElementById("2").style.backgroundColor = "#00ff00";
      document.getElementById("12").style.backgroundColor = "#00ff00";
      break;
      case 6:
      document.getElementById("2").style.backgroundColor = "#0000ff";
      document.getElementById("12").style.backgroundColor = "#0000ff";
      break;
      case 7:
      document.getElementById("2").style.backgroundColor = "#ff00ff";
      document.getElementById("12").style.backgroundColor = "#ff00ff";
      break;
      case 8:
      document.getElementById("2").style.backgroundColor = "#cccccc";
      document.getElementById("12").style.backgroundColor = "#cccccc";
      break;
      case 9:
      document.getElementById("2").style.backgroundColor = "#ffffff";
      document.getElementById("12").style.backgroundColor = "#ffffff";
      break;
      case -1:
      document.getElementById("2").style.backgroundColor = "#998100";
      document.getElementById("12").style.backgroundColor = "#998100";
      break;
      case -2:
      document.getElementById("2").style.backgroundColor = "#757575";
      document.getElementById("12").style.backgroundColor = "#757575";
      break;
      default:
      document.getElementById("2").style.backgroundColor = "#000000";
      document.getElementById("12").style.backgroundColor = "#000000";
      break;
  }
  switch(th){
    case 0:
    document.getElementById("13").style.backgroundColor = "#000000";
      break;
      case 1:
      document.getElementById("13").style.backgroundColor = "#996633";
      break;
      case 2:
      document.getElementById("13").style.backgroundColor = "#ff0000";
      break;
      case 3:
      document.getElementById("13").style.backgroundColor = "#ff9900";
      break;
      case 4:
      document.getElementById("13").style.backgroundColor = "#ffff00";
      break;
      case 5:
      document.getElementById("13").style.backgroundColor = "#00ff00";
      break;
      case 6:
      document.getElementById("13").style.backgroundColor = "#0000ff";
      break;
      case 7:
      document.getElementById("13").style.backgroundColor = "#ff00ff";
      break;
      case 8:
      document.getElementById("13").style.backgroundColor = "#cccccc";
      break;
      case 9:
      document.getElementById("13").style.backgroundColor = "#ffffff";
      break;
      case -1:
      document.getElementById("13").style.backgroundColor = "#998100";
      break;
      case -2:
      document.getElementById("13").style.backgroundColor = "#757575";
      break;
      default:
      document.getElementById("13").style.backgroundColor = "#000000";
      break;
  }
}
var previous = null;
function clickFunc(val){
  if((previous!=null)||previous==val){
document.getElementById(previous).style.width="100px";
  }
document.getElementById(val).style.width="120px";
previous=val;
}

var previous2 = null;
function clickFunc2(val){
  if((previous2!=null)||previous2==val){
document.getElementById(previous2).style.width="100px";
  }
document.getElementById(val).style.width="120px";
previous2=val;
}

var previous3 = null;
function clickFunc3(val){
  if((previous3!=null)||previous3==val){
document.getElementById(previous3).style.width="100px";
  }
document.getElementById(val).style.width="120px";
previous3=val;
}