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

export const bubble = (dataSetId) => {
  //console.log(!isSorted(dataSetId))
  const data = [].slice.apply(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect"), dataSetId);
  console.log([].slice.apply(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect"), dataSetId), [].slice.apply(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect"), dataSetId).length, document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect").length, dataSetId)
  while (!isSorted(dataSetId)) {
    //console.log("SOERTING", data.length)
    for (let i = 0; i < data.length - 1; i++) {
      console.log(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect")[dataSetId[0] + i], document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect")[dataSetId[0] + i + 1])
      if (Number(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect")[dataSetId[0] + i].getAttribute("height")) > Number(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect")[dataSetId[0] + i + 1].getAttribute("height"))) {
        svg.insertBefore(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect")[dataSetId[0] + i + 1], document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect")[dataSetId[0] + i]);
        document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect")[dataSetId[0] + i].setAttribute("x", Number(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect")[dataSetId[0] + i].getAttribute("x")) - 5)
        document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect")[dataSetId[0] + i + 1].setAttribute("x", Number(document.getElementsByTagNameNS('http://www.w3.org/2000/svg', "rect")[dataSetId[0] + i + 1].getAttribute("x")) + 5)
      }
    }
  }
}