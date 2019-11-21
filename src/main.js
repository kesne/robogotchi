import { DisplayService } from './scripts/display-service.js';
import $ from 'jquery';
import './styles.css';
import staticGIF from './assets/static.gif';


$(document).ready(function() {
    $('#face').attr('src', staticGIF);
    $('input#name').on('change', function() {
        new DisplayService($('input#name').val());
        $('#searchbar').fadeIn();
    });
});
