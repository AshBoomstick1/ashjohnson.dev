let body = document.getElementsByTagName("body");
let light_dark_button = document.getElementById("light-dark");
body[0].style.colorScheme = "light";

const changeColor = () => {
  if (body[0].style.colorScheme == "light")
  {
    body[0].style.colorScheme = "dark";
    light_dark_button.innerHTML = "Dark";
  }
  else if (body[0].style.colorScheme == "dark")
  {
    body[0].style.colorScheme = "light";
    light_dark_button.innerHTML = "Light";
  }
}

light_dark_button.addEventListener("click", changeColor);
let nav_bar_anchors = document.getElementById("mobile_nav_bar").getElementsByTagName("a");
let mobile_nav_button = document.getElementById("nav_bar_menu_button");
let mobile_nav = document.getElementById("mobile_nav_bar");
let mobile_nav_bar_visable = false;

const mobile_nav_apear = [
 { opacity: "1" }
];

const mobile_nav_disapear = [
 { opacity: "0" }
];

const mobile_nav_timing = {
  duration: 400,
  iterations: 1,
};

const transition_decide = () => {
  if (mobile_nav_bar_visable == false)
  {
    mobile_nav_bar_visable = true;
    mobile_nav.style.display = "grid";
    mobile_nav.animate(mobile_nav_apear, mobile_nav_timing);
  }
  else if (mobile_nav_bar_visable == true)
  {
    mobile_nav_bar_visable = false;
    mobile_nav.style.display = "none";
    mobile_nav.animate(mobile_nav_disapear, mobile_nav_timing);
  }
}

const anchor_clicked = () => {
  mobile_nav_bar_visable = false;
  mobile_nav.style.display = "none";
  mobile_nav.animate(mobile_nav_disapear, mobile_nav_timing);
}

mobile_nav_button.addEventListener("click", transition_decide);
nav_bar_anchors[0].addEventListener("click", anchor_clicked);
nav_bar_anchors[1].addEventListener("click", anchor_clicked);
nav_bar_anchors[2].addEventListener("click", anchor_clicked);