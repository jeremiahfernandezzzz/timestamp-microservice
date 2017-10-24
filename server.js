var express = require('express'); 
var app = express();
var PORT = process.env.PORT || 3000;    

app.get('/', function(request, response) {
    response.send("Welcome to my timestamp microservice app!")
});

app.get('/:qwe', function(request, response) {
  var input = request.params.qwe;
  response.send(getTimestampJSON(input))
});


app.listen(PORT, function() {
  console.log('Server listening on port ' + PORT);
});

function getTimestampJSON(input) {
	var result = {
		unix: null,
		natural : null
	}
	
	var date;
	
	if(!isNaN(parseInt(input))) {
		date = new Date(parseInt(input)) //unix
	} else {
		date = new Date(input) //natural
	}
	
	if(!isNaN(date.getTime())) {
		result.unix = date.getTime();
		result.natural =   toNaturalMonth(date) + " " + date.getDate() + " " + date.getFullYear();
	} 
	
	return result
}

function toNaturalMonth(date){
			
			if (date.getMonth() == 0) {return "January"}
			if (date.getMonth() == 1) {return "February"}
			if (date.getMonth() == 2) {return "March"}
			if (date.getMonth() == 3) {return "April"}
			if (date.getMonth() == 4) {return "May"}
			if (date.getMonth() == 5) {return "June"}
			if (date.getMonth() == 6) {return "July"}
			if (date.getMonth() == 7) {return "August"}
			if (date.getMonth() == 8) {return "September"}
			if (date.getMonth() == 9) {return "October"}
			if (date.getMonth() == 10) {return "November"}
			if (date.getMonth() == 11) {return "December"}
			
		}
