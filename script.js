// Dynamically create divs for each hour of the business work day 

var currentHour;

function currentDayandTime() {
    var currentTimeInterval = setInterval(function() {
        var dateAndTime = moment();
        
        // Dynamically write the date to the #currentDay <p> element
        $("#currentDay").text(dateAndTime.format("dddd, MMMM Do"));

    }, 1000);
}

currentDayandTime();

for (var i = 9; i < 18; i++){
    // Create connecter containerEl for the div with class container
    var containerEl = document.querySelector('.container');

    // Creates divs for each hour of the day
    var timeSlotEl = document.createElement('div');


    if (i < 10) {
        timeSlotEl.innerHTML = '0' + i + '00';
    } else {
        timeSlotEl.innerHTML = i + '00';
    }

    // Assign attributes to the divs
    timeSlotEl.setAttribute('id', 'hour ' + i);

    // Establishing current hour variable for comparison
    var currentHour = moment().format('h')

    if (moment().format('a') === "pm") {
        currentHour += 12;
    } else if (moment().format('h a') == "12 am") {
        currentHour = 0;
    }

    // Assign color classes
    if (i > currentHour) {
        // set class to future
        timeSlotEl.setAttribute('class', 'row description future');
    } else if (i == currentHour) {
        // set class to present
        timeSlotEl.setAttribute('class', 'row description present');
    } else {
        // set class to past
        timeSlotEl.setAttribute('class', 'row description past');
    }

    // Create a textarea for each hour of the day
    var timeSlotTextEl = document.createElement('textarea');

    // Assign attributes to the textarea
    timeSlotTextEl.setAttribute('id', 'Hour-' + i + '-Response');
    timeSlotTextEl.setAttribute('class', 'textarea description');

    // Create a save button for each hour of the day
    var saveButtonEl = document.createElement('button');

    // Assign attributes to the save button
    saveButtonEl.setAttribute('class', 'saveBtn col-md-1');
    saveButtonEl.setAttribute('id', 'Button-' + i);
    saveButtonEl.innerHTML = '💾';

    // Create i element to go within each button
    var saveButtonI = document.createElement('i');

    // Add the div to the containerEl
    containerEl.appendChild(timeSlotEl);

    // Add the text areas to the time slot divs
    timeSlotEl.appendChild(timeSlotTextEl);

    // Add the save button to the time slot div
    timeSlotEl.appendChild(saveButtonEl);

    // Load textarea content with local storage information
    timeSlotTextEl.value = localStorage.getItem("Hour " + i + " response");
}


// Capture all save buttons
var saveButtonEl9 = $('#Button-9');
var saveButtonEl10 = $('#Button-10');
var saveButtonEl11 = $('#Button-11');
var saveButtonEl12 = $('#Button-12');
var saveButtonEl13 = $('#Button-13');
var saveButtonEl14 = $('#Button-14');
var saveButtonEl15 = $('#Button-15');
var saveButtonEl16 = $('#Button-16');
var saveButtonEl17 = $('#Button-17');

// Capture text area descriptions
var timeSlotTextEl9 = $('#Hour-9-Response');
var timeSlotTextEl10 = $('#Hour-10-Response');
var timeSlotTextEl11 = $('#Hour-11-Response');
var timeSlotTextEl12 = $('#Hour-12-Response');
var timeSlotTextEl13 = $('#Hour-13-Response');
var timeSlotTextEl14 = $('#Hour-14-Response');
var timeSlotTextEl15 = $('#Hour-15-Response');
var timeSlotTextEl16 = $('#Hour-16-Response');
var timeSlotTextEl17 = $('#Hour-17-Response');

// Saving timeSlotText values (user input) to local storage by hour.
saveButtonEl9.on('click', function() {
    localStorage.setItem("Hour 9 response", timeSlotTextEl9.val());
})

saveButtonEl10.on('click', function() {
    localStorage.setItem("Hour 10 response", timeSlotTextEl10.val());
})

saveButtonEl11.on('click', function() {
    localStorage.setItem("Hour 11 response", timeSlotTextEl11.val());
})

saveButtonEl12.on('click', function() {
    localStorage.setItem("Hour 12 response", timeSlotTextEl12.val());
})

saveButtonEl13.on('click', function() {
    localStorage.setItem("Hour 13 response", timeSlotTextEl13.val());
})

saveButtonEl14.on('click', function() {
    localStorage.setItem("Hour 14 response", timeSlotTextEl14.val());
})

saveButtonEl15.on('click', function() {
    localStorage.setItem("Hour 15 response", timeSlotTextEl15.val());
})

saveButtonEl16.on('click', function() {
    localStorage.setItem("Hour 16 response", timeSlotTextEl16.val());
})

saveButtonEl17.on('click', function() {
    localStorage.setItem("Hour 17 response", timeSlotTextEl17.val());
})