const items = document.querySelectorAll(".accordian-item");

console.log('items:', items);

items.forEach((item) => item.addEventListener("click", () => {
    item.classList.toggle('active');
}));