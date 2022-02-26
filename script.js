let videoContainers = document.getElementsByClassName("v-container")

for (let vc of videoContainers) {
    
    //2 maneiras de pegar o caminho:
    //let src = vc.getAttribute("data-src");
    let src = vc.dataset.src;

    let video = document.createElement("video");
    video.ClassName = "video"
    video.src = src;

    vc.appendChild(video);

    let controls = document.createElement("div")
    controls.className = "control";

    controls.appendChild(createBtn("./Assets/circle-play-solid.svg", play, video));
    controls.appendChild(createBtn("./Assets/circle-stop-solid.svg", stop, video));
    controls.appendChild(createBtn("./Assets/gauge-solid.svg", dec, video));
    controls.appendChild(createBtn("./Assets/gauge-high-solid.svg", inc, video));
    controls.appendChild(createBtn("./Assets/circle-left-solid.svg", retroceder, video));
    controls.appendChild(createBtn("./Assets/circle-right-solid.svg", avancar, video));

    vc.appendChild(controls);

    vc.addEventListener("mouseenter", showControl);
    vc.addEventListener("mouseleave", hideControl);

}

function showControl(e){
    let container = e.target;
    let children = container.children;

    let control = children[children.length -1];

    control.style.display = "block";
}

function hideControl(e){
    let container = e.target;
    let children = container.children;

    let control = children[children.length -1];

    control.style.display = "none";
}


function createBtn( imgSrc, f, video) {
    let btn = document.createElement("img");
    btn.className = "btn";
    btn.src = imgSrc;
    btn.addEventListener("click", f.bind(video))
    
    return btn;
}

function play() {
    if(this.paused) {
        this.play();
    }
    else{
        this.pause();
    }
}

function pause(){
    this.pause();
}

function stop(){
    this.pause();
    this.currentTime = 0;
}

function inc(){
    this.playbackRate += 2;
}

function dec(){
    this.playbackRate -= 1;
}

function retroceder(){
    this.currentTime -= 10;
}

function avancar(){
    this.currentTime += 10;
}
