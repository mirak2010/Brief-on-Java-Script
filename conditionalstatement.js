function myfunction(){
 var greeting;
 var time= new Date().getHours();
 var date= new Date().getDate();
 

 if(time < 11){
    greeting="Good Morning"
}
 else if (time < 18) { 
    greeting="Good Day"
 }
 else if(time < 21){
    greeting="Good Evening"
 }
 else {
    greeting="Good Night"}
    document.getElementById("hour").innerHTML="The current time and date is:" + time + " "+ date;
    
    document.getElementById("hosp").innerHTML= greeting;

    
}