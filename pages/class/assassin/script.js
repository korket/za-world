// abilities selector

const ability = document.querySelectorAll('.ability');

const ability_d = document.querySelectorAll('.ability-d');
const button_d = document.querySelector('.button-d');

const ability_q = document.querySelectorAll('.ability-q');
const button_q = document.querySelector('.button-q');

const ability_w = document.querySelectorAll('.ability-w');
const button_w = document.querySelector('.button-w');

const ability_e = document.querySelectorAll('.ability-e');
const button_e = document.querySelector('.button-e');

const ability_r = document.querySelectorAll('.ability-r');
const button_r = document.querySelector('.button-r');

const ability_t = document.querySelectorAll('.ability-t');
const button_t = document.querySelector('.button-t');

const ability_f = document.querySelectorAll('.ability-f');
const button_f = document.querySelector('.button-f');

// abilities functions and event listeners

ability_d[0].style.display = 'flex'; 
ability_d[1].style.display = 'flex';

function hide() {
    for (const abilities of ability) {
        abilities.style.display = 'none';
    };
};

button_d.addEventListener('click', () => {
    hide();
    ability_d[0].style.display = 'flex';
    ability_d[1].style.display = 'flex';
});

button_q.addEventListener('click', () => {
    hide();
    ability_q[0].style.display = 'flex';
    ability_q[1].style.display = 'flex';
});

button_w.addEventListener('click', () => {
    hide();
    ability_w[0].style.display = 'flex';
    ability_w[1].style.display = 'flex';
});

button_e.addEventListener('click', () => {
    hide();
    ability_e[0].style.display = 'flex';
    ability_e[1].style.display = 'flex';
});

button_t.addEventListener('click', () => {
    hide();
    ability_t[0].style.display = 'flex';
    ability_t[1].style.display = 'flex';
})

button_f.addEventListener('click', () => {
    hide();
    ability_f[0].style.display = 'flex';
    ability_f[1].style.display = 'flex';
})