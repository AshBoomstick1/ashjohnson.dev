

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


//header animation
document.getElementById("intro").getElementsByTagName("h2")[0].animate(
    [
      {filter: "blur(3px)", opacity: 0},
      {transform: "translate3d(-50px, 0px, 0px)", filter: "blur(2px)", opacity: 0.5, offset: 0.3},
      {filter: "blur(0px)", opacity: 1}
    ],
    {
      duration: 400,
      easing: "ease",
      iterations: 1
    },
  );

//scroll aniamtions

//headers
let h2_1 = document.getElementsByTagName("h2")[1];
let h2_2 = document.getElementsByTagName("h2")[2];

let anim_1_done = false;
let anim_2_done = false;

h2_1.style.opacity = "0";
h2_2.style.opacity = "0";


//languages cards
let lang_1 = document.getElementById("languages").getElementsByClassName("card")[0];
let lang_2 = document.getElementById("languages").getElementsByClassName("card")[1];
let lang_3 = document.getElementById("languages").getElementsByClassName("card")[2];
let lang_4 = document.getElementById("languages").getElementsByClassName("card")[3];

let lang_anim_1_done = false;
let lang_anim_2_done = false;
let lang_anim_3_done = false;
let lang_anim_4_done = false;

lang_1.style.opacity = "0";
lang_2.style.opacity = "0";
lang_3.style.opacity = "0";
lang_4.style.opacity = "0";


//project images
let project_img_1 = document.getElementById("projects").getElementsByTagName("img")[0];
let project_img_2 = document.getElementById("projects").getElementsByTagName("img")[1];
let project_img_3 = document.getElementById("projects").getElementsByTagName("img")[2];
let project_img_4 = document.getElementById("projects").getElementsByTagName("img")[3];

let project_img_anim_1_done = false;
let project_img_anim_2_done = false;
let project_img_anim_3_done = false;
let project_img_anim_4_done = false;

project_img_1.style.opacity = "0";
project_img_2.style.opacity = "0";
project_img_3.style.opacity = "0";
project_img_4.style.opacity = "0";

const isInViewport = (element) => {
  let bounding = element.getBoundingClientRect();
  if (bounding.top >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + (element.offsetHeight / 2)) {
    console.log(element);
    return true;
  } else {
    return false;
  }
}


