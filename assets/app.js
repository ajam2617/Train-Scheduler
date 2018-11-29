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
var nextArrival = "";
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

    var firstTimeConverted = moment(firstTime, 'hh:mm').subtract(1, "years");
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    var tRemainder = diffTime % freq;
    var minAway = freq - tRemainder;
    var nextTrain = moment().add(minAway, "minutes");
    var nextArrival = moment(nextTrain).format("hh:mm");
};
//clears form data

$("#trainName").val("");
$("#destination").val("");
$("#frequencyMins").val("");
$("#trainTime").val("");

});
function time () {
var firstTimeConverted = moment(firstTime, 'hh:mm').subtract(1, "years");
var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
var tRemainder = diffTime % freq;
var minAway = freq - tRemainder;
var nextTrain = moment().add(minAway, "minutes");
var nextArrival = moment(nextTrain).format("hh:mm");
$('.minAway').text(nextTrain);

}
//function that takes firebase data and reflects on html
//also adding math to "minutes away"

database.ref().on("child_added", function(snapshot) {
    var sv = snapshot.val();

    // console.log(sv.name);
    // console.log(sv.dest);
    // console.log(sv.freq);
    // console.log(sv.firstTime);
    var row = $('<tr>');
    var newName = $('<td>').text(sv.name);
    var newDest = $('<td>').text(sv.dest);
    var newFreq = $('<td>').text(sv.freq);
    var newTime = $('<td>');
    var newAway = $('<td>').addClass("minAway");
    time();
    row.append(newName, newDest, newFreq, newTime, newAway);
    $("tbody").append(row);
})

//function to display current time with seconds counter
setInterval(function() {
    var currentTime = moment().format("LTS");
    $("#timer").html(currentTime);  
}, 1000);

