(function(){
	var $modal = $('.modal');
	var $modalBackdrop = $('<div class="modal-backdrop fade"></div>');

	var loginClick = function(e){
		$.ajax('/login.html',{ success: function(data){
			var html = $(data).filter('#content').html();

			$modal.find('.modal-body').html(html);
			$modal.show().removeClass('out').addClass('in');
			$modalBackdrop.insertAfter($modal).show().addClass('in');
		}});

		e.preventDefault();
	};

	var modalClose = function(e){
		$modal.removeClass('in');
		$modalBackdrop.removeClass('in');

		setTimeout(function(){
			$modal.hide();
			$modalBackdrop.removeClass('in').remove();
		}, 300);

		e.preventDefault();
	};

	ssm.addState({
		id: "mediumUp",
		minWidth: 768,
		onEnter: function(){
			$('.login-link').on('click', loginClick);
			$modal.on('click','.close', modalClose);
		},
		onLeave: function(){
			$('.login-link, .modal').off();
		}
	});

	ssm.ready();
}());
