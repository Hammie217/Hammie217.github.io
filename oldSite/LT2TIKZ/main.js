var outputString = "";
var x
var inputMessage
var length
var i
var words
var transistorCount
var opampCount

function myFunction() {
  x = document.getElementById("message").value;
  inputMessage = x.split("\n");
  length = inputMessage.length;


  outputString = "\\adjustbox{max width=\\textwidth}{\n\\begin{circuitikz}\n";

  i = 0
  transistorCount =0;
  opampCount = 0;
  while (i < length) {
    try{
      inputMessage[i]= escape(inputMessage[i]).replace(/%00/g,'');
      inputMessage[i]= inputMessage[i].replace(/%20/g,' ');

      //inputMessage[i] = (escape(inputMessage[i]).replace(/%00/g, ''));
      //inputMessage[i] = (escape(inputMessage[i]).replace(/%20/g, ' '));

      //inputMessage[i] = (escape(inputMessage[i]).replace(/%25/g, ''));

      console.log(inputMessage[i])

          words = inputMessage[i].split(" ");
    
    if (words[0] == "WIRE") {
      outputString += ("\\draw(" + (words[1] / 64) + "," + -(words[2] / 64) + ")\nto[short] (" + (words[3] / 64) + "," + -(words[4] / 64) + ");\n");


    } else if (words[0] == "SYMBOL") {
      SymbolLine();
    } else {
      //outputString += "other\n"
    }
    document.getElementById("outputZone").value = outputString;
  }
  catch(err){
    console.log("Error on line:", i, "  Error: ",err.message)
  }
    i++;
  };
  outputString +="\\end{circuitikz}\n}"


  document.getElementById("outputZone").value = outputString;

}

