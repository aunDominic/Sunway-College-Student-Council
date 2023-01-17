let accordion = document.getElementsByClassName("accordion");


for (let i = 0; i < accordion.length; i++){
    console.log(accordion[i])
    accordion[i].addEventListener("click", function(){
        this.classList.toggle('open');
    });
}

let years = document.getElementsByClassName("years");
for (let i = 0; i < years.length; i++){
    years[i].addEventListener('click',function(){
        this.parentElement.classList.toggle('open');
    });
}
let toggleSidebar = document.getElementsByClassName("toggle-sidebar");
let sidebar = document.getElementsByClassName('sidebar');
let content = document.getElementsByClassName("content");
let smallSidebar = document.getElementsByClassName("small-sidebar");
toggleSidebar[0].addEventListener('click', function(){
    sidebar[0].classList.toggle('close-sidebar');
    content[0].classList.toggle("open-sidebar");
    smallSidebar[0].classList.toggle('close-sidebar');
})
smallSidebar[0].addEventListener('click', function(){
    sidebar[0].classList.toggle('close-sidebar');
    content[0].classList.toggle("open-sidebar");
    smallSidebar[0].classList.toggle('close-sidebar');
})



