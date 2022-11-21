const ability_d = document.querySelector('.ability-d');
const gif_d = document.querySelector('.abilities-gif-d');
const button_d = document.querySelector('.button-d');

const ability_q = document.querySelector('.ability-q');
const gif_q = document.querySelector('.abilities-gif-q');
const button_q = document.querySelector('.button-q');

const ability_w = document.querySelector('.ability-w');
const gif_w = document.querySelector('.abilities-gif-w');
const button_w = document.querySelector('.button-w');

const ability_e = document.querySelector('.ability-e');
const gif_e = document.querySelector('.abilities-gif-e');
const button_e = document.querySelector('.button-e');

const ability_r = document.querySelector('.ability-r');
const gif_r = document.querySelector('.abilities-gif-r');
const button_r = document.querySelector('.button-r');

const ability_t = document.querySelector('.ability-t');
const gif_t = document.querySelector('.abilities-gif-t');
const button_t = document.querySelector('.button-t');

const ability_f = document.querySelector('.ability-f');
const gif_f = document.querySelector('.abilities-gif-f');
const button_f = document.querySelector('.button-f');

button_d.addEventListener('click', showD);
button_q.addEventListener('click', showQ);
button_w.addEventListener('click', showW);
button_e.addEventListener('click', showE);
button_r.addEventListener('click', showR);
button_t.addEventListener('click', showT);
button_f.addEventListener('click', showF);

function showD() {
    ability_d.style.display = 'flex';
    ability_q.style.display = 'none';
    ability_w.style.display = 'none';
    ability_e.style.display = 'none';
    ability_r.style.display = 'none';
    ability_t.style.display = 'none';
    ability_f.style.display = 'none';
    gif_d.style.display = 'flex';
    gif_q.style.display = 'none';
    gif_w.style.display = 'none';
    gif_e.style.display = 'none';
    gif_r.style.display = 'none';
    gif_t.style.display = 'none';
    gif_f.style.display = 'none';
}

function showQ() {
    ability_d.style.display = 'none';
    ability_q.style.display = 'flex';
    ability_w.style.display = 'none';
    ability_e.style.display = 'none';
    ability_r.style.display = 'none';
    ability_t.style.display = 'none';
    ability_f.style.display = 'none';
    gif_d.style.display = 'none';
    gif_q.style.display = 'flex';
    gif_w.style.display = 'none';
    gif_e.style.display = 'none';
    gif_r.style.display = 'none';
    gif_t.style.display = 'none';
    gif_f.style.display = 'none';
}

function showW() {
    ability_d.style.display = 'none';
    ability_q.style.display = 'none';
    ability_w.style.display = 'flex';
    ability_e.style.display = 'none';
    ability_r.style.display = 'none';
    ability_t.style.display = 'none';
    ability_f.style.display = 'none';
    gif_d.style.display = 'none';
    gif_q.style.display = 'none';
    gif_w.style.display = 'flex';
    gif_e.style.display = 'none';
    gif_r.style.display = 'none';
    gif_t.style.display = 'none';
    gif_f.style.display = 'none';
}

function showE() {
    ability_d.style.display = 'none';
    ability_q.style.display = 'none';
    ability_w.style.display = 'none';
    ability_e.style.display = 'flex';
    ability_r.style.display = 'none';
    ability_t.style.display = 'none';
    ability_f.style.display = 'none';
    gif_d.style.display = 'none';
    gif_q.style.display = 'none';
    gif_w.style.display = 'none';
    gif_e.style.display = 'flex';
    gif_r.style.display = 'none';
    gif_t.style.display = 'none';
    gif_f.style.display = 'none';
}

function showR() {
    ability_d.style.display = 'none';
    ability_q.style.display = 'none';
    ability_w.style.display = 'none';
    ability_e.style.display = 'none';
    ability_r.style.display = 'flex';
    ability_t.style.display = 'none';
    ability_f.style.display = 'none';
    gif_d.style.display = 'none';
    gif_q.style.display = 'none';
    gif_w.style.display = 'none';
    gif_e.style.display = 'none';
    gif_r.style.display = 'flex';
    gif_t.style.display = 'none';
    gif_f.style.display = 'none';
}

function showT() {
    ability_d.style.display = 'none';
    ability_q.style.display = 'none';
    ability_w.style.display = 'none';
    ability_e.style.display = 'none';
    ability_r.style.display = 'none';
    ability_t.style.display = 'flex';
    ability_f.style.display = 'none';
    gif_d.style.display = 'none';
    gif_q.style.display = 'none';
    gif_w.style.display = 'none';
    gif_e.style.display = 'none';
    gif_r.style.display = 'none';
    gif_t.style.display = 'flex';
    gif_f.style.display = 'none';
}

function showF() {
    ability_d.style.display = 'none';
    ability_q.style.display = 'none';
    ability_w.style.display = 'none';
    ability_e.style.display = 'none';
    ability_r.style.display = 'none';
    ability_t.style.display = 'none';
    ability_f.style.display = 'flex';
    gif_d.style.display = 'none';
    gif_q.style.display = 'none';
    gif_w.style.display = 'none';
    gif_e.style.display = 'none';
    gif_r.style.display = 'none';
    gif_t.style.display = 'none';
    gif_f.style.display = 'flex';
}