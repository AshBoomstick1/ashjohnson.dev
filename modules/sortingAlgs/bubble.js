let svg = document.getElementById("hero_svg");

const isSorted = (dataSetId) => {
  const data = [].slice.apply(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect"), dataSetId);
  for (let i = 0; i < data.length - 1; i++) {
    if (Number(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect")[dataSetId[0] + i].getAttribute("height")) > Number(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect")[dataSetId[0] + i + 1].getAttribute("height"))) {
      return false;
    }
  }
  return true;
}

const moveAnimation = (dataIdx, xChange, startNextSwap, i, endI, dataSetId) => {
  const move = document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect")[dataIdx].animate([
      {transform: `translate3d(0px, 0px, 0px)`},
      {transform: `translate3d(${xChange}px, 0px, 0px)`},
    ],
    {
      duration: 0,
      easing: "ease-in-out",
      iterations: 1
    },
  );
  
  move.addEventListener("finish", () => {
    console.log("DONE")
    document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect")[dataIdx].setAttribute("x", Number(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect")[dataIdx].getAttribute("x")) + xChange)
    if (startNextSwap == true) {
      svg.insertBefore(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect")[dataIdx], document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect")[dataIdx - 1]);
      swap(i + 1, endI, dataSetId);
    }
  });
}

const swap = (i, endI, dataSetId) => {
  if (i < endI) {
    console.log(Number(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect")[dataSetId[0] + i].getAttribute("height")), Number(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect")[dataSetId[0] + i + 1].getAttribute("height")), Number(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect")[dataSetId[0] + i].getAttribute("height")) > Number(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect")[dataSetId[0] + i + 1].getAttribute("height")))
    if (Number(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect")[dataSetId[0] + i].getAttribute("height")) > Number(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect")[dataSetId[0] + i + 1].getAttribute("height"))) {
      //document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect")[dataSetId[0] + i].setAttribute("x", Number(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect")[dataSetId[0] + i].getAttribute("x")) - 5)
      //document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect")[dataSetId[0] + i + 1].setAttribute("x", Number(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect")[dataSetId[0] + i + 1].getAttribute("x")) + 5)
      moveAnimation(dataSetId[0] + i, Number(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect")[dataSetId[0] + i].getAttribute("width")) + 1, false, i, endI, dataSetId);
      moveAnimation(dataSetId[0] + i + 1, (Number(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect")[dataSetId[0] + i + 1].getAttribute("width")) + 1) * -1, true, i, endI, dataSetId);
    } else {
      swap(i + 1, endI, dataSetId)
    }
  } else if (!isSorted(dataSetId)) {
    swap(0, endI, dataSetId);
  }
}

export const bubble = (dataSetId) => {
  //console.log(!isSorted(dataSetId))
  const data = [].slice.apply(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect"), dataSetId);
  console.log([].slice.apply(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect"), dataSetId), [].slice.apply(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect"), dataSetId).length, document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect").length, dataSetId)
  swap(0, data.length - 1, dataSetId);
}