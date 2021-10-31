class ChaiBeer {
    constructor() {
        this.x = 150;
        this.y = 0;
        this.speed = 4; //tốc độ ban đầu
    }

    init() {
        let positions = [78, 178, 278, 437];// tọa độ x xuất hiện bia
        this.x = positions[this.getRandomInt(0, 3)]; //lấy trong mảng position phần tử từ 0 đến 3
    }

    getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;//tạo hàm lấy số ngẫu nhiên
    }


    update() {
        if (this.y <= 380) {
            this.y += (3 + this.speed);
        }
        this.checkInThungBeer();
    }

    checkInThungBeer() {

        if (this.y + 50 >= 430) {
            if (
                (this.x > thungBeer.x) &&
                (this.x < (thungBeer.x + thungBeer.width))
            ) {
                this.y = 0;
                score += 1;
                this.speed += 2;
                if (score > 10 && score % 5 === 0) {
                    this.speed = 10
                }
                soundGetScore = new Audio('sound/ghidiem.wav')
                soundGetScore.play()
                this.init();
            } else {
                 this.y = 0;
                nhacNen.pause();

                soundEndGame = new Audio('sound/laugh.wav')
                soundEndGame.play()
                alert('game over');
                getName();
                getPoint();
                score = 0;
                this.speed = 0;
                drawGameOver();
                soundRestart.pause();
                // clearSky();
                // clearInterval(timerId);

            }
        }

    }

    render(canvas) {
        let ctx = canvas.getContext('2d');
        ctx.drawImage(beerBottleImg, this.x, this.y, 30, 100);
    }

}