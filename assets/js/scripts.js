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

function skills() {
	var skills = [
		{linguagem: 'PHP', porcentagem: 90},
		{linguagem: 'Java', porcentagem: 86},
		{linguagem: 'Python', porcentagem: 74},
		{linguagem: 'HTML & CSS', porcentagem: 85},
		{linguagem: 'JavaScript & JQuery', porcentagem: 86},
		{linguagem: 'Bootstrap', porcentagem: 87},
		{linguagem: 'Angular', porcentagem: 85}
	];
	
	var html = '';
	for (i = 0; i < skills.length; i++) {

		html += '<div class="progress-item">' + 
					'<span class="progress-title">' + skills[i].linguagem + '</span>' +
					'<div class="progress">' + 
						'<div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width: ' + skills[i].porcentagem + '%">' + 
						'</div>' +
					'</div>' +
				'</div>';	
	}
	$('#skills').html(html);
}

function language() {
	var language = [
		{idioma: 'Inglês', nivel: 'Intermediário', observacao: 'Conversação, fala e escrita'},
		{idioma: 'Espanhol', nivel: 'Básico', observacao: 'Conversação, fala e escrita'}
	];
	
	var html = '';
	html += '<div class="row">';
	for (i = 0; i < language.length; i++) {
		if ((i % 2)== 0 && (i != 0)) {
			html += '</div><div class="row">';
		}
	
		html += '<div class="col-md-6">' +
					'<div class="content-item">' + 
						'<h3>' + language[i].idioma + '</h3>' +
						'<h4>' + language[i].nivel + '</h4>' +
						'<p>' + language[i].observacao + '</p>' +
					'</div>' +
				'</div>';				
	}
	$('#language').html(html);
}

function experience() {
	var experience = [
		{empresa: 'Intero Brasil', cargo: 'Analista de desenvolvimento Jr', cidade: 'São José dos Campos', estado: 'SP', ano_inicio:'2017', ano_fim:''},
		{empresa: 'Season Consultoria e Treinamentos Avançados em Informática', cargo: 'Auxiliar de desenvolvimento de sistemas', cidade: 'São José dos Campos', estado: 'SP', ano_inicio:'2017', ano_fim:'2017'},
		{empresa: 'Season Consultoria e Treinamentos Avançados em Informática', cargo: 'Estágio em desenvolvimento Web', cidade: 'São José dos Campos', estado: 'SP', ano_inicio:'2016', ano_fim:'2017'}
	];
	
	var html = '';
	for (i = 0; i < experience.length; i++) {
		var fim = 'Atualmente';
		if (experience[i].ano_fim != '')
			fim = experience[i].ano_fim;
	
		html += '<div class="content-item">' +
					'<small>' + experience[i].ano_inicio + ' - ' + fim + '</small>' +
					'<h3>' + experience[i].empresa + '</h3>' +
					'<h4>' + experience[i].cargo + '</h4>' +
					'<p>' + experience[i].cidade + ' - ' + experience[i].estado + '</p>' + 
				'</div>';
	}
	$('#experience').html(html);
}

function education() {
	var education = [
		{instituicao: 'Fatec São José dos Campos Prof. Jessen Vidal', curso: 'Tecnólogo - Análise e Desenvolvimento de Sistemas', cidade: 'São José dos Campos', estado: 'SP', ano_inicio:'2013', ano_fim:'2016'},
		{instituicao: 'Colégio Joseense', curso: 'Técnico em Informática', cidade: 'São José dos Campos', estado: 'SP', ano_inicio:'2009', ano_fim:'2011'},
		{instituicao: 'Colégio Joseense', curso: 'Ensino Médio', cidade: 'São José dos Campos', estado: 'SP', ano_inicio:'2009', ano_fim:'2011'}
	];
	
	var html = '';
	for (i = 0; i < education.length; i++) {
		var fim = 'Atualmente';
		if (education[i].ano_fim != '')
			fim = education[i].ano_fim;
	
		html += '<div class="content-item">' +
					'<small>' + education[i].ano_inicio + ' - ' + fim + '</small>' +
					'<h3>' + education[i].curso + '</h3>' +
					'<h4>' + education[i].instituicao + '</h4>' +
					'<p>' + education[i].cidade +  ' - ' + education[i].estado + '</p>' + 
				'</div>';
	}
	$('#education').html(html);
}

function certifications() {
	
	var certifications = [
		{instituicao: 'Treinaweb', curso: 'Java - Spring Boot', certificado: 'certifications/treinaweb/spring-boot.pdf'},
		{instituicao: 'Treinaweb', curso: 'Java Básico', certificado: 'certifications/treinaweb/java-basico.pdf'},
		{instituicao: 'Treinaweb', curso: 'Lógica Orientada a Objetos', certificado: 'certifications/treinaweb/logica-orientada-a-objetos-completo.pdf'},
		{instituicao: 'Treinaweb', curso: 'PHP Básico', certificado: 'certifications/treinaweb/php-basico.pdf'},
		{instituicao: 'Treinaweb', curso: 'Angular 2 Completo', certificado: 'certifications/treinaweb/angular-2-compelto.pdf'},
		{instituicao: 'Treinaweb', curso: 'Desenvolvendo aplicações mobile com Ionic 2 Completo', certificado: 'certifications/treinaweb/desenvolvendo-aplicacoes-mobile-com-ionic2-completo.pdf'},
	];
	
	var html = '';
	html += '<div class="item active">';
	for (i = 0; i < certifications.length; i++) {
		if ((i % 4)== 0 && (i != 0)) {
			html += '</div><div class="item">';
		}
		html += '<div class="col-md-6">' + 
					'<div class="certifications-item">' +
						'<h3><a href="'+ certifications[i].certificado +'" target="_blank">' + certifications[i].curso +'</a></h3>' +
						'<p>' + certifications[i].instituicao + '</p>' +
					'</div>' +
				'</div>';
	}
	$('#certifications').html(html);
}

function tools() {
	var tools = [
		{description: 'Paradigmas de desenvolvimento de software: Orientação a Objetos'},
		{description: 'Design Patterns'},
		{description: 'Utilização de GitHub e Bitbucket'},
		{description: 'Linguagem Java com Spring Boot e Spring MVC'},
		{description: 'Servidores: Apache, Tomcat'},
		{description: 'Banco de Dados: PostgreSQL e MySQL'},
		{description: 'Aplicações com comunicação REST e SOAP'}
	];
	
	var html = '';
	for (i = 0; i < tools.length; i++) {
		html += '<div class="col-md-6">' + 
					'<i class="fa fa-check" style="color: #3CB371;"></i> ' + tools[i].description + '' +
				'</div>';
	}
	$('#tools').html(html);
}


// When the DOM is ready, run this function
$(document).ready(function() {
	//Set the carousel options
	$('#carousel-reviews').carousel({
		pause: true,
		interval: 4000,
	});
	certifications();
	education();
	experience();
	language();
	skills();
	tools();
	
});

