	$('div#box2').bind('click', SimpleStackoverflowAnimation);
		 
		function SimpleStackoverflowAnimation(){
			
			$('div#box2').unbind();
	
				function animate(){
		
	
		$('div#liner.a, div#liner.b, div#liner.c, div#liner.d, div#liner.e').animate({"margin-left" : "3px", "margin-bottom" : "9px"}, 900);
		$('div#liner').css({ transition: "transform 0.9s", transform: "rotate(" + 0 + "deg)"});
			$('div#linerBox').animate({"margin-top": "125px"}, 900, function(){
				setTimeout(linerBack, 2100);				
			});
		}
	
			function linerBack(){
			
				$('div#linerBox').animate({"margin-top": "80px"}, 300, function(){
						$('div#box2').bind('click', SimpleStackoverflowAnimation);			
			});

			$('div#liner.d').animate({"margin-bottom":"19px", "margin-left":"3px"}, 300);
			$('div#liner.c').animate({"margin-bottom":"21px", "margin-left":"17px"}, 300);
			$('div#liner.b').animate({"margin-bottom":"16px", "margin-left":"45px"}, 300);
			$('div#liner.a').animate({"margin-bottom":"11px", "margin-left":"75px"}, 300);

		
			$('div#liner.d').css({ transition: "transform 0.3s", transform: "rotate(" + 14 + "deg)"});
			$('div#liner.c').css({ transition: "transform 0.3s", transform: "rotate(" + 26 + "deg)"});
			$('div#liner.b').css({ transition: "transform 0.3s", transform: "rotate(" + 40 + "deg)"});
			$('div#liner.a').css({ transition: "transform 0.3s", transform: "rotate(" + 49 + "deg)"});	
			
			}	
		
			animate();	
		}
