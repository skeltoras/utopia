//-- template onCreated functions
Template.calendar.onCreated(function () {
  var self = this;
  self.autorun(function () {
    //self.subscribe('getAllCalendarEntries');
  });
});

//-- template onDestroyed functions
Template.calendar.onDestroyed(function () {
});

//-- template onRendered functions
Template.calendar.onRendered(function () {
  $( document ).ready(function() {
    //initialize the calendar in this template
    $('.calendar').fullCalendar({    
      events: function(start, end, timezone, callback) {
        var events = [];      
        var calendarEvents = Calendar.find();
        calendarEvents.forEach(function (event) {
          events.push({
            title: event.title,
            start: event.start,
            end: event.end,
            allDay: false
          });
          console.log(events);
        });
        //console.log('---');
        //console.log(events);
        callback(events);
      },
      lang: 'de',
      timeFormat: 'H:mm',
      header: { center: 'month,basicWeek,basicDay'}
    });
  
    Meteor.autorun(function() {
      var calendarEvents = Calendar.find();
      $('.calendar').fullCalendar('refetchEvents');
    });
  });
});

//-- template helpers                            
Template.calendar.helpers({
});

//-- template events
Template.calendar.events({
});