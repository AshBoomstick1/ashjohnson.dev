let hero_area = document.getElementById("intro");
let body = document.getElementsByTagName("body")[0];
let intro = document.getElementById("intro");

const width = body.offsetWidth;
const height = hero_area.offsetHeight + 140;

let overDue = 0;

const setAnimation = (point) => {

  const width = body.offsetWidth;
  const height = hero_area.offsetHeight + 140;

    const cx = point.getAttribute("cx");
    const cy = point.getAttribute("cy");

    let endX;
    let endY;

    //finds to what x,y the point will move to
    //will the point hit the top & bottom sides or the left and right sides
    if (Math.floor(Math.random() * 2) == 0) {
          //hit top/bottom
        if (Math.floor(Math.random() * 2) == 0) {
          //hits top
          endX = (Math.random() * (width + (overDue * 2))) - overDue
          endY = cy * -1 - overDue;
        } else {
          //hits bottom
          endX = (Math.random() * (width + (overDue * 2))) - overDue;
          endY = height - cy + overDue;
        }
    } else {
     //hit left/right
        if (Math.floor(Math.random() * 2) == 0) {
          //hit left
          endX = cx * -1 - overDue;
          endY = (Math.random() * (height + (overDue * 2))) - overDue;
        } else {
          //hit right
          endX = width - cx + overDue;
          endY = (Math.random() * (height + (overDue * 2))) - overDue;
        }
    }

    console.log("WIDTH & HEIGHT: ", width, height, "ENDX AND END Y: ", (+endX + +cx), (+endY + +cy));

    const move = point.animate([
            {transform: `translate3d(0px, 0px, 0px)`},
            {transform: `translate3d(${endX}px, ${endY}px, 0px)`, offset: 1.0},
        ],
        {
            duration: Math.floor(Math.random() * 10 + 7) * 1000,
            easing: "linear",
            iterations: 1
        },
    );
    
    move.onfinish = () => {
      point.setAttribute("cx", +endX + +cx);
      point.setAttribute("cy", +endY + +cy);
      recursiveAnimation(point)
    }
}

const recursiveAnimation = (point) => {
  const width = body.offsetWidth;
  const height = hero_area.offsetHeight + 140;

  const cx = point.getAttribute("cx");
  const cy = point.getAttribute("cy");

  let endX;
  let endY;

  if (Math.floor(Math.random() * 2) == 0) {
    //hit top/bottom
      if (Math.floor(Math.random() * 2) == 0) {
        //hits top
        endX = (Math.random() * (width + (overDue * 2))) - overDue
        endY = cy * -1 - overDue;
     } else {
       //hits bottom
       endX = (Math.random() * (width + (overDue * 2))) - overDue;
       endY = height - cy + overDue;
     }
    } else {
      //hit left/right
      if (Math.floor(Math.random() * 2) == 0) {
        //hit left
        endX = cx * -1 - overDue;
        endY = (Math.random() * (height + (overDue * 2))) - overDue;
      } else {
        //hit right
        endX = width - cx + overDue;
        endY = (Math.random() * (height + (overDue * 2))) - overDue;
      }
    }

    console.log("WIDTH & HEIGHT: ", width, height, "ENDX AND END Y: ", +endX + +cx, +endY + +cy);

    //console.log("(" + point.getAttribute("cx") +", " + point.getAttribute("cy") + ") (" + endX + ", " + endY + ")")
    
    let move = point.animate(
    [
      {transform: `translate3d(${point.getAttribute("cx")}px, ${point.getAttribute("cy")}px, 0px)`},
      {transform: `translate3d(${endX}px, ${endY}px, 0px)`},
    ],
    {
      duration: Math.floor(Math.random() * 10 + 7) * 1000,
      easing: "linear",
      iterations: 1
    },
    );

    move.onfinish = () => {
     point.setAttribute("cx", +endX + +cx);
     point.setAttribute("cy", +endY + +cy);
     recursiveAnimation(point);
    }

}

export const graph = () => {
    let svg = document.getElementById("hero_svg")

    svg.setAttribute("style", "top: 0px; left: 0px;");
    
    svg.setAttribute("width", `${width}px`);
    svg.setAttribute("height", `${height}px`);
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

    svg.style.backgroundColor = "purple";
    const point_count = Math.floor((width * height) / 4000)
    //create points
    for (let i = 0; i < point_count; i++) { //point_count
        const point = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        point.setAttribute('cx', `${Math.random() * width}`);
        point.setAttribute('cy', `${Math.random() * height}`);
        point.setAttribute('r', `3`)
        point.setAttribute('fill', "#ffd900ff");

        setAnimation(point);

        svg.appendChild(point)
    }
}