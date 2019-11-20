import { Robogotchi } from './../src/robo.js';
import $ from 'jquery';
import './styles.css';

const updateStats = (robo) => {
    setInterval( () => {
        $(`span#energy`).text(robo.energy);
    }, 1000);
}

function test() {
    setTimeout( () => {
        return 123;
    }, 2000);
}

function stringTest(name) {
    setTimeout( () => {
        const greeting = `hello ${name}`;
    }, 2000);
}

$(document).ready(function() {
    let robo;
    $('input#name').on('change', function() {
        robo = new Robogotchi($('input#name').val());

        updateStats(robo);
        $('div#robo').prepend(`<h1>${robo.name}</h1>`);
        $('input#name').remove();

        (async () => {
            const gifURL = await robo.emote('happy');
            console.log(gifURL);
        })();
    });


});
