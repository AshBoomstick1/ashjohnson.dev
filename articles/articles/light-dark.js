let body = document.getElementsByTagName("body");
let light_dark_button = document.getElementById("light-dark");
let arrows = document.getElementsByClassName("imageViewer");
body[0].style.colorScheme = "light";

const changeColor = () => {
  if (body[0].style.colorScheme == "light")
  {
    body[0].style.colorScheme = "dark";
    
    const turn_dark = light_dark_button.animate([
            {filter: "blur(1px)", transform: "rotate(0)"},
            {filter: "blur(2px)",transform: "translate3d(0px, -20px, 0px)", transform: "rotate(360deg)"},
            {filter: "blur(4px)", transform: "rotate(1400deg)"}
        ],
        {
            duration: 500,
            easing: "ease-in",
            iterations: 1
        },
    );

    turn_dark.onfinish = () => {
        light_dark_button.src = "./images/light.svg";
    }

    for (let i = 0; i < arrows.length; i++) {
        arrows[i].src = "./images/arrow_dark.svg";
    }
  }
  else if (body[0].style.colorScheme == "dark")
  {
    body[0].style.colorScheme = "light";
        
    const turn_light = light_dark_button.animate([
            {filter: "blur(1px)", transform: "rotate(0)"},
            {filter: "blur(2px)",transform: "translate3d(0px, -20px, 0px)", transform: "rotate(360deg)"},
            {filter: "blur(0px)", transform: "rotate(720deg)"}
        ],
        {
            duration: 500,
            easing: "ease-in",
            iterations: 1
        },
    );

    turn_light.onfinish = () => {
        light_dark_button.src = "./images/dark.svg";
    }

    for (let i = 0; i < arrows.length; i++) {
        arrows[i].src = "./images/arrow_light.svg";
    }
  }
}

light_dark_button.addEventListener("click", changeColor);