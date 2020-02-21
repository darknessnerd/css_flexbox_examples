import '../styles/index.scss';

import '../styles/panel.scss';
import '../styles/stepper-input.scss';
import '../styles/tabs.scss';
import '../styles/nav-bar.scss';
import '../styles/form-footer.scss';
import '../styles/side-bar.scss';
import '../styles/centered-prompt.scss';
import '../styles/centered-icon.scss';
import '../styles/card.scss';
import '../styles/card-group.scss';
import  '../styles/post.scss';
import  '../styles/feature-list-item.scss';
import  '../styles/photo.scss';

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

import $ from 'jquery';


//STEPPER INPUT
var $stepperInput = $('.stepper-input-component input');

function incrementStepperInput(amount) {
    $stepperInput.val((parseInt($stepperInput.val()) || 0) + amount);
}

var stepperInputDecrement = $('.stepper-input-component button')[0];
$(stepperInputDecrement).click(() => {
    incrementStepperInput(-1);
});

var stepperInputIncrement = $('.stepper-input-component button')[1];
$(stepperInputIncrement).click(() => {
    incrementStepperInput(1);
});

//TABS
var $tabs = $('.tabs .tab');
$tabs.click(function(event) {
    var selectedClass = 'is-tab-selected';
    $tabs.removeClass(selectedClass);
    $(event.target).addClass(selectedClass);
});

//NAV BAR
var $siteHeaderItems = $('.navbar .navbar-item');

$siteHeaderItems.click((event) => {
    var selectedClass = 'is-navbar-item-selected';
    $siteHeaderItems.removeClass(selectedClass);
    $(event.target).addClass(selectedClass);
});

//SIDE BAR
var $sideBarItems = $('.side-bar .side-bar-item');

$sideBarItems.click(function(event) {
    var selectedClass = 'is-side-bar-item-selected';
    $sideBarItems.removeClass(selectedClass);
    $(event.target).addClass(selectedClass);
});