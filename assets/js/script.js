let Arrows = document.querySelectorAll(".info-case i");
let InfoCases = document.querySelectorAll(".info-case");
let ProjectsIcons = document.querySelectorAll(".info-case .header-info img");
let ProjectsTitle = document.querySelectorAll(".info-case .header-info p");
let ProjectsLink = document.querySelectorAll(".info-case .header-info a");

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

let bg = document.querySelectorAll(".background img");
let hero = document.getElementsByClassName('hero')
window.addEventListener('scroll', () => {
    // console.log(100  + window.scrollY / 100 + '%');
    bg[0].style.width = 100  + window.scrollY / 70 + '%';
    bg[0].style.height = 100  + window.scrollY / 70 + '%';

    bg[1].style.width = 100  + window.scrollY / 100 + '%';
    bg[1].style.height = 100  + window.scrollY / 100 + '%';

    bg[1].style.top = 0  - window.scrollY / 50 + 'px';
    bg[1].style.left = 0  - window.scrollY / 50 + 'px';
        
    
});

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
        //   console.log(ProjectsWidth);
          InfoCase.style.setProperty('align-items', 'start');
        //   ProjectsIcons[index].style.setProperty('width', ProjectsWidth);
          ProjectsIcons[index].style.setProperty('height', ProjectsWidth);
          ProjectsLink[index-3].style.setProperty('height', ProjectsWidth);
          ProjectsLink[index-3].style.setProperty('width', ProjectsWidth);
        //   ProjectsTitle[index].style.setProperty('font-size', ProjectsWidth);
       
        },
        false,
      );
});

InfoCases.forEach((InfoCase, index) => {
    // console.log(InfoCase)
    InfoCase.addEventListener("mouseout", (event) => {
          // highlight the mouseover target
        //   console.log(index);
        //   ProjectsIcons[index].style.removeProperty('width');
          ProjectsIcons[index].style.removeProperty('height');
          ProjectsLink[index-3].style.removeProperty('height');
          ProjectsLink[index-3].style.removeProperty('width');
        //   ProjectsTitle[index].style.removeProperty('font-size');
        
        },
        false,
      );
});

