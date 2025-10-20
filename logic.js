

//dark-light
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


//Mobile Nav Bar
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




//Project Image Downloads
let maze_image = document.getElementById("maze_image");
let minesweeper_image = document.getElementById("minesweeper_image");
let snake_image = document.getElementById("snake_image");
let odyssey_image = document.getElementById("odyssey_image");

let maze_downloads = document.getElementById("maze_downloads");

let download_background = document.getElementById("download_popup");
let access_name = document.getElementById("access_name");

let selected_project = "";

const show_download_page = () => {
  download_background.style.display = "grid";
  switch (selected_project)
  {
    case "maze":
      access_name.innerHTML = "Ways to access Maze";
      maze_downloads.style.display = "block";
      break;
    case "minesweeper":
      break;
    case "snake":
      break;
    case "odyssey":
      break;
  }
}

const hide_lists = () => {
  access_name.innerHTML = "";

  download_background.style.display = "none"
  maze_downloads.style.display = "none";
}

download_background.addEventListener("click", hide_lists)
maze_image.addEventListener("click", () => {selected_project = "maze"; show_download_page()})