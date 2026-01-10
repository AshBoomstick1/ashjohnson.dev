let hero_area = document.getElementById("intro");
let body = document.getElementsByTagName("body")[0];
let svg = document.getElementById("hero_svg")

const width = body.offsetWidth;
const height = hero_area.offsetHeight; //140

const pointCount = 20 //Math.floor((width * height) / 8000) //4000
const overDue = 0;

function getPosition(el) {
  console.log(el)
  var rect = el.getBoundingClientRect()
  return([rect.top, rect.left]);
}

const getDistance = (x1, y1, x2, y2) => {
  return Math.abs(((x1 - x2) * (x1 - x2)) + ((y1 - y2) * (y1 - y2)));
}

const getClosest = (point) => {
  let pointCoordList = [];
  let closestList = [];
  let numOfClosestToRecord = 3;

  for (let i = 0; i < svg.children.length; i++) {
    if (point != svg.children[i]) {
      const coords = getPosition(svg.children[i])
      pointCoordList.push(coords[0], coords[1]);
    }
  }

  let pointCoords = getPosition(point);

  for (let i = 0; i < numOfClosestToRecord; i++) {
    let closest = [0, getDistance(pointCoords[0], pointCoords[1], pointCoordList[0], pointCoordList[1])];
    for (let j = 2; j < pointCoordList.length; j += 2) {
      let distance = getDistance(pointCoords[0], pointCoords[1], pointCoordList[j], pointCoordList[j + 1]);
      if (distance < closest[1]) {
        closest = [j, distance];
      }
    }
    closestList.push(svg.children[closest[0] / 2]);
    pointCoordList.splice(closest[0], 2);
  }

  return closestList;
}

function drawLineFrame() {
  for (let i = 0; i < document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "circle").length; i++) {
    draw_lines(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "circle")[i], pointCount);
  }
  
  window.requestAnimationFrame(drawLineFrame);
}

const draw_lines = (point, pointCount) => {
  let closestList = getClosest(point)
  let pointIdx = 0;
  let tempPoint = point
  while( (tempPoint = tempPoint.previousSibling) != null ) pointIdx++;

  //let currentLines = document.getElementsByClassName(`lineGroup${pointIdx}`);
  //for (let i = 0; i < currentLines.length; i++) {
    //currentLines[i].remove();
    //svg.removeChild(currentLines[i])
  //}
  if (document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "line").length > pointCount) {
    for (let i = 0; i < closestList.length; i++) {
      svg.removeChild(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "line")[pointIdx * 3]);
    }
  }
  

  for (let i = 0; i < closestList.length; i++) {
    let pointCoords = getPosition(point);
    let closestCoords = getPosition(closestList[i]);
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', `${pointCoords[0]}`);
    line.setAttribute('y1', `${pointCoords[1]}`);
    line.setAttribute('x2', `${closestCoords[0]}`);
    line.setAttribute('y2', `${closestCoords[1]}`);
    line.setAttribute('stroke-width', `1`)
    line.setAttribute('stroke', "#ffd900ff");

    svg.appendChild(line)
  }
}

const setAnimation = (point) => {
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
          endX = (Math.random() * (width + (overDue * 2)) - cx) - overDue
          endY = cy * -1 - overDue;
        } else {
          //hits bottom
          endX = (Math.random() * (width + (overDue * 2)) - cx) - overDue;
          endY = height - cy + overDue;
        }
    } else {
     //hit left/right
        if (Math.floor(Math.random() * 2) == 0) {
          //hit left
          endX = cx * -1 - overDue;
          endY = (Math.random() * (height + (overDue * 2)) - cy) - overDue;
        } else {
          //hit right
          endX = width - cx + overDue;
          endY = (Math.random() * (height + (overDue * 2)) - cy) - overDue;
        }
    }

    const move = point.animate([
            {transform: `translate3d(0px, 0px, 0px)`},
            {transform: `translate3d(${endX}px, ${endY}px, 0px)`, offset: 1.0},
        ],
        {
            duration: Math.floor(Math.random() * 10 + 7) * 100,
            easing: "linear",
            iterations: 1
        },
    );
    
    move.onfinish = () => {
      point.setAttribute("cx", +endX + +cx);
      point.setAttribute("cy", +endY + +cy);
      //console.log(+endX + +cx, +endY + +cy, endX, endY, cx, cy);
      recursiveAnimation(point)
    }
}

const recursiveAnimation = (point) => {

  const cx = point.getAttribute("cx");
  const cy = point.getAttribute("cy");

  let endX;
  let endY;

  if (Math.floor(Math.random() * 2) == 0) {
    //hit top/bottom
      if ((Math.floor(Math.random() * 2) == 0 && cy != 0) || cy == height) {
        //hits top
        endX = (Math.random() * (width + (overDue * 2)) - cx) - overDue
        endY = cy * -1 - overDue;
     } else {
       //hits bottom
       endX = (Math.random() * (width + (overDue * 2)) - cx) - overDue;
       endY = height - cy + overDue;
     }
    } else {
      //hit left/right
      if ((Math.floor(Math.random() * 2) == 0 && cx != 0) || cx == width) {
        //hit left
        endX = cx * -1 - overDue;
        endY = (Math.random() * (height + (overDue * 2)) - cy) - overDue;
      } else {
        //hit right
        endX = width - cx + overDue;
        endY = (Math.random() * (height + (overDue * 2)) - cy) - overDue;
      }
    }
    
    let move = point.animate(
    [
      {transform: `translate3d(0px, 0px, 0px)`},
      {transform: `translate3d(${endX}px, ${endY}px, 0px)`},
    ],
    {
      duration: Math.floor(Math.random() * 10 + 7) * 100,
      easing: "linear",
      iterations: 1
    },
    );

    move.onfinish = () => {
      console.log(+endX + +cx, +endY + +cy, endX, endY, cx, cy);
      point.setAttribute("cx", +endX + +cx);
      point.setAttribute("cy", +endY + +cy);
      recursiveAnimation(point);
    }

}

export const graph = () => {
    svg.setAttribute("style", "top: 0px; left: 0px;");
    
    svg.setAttribute("width", `${width}px`);
    svg.setAttribute("height", `${height}px`);
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

    svg.style.backgroundColor = "purple";
    //create points
    for (let i = 0; i < pointCount; i++) { //point_count
      const point = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      point.setAttribute('cx', `${Math.random() * width}`);
      point.setAttribute('cy', `${Math.random() * height}`);
      point.setAttribute('r', `3`)
      point.setAttribute('fill', "#ffd900ff");
      //setInterval(draw_lines, 0, point, point_count)
      setAnimation(point);

      svg.appendChild(point)
    }

    //drawLineFrame();
}