
  const previousdate = new Date("10 March 2022"); 
var x=setInterval(function(){

  const date = new Date();
const calculatedate = previousdate - date;

let day=document.getElementById("day");
let hour=document.getElementById("hour");
let min=document.getElementById("min");
let sec=document.getElementById("sec");

 day= Math.floor(calculatedate / (1000 * 60 * 60 * 24));
document.getElementById("day").innerHTML=day;

 hour = Math.floor((calculatedate % (1000 * 60 * 60 * 24)) /( 1000 * 60 * 60));
 document.getElementById("hour").innerHTML=hour;

 min = Math.floor((calculatedate % (1000 * 60 * 60)) /( 1000* 60));
 document.getElementById("min").innerHTML=min;

 sec = Math.floor((calculatedate %( 1000 * 60)) / 1000);
 document.getElementById("sec").innerHTML=sec;

},1000);