import '../styles/index.scss';
import '../styles/side-bar.scss';

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

import $ from 'jquery';

function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}
function goto(page){
    window.location = "/"+page+".html";
}
window.goto = goto;

// DOM is loaded and ready for manipulation here
docReady(function() {
    //SIDE BAR
    var $sideBarItems = $('.side-bar .side-bar-item');

    $sideBarItems.click(function(event) {
        var selectedClass = 'is-side-bar-item-selected';
        $sideBarItems.removeClass(selectedClass);
        $(event.target).addClass(selectedClass);
    });
});