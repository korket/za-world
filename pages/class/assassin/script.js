const ability_d = document.querySelector('.ability-d');
const video_d = document.querySelector('.ability-video-d');
const button_d = document.querySelector('.button-d');

const ability_q = document.querySelector('.ability-q');
const video_q = document.querySelector('.ability-video-q');
const button_q = document.querySelector('.button-q');

const ability_w = document.querySelector('.ability-w');
const video_w = document.querySelector('.ability-video-w');
const button_w = document.querySelector('.button-w');

const ability_e = document.querySelector('.ability-e');
const video_e = document.querySelector('.ability-video-e');
const button_e = document.querySelector('.button-e');

const ability_r = document.querySelector('.ability-r');
const video_r = document.querySelector('.ability-video-r');
const button_r = document.querySelector('.button-r');

const ability_t = document.querySelector('.ability-t');
const video_t = document.querySelector('.ability-video-t');
const button_t = document.querySelector('.button-t');

const ability_f = document.querySelector('.ability-f');
const video_f = document.querySelector('.ability-video-f');
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
    video_d.style.display = 'flex';
    video_q.style.display = 'none';
    video_w.style.display = 'none';
    video_e.style.display = 'none';
    video_r.style.display = 'none';
    video_t.style.display = 'none';
    video_f.style.display = 'none';
}

function showQ() {
    ability_d.style.display = 'none';
    ability_q.style.display = 'flex';
    ability_w.style.display = 'none';
    ability_e.style.display = 'none';
    ability_r.style.display = 'none';
    ability_t.style.display = 'none';
    ability_f.style.display = 'none';
    video_d.style.display = 'none';
    video_q.style.display = 'flex';
    video_w.style.display = 'none';
    video_e.style.display = 'none';
    video_r.style.display = 'none';
    video_t.style.display = 'none';
    video_f.style.display = 'none';
}

function showW() {
    ability_d.style.display = 'none';
    ability_q.style.display = 'none';
    ability_w.style.display = 'flex';
    ability_e.style.display = 'none';
    ability_r.style.display = 'none';
    ability_t.style.display = 'none';
    ability_f.style.display = 'none';
    video_d.style.display = 'none';
    video_q.style.display = 'none';
    video_w.style.display = 'flex';
    video_e.style.display = 'none';
    video_r.style.display = 'none';
    video_t.style.display = 'none';
    video_f.style.display = 'none';
}

function showE() {
    ability_d.style.display = 'none';
    ability_q.style.display = 'none';
    ability_w.style.display = 'none';
    ability_e.style.display = 'flex';
    ability_r.style.display = 'none';
    ability_t.style.display = 'none';
    ability_f.style.display = 'none';
    video_d.style.display = 'none';
    video_q.style.display = 'none';
    video_w.style.display = 'none';
    video_e.style.display = 'flex';
    video_r.style.display = 'none';
    video_t.style.display = 'none';
    video_f.style.display = 'none';
}

function showR() {
    ability_d.style.display = 'none';
    ability_q.style.display = 'none';
    ability_w.style.display = 'none';
    ability_e.style.display = 'none';
    ability_r.style.display = 'flex';
    ability_t.style.display = 'none';
    ability_f.style.display = 'none';
    video_d.style.display = 'none';
    video_q.style.display = 'none';
    video_w.style.display = 'none';
    video_e.style.display = 'none';
    video_r.style.display = 'flex';
    video_t.style.display = 'none';
    video_f.style.display = 'none';
}

function showT() {
    ability_d.style.display = 'none';
    ability_q.style.display = 'none';
    ability_w.style.display = 'none';
    ability_e.style.display = 'none';
    ability_r.style.display = 'none';
    ability_t.style.display = 'flex';
    ability_f.style.display = 'none';
    video_d.style.display = 'none';
    video_q.style.display = 'none';
    video_w.style.display = 'none';
    video_e.style.display = 'none';
    video_r.style.display = 'none';
    video_t.style.display = 'flex';
    video_f.style.display = 'none';
}

function showF() {
    ability_d.style.display = 'none';
    ability_q.style.display = 'none';
    ability_w.style.display = 'none';
    ability_e.style.display = 'none';
    ability_r.style.display = 'none';
    ability_t.style.display = 'none';
    ability_f.style.display = 'flex';
    video_d.style.display = 'none';
    video_q.style.display = 'none';
    video_w.style.display = 'none';
    video_e.style.display = 'none';
    video_r.style.display = 'none';
    video_t.style.display = 'none';
    video_f.style.display = 'flex';
}