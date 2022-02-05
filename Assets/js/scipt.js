
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

console.log("Greetings");

const moonPhase = [
    {
        phase: "new moon",
        mood: "new beginnings",
        activity: [],
    },
    {
        phase: "waxing crescent",
        mood: "set intetnions",
        activity: [],
    },
    {
        phase: "first quarter",
        mood: "take action",
        activity: [],
    },
    {
        phase: "waxing gibbous",
        mood: "Refine and hone",
        activity: [],
    },
    {
        phase: "full",
        mood: "Harvest Endeavors",
        activity: [],
    },
    {
        phase: "waning gibbous",
        mood: "introspect",
        activity: [],
    },
    {
        phase: "third quarter",
        mood: "relase and let go",
        activity: [],
    },
    {
        phase: "waning crescent",
        mood: "surrender",
        activity: [],
    }
];


// Al's psuedo code:
// fetch the weather api to get the moon phase. 
// if statement to define what activity types are being pulled from 

var weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&include=hourly,daily&appid=e1eb99be58f229feb0f00b803ac936d3`

var boredUrl = "https://www.boredapi.com/api/activity?"

fetch(weatherUrl)
    .then(function(response) {
        
        return response.json();
    })
    .then(function (weatherData) {
        // console.log(weatherData)

        var phase = weatherData.daily[0].moon_phase

        console.log(phase)

        var mPhase = "";
        var type = "";

        if ((phase === 0) || (phase === 1)) {
            mPhase = "New";
            type = "type=education";
        }

        else if (phase > 0 && phase <= 0.16) {
            mPhase = "Waxing Crescent";
            type = "type=busywork&type=education"
        }

        else if (phase > 0.16 && phase <= 0.33) {
            mPhase = "First Quarter";
            type= "type=recreational&type=diy&type=cooking&type=relaxation";
        }

        else if (phase > 0.33 && phase < 0.5) {
            mPhase = "Waxing Gibbous";
            type = "type=recreation&type=ecucation&type=diy";
        }

        else if (phase === 0.5) {
            mPhase = "Full";
            type = "type=social&type=relaxation&type=music";
        }

        else if (phase > 0.5 && phase <= 0.66) {
            mPhase = "Waning Gibbous";
            type = "type=social&type=music&type=charity";
        }

        else if (phase > 0.66 && phase <= 0.83) {
            mPhase = "Last Quarter";
            type = "type=charity"
        }

        else if (phase > 0.83 && phase < 1) {
            mPhase = "Waning Crescent"
            type = "type=recreation";
        }

        console.log(`the moon data is ${phase} which makes the phase ${mPhase}`)
        boredUrl += type;
        // console.log(type)
        // console.log(boredUrl);

        fetch(boredUrl)
        .then (function(response) {
            return response.json();
        })
        .then (function (activityData) {
            console.log(activityData.activity);
        })

    })

