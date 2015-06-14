Calendar = new Mongo.Collection('calendar');

var Schema = {};

Schema.Calendar = new SimpleSchema({
  title: {
    type: String,
    label: "title",
    optional: true   
  },
  allDay: {
    type: Boolean,
    label: "allDay"  
  },
  start: {
    type: Date,
    label: "start",
    optional: true   
  },
  end: {
    type: Date,
    label: "end",
    optional: true   
  },
  submitted: {
    type: Date,
    optional: true
  },
  updatedAt: {
    type: Date,
    optional: true
  }
});

Calendar.attachSchema(Schema.Calendar);

Calendar.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});