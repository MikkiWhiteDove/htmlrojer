  jQuery(document).ready(function(){
		       var degrees = 0;
		         
		         setInterval((function(){
		         		++degrees;
		          	 $('.box1').css('background-image', 'linear-gradient(' + degrees + 'deg, #FF0000, #0000FF');
		         		
		         }), 6000/360)

		});

 