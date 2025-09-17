const categoriesEl = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach(item => {
    const titles = item.querySelector("h2").textContent
    const listItems = item.querySelectorAll("li").length;

    console.log(`Category: ${titles}`);
    console.log(`Elements: ${listItems}`);
});
