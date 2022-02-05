
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

let moonPhase = [
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

/**
 * get moonphase value between 0 and 1
 * 
 * 
 */

/**
 * save activity, date, moonphase
 * saved activities should go into an array of objects with date, activity, and phaseValue
 * when the save activity button is pressed
 */


let activityObject = {
    date: "",
    activity: "",
    phaseValue: "",
}

let savedActivities = [];
// let storedActivities = [];

function saveActivity() {
    savedActivities.push(activityObject);
    localStorage.setItem("activities", JSON.stringify(savedActivities))
};

function renderActivities() {
    let storedActivities = JSON.parse(localStorage.getItem("activities"));
    if (storedActivities !== null) {
    let savedActivities = [...savedActivities, ...storedActivities]
    }
}

let dates = [0, 1, 2, 3, 5, 6, 7, 8, 9];

function generateThings() {
    for (let index = 0; index < dates.length; index++) {
        const element = dates[index];
        Object.defineProperties(activityObject, {
            date: {value: `date${element}`},
            activity: {value: `activity${element}`},
            phaseValue: {value: `phase${element}`}
        })
        saveActivity();
        
    }
    console.log(savedActivities);
}
renderActivities();
generateThings();

