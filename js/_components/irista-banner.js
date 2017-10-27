$(window).on('scroll', function () {
    var scroll_pos = $(window).scrollTop() + $(window).height();
    var element_pos = $('#canon-irista-banner').offset().top + $('#canon-irista-banner').height();
    if (scroll_pos > element_pos) {
        if ( ! $("#canon-irista-banner").hasClass( "bannerActive" ) ) {
        	animateIristaBanner();
        }
    }
});



function animateIristaBanner() {

		var currentStatus = $('#bannerStatusIrista').val();

		if(currentStatus == "true")
	            {
	                console.log("start");
	                $('#bannerStatusIrista').val("active");

	                runAnimation();

	            }

	            else {
	            	console.log("nostart");
	            	}


}

function runAnimation() {

	var taktung = 600;
	var Chainable = {


		makeSequenze1: function() {

			setTimeout(function(){
			           $('#sequenze-intro').fadeIn("slow");

		        }, 0);

		},

		makeSequenze2: function() {

			setTimeout( function(){
			    $('#sequenze-1, .sequenze-footer, .stoerer').fadeIn(1000);
			     $('#second-layer').fadeOut("slow");
			     $('#sequenze-intro').fadeOut("slow");

			       },taktung*3);

		},

		makeSequenze3: function() {

				setTimeout( function(){
				    $('#sequenze-2').fadeIn(1000);
				       },taktung*8);

			},

		makeSequenze4: function() {

				setTimeout( function(){
				    $('#sequenze-3').fadeIn(1000);
				       },taktung*12);

			},

		makeSequenze5: function() {

				setTimeout( function(){
				    $('#sequenze-4').fadeIn(1000);
				       },taktung*16);

			},

		makeSequenze6: function() {

				setTimeout( function(){
				    $('#sequenze-5').fadeIn(1000);
				    $('.stoerer').fadeOut(1000);
				    console.log("blende")
				       },taktung*20);

			},
		makeSequenze7: function() {

				setTimeout( function(){
				    $('.finalItem').fadeOut(1000);
				       },taktung*24);

			},

		makeSequenze8: function() {

				setTimeout( function(){
				    $('#sequenze-5').fadeOut(100);
				    $('#bannerStatusIrista').val("true");

				       },taktung*28);

			},

		makeSequenze9: function() {

			setTimeout( function(){
			   var y = $(window).scrollTop();  //your current y position on the page
			   $(window).scrollTop(y+1);
			       },taktung*28);

		},



		run: function() {

			$.Deferred(function(def) {

				def.pipe(function() {

					Chainable.makeSequenze1();

				}).

				pipe(function() {

					Chainable.makeSequenze2();

				}).
				pipe(function() {

					Chainable.makeSequenze3();

				}).
				pipe(function() {

					Chainable.makeSequenze4();

				}).
				pipe(function() {

					Chainable.makeSequenze5();

				}).
				pipe(function() {

					Chainable.makeSequenze6();

				}).
				pipe(function() {

					Chainable.makeSequenze7();

				}).
				pipe(function() {

					Chainable.makeSequenze8();

				}).

				pipe(function() {

					Chainable.makeSequenze9();

				});


			}).resolve();

		}

	};

	$(function(){
	    Chainable.run();
	});

}