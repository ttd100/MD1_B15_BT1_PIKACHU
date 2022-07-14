const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;
canvas.style.border = '3px solid black';


class Hero {
    constructor(image, x, y) {
        this.image = image;
        this.x = x;
        this.y = y;
    }

    draw() {
        c.clearRect(0, 0, canvas.width, canvas.height)
        c.drawImage(this.image, this.x, this.y)
        this.move();
    }

    move() {
        if (this.y < 0 && this.x + this.image.width <= canvas.width) {
            this.moveRight();
        } else if (this.x + this.image.width > canvas.width && this.y + this.image.height <= canvas.height) {
            this.moveDown();
        } else if (this.y + this.image.height > canvas.height && this.x >= 0) {
            this.moveLeft();
        } else if (this.x < 0 && this.y >= 0) {
            this.moveUp();
        }

    }

    moveRight() {
        this.x += 5;
    }

    moveLeft() {
        this.x -= 5;
    }

    moveUp() {
        this.y -= 5;
    }

    moveDown() {
        this.y += 5;
    }

}

const img = new Image();
img.src = 'img/img.png';

const hero = new Hero(img, 0, -1);

animate();

function animate() {
    hero.draw();
    requestAnimationFrame(animate);
}