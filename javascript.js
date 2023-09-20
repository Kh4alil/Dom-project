// script.js
document.addEventListener("DOMContentLoaded", function () {
    const itemList = document.getElementById("item-list");
    const totalPrice = document.getElementById("total-price");

    // Function to update the total price
    function updateTotal() {
        let total = 0;
        const items = itemList.querySelectorAll("li");
        items.forEach(function (item) {
            const quantity = parseInt(item.querySelector(".item-quantity").textContent);
            const price = parseFloat(item.querySelector(".item-price").textContent.replace("$", ""));
            total += quantity * price;
        });
        totalPrice.textContent = "$" + total.toFixed(2);
    }

    // Event listeners for + and - buttons
    itemList.addEventListener("click", function (event) {
        const target = event.target;
        if (target.classList.contains("plus-btn")) {
            const quantityElement = target.previousElementSibling;
            const currentQuantity = parseInt(quantityElement.textContent);
            quantityElement.textContent = currentQuantity + 1;
            updateTotal();
        } else if (target.classList.contains("minus-btn")) {
            const quantityElement = target.nextElementSibling;
            const currentQuantity = parseInt(quantityElement.textContent);
            if (currentQuantity > 1) {
                quantityElement.textContent = currentQuantity - 1;
                updateTotal();
            }
        }
    });

    // Event listener for delete button
    itemList.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-btn")) {
            const listItem = event.target.closest("li");
            listItem.remove();
            updateTotal();
        }
    });

    // Event listener for like button
    itemList.addEventListener("click", function (event) {
        if (event.target.classList.contains("like-btn")) {
            const likeButton = event.target;
            likeButton.classList.toggle("liked");
        }
    });
});
