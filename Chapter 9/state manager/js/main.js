(function(window){
	var stateManager = (function() {
		var state = "";

		var getWidth = function () {
			var x = 0;

			if (typeof(document.body.clientWidth) == 'number') {
				// Newer generation of browsers
				x = document.body.clientWidth;
			}
			else if( typeof( window.innerWidth ) == 'number' ) {
				//None Internet Explorer
				x = window.innerWidth;
			}
			else if( document.documentElement && document.documentElement.clientWidth ) {
				//Internet Explorer 6 and above in 'standards compliant mode'
				x = document.documentElement.clientWidth;
			}

			return x;
		};


		var onResizePage = function() {
			if (getWidth() < 768 && state !== "small") {
				enableSmall();
				state = "small";
			}
			else if (getWidth() >= 768 && getWidth() < 992 && state !== "medium") {
				enableMedium();
				state = "medium";
			}
			else if (getWidth() >= 992 && state !== "large") {
				enableLarge();
				state = "large";
			}
		};

		var enableSmall = function() {
			console.log('enter small');
		};

		var enableMedium = function() {
			console.log('enter medium');
		};

		var enableLarge = function() {
			console.log('enter large');
		};

		return {
			init: function() {
				onResizePage();
				window.addEventListener("resize", onResizePage, true);
			}
		};
	}());

	stateManager.init();

}(window));