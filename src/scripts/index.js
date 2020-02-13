import '../styles/index.scss';
import '../styles/panel.scss';
import $ from 'jquery';



$(document).ready(function(){
    // Highlight elements with class mark
    console.log($(".panel"));
});
let index = 0;


for(let i = 0; i < 5 ; ++i){
    index= i;

    let panel = `

        <div class="panel-header">
          <span class="child-number">${index}</span>
          <span >✖</span>
        </div>
        <div class="panel-content">
          order
          <input type="number">

          flex-grow
          <input type="number">

          flex-shrink
          <input type="number" >

          flex-basis
          <input type="text" >

          align-self
          <select>
            <option>auto</option>
            <option>flex-start</option>
            <option>flex-end</option>
            <option>center</option>
            <option>baseline</option>
            <option>stretch</option>
          </select>

        </div>
    `;
    let el = document.createElement("div");
    el.className = "panel";
    el.draggable = true;
    el.innerHTML = panel;
    document.querySelector(".content").append(el);
}

for(let i = 0; i < 40 ; ++i){

    let el = document.createElement("div");
    el.className = "panel";
    el.draggable = true;
    document.querySelector(".content").append(el);
}

/**
 * Listening for Dragging Events
 There are a number of different events to attach to for monitoring the entire drag and drop process:

 dragstart
 drag
 dragenter
 dragleave
 dragover
 drop
 dragend
 To handle the DnD flow, we need the notion of a source element (where the drag originates), the data payload (what we're trying to drop), and a target (an area to catch the drop). The source element can be an image, list, link, file object, block of HTML...you name it. The target is the drop zone (or set of drop zones) that accepts the data the user is trying to drop. Keep in mind that not all elements can be targets (e.g. images).

 1. Starting a Drag

 Once you have draggable="true" attributes defined on your content, attach dragstart event handlers to kick off the DnD sequence for each column.

 This code will set the column's opacity to 40% when the user begins dragging it:
 Since the dragstart event's target is our source element, setting this.style.opacity to 40% gives the user visual feedback that the element is the current selection being moved. One thing that we still need to do is return the columns opacity to 100% once the drag is done. An obvious place to handle that is the dragend event. More on this later.
 */

let cols = document.querySelectorAll('.content .panel');
var dragSrcEl = null;
function handleDragStart(e) {
    console.log("handleDragStart" + JSON.stringify(e));
    this.style.opacity = '0.4';  // this / e.target is the source node.
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault(); // Necessary. Allows us to drop.
    }
    e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
    return false;
}

function handleDragEnter(e) {
    console.log("handleDragEnter" + JSON.stringify(e));
    // this / e.target is the current hover target.
    this.classList.add('over');
}

function handleDragLeave(e) {
    console.log("handleDragLeave" + JSON.stringify(e));
    this.classList.remove('over');
    // this / e.target is previous target element.
}
function handleDrop(e) {
    console.log("handleDrop" + JSON.stringify(e));
    // this / e.target is current target element.

    if (e.stopPropagation) {
        e.stopPropagation(); // stops the browser from redirecting.
    }
    // Don't do anything if dropping the same column we're dragging.
    if (dragSrcEl != this) {
        // Set the source column's HTML to the HTML of the column we dropped on.
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }
    return false;
}

function handleDragEnd(e) {
    console.log("handleDragEnd" + JSON.stringify(e));
    // this/e.target is the source node.
    this.style.opacity = '1';  // this / e.target is the source node.
    [].forEach.call(cols, function (col) {
        col.classList.remove('over');
    });
}


[].forEach.call(cols, function(col) {
    col.addEventListener('dragstart', handleDragStart, false);
    col.addEventListener('dragenter', handleDragEnter, false);
    col.addEventListener('dragover', handleDragOver, false);
    col.addEventListener('dragleave', handleDragLeave, false);
    col.addEventListener('drop', handleDrop, false);
    col.addEventListener('dragend', handleDragEnd, false);
});

/**
 dragenter, dragover, and dragleave event handlers can be used to provide additional visual cues during the drag process. For example, when a column is hovered over during a drag, its border could become dashed. This will let users know the columns are also drop targets.
 There are a couple of points worth covering in this code:

 The this/e.target changes for each type of event, depending on where we are in the DnD event model.
 In the case of dragging something like a link, we need to prevent the browser's default behavior, which is to navigate to that link. To do this, call e.preventDefault() in the dragover event. Another good practice is to return false in that same handler. Browsers are somewhat inconsistent about needing these, but they don't hurt to add.
 dragenter is used to toggle the 'over' class instead of the dragover. If we were to use dragover, our CSS class would be toggled many times as the event dragover continued to fire on a column hover. Ultimately, that would cause the browser's renderer to do a large amount of unnecessary work. Keeping redraws to a minimum is always a good idea.
 **/