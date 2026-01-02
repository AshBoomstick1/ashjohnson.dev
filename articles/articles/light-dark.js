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
            {filter: "blur(2px)", transform: "rotate(360deg)"},
            {filter: "blur(4px)", transform: "rotate(1400deg)"}
        ],
        {
            duration: 500,
            easing: "cubic-bezier(.6,-0.02,1,.26)",
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
    light_dark_button.src = "./images/light2.svg";
        
    const turn_light = light_dark_button.animate([
            {filter: "blur(0px)", transform: "rotate(0)"},
            {filter: "blur(3px)"},
            {filter: "blur(5px)", transform: "rotate(720deg)"}
        ],
        {
            duration: 500,
            easing: "cubic-bezier(.6,-0.02,1,.26)",
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