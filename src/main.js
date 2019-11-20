import { Robogotchi } from './../src/robo.js';
import $ from 'jquery';
import './styles.css';

function updateStats(robo) {
  setInterval( () => {
    $(`span#energy`).text(robo.energy);
    console.log(robo.energy);
  }, 1000);
}

$(document).ready(function() {
  let robo;
  $('input#name').on('change', function() { //'input' can be used in place of change
    robo = new Robogotchi($('input#name').val());
    $('input#name').val('');

    updateStats(robo);
    $('div#robo').prepend(`<h1>${robo.name}</h1>`);
    $('input#name').remove();

    
    let request = new XMLHttpRequest();
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.giphy}&tag=happy&rating=G`;
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        prepareImage(response);
      }
    }

    request.open("GET", url, true);
    request.send();


    const prepareImage = function(response) {
      const giphy = new Image();
      giphy.src = response.data.images.original.url;
      giphy.alt = 'alt';
      $('div#screen').append(giphy);
    }
  });


});
