let accordion = document.getElementsByClassName("accordion");

for (i = 0; i < accordion.length; i++){
    console.log(accordion[i])
    accordion[i].addEventListener("click", function (){
        this.classList.toggle('open');
    })
}

