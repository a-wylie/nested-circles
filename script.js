function onDragStart(event) {
  event
    .dataTransfer
    .setData('text/plain', event.target.id);
}
function onDragOver(event) {
  event.preventDefault();
}
function onDrop(event, element) {
  event.preventDefault();
  var data = event.dataTransfer.getData('text');
  element.appendChild(document.getElementById(data));
}
