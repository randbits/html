var canvas = document.getElementById ('canvas');
var context = canvas.getContext ('2d');

context.font = '38pt Arial';
context.fillStyle = 'cornflowerblue';
context.strokeStype = 'blue';

context.fillText('Hello Canvas', 
		 canvas.width/2 - 150, 
		 canvas.height/2 +15);

context.strokeText ('Hello Canvas', 
		    canvas.width/2 - 150, 
		    canvas.height/2 +15);
