var request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/repos/Hammie217/Hammie217.github.io/stats/contributors', true);

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
      
    document.getElementById("one").innerHTML=("Total website commits = " +data[0].total);

  } else {
    document.getElementById("one").innerHTML=("Error");
  }
}

request.send();



var request2 = new XMLHttpRequest();
request2.open('GET', 'https://api.github.com/repos/Hammie217/Hammie217.github.io', true);

request2.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        
      document.getElementById("two").innerHTML=("Number of issues open = " +data.open_issues_count);
  
    } else {
      document.getElementById("two").innerHTML=("Error");
    }
  }
request2.send();



var request3 = new XMLHttpRequest();
request3.open('GET', 'https://api.github.com/users/Hammie217/repos', true);

request3.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        
      document.getElementById("three").innerHTML=("Number of public repositories = "+data.length);
  
    } else {
      document.getElementById("three").innerHTML=("Error");
    }
  }
request3.send();



var request4 = new XMLHttpRequest();
request4.open('GET', 'https://twitter.com/hammie217', true);
request4.send(null);
request4.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        
      document.getElementById("four").innerHTML=(this.response);
  
    } else {
      document.getElementById("four").innerHTML=("Error");
    }
  }
request4.send();


