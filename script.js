/* press edit to change the name */
var editName = document.querySelector("#h2-name");

function h2name() {
    editName.innerText = "Name is changed";
}


/*  add or remove connection requests*/

var requestnumber = document.querySelector(".req_nr").innerText;
var requests = document.querySelector(".req_nr");
var connectionnumber = document.querySelector(".c_nr").innerText; 
var connections = document.querySelector(".c_nr"); 

function accept(element) {
    var ac = document.querySelector(`#${element}`);
    ac.remove(`#${element}`);
    requestnumber --;
    requests.innerText = requestnumber;
    
    connectionnumber ++;
    connections.innerText = connectionnumber;
}

function decline(element) {
    var dec = document.querySelector(`#${element}`);
    dec.remove(element);
    requestnumber --;
    requests.innerText = requestnumber;
}

// that's the way how i started :


// function accept1(element) {
    
//     document.querySelector("#toddE").remove(element);
//     requestnumber --;
//     requests.innerText = requestnumber;
    
//     connectionnumber ++;
//     connections.innerText = connectionnumber;
// }

// function decline1(element) {
//     document.querySelector("#toddE").remove(element);

//     requestnumber --;
//     requests.innerText = requestnumber;
// }

// function accept2(element) {
//     document.querySelector("#philK").remove(element);
//     requestnumber --;
//     requests.innerText = requestnumber;
    
//     connectionnumber ++;
//     connections.innerText = connectionnumber;

// }

// function decline2(element) {
//     document.querySelector("#philK").remove(element);

//     requestnumber --;
//     requests.innerText = requestnumber;
// }