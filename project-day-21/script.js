const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');


fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

function dragStart() {
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible', 0) // Makes invisible the image in the box from which it is drag
}

function dragEnd() {
    this.className = 'fill'; // Adds the class of fill to the element fill
}

function dragOver(e) {
    e.preventDefault(); // Default action: Reset the current drag operation to "none". https://developer.mozilla.org/en-US/docs/Web/API/Document/dragover_event
}

function dragEnter(e) {
    e.preventDefault(); // Default action: Reject immediate user selection as potential target element.  https://developer.mozilla.org/en-US/docs/Web/API/Document/dragenter_event
    this.className += ' hovered';
}

function dragLeave() {
    this.className = 'empty'
}

function dragDrop() {
    this.className = 'empty';
    this.append(fill);
}