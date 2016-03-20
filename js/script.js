$(document).ready(function(){



$("#one").click(function () {
	document.calc.input.value += "1";});
$("#two").click(function() {
	document.calc.input.value += "2";});
$("#three").click(function () {
	document.calc.input.value += "3";});
$("#four").click(function() {
	document.calc.input.value += "4";});
$("#five").click(function () {
	document.calc.input.value += "5";});
$("#six").click(function() {
	document.calc.input.value += "6";});
$("#seven").click(function () {
	document.calc.input.value += "7";});
$("#eight").click(function() {
	document.calc.input.value += "8";});
$("#nine").click(function () {
	document.calc.input.value += "9";});
$("#zero").click(function() {
	document.calc.input.value += "0";});

$("#multiply").click(function () {
	document.calc.input.value += "*";});
$("#subtract").click(function () {
	document.calc.input.value += "-";});
$("#add").click(function () {
	document.calc.input.value += "+";});
$("#divide").click(function () {
	document.calc.input.value += "/";});
$("#perk").click(function(){
	$("input").addClass("perkclass");});


$("#equals").click(function () {
	var evalo = eval(document.calc.input.value);
	document.calc.input.value = evalo;
	});

$("#clear").click(function () {
	document.calc.input.value = " ";
	$("input").removeClass("perkclass");
	});







});
	




