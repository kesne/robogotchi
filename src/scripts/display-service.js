import $ from 'jquery';
import errorGIF from './../assets/error.gif';
import smileGIF from './../assets/smile.gif';
import { Robogotchi } from './robo';

export class DisplayService {
    constructor(name) {
        this.robo = new Robogotchi(name);

        $('input#searchbar').on('change', function(){
            let searchTerm = $('#searchbar').val();
            let search = this.robo.movieSearch(searchTerm);
            console.log(search);
        });

        $('div#robo').prepend(`<h1>${this.robo.name}</h1>`);
        $('input#name').remove();
        this.updateStats();

        this.showFace('hello');
    }

    updateStats() {
        $(`span#energy`).text(this.robo.energy);
        setInterval( () => {
            $(`span#energy`).text(this.robo.energy);
        }, 1000);
    }

    async showFace(emotion) {
        const gifURL = await this.robo.emote(emotion);
        if (gifURL) {
            $('#face').attr('src', gifURL);
        } else {
            $('#face').attr('src', errorGIF);
        }

        setTimeout(() => {
            $('#face').attr('src', smileGIF);
        }, 3000);
    }
}
