function Figure(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
};

function Line(x1, y1, x2, y2, color) {
    Figure.call(this, x1, y1, color);
    this.x2 = x2;
    this.y2 = y2;
    this.draw = function(ctx) {
        ctx = ctx.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x2, this.y2);
        ctx.strokeStyle = this.color;
        ctx.stroke();
    };
};

function Circle(x, y, r, color) {
    Figure.call(this, x, y, color);
    this.r = r;
    this.draw = function (ctx) {
        ctx = ctx.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0,2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    };
};

function Rect(x, y, w, h, color) {
    Figure.call(this, x, y, color);
    this.w = w;
    this.h = h;
    this.draw = function (ctx) {
        ctx = ctx.getContext("2d");
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    };
};

function Canvas(canvas) {
    this.add = function (...arr) {
        this.canvas = document.getElementById(canvas);
        for(let i = 0; i < arr.length; i++) {
            arr[i].draw(this.canvas);
        };
    };
};

let drawArea = new Canvas('canvasID');
let line1 = new Line(400, 350, 50, 400, 'gray'); 
let line2 = new Line(400, 380, 50, 430, 'gray'); 
let circle1 = new Circle(80, 140, 50, 'rgba(219, 239, 255, 0.5)'); 
let circle2 = new Circle(120, 210, 90, 'rgba(219, 239, 255, 0.5)'); 
let rect1 = new Rect(420, 225, 100, 200, 'rgba(225, 244, 235, 0.5)'); 
let rect2 = new Rect(445, 205, 180, 90, 'rgba(2241, 233, 237, 0.5)'); 
let rect3 = new Rect(580, 260, 100, 70, 'rgba(250, 210, 138, 0.5)'); 
for (let i = 0, x1 = 0, x2 = 20; x1 < 700; i++, x1 += 20, x2 +=20) {
    if (i % 2) drawArea.add(new Line(x1, 15, x2, 0, 'red'));
    else drawArea.add(new Line(x1, 0, x2, 15, 'red'));
};

drawArea.add(line1, line2, circle1, circle2,rect1, rect2, rect3 );





