jQuery(function ($) {

    'use strict';

    // --------------------------------------------------------------------
    // PreLoader
    // --------------------------------------------------------------------

    (function () {
        $('#preloader').delay(200).fadeOut('slow');
    }());



    // --------------------------------------------------------------------
    // Sticky Sidebar
    // --------------------------------------------------------------------

    $('.left-col-block, .right-col-block').theiaStickySidebar();

}); // JQuery end

function build_tools_icons() {

	var tool_icons =['devicon-angularjs-plain', 
					  'devicon-bootstrap-plain', 
					  'devicon-apache-line-wordmark',
					  'devicon-bitbucket-plain-wordmark',
					  'devicon-codeigniter-plain-wordmark',
					  'devicon-doctrine-plain-wordmark',
					  'devicon-github-plain-wordmark',
					  'devicon-html5-plain-wordmark',
					  'devicon-java-plain-wordmark',
					  'devicon-javascript-plain',
					  'devicon-zend-plain-wordmark',
					  'devicon-trello-plain-wordmark',
					  'devicon-python-plain-wordmark',
					  'devicon-postgresql-plain-wordmark',
					  'devicon-php-plain',
					  'devicon-mysql-plain-wordmark',
					  'devicon-jquery-plain-wordmark'];
  	var html = ''
	html += '<ul class="list-inline list-icons">'
	for (i = 0; i < tool_icons.length; i++) {		
		if ((i % 7)== 0) {
			html += '</ul><br>' + 
					'<ul class="list-inline list-icons">';
		}
		html += '<li class="list-inline-item">' +
					'<i class="'+ tool_icons[i] +'"></i>' + 
				'</li>';
			
		
	}
	$('#tools_icons').html(html);
}

// When the DOM is ready, run this function
$(document).ready(function() {
	//Set the carousel options
	$('#carousel-reviews').carousel({
		pause: true,
		interval: 4000,
	});
	
	build_tools_icons();
	
});

