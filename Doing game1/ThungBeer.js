class ThungBeer {
    constructor(width, height) {
        this.x = 100;
        this.y = 470;
        this.width = width;
        this.height = height;
    }

    init(canvas) {
        canvas.addEventListener('mousemove', function (event) {
            processMouseMove(event);
        }
        )

        function processMouseMove(event) {
            thungBeer.x = event.clientX - 50;
        }
    }
    render(canvas) {
        let ctx = canvas.getContext('2d');
        ctx.drawImage(thungBeerImg, this.x, this.y, this.width, this.height)
    }
}
