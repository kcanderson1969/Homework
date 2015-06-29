// alert("Hello World");
function processForm(){
    var name;
    var action;
    var place;
    var people;
    var action2;
    var description;
    var thing;
    var action3;
    var action4;   
    var content;
    name = document.getElementById("name");
    people = document.getElementById("people");
    place = document.getElementById("place");
    thing = document.getElementById("thing");
    action = document.getElementById("action");
    action2 = document.getElementById("action2");
    action3 = document.getElementById("action3");
    action4 = document.getElementById("action4");
    description = document.getElementById("description");
    content = document.getElementById("output")
  //  alert("Hello " + name.value + " your message is: " + message.value);

  content.innerText = name.value + " likes to " + action.value + " in a dark " + place.value + ", while " + people.value + " watch in horror. "
  + action2.value + " is a " + description.value + " , and " + thing.value  + " to " + action3.value + " So keep it in your pants and dont "
  + action4.value + " in public."  
}