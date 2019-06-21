// let spritesheet;
// let spritedata;


// let animation = [];

// let horses = [];

// function preload() {
//     spritedata = loadJSON('images/spriteData/horse.json');
//     spritesheet = loadImage('images/spriteData/horse.png');
// }

// function windowResized() {
//     let canvasParent = document.getElementById('lead-overlay').clientHeight;
//     resizeCanvas(windowWidth, canvasParent);
// }

// function setup() {
//     let canvasParent = document.getElementById('lead-overlay').clientHeight;
//     const canvas = createCanvas(windowWidth, canvasParent);
//     canvas.parent('lead-overlay');

//     let frames = spritedata.frames;
//     for (let i = 0; i < frames.length; i++) {
//         let pos = frames[i].position;
//         let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
//         animation.push(img);
//     }

//     for (let i = 0; i < 5; i++) {
//         horses[i] = new Sprite(animation, 0, i * 75, random(0.1, 0.4));
//     }
// }

// function draw() {
//     background(0);



//     for (let horse of horses) {
//         translate(0, 0);
//         horse.show();
//         horse.animate();
//     }

//     // image(animation[frameCount % animation.length], 0, 0);
// }

// class Sprite {
//     constructor(animation, x, y, speed) {
//         this.x = x;
//         this.y = y;
//         this.animation = animation;
//         this.w = this.animation[0].width;
//         this.len = this.animation.length;
//         this.speed = speed;
//         this.index = 0;
//     }

//     show() {
//         let index = floor(this.index) % this.len;
//         image(this.animation[index], this.x, this.y);
//     }

//     animate() {
//         this.index += this.speed;
//         this.x += this.speed * 15;

//         if (this.x > width) {
//             this.x = -this.w;
//         }
//     }
// }