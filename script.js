let accordion = document.getElementsByClassName("accordion");

function toggle_sidebar(){
    sidebar[0].classList.toggle('close-sidebar');
    content[0].classList.toggle("open-sidebar");
    smallSidebar[0].parentElement.classList.toggle('close-sidebar');
}



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
let smallSidebar = document.getElementsByClassName("toggle-small-sidebar");
toggleSidebar[0].addEventListener('click', toggle_sidebar)
smallSidebar[0].addEventListener('click', toggle_sidebar)
content[0].addEventListener('click', function(){
    if (content[0].classList.contains('open-sidebar')){
        toggle_sidebar();
    }
})



/* Select which SCC Term user wants to see*/
let terms = document.getElementsByClassName("terms");

for (let i = 0; i < terms.length; i++){
    let term = terms[i].children;
    for (let j = 0; j < term.length; j++)
    {
        term[j].addEventListener('click', function(){
            let activeTerm = document.getElementsByClassName('active-term');
            activeTerm[0].classList.toggle('active-term');
            term[j].classList.toggle('active-term');

            
            let displayedContent = document.getElementsByClassName('display-content');
            if (displayedContent.length > 0) displayedContent[0].classList.toggle('display-content');
            let contentTerm = document.getElementsByClassName(term[j].id);
            contentTerm[0].classList.toggle('display-content');

            toggle_sidebar();
        })
    }
}



