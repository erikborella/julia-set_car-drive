"use strict";

const canvas = document.getElementById("tela");
const ctx = canvas.getContext("2d");

let x = 10, y = 10, larg = 10, alt = 10;

const teclas = [];
let ang = 0;

const width = canvas.width;
const height = canvas.height;

const maxIterations = 30;

function drawJuliaSet(cReal, cImaginary) {
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            const zx = 1.5 * (x - width / 2) / (0.5 * width);
            const zy = (y - height / 2) / (0.5 * height);
            let iteration = 0;
            let x0 = zx;
            let y0 = zy;

            while (iteration < maxIterations && x0 * x0 + y0 * y0 <= 4) {
                const xtemp = x0 * x0 - y0 * y0 + cReal;
                y0 = 2 * x0 * y0 + cImaginary;
                x0 = xtemp;
                iteration++;
            }

            const brightness = (iteration / maxIterations) * 255;
            const color = `rgb(${brightness}, ${brightness}, ${brightness})`;

            ctx.fillStyle = color;
            ctx.fillRect(x, y, 1, 1);
        }
    }
}

function desenhar() {
    ctx.clearRect(0, 0, width, height);
    const cReal = (x - width / 2) / width;
    const cI = (y - height / 2) / height;
    drawJuliaSet(cReal, cI);
    processaTeclas();
    ctx.save();
    ctx.translate(x, y);
	ctx.rotate(ang);
	//Carro
    ctx.fillStyle = "rgb(255, 0, 0)";
	ctx.fillRect(-larg / 2, -alt / 2, larg, alt);
	//Farol esq
	ctx.fillStyle = "rgb(255, 255, 0)";
	ctx.fillRect(2, -5, 3, 3);

	//Farol dir
	ctx.fillStyle = "rgb(255, 255, 0)";
	ctx.fillRect(2, 1, 3, 3);


    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.restore();
    requestAnimationFrame(desenhar);
}

function processaTeclas() {
    const cosAng = Math.cos(ang);
    const sinAng = Math.sin(ang);
    
    if (teclas[39]) {
        ang += Math.PI / 90 * 4;
    }
    if (teclas[37]) {
        ang -= Math.PI / 90 * 4;
    }
    if (teclas[38]) {
        y += 4 * sinAng;
        x += 4 * cosAng;
    }
    if (teclas[40]) {
        y -= 4 * sinAng;
        x -= 4 * cosAng;
    }
}

document.addEventListener("keydown", (evt) => {
    teclas[evt.keyCode] = true;
});

document.addEventListener("keyup", (evt) => {
    teclas[evt.keyCode] = false;
});

requestAnimationFrame(desenhar);
