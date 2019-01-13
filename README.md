# :train: Train-Scheduler :train:

Train schedule application that incorporates Firebase to host arrival and departure data. App will retrieve and manipulate this information with Moment.js. This website will provide up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.
Deployed site: https://ajam2617.github.io/Train-Scheduler/

# :nut_and_bolt:  Getting Started :nut_and_bolt:

Enter a train name, destination, first train time in *Military*, and frequency of the train in minutes. Example:
* Money Train
* Las Vegas, NV
* 21:30
* 21
When the submit button is clicked, the information will populate, and a count down to the next arrival will begin and update every minute. 

Below is the code to handle the button click.
<img src = "/assets/images/button-click.JPG" alt text = "Button Click Code" width = "400px" height = "500px">

Below is the code to handle the database information and manipulation. 
<img src = "/assets/images/firebase_database.JPG" alt text = "Handleing Database Info" width = "400px" height = "500px">

Below is a look at the finished homepage with all functionality working. 
<img src = "/assets/images/homepage.JPG" alt text = "Homepage" width = "400px" height = "500px">

##:triumph: Issues :triumph:
I could not quite get the countdown to the next train to work, at first. Definitely had issues with the format and the interval update. I did have all the theory correct, but I did not have my work organized in a way that was functional. I definitely feel more comfortable with the modulos and moment.js methods. The app is now working correctly as intended.

#:pushpin: To Do's :pushpin:
- [x] Incorporate Firebase to host arrival and departure data.
- [x] Retrieve and manipulate this information with Moment.js.
- [x] Show current time in _hh:mm:ss_ format.
- [x] Provide _up-to-date_ information on various train arrival times.
- [x] Provide _up-to-date_ information on how many minutes remain until the train arrives at their station.
- [ ] If time permits, include _update_ and _remove_ buttons for each train.
-[ ] If time permits, add user authentication. 

## Resources ##
*html
*css
*javascript
*moment.js
*firebase
*tutor and classmates

