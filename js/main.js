(function($) {
	"use strict"

	///////////////////////////
	// Презагрузка
	$(window).on('load', function() {
		$("#preloader").delay(800).fadeOut();
	});
	
	////////////////////////////
	$('.accordion').on('click', function() {
		$('.accordion').toggleClass('open');
	});
	$('#nav .navbar-collapse').on('click', function() {
		$('#nav').toggleClass('open');
	});
	$('.navbar-menu li').on('click', function() {
		$(this).addClass('active').siblings().removeClass('active')
	});
	// Поиск
	$('#header-search').on('click', function() {
		$('.search-bar').toggleClass('block');
	})
	///////////////////////////
	// Выпад.меню мобильная версия
	$('.has-dropdown a').on('click', function() {
		$(this).parent().toggleClass('open-drop');
	});

	
	///////////////////////////
	// Анимация скролла вверх
	$('#back-to-top').on('click', function(){
		$('body,html').animate({
			scrollTop: 0
		}, 600);
	});

	
	// Фильтр позиционирование
	$(window).on('resize load', function () {
		if ( $(this).width() < 1241 ) {
			$('.vacansies-block .wrap .filter-block').append( $('.filter-side') );
		} else {
			$('.sidebar .filter-block').append( $('.filter-side') );
		}
	})

	$(window).on('scroll', function() {
		var wScroll = $(this).scrollTop();

		if (wScroll > 1) {
			$('#nav').removeClass('open');
			$('.search-bar').removeClass('block');
		}
		
		wScroll > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
	});

	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function() {
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
			} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
			}
		});
	}
	
	
	// Табс
	$('#special-offers__tabs').easyResponsiveTabs({
		type: 'default', //Types: default, vertical, accordion
		width: 'auto', //auto or any width like 600px
		// fit: true, // 100% fit in a container
		// closed: 'accordion', // Start closed if in accordion view
		tabidentify: 'hor_1', // The tab groups identifier
	});


	///////////////////////////
	// Скрипты на странице вакансий
	$('.form-filter__title').on('click', function () {
		$('.form-wrap').toggleClass('hidden');
	})

	$(window).on('resize load', function() {
		var wScroll = $(this).scrollTop();
		
		if ($(document).width() < 1367) {
			$('#activities div').addClass('hidden');
		} else {
			$('#activities div').removeClass('hidden');
		}

	});
	// Скролл на ссылку
	$("a[href^='#vacansies']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 600);
	});

	$(document).ready(function($) {
		$("#app-selection-sent").on('click', function(){
			setTimeout(function(){
				$('#request-sent').fadeOut(600, 'swing', function(){});
			},3500);  //3500 = 3,5 секунды
		});
	});
})(jQuery);