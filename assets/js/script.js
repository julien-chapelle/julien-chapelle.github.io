window.onload = function () {
    canvas = document.getElementById('snake');
    ctx = canvas.getContext('2d');
    document.addEventListener('click', click);
    setInterval(game, 1000 / 15);
}
xv = yv = 0;
// point d'origine
px = py = 10;
// taille d'un cube du canvas (20x20 = 400)
gs = tc = 20;
// premier point rouge
ax = ay = 15;
// Initialisation tableau vide
trail = [];
// Longueur par défaut snake
tail = 5;

function game() {
    px += xv;
    py += yv;
    if (px < 0) {
        px = tc - 1;
    }
    if (px > tc - 1) {
        px = 0;
    }
    if (py < 0) {
        py = tc - 1;
    }
    if (py > tc - 1) {
        py = 0;
    }
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'lime';
    for (var i = 0; i < trail.length; i++) {
        ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
        if (trail[i].x == px && trail[i].y == py) {
            tail = 5;
        }
    }
    trail.push({
        x: px,
        y: py
    });
    while (trail.length > tail) {
        trail.shift();
    }
    if (ax == px && ay == py) {
        tail++;
        ax = Math.floor(Math.random() * tc);
        ay = Math.floor(Math.random() * tc);
    }
    ctx.fillStyle = 'red';
    ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);

    document.getElementById('score').innerHTML = 'Score : ' + (tail - 5);
}

function click(evt) {
    if (evt.target.id == 'btnLeft') {
        xv = -1;
        yv = 0;
    } else if (evt.target.id == 'btnUp') {
        xv = 0;
        yv = -1;
    }
    else if (evt.target.id == 'btnRight') {
        xv = 1;
        yv = 0;
    }
    else if (evt.target.id == 'btnDown') {
        xv = 0;
        yv = 1;
    }
}