import { bubble } from "./sortingAlgs/bubble.js";

let hero_area = document.getElementById("intro");
let body = document.getElementsByTagName("body")[0];
let svg = document.getElementById("hero_svg");

const width = body.offsetWidth;
const height = hero_area.offsetHeight; //140

const setUpData = (x, y, width, height, direction) => {
  const colWidth = 10;
  const totalDataCount = Math.floor(width / colWidth) + 1;
  let numList = []
  let randNumList = []
  let firstIdx;
  let lastIdx;
  for (let i = 1; i <= totalDataCount; i++) numList.push(i);

  for (let i = 0; i < totalDataCount; i++) {
    let randNum = Math.floor(Math.random() * numList.length);
    randNumList.push(numList[randNum]);
    numList.splice(randNum, 1);
  }

  for (let i = 0; i < totalDataCount; i++) {
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    switch (direction) {
      case "up":
        rect.setAttribute('x', `${i * colWidth + x}`);
        rect.setAttribute('y', `${randNumList[i] * height/totalDataCount + y - height/totalDataCount}`);
        rect.setAttribute('width', `${colWidth - 1}`);
        rect.setAttribute('height', `${height - randNumList[i] * height/totalDataCount + height/totalDataCount}`);
        break;
      case "down":
        rect.setAttribute('x', `${i * colWidth + x}`);
        rect.setAttribute('y', `${y - height/totalDataCount}`);
        rect.setAttribute('width', `${colWidth - 1}`);
        rect.setAttribute('height', `${height - randNumList[i] * height/totalDataCount}`);
        break;
    }
    
    rect.setAttribute('fill', "rgb(220, 187, 0)");
    svg.appendChild(rect);
    if (i==0) firstIdx = Array.prototype.indexOf.call(svg.children, rect);
    if (i==totalDataCount - 1) lastIdx = Array.prototype.indexOf.call(svg.children, rect) + 1;
  }

  return [firstIdx, lastIdx]
}

export const sort = () => {
  svg.setAttribute("style", "top: 0px; left: 0px;");
  svg.setAttribute("width", `${width}px`);
  svg.setAttribute("height", `${height}px`);
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  const dataSet1 = setUpData(0, 150, 500, 350, "up");
  const dataSet2 = setUpData(0, 500, 500, 350, "down");
  const dataSet5 = setUpData(500, 150, 400, 350, "up");
  const dataSet6 = setUpData(500, 500, 400, 350, "down");
  const dataSet3 = setUpData(900, 150, 400, 350, "up");
  const dataSet4 = setUpData(900, 500, 400, 350, "down");
  const dataSet7 = setUpData(1300, 150, 400, 350, "up");
  const dataSet8 = setUpData(1300, 500, 400, 350, "down");

  bubble(dataSet1);
  bubble(dataSet2);
  bubble(dataSet3);
  bubble(dataSet4);
  bubble(dataSet6);
  bubble(dataSet5);
  bubble(dataSet7);
  bubble(dataSet8);
}