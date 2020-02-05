var today = new Date();
var hourNow = today.getHours();
var greeting;
var person = prompt("pleas enter your name","hanan");

if (person != null) {
  document.write("hello" + person + "How are you today?");
}
if (hourNow > 18) {
 greeting = 'Good evening, Class!';
 } else if (hourNow > 12) {
 greeting = 'Good afternoon, Class!';
 } else if (hourNow >= 0) {
 greeting = 'Good morning!';
 } else {
 greeting = 'Something went wrong!';
 }
document.write('<h3>'+greeting+'</h3>');