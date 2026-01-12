import { generate_triangle } from "./modules/triangle.js";
import { graph } from "./modules/graph.js";
import { sort } from "./modules/sorting.js";

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

const hero_list = [generate_triangle, graph];
//pick_hero();
//generate_triangle();
//graph();
//sort();