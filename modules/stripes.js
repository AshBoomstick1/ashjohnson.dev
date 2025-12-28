let hero_area = document.getElementById("intro");
const body = document.getElementsByTagName("body")[0];

const animate_stripe = (stripe, width, height, size, i) => {
    stripe.setAttribute('points', `${width + i + 200},${-(size / 2) + i} ${width + i + 200},${(size / 2) + i} ${i + 200},${height + (size / 2) + i} ${-(size / 2) + i + 200},${height + i}`); 

    stripe.style.transitionProperty = 'points';
    stripe.style.transitionDuration = '2s';

    //moves the points in the stripe
    stripe.stripe.points = `${width + i},${-(size / 2) + i} ${width + i},${(size / 2) + i} ${i},${height + (size / 2) + i} ${-(size / 2) + i},${height + i}`;
  
}

export const stripes = () => {
    //creating svg container
    let svg = document.getElementById("hero_svg")
    const width = body.offsetWidth;
    const height = hero_area.offsetHeight + 140;
    const size = 175;

    svg.setAttribute("style", "top: 0px; left: 0px;");
    
    svg.setAttribute("width", `${width}px`);
    svg.setAttribute("height", `${height}`);
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

    svg.style.backgroundColor = "red";

    //create stripes
    const stripe_limit = Math.sqrt((width * width) + (height * height))
    for (let i = -stripe_limit - size; i < stripe_limit + size; i += size) {
        //creating stripe
        const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        polygon.setAttribute('points', ``)
        polygon.setAttribute('fill', "#4cff79");
        const animation = document.createElement('http://www.w3.org/2000/svg', 'animation');
        //animation arguments
        animation.setAttribute("attributeName", "points");
        animation.setAttribute("dur", "5s");
        animation.setAttribute("fill", "freeze");
        animation.setAttribute("from", `${width + i},${-(size / 2) + i} ${width + i},${(size / 2) + i} ${i},${height + (size / 2) + i} ${-(size / 2) + i},${height + i}`)
        animation.setAttribute("to", `${width + i + 200},${-(size / 2) + i} ${width + i + 200},${(size / 2) + i} ${i + 200},${height + (size / 2) + i} ${-(size / 2) + i + 200},${height + i}`)
        polygon.appendChild(animation);
        //add stripe to svg
        svg.appendChild(polygon)
        //animate_stripe(polygon, width, height, size, i);
    }

}