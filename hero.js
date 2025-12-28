import { generate_triangle } from "./modules/triangle.js";
import { stripes } from "./modules/stripes.js";
import { graph } from "./modules/graph.js";

let hero_area = document.getElementById("intro");

//picks a hero page at random
const pick_hero = () => {
  const rand = Math.floor(Math.random() * hero_list.length);
  switch (rand) {
    case 0:
      hero_list[0]();
      break;
    case 1:
      hero_list[1]();
      break;
  }
}

const hero_list = [generate_triangle, stripes];
//pick_hero();
//stripes();
generate_triangle();
//graph();