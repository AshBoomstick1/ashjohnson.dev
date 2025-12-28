let hero_area = document.getElementById("intro");
let body = document.getElementsByTagName("body")[0];

const width = body.offsetWidth;
const height = hero_area.offsetHeight + 140;

const setAnimation = (point) => {
    const cx = point.getAttribute('cx');
    const cy = point.getAttribute('cy');

    const animation = document.createElementNS('http://www.w3.org/2000/svg', 'animateMotion');
    animation.setAttribute('begin', "0s");
    animation.setAttribute('dur', `${Math.floor(Math.random() * 10 + 7)}s`);
    let endX;
    let endY;
    if (Math.floor(Math.random() * 2) == 0) {
        if (Math.floor(Math.random() * 2) == 0) {
             endX = (Math.random() * (width + 80)) - 40;
             endY = -40;
        } else {
             endX = (Math.random() * (width + 80)) - 40;
             endY = height + 40;
        }
    } else {
        if (Math.floor(Math.random() * 2) == 0) {
             endX = -40;
             endY = (Math.random() * (height + 80)) - 40;
        } else {
             endX = width + 40;
             endY = (Math.random() * (height + 80)) - 40;
        }
    }
    animation.setAttribute('path', `M${point.getAttribute("cx")},${point.getAttribute("cy")} ${endX},${endY}`)
    animation.setAttribute('repeatCount', "1");
    point.appendChild(animation);
    let e = point.getAnimations()[0];
    point.addEventListener("animationend", function (e) {
        e.setAttribute("fill", "#000");
        if (Math.floor(Math.random() * 2) == 0) {
            if (Math.floor(Math.random() * 2) == 0) {
                 endX = (Math.random() * (width + 80)) - 40;
                 endY = -40;
            } else {
                 endX = (Math.random() * (width + 80)) - 40;
                 endY = height + 40;
            }
            } else {
            if (Math.floor(Math.random() * 2) == 0) {
                 endX = -40;
                 endY = (Math.random() * (height + 80)) - 40;
            } else {
                 endX = width + 40;
                 endY = (Math.random() * (height + 80)) - 40;
            }
        }
        //this.setAttribute("path", `M${point.getAttribute("cx")},${point.getAttribute("cy")} ${endX},${endY}`)
    }); 
}

export const graph = () => {
    let svg = document.getElementById("hero_svg")

    svg.setAttribute("style", "top: 0px; left: 0px;");
    
    svg.setAttribute("width", `${width}px`);
    svg.setAttribute("height", `${height}px`);
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

    svg.style.backgroundColor = "red";
    const point_count = Math.floor((width * height) / 4000)
    //create points
    for (let i = 0; i < point_count; i++) {
        const point = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        point.setAttribute('cx', `${Math.random() * width}`);
        point.setAttribute('cy', `${Math.random() * height}`);
        point.setAttribute('r', `3`)
        point.setAttribute('fill', "#ffd900ff");

        setAnimation(point);

        svg.appendChild(point)
    }
}