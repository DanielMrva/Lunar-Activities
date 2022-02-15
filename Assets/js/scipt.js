// moon cycle is 29.53 (according to wiki)
console.log("Greetings from Cthulhu");
console.log("^(;,;)^");

let boredUrl = "https://www.boredapi.com/api/activity?"

let savedActivities = []

let mappedEl = document.querySelector(".mapped-container");
let gridEl = document.querySelector(".grid-container");
let savedCardContainer = document.getElementById("savedCards");

// selecting the date element in the DOM
let dateEl = document.getElementById('date');

// initializing the date picker
gridEl.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
  });


  let startBtn = document.getElementById('go-btn')

  startBtn.addEventListener('click', activity)


  // function that triggers on button press
  function activity(event) {

    event.preventDefault()

      let date = dateEl.value;

      // splits the date in to an arrray[year, month, day]
      let newDate = date.split('-')
      

      let year = newDate[0];
      let month = newDate[1]
      let day = newDate[2]
      let protoDateUTC = new Date(`${year}, ${month}, ${day}`);

      let dateUTC = (protoDateUTC.getTime() / 1000);


    getActivity(dateUTC)
  }




function getActivity (convertedDate) {

    let moonPhaseUrl = `https://api.farmsense.net/v1/moonphases/?d=${convertedDate}`

fetch(moonPhaseUrl)
    .then(function(response) {
        
        return response.json();
    })
    .then(function (moonData) {

        

        let phase = moonData[0].Phase;

        
        // initializes the type variable as an empty string
        let type = "";
        
        // assigns the activity types to the phase
        if (phase === 'Dark Moon') {

            type = "type=education";
        }

        else if (phase === 'Waxing Crescent') {

            type = "type=busywork&type=education"
        }

        else if (phase === '1st Quarter') {
            
            type= "type=recreational&type=diy&type=cooking&type=relaxation";
        }

        else if (phase === 'Waxing Gibbous') {

            type = "type=recreational&type=ecucation&type=diy";
        }

        else if (phase === 'Full Moon') {

            type = "type=social&type=relaxation&type=music";
        }

        else if (phase === 'Waning Gibbous') {
            
            type = "type=social&type=music&type=charity";
        }

        else if (phase === '3rd Quarter') {
            
            type = "type=charity";
        }

        else if (phase === 'Waning Crescent') {
            
            type = "type=recreational";
        }




        // adds the activities based on the moon phase to the url
        boredUrl += type;

        // fetches the activity
        fetch(boredUrl)
        .then (function(response) {
            return response.json();
        })

        // adds the activity to the object
        .then (function (activityData) {

            let newActivity = {
                date: convertedDate,
                activity: activityData.activity,
                phaseName: phase

            };

        // Getting elements for title text
        const chosenDate = document.getElementById('h2-planning');
        chosenDate.innerText = "";

        const chosenMoonPhase = document.getElementById('beginning-text-h1');
        const chosenPhaseName = newActivity.phaseName;
        chosenMoonPhase.innerText = `The moon phase that night: ${chosenPhaseName}`;

        const chosenActivity = document.getElementById('lets-plan');
        const chosenRandomActivity = newActivity.activity;
        chosenActivity.innerText = chosenRandomActivity;

        const moonPhaseText = document.getElementById('p-planning');

        const moonIcon = document.getElementById('moon-icons');


        // Renders text onto page about the phase and the activity
        if (chosenPhaseName == 'Dark Moon') {
            moonPhaseText.innerText = "The new moon, or the dark moon, is the begining of a new cycle. Breathe fresh air into old projects or start to plot out a new venture. As you begin this cycle, you should focus on furthering your self development through education. Gather as much new information as possible so that you have that knowledge accessible to put to work in the coming phases.";
            moonIcon.src = "Assets/css/images/new-moon.png";
        
        } else if (chosenPhaseName == 'Waxing Crescent') {
            moonPhaseText.innerText = "The waxing crescent follows the new moon. It is the second phase of the cycle. As such, you should honor this phase with inner growth through education and list making. Now is the time to catch up on all those small tasks and to get organized. You will be able to retain more information during this time and it is important to focus primarily on yourself.";
            moonIcon.src = "Assets/css/images/waxing-crescent.png";
        
        } else if (chosenPhaseName == '1st Quarter') {
            moonPhaseText.innerText = "Arriving after the waxing crescent, the first Quarter moon is the third phase. Previous phases have focused on inner growth, while this stage allows you to start acting on your new found knowledge. It's time to partake in recreational, productive, and social events. Take the knowledge you have learned and inject it into different activities.";
            moonIcon.src = "Assets/css/images/first-quarter.png";
        
        } else if (chosenPhaseName == 'Waxing Gibbous') {
            moonPhaseText.innerText = "Piggybacking off of the first quarter moon, the waxing gibbous is the fourth phase. You should be growing more social during this time as soon you will enter the Full moon - a time where relationships will be tested. Partake in activities that are not only enjoyable, but can also add to your skill set. Cooking projects are a good example of this.";
            moonIcon.src = "Assets/css/images/waxing-gibbous.png";

        } else if (chosenPhaseName == 'Full Moon') {
            moonPhaseText.innerText = "The moon phase that most people are familiar with. The gravitational pull on you is at an all time high- giving more power to your intuition. During this time it is important to be more social - relationships and friendships will be tested during this time. Connect with nature through music or partake in something that is more relaxing.";
            moonIcon.src = "Assets/css/images/full-moon.png";

        } else if (chosenPhaseName == 'Waning Gibbous') {
            moonPhaseText.innerText = "Following the full moon, the waning gibbous begins the time of winding down. The first phases of the moon focus on inner development, then more on social aspects, and now is the time to give outwardly. Charity and relaxation based activities help to balance you. Meditate on what has brought you to this point through the facilitation of music.";
            moonIcon.src = "Assets/css/images/waning-gibbous.png";

        } else if (chosenPhaseName == '3rd Quarter') {
            moonPhaseText.innerText = "The second to last phase, the last quarter phase is almost like a spring cleaning. This phase follows the waning gibbous, so gratitude through chartiy like activities are encouraged. However, the best ways to harness the moons pull during this time is to partake in those little to-dos as you get yourself organized once again.";
            moonIcon.src = "Assets/css/images/third-quarter.png";

        } else if (chosenPhaseName == 'Waning Crescent') {
            moonPhaseText.innerText = "The final phase of the 8 general moon phases. Instead of pushing ourselves to the limit, we should rest and reflect. Partake in activities that are low stress. Allow yourself to zone out a little. You are coming to an end on this months moon cycle and you should relax before the next new moon thrusts you into a new opportunity for expansion.";
            moonIcon.src = "Assets/css/images/waning-crescent.png";

        };



            if (savedActivities.length <= 9) {
                savedActivities.unshift(newActivity);

            } else {
                    savedActivities.pop();
                    savedActivities.unshift(newActivity);
            } 

            if (savedActivities.length > 0) {  
                savedActivities.sort((a, b) => {
                  return a.date - b.date;
                })
            }
                      

            saveAct();
            clearCards(savedCardContainer);
            renderSavedActivities();
        })
            
    })

}

