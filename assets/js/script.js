let Arrows = document.querySelectorAll(".info-case i");
let InfoCases = document.querySelectorAll(".info-case");
let ProjectsIcons = document.querySelectorAll(".info-case .left img");
let ProjectsTitle = document.querySelectorAll(".info-case .left p");
// console.log(Arrows);



// Clicked arrow in ifno case make window bigger
Arrows.forEach((Arrow, index) => {
    Arrow.addEventListener('click', () => {
        // description.style.visibility = 'visible';
        console.log(index)
        if (InfoCases[index].style.height != '100px' ){
            InfoCases[index].style.setProperty('height', '100px');
        } else { 
            InfoCases[index].style.setProperty('height', '50px');
        }
            
        
    });
});
  

// Hover info-case

InfoCases.forEach((InfoCase, index) => {
    // console.log(InfoCase)
    InfoCase.addEventListener("mouseover", (event) => {
          // highlight the mouseover target
          console.log(InfoCase);
          InfoCase.style.setProperty('align-items', 'start');
          ProjectsIcons[index].style.setProperty('width', '28px');
          ProjectsTitle[index].style.setProperty('font-size', '28px');
        //   InfoCase.style.setProperty('background', 'green');
      
          // reset the color after a short delay
        //   setTimeout(() => {
        //     event.target.style.color = "";
        //   }, 500);
        },
        false,
      );
});

InfoCases.forEach((InfoCase, index) => {
    // console.log(InfoCase)
    InfoCase.addEventListener("mouseout", (event) => {
          // highlight the mouseover target
          console.log(index);
        //   InfoCase.style.removeProperty('align-items');
          ProjectsIcons[index].style.removeProperty('width');
          ProjectsTitle[index].style.removeProperty('font-size');
        //   InfoCase.style.setProperty('background', 'green');
      
          // reset the color after a short delay
        //   setTimeout(() => {
        //     event.target.style.color = "";
        //   }, 500);
        },
        false,
      );
});

