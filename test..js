document.getElementById('playButton').onclick = function() {
    let modal = document.getElementById("videoModal");
    let iframe = document.getElementById("videoPlayer");
    let videoURL = "https://www.youtube.com/embed/9o1jmMaWsr8?autoplay=1";
    iframe.src = videoURL;
    modal.style.display = 'flex';
};

document.querySelector('.close').onclick = function() {
    let modal = document.getElementById("videoModal");
    let iframe = document.getElementById("videoPlayer");
    modal.style.display = "none";
    iframe.src = "";
};
let button = document.getElementById("btn");
let inputs= document.querySelectorAll('input')
button.onclick=function (){
    for(let input of inputs){
        if(input.value===''){
            alert("the text is empty");
            break
        }
        if(input.value.length<3){
            alert("Characters less than 4 is not valid");
            break

        }
    }
}

