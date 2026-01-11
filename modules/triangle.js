export let svg;
let search_array;
const max_layer = 8; //8 takes long but is good depth
let hero_area = document.getElementById("intro");

const animate_triangle = (svg) => {
  svg.animate(
    [
      {transform: "rotate(0)"},
      {transform: "rotate(360deg)"},
    ],
    {
      duration: 20000, //20000
      easing: "linear",
      iterations: Infinity
    },
  );

  svg.animate(
    [
      {scale: 1},
      {scale: 1},
    ],
    {
      duration: 0, //20000
      easing: "linear",
      iterations: Infinity
    },
  );


  let scale = 1;
  (function loop() {
    setTimeout(() => {
      scale *= 1.0001
      let children = svg.children;
      //document.getElementById("hero_svg").style.left = `${(width * scale * -1)/2 + width/2}px`;
      //document.getElementById("hero_svg").style.top = `${(height * scale * -1)/2 + height/2}px`;
      for (let i = 0; i < children.length; i++)
      {
        let child = children[i];
        //children[i].setAttribute("transform", `scale(${scale * 1})`);
        //children[i].points[0].x -= (scale)/2;
        //children[i].points[0].y -= (scale)/2;
        //children[i].points[1].x -= (scale)/2;
        //children[i].points[1].y -= (scale)/2;
        //children[i].points[2].x -= (scale)/2;
        //children[i].points[2].y -= (scale)/2;
      }
      loop();
    }, 10);
  })();
}

//finds the midpoint between two points on the triangle
const mid_point = (x1, y1, x2, y2) => {
  return [(x1 + x2)/2, (y1 + y2)/2]; //mid_point formula
}

//point in the tree
export class Point {
  constructor(parent, x, y, layer) {
    this._parent = parent;
    this._x = x;
    this._y = y;
    this._child_left = null;
    this._child_right = null;
    this._layer = layer; //the layer is the layer of iteration, or which iteration through the triangle, this point was made
  }

  set child_left(point) {
    this._child_left = point;
  }

  set child_right(point) {
    this._child_right = point;
  }

  set parent(parent) {
    this._parent = parent;
  }

  set layer(layer) {
    this._layer = layer;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  get move_up() {
    return this._parent;
  }

  get move_left() {
    return this._child_left;
  }

  get move_right() {
    return this._child_right;
  }

  get layer() {
    return this._layer;
  }

  //checks if the point has children
  has_child() {
    if (this.move_left != null || this.move_right != null) {
      return true;
    } else {
      return false;
    }
  }

  //injects this point as new child where one already is; this replacede point becomes the child of the current point
  replace_child_left(parent, child) {
    parent.child_left = this;
    this.parent = parent;

    if (child != null) {
      child.parent = this;
      this.child_left = child;
    }
  }

  replace_child_right(parent, child) {
    parent.child_right = this;
    this.parent = parent;

    if (child != null) {
      child.parent = this;
      this.child_right = child;
    }
  }

  //adds the new triangle to the svg as well as creates and injects the new points for the next layer
  draw_triangle() {
    const left = this.move_left;
    const right = this.move_right;

    let a = mid_point(this.x, this.y, left.x, left.y);
    let b = mid_point(this.x, this.y, right.x, right.y);
    let c = mid_point(left.x, left.y, right.x, right.y);
    svg.innerHTML += `<polygon points=\"${a[0]},${a[1]} ${b[0]},${b[1]} ${c[0]},${c[1]}\" style=\"fill: rgba(255, 237, 104, 1);fill-rule nonzero;\"/>`; //rgba(255, 237, 104, 1), rgba(104, 207, 255, 1)

    new Point(this, a[0], a[1], this.layer + 1).replace_child_left(this, this.move_left);
    new Point(this, b[0], b[1], this.layer + 1).replace_child_right(this, this.move_right);
    new Point(left, c[0], c[1], this.layer + 1).replace_child_right(this.move_left, null);
    //new Point(right, c[0], c[1], this.layer + 1).replace_child_left(this.move_right, null);
    this.move_left.move_right.replace_child_left(this.move_right, null); //replacs the commented line above, this line uses the old point as a child for two different parents that have a child on the same coords.
  }
};

//sets from constants about the triangle
const width = hero_area.offsetWidth;
const height = hero_area.offsetHeight - 70;
const half_side_length = height/Math.tan(Math.PI/3);

let root_point = new Point(null, width/2, 0, 0);

//moves down the tree, generrating new triangles and dealing with the search array in this depth-first-search style algorithm
const traverse_tree = (point) => {
  search_array.shift()

  const left = point.move_left;
  const right = point.move_right;
  if (point.layer < max_layer) {
    if (right.move_left != null || right.move_right != null) {
      search_array.unshift(point.move_right);
    }

    if (left.move_left != null || left.move_right != null) {
      search_array.unshift(point.move_left);
    }
  }

  point.draw_triangle();
}

//generates a layer of the triangle
function generate_layer(delay, i) {
  return new Promise((resolve) => {
    //imeouts are for preformance without optimization
    setTimeout(() => {
      if (i < 8) {
        search_array = [root_point];
        while (search_array.length > 0)
        {
          traverse_tree(search_array[0]);
        }
        resolve()
      }
      else {
        search_array = [root_point];
        while (search_array.length > 0)
        {
          setTimeout(() => {
            traverse_tree(search_array[0]);
          }, delay);
        }
        resolve()
      }
    }, delay)
  });
}

//generates the whole triangle
export async function generate_triangle() {
  svg = document.getElementById("hero_svg");

  svg.setAttribute("width", `${hero_area.offsetWidth}`);
  svg.setAttribute("height", `${hero_area.offsetHeight - 70}`);
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

  //adds the triangle that is then subsequently subtracted from
  svg.innerHTML += `<polygon points=\"${width / 2},${0} ${width/2 - half_side_length},${height} ${width/2 + half_side_length},${height}\" style=\"fill: #ffde4cff\" />`; //#ffeda7, rgba(104, 195, 255, 1)

  root_point.child_left = new Point(root_point, width/2 - half_side_length, height, 0);
  root_point.child_right = new Point(root_point, width/2 + half_side_length, height, 0);

  animate_triangle(svg);

  //runs the generate layer function for every layer desired
  for(let i = 0; i < max_layer; i++)
  {
    if (i < 8) {
      await generate_layer(max_layer, i);
    }
    else {
      await generate_layer(max_layer * 100, i);
    }
  }
}