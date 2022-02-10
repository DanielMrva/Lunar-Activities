
/**
 * Dan's to-do
 * 
 * PSEUDOCODE
 * 
 * variables for moonphases, activities types, logic for datepickers, 
 * 
 * UI:
 *  USER - Location?...
 *  USER - Select Date (Default: now) Picker: https://materializecss.com/pickers.html
 *  USER - Select Participants (Dropdown?)
 *  USER - Select Price (Dropdown?)
 *  USER - Find Activities Button
 *              
 * INIT
 *  Query Local storage for saved activities, then RENDER
 * 
 * FETCH
 *  MoonPhase at Select Date
 *  Return MoonPhase
 *      Returned Moonphase sets activities availbile
 *      Random number to select activity use some sort of weighted bell curve
 *          (Math.floor((Math.random * x) + (Math.random * y)) -1) Maximum sum of x+y-1 should be equal to activitiesArray.length
 *      Return selected activity(s)
 * 
 * FETCH
 *  Bored ?={Participants}&{Price}&{Type}
 * 
 * RENDER
 *  List of datapoints pulled from return of Bored API results
 * 
 * STORE
 *  With button save rendered datapoints to local storage
 *  On same button, add datapoints to an array
 * 
 * 
 * 
 * 
 */

// moon cycle is 29.53 (according to wiki)
console.log("Greetings from Cthulhu");
console.log("^(;,;)^");







let boredUrl = "https://www.boredapi.com/api/activity?"

let savedActivities = []


// selecting the date element in the DOM
let dateEl = document.getElementById('date');

// initializing the date picker
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
  });


  let startBtn = document.getElementById('start-btn')

  startBtn.addEventListener('click', activity)


  // function that triggers on button press
  function activity() {
      console.log(dateEl.value)

      let date = dateEl.value;

      // splits the date in to an arrray[year, month, day]
      let newDate = date.split('-')

      console.log(newDate)
      let year = newDate[0];
      let month = newDate[1]
      let day = newDate[2]
      let protoDateUTC = new Date(`${year}, ${month}, ${day}`);
      console.log(protoDateUTC);
      let dateUTC = (protoDateUTC.getTime() / 1000);
      console.log(dateUTC);

    getActivity(dateUTC)
  }



function getActivity (convertedDate) {

    let moonPhaseUrl = `https://api.farmsense.net/v1/moonphases/?d=${convertedDate}`

fetch(moonPhaseUrl)
    .then(function(response) {
        
        return response.json();
    })
    .then(function (moonData) {
        console.log(moonData);
        

        var phase = moonData[0].Phase;
        console.log(`Phase test: ${phase}`)
        
                
        let type = "";
        
        // assigns the activity types to the phase
        if (phase === 'New') {

            type = "type=education";
        }

        else if (phase === 'Waxing Crescent') {

            type = "type=busywork&type=education"
        }

        else if (phase === 'First Quarter') {
            
            type= "type=recreational&type=diy&type=cooking&type=relaxation";
        }

        else if (phase === 'Waxing Gibbous') {

            type = "type=recreation&type=ecucation&type=diy";
        }

        else if (phase === 'Full Moon') {

            type = "type=social&type=relaxation&type=music";
        }

        else if (phase === 'Waning Gibbous') {
            
            type = "type=social&type=music&type=charity";
        }

        else if (phase === 'Last Quarter') {
            
            type = "type=charity"
        }

        else if (phase === 'Waning Crescent') {
            
            type = "type=recreation";
        }

        console.log(`the moon phase is ${phase}.`)


        // adds the activities based on the moon phase to the url
        boredUrl += type;

        // fetches the activity
        fetch(boredUrl)
        .then (function(response) {
            return response.json();
        })

        // adds the activity to the object
        .then (function (activityData) {
            console.log(`Your suggested activity is: ${activityData.activity}`);

            let newActivity = {
                date: convertedDate,
                activity: activityData.activity,
                phaseName: phase

            };

            if (savedActivities.length <= 10) {
                savedActivities.unshift(newActivity);
            } else {savedActivities.pop();
                    savedActivities.unshift(newActivity);
            } 
            if (savedActivities.length > 0) {  
                savedActivities.sort((a, b) => {
                  return a.date - b.date;
            });
            // write if statement to determine length of array.
            // if < 10 unshift the new object
            // if > 10, unshift and pop 
            // this will keep the array to a max of 10 length

            

            console.log(savedActivities);
        })
        
})

}

function saveAct() {
    localStorage.setItem("activities", JSON.stringify(savedActivities));  
}


// finish writing function that renders the saved activities to the page. be sure to include a delete/check off button to clear that entry
// with the delete have it rerun the render function
function renderSavedActivities() {
    let storedActivities = JSON.parse(localStorage.getItem("activities"));
    if (storedActivities !== null) {
    savedActivities = storedActivities
    }
    
}

// testing a change

// redner cards from saved activities.
//sort 
