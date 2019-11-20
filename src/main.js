import { Robogotchi } from './../src/robo.js';
import $ from 'jquery';
import './styles.css';
import errorGIF from './error.gif';
import smilingFace from './smilingFace.gif';

const img = new Image();
const img2 = new Image();
img.src = errorGIF;
img2.src = smilingFace;

const updateStats = (robo) => {
    $(`span#energy`).text(robo.energy);
    setInterval( () => {
        $(`span#energy`).text(robo.energy);
    }, 1000);
}

const showFace = async(robo, emotion) => {
    const gifURL = await robo.getEmote(emotion);
    $('#face').attr('src', gifURL);
    setTimeout( () => {
        $('#face').attr('src', smilingFace);
    }, 3000);
    return true;
}

$(document).ready(function() {
    let robo;
    $('input#name').on('change', function() {
        robo = new Robogotchi($('input#name').val());

        $('div#robo').prepend(`<h1>${robo.name}</h1>`);
        $('input#name').remove();
        updateStats(robo);

        $('div#border').attr(`<img id='screen' alt='${robo.name} face'>`);
        showFace(robo, 'hello');


    });
});
