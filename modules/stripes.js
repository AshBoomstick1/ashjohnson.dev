let hero_area = document.getElementById("intro");
const body = document.getElementsByTagName("body")[0];

export const stripes = () => {
    let svg = document.getElementById("hero_svg")
    const width = body.offsetWidth;
    const height = hero_area.offsetHeight + 140;
    const size = 175;

    svg.setAttribute("style", "top: 0px; left: 0px;");
    
    svg.setAttribute("width", `${width}px`);
    svg.setAttribute("height", `${height}`);
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

    svg.style.backgroundColor = "red";

    const stripe_limit = Math.sqrt((width * width) + (height * height))
    for (let i = -stripe_limit - size; i < stripe_limit + size; i += size) {
        svg.innerHTML += `<polygon points=\"${width + i},${-(size / 2) + i} ${width + i},${(size / 2) + i} ${i},${height + (size / 2) + i} ${-(size / 2) + i},${height + i}\" fill="#4cff79ff" />`;
    }

}