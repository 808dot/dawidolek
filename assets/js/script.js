var Arrows = document.querySelectorAll(".info-case i");
var InfoCase = document.querySelectorAll(".info-case");
console.log(Arrows);




Arrows.forEach((Arrow, index) => {
    Arrow.addEventListener('click', () => {
        // description.style.visibility = 'visible';
        console.log(index)
        if (InfoCase[index].style.height != '100px' ){
            InfoCase[index].style.setProperty('height', '100px');
        } else { 
            InfoCase[index].style.setProperty('height', '50px');
        }
            
        
    });
});
  

// descriptions.forEach( (description) => {
//     description.addEventListener("mouseover", () => {
//       // do something when the button is clicked
//       console.log("You clicked a button");
//     });
//   });