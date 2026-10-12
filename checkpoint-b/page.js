import { items } from "./items.js";

/**
 * Draws the items into the list, replacing whatever was there.
 */
export function renderItems(list) {
  const element = document.querySelector("#list");

  element.innerHTML = "";

  list.forEach(item => {
    const li = document.createElement("li");
    li.classList.add("goods-item");
    li.textContent = `${item.name} - ${item.price} EGP`;

    element.append(li);
  });
}

/**
 * Returns only items priced under 100 EGP.
 */
export function matching() {
  return items.filter(item => item.price < 100);
}

/**
 * Sets up the page and the Show some button.
 */
export function start() {
  renderItems(items);

  document.querySelector("#show-some").addEventListener("click", () => {
    renderItems(matching());
  });
}

if (!import.meta.env?.VITEST && !import.meta.env?.MODE?.includes("test")) {
  start();
}