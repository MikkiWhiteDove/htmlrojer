  jQuery(document).ready(function(){
		       var degrees = 0;
		         
		         setInterval((function(){
		         		++degrees;
		          	 $('.box1').css('background-image', 'linear-gradient(' + degrees + 'deg, #ffffff, #000000');
		         		
		         }), 6000/360)

		});

 