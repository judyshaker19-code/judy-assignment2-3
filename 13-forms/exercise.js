
/**
 * Reads what is currently typed into the two boxes.
 */
export function readForm() {
  const name = document.querySelector("#name").value.trim();
  const price = Number(document.querySelector("#price").value);

  return { name, price };
}

/**
 * Empties both boxes.
 */
export function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#price").value = "";
}

/**
 * Draws the list from an array of items, replacing whatever was there before.
 */
export function renderList(items) {
  const list = document.querySelector("#list");

  // Remove all existing cards first.
  list.innerHTML = "";

  // Create a card for every item.
  items.forEach(item => {
    const card = document.createElement("li");
    card.classList.add("card");

    const heading = document.createElement("h3");
    heading.textContent = item.name;

    const priceParagraph = document.createElement("p");
    priceParagraph.classList.add("price");
    priceParagraph.textContent = `${item.price} EGP`;

    card.append(heading, priceParagraph);
    list.append(card);
  });
}

/**
 * Connects the form submission to the page.
 */
export function wireForm() {
  const form = document.querySelector("#product-form");
  const error = document.querySelector("#error");

  // This array stores our products.
  const items = [];

  form.addEventListener("submit", event => {
    // Prevent the browser from reloading the page.
    event.preventDefault();

    const { name, price } = readForm();

    // Validate the product name.
    if (name === "") {
      error.textContent = "Give the product a name.";
      return;
    }

    // Validate the product price.
    if (
      document.querySelector("#price").value.trim() === "" ||
      !Number.isFinite(price) ||
      price <= 0
    ) {
      error.textContent = "Give the product a price.";
      return;
    }

    // The form is valid.
    error.textContent = "";

    // Save the product, redraw the list, and clear the form.
    items.push({ name, price });
    renderList(items);
    clearForm();
  });
}
