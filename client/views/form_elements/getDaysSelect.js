Template.getDaysSelect.helpers({
  listDays: function(){
    var listItem = [];
    var thirdDay = moment().add(2, 'days').format('dddd');
    var fourthDay = moment().add(3, 'days').format('dddd');
    var fifthDay = moment().add(4, 'days').format('dddd');
    var sixthDay = moment().add(5, 'days').format('dddd');
    var seventhDay = moment().add(6, 'days').format('dddd');
    listItem += ['<option value="0">Heute</option>'];
    listItem += ['<option value="1">Morgen</option>'];
    listItem += ['<option value="2">' + thirdDay + '</option>'];
    listItem += ['<option value="3">' + fourthDay + '</option>'];
    listItem += ['<option value="4">' + fifthDay + '</option>'];
    listItem += ['<option value="5">' + sixthDay + '</option>'];
    listItem += ['<option value="6">' + seventhDay + '</option>'];
    return listItem;
  }
});