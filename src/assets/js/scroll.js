var sections = document.querySelectorAll('section');
var navli = document.querySelectorAll('#nav .container-fluid #navbarSupportedContent ul li a');
// window.onscroll = () => {
//     var current = "";
  
//     sections.forEach((section) => {
//       const sectionTop = section.offsetTop;
//       if (pageYOffset >= sectionTop - 60) {
//         current = section.getAttribute("id"); }
//     });
  
//     navli.forEach((li) => {
//       li.classList.remove("active");
//       if (li.classList.contains(current)) {
//         li.classList.add("active");
//       }
//     });
//   };
window.addEventListener('scroll',function(){
  sections.forEach((section)=>{
    var current = "";
    const sectionTop = section.offsetTop;
    if(window.pageYOffset >= sectionTop - 60){
      current = section.getAttribute('id');
    }
  });
  navli.forEach((li)=>{
    li.classList.remove("active");
    if(li.classList.contains(current)){
      li.classList.add('active');
    }
  });
});