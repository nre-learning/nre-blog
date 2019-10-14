const nestedLists = document.querySelectorAll('.link-list li > .link-list');

function toggleMenu(list) {
  list.classList.toggle('expanded');
  list.previousElementSibling.classList.toggle('rotated');
}

nestedLists.forEach((list) => {
  const arrow = list.previousElementSibling;
  const link = arrow.previousElementSibling;

  arrow.addEventListener("click", () => toggleMenu(list));
  link.addEventListener("click", (ev) => {
    ev.preventDefault();
    toggleMenu(list);
  });
});