const draggables = document.querySelectorAll('.dragme');
const containers = document.querySelectorAll('.container');

draggables.forEach(dragit => {
  dragit.addEventListener('touchstart', () => {
    dragit.classList.add('dragging');
  });
  dragit.addEventListener('touchend', () => {
    dragit.classList.remove('dragging');
  });
    dragit.addEventListener('dragstart', () => {
    dragit.classList.add('dragging');
  });
  dragit.addEventListener('dragend', () => {
    dragit.classList.remove('dragging');
  });
});

containers.forEach(container => {
  container.addEventListener('dragover', e => {
    e.preventDefault();
   /* const afterElement = getDragAfterElement(container, e.clientY)*/
    const dragged = document.querySelector('.dragging');
    container.appendChild(dragged);
  });
});