window.onscroll = (event) => {
  if (isInViewport(h2_1) && !anim_1_done) 
  {
    anim_1_done = true;
    h2_1.animate(
      [
        {transform: "translate3d(-100px, 0, 0);", filter: "blur(3px)", opacity: 0},
        {transform: "translate3d(-50px, 0, 0)", filter: "blur(2px)", opacity: 0, offset: 0.3},
        {filter: "blur(0px)", opacity: 1}
      ],
      {
        duration: 500,
        easing: "ease",
        iterations: 1
      },
    );

    h2_1.style.opacity = "1";
  };

  if (isInViewport(h2_2) && !anim_2_done) 
  {
    anim_2_done = true;
    h2_2.animate(
      [
        {transform: "translate3d(-100px, 0, 0);", filter: "blur(3px)", opacity: 0},
        {transform: "translate3d(-50px, 0, 0)", filter: "blur(2px)", opacity: 0, offset: 0.3},
        {filter: "blur(0px)", opacity: 1}
      ],
      {
        duration: 500,
        easing: "ease",
        iterations: 1
      },
    );

    h2_2.style.opacity = "1";
  };



  if (isInViewport(lang_1) && !lang_anim_1_done) 
  {
    lang_anim_1_done = true;
    lang_1.animate(
      [
        {transform: "translate3d(0, 200px, 0);", filter: "blur(3px)", opacity: 0},
        {transform: "translate3d(0, 100px, 0)", filter: "blur(2px)", opacity: 0, offset: 0.3},
        {filter: "blur(0px)", opacity: 1}
      ],
      {
        duration: 500,
        easing: "ease",
        iterations: 1
      },
    );

    lang_1.style.opacity = "1";
  };

  if (isInViewport(lang_2) && !lang_anim_2_done) 
  {
    lang_anim_2_done = true;
    lang_2.animate(
      [
        {transform: "translate3d(0, 200px, 0);", filter: "blur(3px)", opacity: 0},
        {transform: "translate3d(0, 100px, 0)", filter: "blur(2px)", opacity: 0, offset: 0.3},
        {filter: "blur(0px)", opacity: 1}
      ],
      {
        duration: 500,
        easing: "ease",
        iterations: 1
      },
    );

    lang_2.style.opacity = "1";
  };

  if (isInViewport(lang_3) && !lang_anim_3_done) 
  {
    lang_anim_3_done = true;
    lang_3.animate(
      [
        {transform: "translate3d(0, 200px, 0);", filter: "blur(3px)", opacity: 0},
        {transform: "translate3d(0, 100px, 0)", filter: "blur(2px)", opacity: 0, offset: 0.3},
        {filter: "blur(0px)", opacity: 1}
      ],
      {
        duration: 500,
        easing: "ease",
        iterations: 1
      },
    );

    lang_3.style.opacity = "1";
  };

  if (isInViewport(lang_4) && !lang_anim_4_done) 
  {
    lang_anim_4_done = true;
    lang_4.animate(
      [
        {transform: "translate3d(0, 200px, 0);", filter: "blur(3px)", opacity: 0},
        {transform: "translate3d(0, 100px, 0)", filter: "blur(2px)", opacity: 0, offset: 0.3},
        {filter: "blur(0px)", opacity: 1}
      ],
      {
        duration: 500,
        easing: "ease",
        iterations: 1
      },
    );

    lang_4.style.opacity = "1";
  };

  if (isInViewport(project_img_1) && !project_img_anim_1_done) 
  {
    project_img_anim_1_done = true;
    project_img_1.animate(
      [
        {scale: 0.5, transform: "translate3d(0, 200px, 0);", filter: "blur(3px)", opacity: 0},
        {scale: 0.75, transform: "translate3d(0, 100px, 0)", filter: "blur(2px)", opacity: 0, offset: 0.3},
        {scale: 1, filter: "blur(0px)", opacity: 1}
      ],
      {
        duration: 500,
        easing: "ease",
        iterations: 1
      },
    );

    project_img_1.style.opacity = "1";
  };

  if (isInViewport(project_img_2) && !project_img_anim_2_done) 
  {
    project_img_anim_2_done = true;
    project_img_2.animate(
      [
        {scale: 0.5, transform: "translate3d(0, 200px, 0);", filter: "blur(3px)", opacity: 0},
        {scale: 0.75, transform: "translate3d(0, 100px, 0)", filter: "blur(2px)", opacity: 0, offset: 0.3},
        {scale: 1, filter: "blur(0px)", opacity: 1}
      ],
      {
        duration: 500,
        easing: "ease",
        iterations: 1
      },
    );

    project_img_2.style.opacity = "1";
  };

  if (isInViewport(project_img_3) && !project_img_anim_3_done) 
  {
    project_img_anim_3_done = true;
    project_img_3.animate(
      [
        {scale: 0.5, transform: "translate3d(0, 200px, 0);", filter: "blur(3px)", opacity: 0},
        {scale: 0.75, transform: "translate3d(0, 100px, 0)", filter: "blur(2px)", opacity: 0, offset: 0.3},
        {scale: 1, filter: "blur(0px)", opacity: 1}
      ],
      {
        duration: 500,
        easing: "ease",
        iterations: 1
      },
    );

    project_img_3.style.opacity = "1";
  };

  if (isInViewport(project_img_4) && !project_img_anim_4_done) 
  {
    project_img_anim_4_done = true;
    project_img_4.animate(
      [
        {scale: 0.5, transform: "translate3d(0, 200px, 0);", filter: "blur(3px)", opacity: 0},
        {scale: 0.75, transform: "translate3d(0, 100px, 0)", filter: "blur(2px)", opacity: 0, offset: 0.3},
        {scale: 1, filter: "blur(0px)", opacity: 1}
      ],
      {
        duration: 500,
        easing: "ease",
        iterations: 1
      },
    );

    project_img_4.style.opacity = "1";
  };
}