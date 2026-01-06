const tableContents = document.getElementById("tableOfContents")
const tableButton = document.getElementById("mobileTableOfContents");

const tableSwitch = () => {
  if (tableContents.style.display == "none")
  {
    tableContents.style.display = "block";
    
    const appear = tableContents.animate([
          {filter: "blur(4px)", transform: "translate3d(0px, -50px, 0px)", opacity: 0},
          {filter: "blur(2px)", transform: "translate3d(0px, 0px, 0px)", opacity: 0.5},
          {filter: "blur(0px)", transform: "translate3d(0px, 0px, 0px)", opacity: 1}
      ],
      {
          duration: 350,
          easing: "ease",
          iterations: 1
      },
    );
  }
  else
  {     
    const disappear = tableContents.animate([
          {filter: "blur(0px)", transform: "translate3d(0px, -10px, 0px)", opacity: 1},
          {filter: "blur(2px)", transform: "translate3d(0px, -30px, 0px)", opacity: 0.5},
          {filter: "blur(4px)", transform: "translate3d(0px, -50px, 0px)", opacity: 0}
      ],
      {
          duration: 350,
          easing: "ease",
          iterations: 1
      },
    );

    disappear.onfinish = () => {
        tableContents.style.display = "none";
    }
  }
}

const fillTable = () => {
  const sections = document.getElementsByTagName("h2");
  const tables = document.getElementsByClassName("tableOfContentsList");

  for (let i = 0; i < sections.length; i++)
  {
    let item = document.createElement("li");
    let anchor = document.createElement("a");

    anchor.innerHTML = sections[i].innerHTML;
    anchor.href = `#${sections[i].id}`;

    anchor.addEventListener("click", () => {
      tableContents.style.display = "none";
    })

    item.appendChild(anchor);
    for (let j = 0; j < tables.length; j++)
    {
      tables[j].appendChild(item);
    }
  }
}

tableButton.addEventListener("click", tableSwitch);
fillTable()