function saveAct() {
    localStorage.setItem("activities", JSON.stringify(savedActivities));  
}

function clearCards(x) {
    while (x.firstChild) {
        x.removeChild(x.firstChild);
    };
}


//function for rendering 
function renderSavedActivities() {
    let storedActivities = JSON.parse(localStorage.getItem("activities"));
    if (storedActivities !== null) {
    savedActivities = storedActivities
    }
    for (let index = 0; index < savedActivities.length; index++) {
        const savedItem = savedActivities[index];
        let cardOuter = document.createElement("div")
        savedCardContainer.append(cardOuter);
        let coClass = ["col", "s12", "m6"];
        for (let coInd = 0; coInd < coClass.length; coInd++) {
            const addClass = coClass[coInd];
            cardOuter.classList.add(addClass);
        }
        let newCard = document.createElement("div");
        cardOuter.append(newCard);
        let cardTitle = document.createElement("span")
        newCard.append(cardTitle);
        let newTextCont = document.createElement("ul")
        newCard.append(newTextCont);
        let newDateEl = document.createElement("li");
        newTextCont.append(newDateEl);
        newDateEl.classList.add("card-li");
        let newPhase = document.createElement("li");
        newTextCont.append(newPhase);
        newPhase.classList.add("card-li");
        let newActText = document.createElement("p");
        newCard.append(newActText);
        let newActionDiv = document.createElement("div");
        newCard.append(newActionDiv);
        newActionDiv.classList.add("center-align")
        let newDeleteBtn = document.createElement("button");
        newActionDiv.append(newDeleteBtn);
        newDeleteBtn.innerText = "Delete";
        newDeleteBtn.dataset.date = `${savedItem.date}`
        let cardClassList = ["card", "card-background"];
        for (let cardInd = 0; cardInd < cardClassList.length; cardInd++) {
            const addClass = cardClassList[cardInd];
            newCard.classList.add(addClass);
        };
        newCard.id = `${savedItem.date}`
        let cardTitleCList = ["card-title"];
        for (let ctInd = 0; ctInd < cardTitleCList.length; ctInd++) {
            const addClass = cardTitleCList[ctInd];
            cardTitle.classList.add(addClass);
        }   
        newTextCont.classList.add(`card${index}`);
        let newDate = new Date((savedItem.date) * 1000).toDateString();
        newDateEl.innerText = newDate;
        newPhase.innerText = savedItem.phaseName;
        newActText.innerText = savedItem.activity;
        var newDelBtnCList = ["btn", "waves-effect", "waves-light", "button-color", "dButt"];
        for (let nDBInd = 0; nDBInd < newDelBtnCList.length; nDBInd++) {
            const newDelBtnClass = newDelBtnCList[nDBInd];
            newDeleteBtn.classList.add(newDelBtnClass);    
        }
    
    }
}
renderSavedActivities();

mappedEl.addEventListener('click', function (e) {
    e.preventDefault()
    if (e.target.classList.contains("dButt")) {
    let deleteNumber = e.target.dataset.date;
    let deleteTarget = document.getElementById(deleteNumber);
    clearCards(deleteTarget);
    let deleteIndex = savedActivities.findIndex(object => {
        return object.date == deleteNumber
    });
    savedActivities.splice(deleteIndex, 1);
    saveAct();
    clearCards(savedCardContainer);
    renderSavedActivities();
    }
});

// testing a change