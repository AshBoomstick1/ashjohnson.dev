let svg = document.getElementById("hero_svg");

const isSorted = (dataSetId) => {
  const data = [].slice.call(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect"), dataSetId);
  for (let i = 0; i < data.length - 1; i++) {
    if (Number([].slice.call(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect"), dataSetId)[dataSetId[0] + i].getAttribute("height")) > Number([].slice.call(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect"), dataSetId)[dataSetId[0] + i + 1].getAttribute("height"))) {
      return false;
    }
  }
  return true;
}

export const bubble = (dataSetId) => {
  //console.log(!isSorted(dataSetId))
  const data = [].slice.call(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect"), dataSetId);
  while (!isSorted(dataSetId)) {
    //console.log("SOERTING", data.length)
    for (let i = 0; i < data.length - 1; i++) {
      //console.log([].slice.call(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect"), dataSetId)[dataSetId[0] + i].getAttribute("height"), [].slice.call(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect"), dataSetId)[dataSetId[0] + i + 1].getAttribute("height"))
      if (Number([].slice.call(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect"), dataSetId)[dataSetId[0] + i].getAttribute("height")) > Number([].slice.call(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect"), dataSetId)[dataSetId[0] + i + 1].getAttribute("height"))) {
        svg.insertBefore([].slice.call(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect"), dataSetId)[dataSetId[0] + i + 1],[].slice.call(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect"), dataSetId)[dataSetId[0] + i]);
        document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect")[dataSetId[0] + i].setAttribute("x", Number(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect")[dataSetId[0] + i].getAttribute("x")) - 5)
        document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect")[dataSetId[0] + i + 1].setAttribute("x", Number(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect")[dataSetId[0] + i + 1].getAttribute("x")) + 5)
      }
    }
  }
}