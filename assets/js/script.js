let InfoCases = document.querySelectorAll(".info-case");
let ProjectsIcons = document.querySelectorAll(".info-case .header-info img");
let Background = document.querySelectorAll(".background img");

let ScreenWidth = screen.width;
let ProjectsWidth = '28px'

if (ScreenWidth <= 480 && ScreenWidth > 400) {
    Background[0].src = 'assets/img/backgroundmobile.webp';
    Background[1].src = 'assets/img/backgroundmobile.webp';
    ProjectsWidth = '20px'
} else if (ScreenWidth <= 400 && ScreenWidth > 370) {
    Background[0].src = 'assets/img/backgroundmobile.webp';
    Background[1].src = 'assets/img/backgroundmobile.webp';
    ProjectsWidth = '15px'
} 
else if (ScreenWidth <= 370) {
    Background[0].src = 'assets/img/backgroundmobile.webp';
    Background[1].src = 'assets/img/backgroundmobile.webp';
    ProjectsWidth = '13px'

} else{
    window.addEventListener('scroll', () => {
        Background[0].style.width = 100  + window.scrollY / 70 + '%';
        Background[0].style.height = 100  + window.scrollY / 70 + '%';

        Background[1].style.width = 100  + window.scrollY / 100 + '%';
        Background[1].style.height = 100  + window.scrollY / 100 + '%';

        Background[1].style.top = 0  - window.scrollY / 50 + 'px';
        Background[1].style.left = 0  - window.scrollY / 50 + 'px';

        Background[2].style.width = 100  + window.scrollY / 70 + '%';
        Background[2].style.height = 100  + window.scrollY / 70 + '%';


        Background[2].style.left = 0  - window.scrollY / 15 + 'px';

    });
}



InfoCases.forEach((InfoCase, index) => {
    console.log(InfoCase)
    InfoCase.addEventListener("mouseover", (event) => {
        ProjectsIcons[index].style.setProperty('height', ProjectsWidth);
        },
        false,
    );
});

InfoCases.forEach((InfoCase, index) => {
    InfoCase.addEventListener("mouseout", (event) => {
        ProjectsIcons[index].style.removeProperty('height');
        },
        false,
    );
});



// InfoCases.forEach((InfoCase, index) => {
//     InfoCase.addEventListener("click", (event) => {
//             ProjectsIcons[index].style.setProperty('height', ProjectsWidth);
//         },
//         false,
//       );
// });