function SymbolLine() {
  if (words[1] == "res") {
    words2 = inputMessage[i + 1].split(" ");
    console.log(words2[0], words2[4])
    if ((words2[0] == "WINDOW") && (words2[4] == "VBottom")) {
      //res90
      outputString += ("\\draw(" + ((words[2] - 96) / 64) + "," + -( parseFloat(words[3])+16 )/64 + ")\nto[R] (" + ((words[2] - 16) / 64) + "," + -( parseFloat(words[3])+16 )/64 + ");\n");
    }
    else if ((words2[0] == "WINDOW") && (words2[4] == "VTop")) {
      //res270
      outputString += ("\\draw(" +( parseFloat(words[2])+16 )/64 + "," +-( parseFloat(words[3])-16 )/64 + ")\nto[R] (" + ( parseFloat(words[2])+96 )/64 + "," +-( parseFloat(words[3])-16 )/64  + ");\n");
    }
    else if ((words2[0] == "WINDOW") && (words2[4] == "Left")) {
      //res180
      outputString += ("\\draw(" +( parseFloat(words[2])-16 )/64 + "," +-( parseFloat(words[3])-96 )/64 + ")\nto[R] (" + ( parseFloat(words[2])-16 )/64 + "," +-( parseFloat(words[3])-16 )/64  + ");\n");
    }
    else {
      //resLine();
      outputString += ("\\draw(" +( parseFloat(words[2])+16 )/64 + "," +-( parseFloat(words[3])+16 )/64 + ")\nto[R] (" + ( parseFloat(words[2])+16 )/64 + "," +-( parseFloat(words[3])+96 )/64  + ");\n");
    }
  }
  else if (words[1] == "ind") {
    words2 = inputMessage[i + 1].split(" ");
    console.log(words2[0], words2[4])
    if ((words2[0] == "WINDOW") && (words2[4] == "VBottom")) {
      //res90
      outputString += ("\\draw(" + ((words[2] - 96) / 64) + "," + -( parseFloat(words[3])+16 )/64 + ")\nto[L] (" + ((words[2] - 16) / 64) + "," + -( parseFloat(words[3])+16 )/64 + ");\n");
    }
    else if ((words2[0] == "WINDOW") && (words2[4] == "VTop")) {
      //res270
      outputString += ("\\draw(" +( parseFloat(words[2])+16 )/64 + "," +-( parseFloat(words[3])-16 )/64 + ")\nto[L] (" + ( parseFloat(words[2])+96 )/64 + "," +-( parseFloat(words[3])-16 )/64  + ");\n");
    }
    else if ((words2[0] == "WINDOW") && (words2[4] == "Left")) {
      //res180
      outputString += ("\\draw(" +( parseFloat(words[2])-16 )/64 + "," +-( parseFloat(words[3])-96 )/64 + ")\nto[L] (" + ( parseFloat(words[2])-16 )/64 + "," +-( parseFloat(words[3])-16 )/64  + ");\n");
    }
    else {
      //resLine();
      outputString += ("\\draw(" +( parseFloat(words[2])+16 )/64 + "," +-( parseFloat(words[3])+16 )/64 + ")\nto[L] (" + ( parseFloat(words[2])+16 )/64 + "," +-( parseFloat(words[3])+96 )/64  + ");\n");
    }
  }
  else if (words[1] == "voltage") {
    words2 = inputMessage[i + 1].split(" ");
    console.log(words2[0], words2[4])
    if ((words2[0] == "WINDOW") && (words2[4] == "VBottom")) {
      //res90
      outputString += ("\\draw(" + ((words[2] - 96) / 64) + "," + -( parseFloat(words[3])+0 )/64 + ")\nto[V] (" + ((words[2] - 16) / 64) + "," + -( parseFloat(words[3])+0 )/64 + ");\n");
    }
    else if ((words2[0] == "WINDOW") && (words2[4] == "VTop")) {
      //res270
      outputString += ("\\draw(" +( parseFloat(words[2])+16 )/64 + "," +-( parseFloat(words[3])-0 )/64 + ")\nto[V] (" + ( parseFloat(words[2])+96 )/64 + "," +-( parseFloat(words[3])-0 )/64  + ");\n");
    }
    else if ((words2[0] == "WINDOW") && (words2[4] == "Left")) {
      //res180
      outputString += ("\\draw(" +( parseFloat(words[2])-0 )/64 + "," +-( parseFloat(words[3])-96 )/64 + ")\nto[V] (" + ( parseFloat(words[2])-0 )/64 + "," +-( parseFloat(words[3])-16 )/64  + ");\n");
    }
    else {
      //resLine();
      outputString += ("\\draw(" +( parseFloat(words[2])+0)/64 + "," +-( parseFloat(words[3])+16 )/64 + ")\nto[V] (" + ( parseFloat(words[2])+0 )/64 + "," +-( parseFloat(words[3])+96 )/64  + ");\n");
    }
  }

  else if (words[1] == "diode") {
    words2 = inputMessage[i + 1].split(" ");
    console.log(words2[0], words2[4])
    if ((words2[0] == "WINDOW") && (words2[4] == "VBottom")) {
      //res90
      outputString += ("\\draw(" + ((words[2] - 0) / 64) + "," + -( parseFloat(words[3])+16 )/64 + ")\nto[D] (" + ((words[2] - 80) / 64) + "," + -( parseFloat(words[3])+16 )/64 + ");\n");
    }
    else if ((words2[0] == "WINDOW") && (words2[4] == "VTop")) {
      //res270
      outputString += ("\\draw(" +( parseFloat(words[2])+0 )/64 + "," +-( parseFloat(words[3])-16 )/64 + ")\nto[D] (" + ( parseFloat(words[2])+80 )/64 + "," +-( parseFloat(words[3])-16 )/64  + ");\n");
    }
    else if ((words2[0] == "WINDOW") && (words2[4] == "Left")) {
      //res180
      outputString += ("\\draw(" +( parseFloat(words[2])-16 )/64 + "," +-( parseFloat(words[3])-0 )/64 + ")\nto[D] (" + ( parseFloat(words[2])-16 )/64 + "," +-( parseFloat(words[3])-80 )/64  + ");\n");
    }
    else {
      //resLine();
      outputString += ("\\draw(" +( parseFloat(words[2])+16 )/64 + "," +-( parseFloat(words[3])+0 )/64 + ")\nto[D] (" + ( parseFloat(words[2])+16 )/64 + "," +-( parseFloat(words[3])+80 )/64  + ");\n");
    }
  }
  else if (words[1] == "cap") {
    words2 = inputMessage[i + 1].split(" ");
    console.log(words2[0], words2[4])
    if ((words2[0] == "WINDOW") && (words2[4] == "VBottom")) {
      //res90
      outputString += ("\\draw(" + ((words[2] - 0) / 64) + "," + -( parseFloat(words[3])+16 )/64 + ")\nto[C] (" + ((words[2] - 64) / 64) + "," + -( parseFloat(words[3])+16 )/64 + ");\n");
    }
    else if ((words2[0] == "WINDOW") && (words2[4] == "VTop")) {
      //res270
      outputString += ("\\draw(" +( parseFloat(words[2])+0 )/64 + "," +-( parseFloat(words[3])-16 )/64 + ")\nto[C] (" + ( parseFloat(words[2])+64 )/64 + "," +-( parseFloat(words[3])-16 )/64  + ");\n");
    }
    else if ((words2[0] == "WINDOW") && (words2[4] == "Left")) {
      //res180
      outputString += ("\\draw(" +( parseFloat(words[2])-16 )/64 + "," +-( parseFloat(words[3])-0 )/64 + ")\nto[C] (" + ( parseFloat(words[2])-16 )/64 + "," +-( parseFloat(words[3])-64 )/64  + ");\n");
    }
    else {
      //resLine();
      outputString += ("\\draw(" +( parseFloat(words[2])+16 )/64 + "," +-( parseFloat(words[3])+0 )/64 + ")\nto[C] (" + ( parseFloat(words[2])+16 )/64 + "," +-( parseFloat(words[3])+64 )/64  + ");\n");
    }
  }

  else if (words[1] == "npn") {
    transistorCount++;
    console.log(words[4])
    if ((words[4] == "R90") ) {
      //res90	
      outputString += ("\\draw ("+( parseFloat(words[2])-48 )/64 +"," +-( parseFloat(words[3])+64 )/64 +") node[npn,rotate=-90](npn"+transistorCount +") {};\n");
      outputString += ("\\draw (npn"+transistorCount+".B) to[short]("+( parseFloat(words[2])-48 )/64 +","+-( parseFloat(words[3])-0 )/64 +");");

    }
    else if ((words[4] == "R270") ) {
      //res270
      outputString += ("\\draw ("+( parseFloat(words[2])+48 )/64 +"," +-( parseFloat(words[3])-64 )/64 +") node[npn,rotate=90](npn"+transistorCount +") {};\n");
      outputString += ("\\draw (npn"+transistorCount+".B) to[short]("+( parseFloat(words[2])+48 )/64 +","+-( parseFloat(words[3])-0 )/64 +");");
    }
    else if ((words[4] == "R180") ) {
      //res180
      outputString += ("\\draw ("+( parseFloat(words[2])-64 )/64 +"," +-( parseFloat(words[3])-48 )/64 +") node[npn,rotate=180](npn"+transistorCount +") {};\n");
      outputString += ("\\draw (npn"+transistorCount+".B) to[short]("+( parseFloat(words[2])-0 )/64 +","+-( parseFloat(words[3])-48 )/64 +");");
    }
    else {
      //resLine();
      outputString += ("\\draw ("+( parseFloat(words[2])+64 )/64 +"," +-( parseFloat(words[3])+48 )/64 +") node[npn](npn"+transistorCount +") {};\n");
      outputString += ("\\draw (npn"+transistorCount+".B) to[short]("+( parseFloat(words[2])-0 )/64 +","+-( parseFloat(words[3])+48 )/64 +");");
    }
  }

  else if (words[1].includes("Opamp")) {
    transistorCount++;
    /*
    if ((words[4] == "R90") ) {
      //res90	
      outputString += ("\\draw ("+( parseFloat(words[2])-48 )/64 +"," +-( parseFloat(words[3])+64 )/64 +") node[npn,rotate=-90](npn"+transistorCount +") {};\n");
      outputString += ("\\draw (npn"+transistorCount+".B) to[short]("+( parseFloat(words[2])-48 )/64 +","+-( parseFloat(words[3])-0 )/64 +");");

    }
    else if ((words[4] == "R270") ) {
      //res270
      outputString += ("\\draw ("+( parseFloat(words[2])+48 )/64 +"," +-( parseFloat(words[3])-64 )/64 +") node[npn,rotate=90](npn"+transistorCount +") {};\n");
      outputString += ("\\draw (npn"+transistorCount+".B) to[short]("+( parseFloat(words[2])+48 )/64 +","+-( parseFloat(words[3])-0 )/64 +");");
    }
    else if ((words[4] == "R180") ) {
      //res180
      outputString += ("\\draw ("+( parseFloat(words[2])-64 )/64 +"," +-( parseFloat(words[3])-48 )/64 +") node[npn,rotate=180](npn"+transistorCount +") {};\n");
      outputString += ("\\draw (npn"+transistorCount+".B) to[short]("+( parseFloat(words[2])-0 )/64 +","+-( parseFloat(words[3])-48 )/64 +");");
    }
    else {
      */
      //resLine();
      opampCount++;
      outputString += "\\draw ("+( parseFloat(words[2])-0 )/64+","+-( parseFloat(words[2])+80)/64 +") node[op amp,scale=0.51](opamp"+opampCount +") {};\n"
    //}
  }

}