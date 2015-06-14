Meteor.publish('getAllCalendarEntries', function() {
  return Calendar.find();
});