let hero_area = document.getElementById("intro");
let svg = document.getElementById("hero_svg");

svg.setAttribute("width", `${hero_area.offsetWidth}`);
svg.setAttribute("height", `${hero_area.offsetHeight - 70}`);
svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

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

const width = hero_area.offsetWidth;
const height = hero_area.offsetHeight - 70;
const max_layer = 5;

const half_side_length = height/Math.tan(Math.PI/3);
const mid_point = (x1, y1, x2, y2) => {
  return [(x1 + x2)/2, (y1 + y2)/2]; //mid_point formula
}

class Point {
  constructor(parent, x, y, layer) {
    this._parent = parent;
    this._x = x;
    this._y = y;
    this._child_left = null;
    this._child_right = null;
    this._layer = layer;
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

  has_child() {
    if (this.move_left != null || this.move_right != null) {
      return true;
    } else {
      return false;
    }
  }

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

  draw_triangle() {
    let a = mid_point(this.x, this.y, this.move_left.x, this.move_left.y);
    let b = mid_point(this.x, this.y, this.move_right.x, this.move_right.y);
    let c = mid_point(this.move_left.x, this.move_left.y, this.move_right.x, this.move_right.y);
    let new_triangle = `<polygon `;
    new_triangle += `points=\"${a[0]},${a[1]} ${b[0]},${b[1]} ${c[0]},${c[1]}\"`;
    new_triangle += `style=\"fill: rgba(255, 237, 104, 1);fill-rule nonzero;\" `;
    new_triangle += ` />`;
    svg.innerHTML += new_triangle;

    new Point(this, a[0], a[1], this.layer + 1).replace_child_left(this, this.move_left);
    new Point(this, b[0], b[1], this.layer + 1).replace_child_right(this, this.move_right);
    new Point(this.move_left, c[0], c[1], this.layer + 1).replace_child_right(this.move_left, null);
    new Point(this.move_right, c[0], c[1], this.layer + 1).replace_child_left(this.move_right, null);
    //need to make tird point a part of thje tree not just calced during draw because that third poitn would be used to calc the next pouint
    //console.log("POINT BEING TRIANGLUATED", this)
  }
};

let new_triangle = `<polygon `;
new_triangle += `points=\"${width / 2},${0} ${width/2 - half_side_length},${height} ${width/2 + half_side_length},${height}\"`;
new_triangle += `style=\"fill:rgba(104, 195, 255, 1);\" `; //#ffeda7, rgba(104, 195, 255, 1)
new_triangle += ` />`;
svg.innerHTML += new_triangle;
let triangle_list = [width/2, 0, false, width/2 - half_side_length, height, false, width/2 + half_side_length, height, false]; //false is if the point has been used, true is available

let root_point = new Point(null, width/2, 0, 0);
root_point.child_left = new Point(root_point, width/2 - half_side_length, height, 0);
root_point.child_right = new Point(root_point, width/2 + half_side_length, height, 0);

let search_array = [root_point];



const traverse_tree = (point) => {
  console.log(point)
  console.log(search_array)

  search_array.shift()

  if (point.layer < max_layer) {
    if (point.move_right.has_child()) {
      search_array.unshift(point.move_right);
    }

    if (point.move_left.has_child()) {
      search_array.unshift(point.move_left);
    }
  }

  point.draw_triangle();
}

for(let i = 1; i < 8; i++)
{
  console.clear()
  search_array = [root_point];

  while (search_array.length > 0)
  {
    traverse_tree(search_array[0]);
  }
}