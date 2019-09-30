(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {
	$('.carousel').carousel({
		interval: 3000
	});

	$('.carousel-2').carousel({
		interval: 5000
	});

	$('.carousel-3').carousel({
		interval: 2500
	});

	$('.carousel-4').carousel({
		interval: 2000
	});

	$('.carousel-5').carousel({
		interval: 3800
	});

	$('.carousel-6').carousel({
		interval: 5000
	});
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0c1xcbGV2ZWw1XFxqc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBLEVBQUcsUUFBSCxFQUFjLEtBQWQsQ0FBb0IsWUFBVztBQUM5QixHQUFFLFdBQUYsRUFBZSxRQUFmLENBQXdCO0FBQ3ZCLFlBQVU7QUFEYSxFQUF4Qjs7QUFJQSxHQUFFLGFBQUYsRUFBaUIsUUFBakIsQ0FBMEI7QUFDekIsWUFBVTtBQURlLEVBQTFCOztBQUlBLEdBQUUsYUFBRixFQUFpQixRQUFqQixDQUEwQjtBQUN6QixZQUFVO0FBRGUsRUFBMUI7O0FBSUEsR0FBRSxhQUFGLEVBQWlCLFFBQWpCLENBQTBCO0FBQ3pCLFlBQVU7QUFEZSxFQUExQjs7QUFJQSxHQUFFLGFBQUYsRUFBaUIsUUFBakIsQ0FBMEI7QUFDekIsWUFBVTtBQURlLEVBQTFCOztBQUlBLEdBQUUsYUFBRixFQUFpQixRQUFqQixDQUEwQjtBQUN6QixZQUFVO0FBRGUsRUFBMUI7QUFJQSxDQXpCRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcclxuJCggZG9jdW1lbnQgKS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHQkKCcuY2Fyb3VzZWwnKS5jYXJvdXNlbCh7XHJcblx0XHRpbnRlcnZhbDogMzAwMFxyXG5cdH0pO1xyXG5cclxuXHQkKCcuY2Fyb3VzZWwtMicpLmNhcm91c2VsKHtcclxuXHRcdGludGVydmFsOiA1MDAwXHJcblx0fSk7XHRcdFxyXG5cclxuXHQkKCcuY2Fyb3VzZWwtMycpLmNhcm91c2VsKHtcclxuXHRcdGludGVydmFsOiAyNTAwXHJcblx0fSk7XHRcclxuXHJcblx0JCgnLmNhcm91c2VsLTQnKS5jYXJvdXNlbCh7XHJcblx0XHRpbnRlcnZhbDogMjAwMFxyXG5cdH0pO1x0XHJcblxyXG5cdCQoJy5jYXJvdXNlbC01JykuY2Fyb3VzZWwoe1xyXG5cdFx0aW50ZXJ2YWw6IDM4MDBcclxuXHR9KTtcclxuXHJcblx0JCgnLmNhcm91c2VsLTYnKS5jYXJvdXNlbCh7XHJcblx0XHRpbnRlcnZhbDogNTAwMFxyXG5cdH0pO1x0XHJcblxyXG59KTtcclxuXHJcbiJdfQ==
