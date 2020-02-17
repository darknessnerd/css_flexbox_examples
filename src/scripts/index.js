import '../styles/index.scss';
import '../styles/panel.scss';
import '../styles/stepper-input.scss';
import '../styles/tabs.scss';
import '../styles/nav-bar.scss';

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
    var selectedClass = 'is-site-header-item-selected';
    $siteHeaderItems.removeClass(selectedClass);
    $(event.target).addClass(selectedClass);
});