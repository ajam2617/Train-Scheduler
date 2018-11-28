//app must calculate when the next train will arrive (relative to current time).
//this will use moment.js
//using setTimeout and setInterval for "min away"
//will need to have click listener for add train div, and push the data to current train schedule
//utilize firebase to store data
//*********************************************** */

//initialize firebase
 var config = {
   apiKey: "AIzaSyA3qUG_vL56-yC-scIvdg8oo3vDbe6C8lc",
   authDomain: "train-scheduler-4d643.firebaseapp.com",
   databaseURL: "https://train-scheduler-4d643.firebaseio.com",
    projectId: "train-scheduler-4d643",
    storageBucket: "train-scheduler-4d643.appspot.com",
    messagingSenderId: "240447997259"
 };
 firebase.initializeApp(config);

  //create variable to reference the database.
var database = firebase.database();

//initial values

var name = "";
var dest = "";
var freq = 0;
var firstTime = "";
var away = 0;
//function for current time

//capture button click
$("#userSubmit").on("click", function(event) {
    //prevent page reload
    event.preventDefault();

    // alert to fill in details in form box

    if ($("#trainName").val().trim() === "" || 
    $("#destination").val().trim() === "" ||
    $("#frequencyMins").val().trim() === "" ||
    $("#trainTime").val().trim() === "") {
        alert("Please fill in all details to Add Train Form");
    } else {
    //grab values from text boxes
    name = $("#trainName").val().trim();
    dest = $("#destination").val().trim();
    freq = $("#frequencyMins").val().trim();
    firstTime = $("#trainTime").val().trim();
    
    // console.log(name);
    // console.log(dest);
    // console.log(time);
    // console.log(freq);

    //push info to firebase database
    database.ref().push({
        name: name,
        dest: dest,
        freq: freq,
        firstTime: firstTime,
    });
};
//clears form data

$("#trainName").val("");
$("#destination").val("");
$("#frequencyMins").val("");
$("#trainTime").val("");

});

//function that takes firebase data and reflects on html

database.ref().on("child_added", function(snapshot) {
    var sv = snapshot.val();

    // console.log(sv.name);
    // console.log(sv.dest);
    // console.log(sv.freq);
    // console.log(sv.firstTime);
    var currentTime = moment().format("LT")
    var row = $('<tr>');
    var newName = $('<td>').text(sv.name);
    var newDest = $('<td>').text(sv.dest);
    var newFreq = $('<td>').text(sv.freq);
    var newTime = $('<td>').text(sv.FirstTime);
    var newAway = $('<td>').empty().addClass("minAway");
    row.append(newName, newDest, newFreq, newTime, newAway);
    $("tbody").append(row);
    $("#timer").text(currentTime);
})

