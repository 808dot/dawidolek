let Arrows = document.querySelectorAll(".info-case i");
let InfoCases = document.querySelectorAll(".info-case");
let ProjectsIcons = document.querySelectorAll(".info-case .header-info img");
let ProjectsTitle = document.querySelectorAll(".info-case .header-info p");

let ScreenWidth = screen.width;
let ProjectsWidth = '28px'
console.log(ScreenWidth);

if (ScreenWidth <= 480 && ScreenWidth > 400) {
    ProjectsWidth = '20px'
} else if (ScreenWidth <= 400 && ScreenWidth > 370) {
    ProjectsWidth = '15px'
} 
else if (ScreenWidth <= 370) {
    ProjectsWidth = '13px'
} 
// Clicked arrow in ifno case make window bigger
// Arrows.forEach((Arrow, index) => {
//     Arrow.addEventListener('click', () => {
//         // description.style.visibility = 'visible';
//         console.log(index)
//         if (InfoCases[index].style.height != '100px' ){
//             InfoCases[index].style.setProperty('height', '100px');
//         } else { 
//             InfoCases[index].style.setProperty('height', '50px');
//         }
            
        
//     });
// });
  

// Hover info-case

InfoCases.forEach((InfoCase, index) => {
    // console.log(InfoCase)
    InfoCase.addEventListener("mouseover", (event) => {
          // highlight the mouseover target
          console.log(ProjectsWidth);
          InfoCase.style.setProperty('align-items', 'start');
          ProjectsIcons[index].style.setProperty('width', ProjectsWidth);
          ProjectsIcons[index].style.setProperty('height', ProjectsWidth);
          ProjectsTitle[index].style.setProperty('font-size', ProjectsWidth);
       
        },
        false,
      );
});

InfoCases.forEach((InfoCase, index) => {
    // console.log(InfoCase)
    InfoCase.addEventListener("mouseout", (event) => {
          // highlight the mouseover target
          console.log(index);
          ProjectsIcons[index].style.removeProperty('width');
          ProjectsIcons[index].style.removeProperty('height');
          ProjectsTitle[index].style.removeProperty('font-size');
        
        },
        false,
      );
});

