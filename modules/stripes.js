let hero_area = document.getElementById("intro");
const body = document.getElementsByTagName("body")[0];

export const stripes = () => {
    let svg = document.getElementById("hero_svg")
    svg.style.position = "absolute;";
    svg.style.left = "0px;";
    svg.style.top = "0px";
    
    svg.setAttribute("width", `${body.offsetWidth}px`);
    svg.setAttribute("height", `${body.offsetHeight}px`);
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

    svg.style.backgroundColor = "red";
}