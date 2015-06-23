UI.registerHelper('formatDate', function(date) {
  return moment(date).format('dddd HH:mm');
});

UI.registerHelper('formatCalendar', function(date) {
  return moment(date).calendar();
});

UI.registerHelper('formatTime', function(date) {
  return moment(date).format('HH:mm');
});

UI.registerHelper('formatDateInput', function(date) {
  return moment(date).format('YYYY-MM-DD');
});

UI.registerHelper('lowerCase', function(value) {
  value = value.replace(/\./g, "").replace(/ /g, "_").replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/Ä/g,"Ae").replace(/Ö/g,"Oe").replace(/Ü/g,"Ue").replace(/ß/g,"ss");
  value = value.toLowerCase();
  return value;
});