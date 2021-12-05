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
    timeSlotEl.setAttribute('data-time', i);

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
    timeSlotTextEl.setAttribute('id', 'Hour ' + i + ' response');
    timeSlotTextEl.setAttribute('class', 'textarea description');

    // Create a save button for each hour of the day
    var saveButtonEl = document.createElement('button');

    // Assign attributes to the save button
    saveButtonEl.setAttribute('class', 'saveBtn');
    saveButtonEl.innerHTML = '💾';


    // Add the div to the containerEl
    containerEl.appendChild(timeSlotEl);

    // Add the text areas to the time slot divs
    timeSlotEl.appendChild(timeSlotTextEl);

    // Add the save button to the time slot dic
    timeSlotEl.appendChild(saveButtonEl);
}