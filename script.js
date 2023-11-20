document.addEventListener("DOMContentLoaded",function(){
//dictionary list for colour inputs
const colormap = {"red":"#FF0000","blue":"#5733FF","yellow":"#FFFF33","orange":"#FFA500","black":"#000000","green":"#008000"};
//variables tied to form and input objects
const colorForm = document.getElementById('colorForm');
const favoriteColorInput = document.getElementById('favoriteColor');

colorForm.addEventListener("submit",function(e){
    //prevent form from submitting normally.
    e.preventDefault();

//storing user input
const userColor = favoriteColorInput.value.toLowerCase();

//
if (colormap.hasOwnProperty(userColor)) 
{
const selectedColour = colormap[userColor];

document.body.style.background = selectedColour;

} else{
    alert("Invalid colour input.");
}

favoriteColorInput.value = "";
});
});

////FOR RAND COLOR GENERATOR

// //event listner for loading the js before the css stylesheet function
// document.addEventListener("DOMContentLoaded",function(){
// const colorbtn = document.getElementById('colorbtn');
// const color =['#194D33','#7568C8','#C86968','#C8687F','#688DC8'];

// colorbtn.addEventListener('click', function(){
//     //generates random index from the existing array "color"
//     const randomIndex = Math.floor(Math.random()*color.length);
//     //create new variable for storing index generated variable link from array
//     const selectedcolor = color[randomIndex];
//    // this tells the html what ojbect of the website it is affecting
//     document.body.style.backgroundColor = selectedcolor;
// });
// });
