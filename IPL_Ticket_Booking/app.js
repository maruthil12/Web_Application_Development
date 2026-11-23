// Display a short notification on the page.
function showToast(message) {
    var toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    document.body.appendChild(toast);

    // Make the toast visible.
    setTimeout(function () {
        toast.classList.add("show");
    }, 10);

    // Remove the toast after a few seconds.
    setTimeout(function () {
        toast.classList.remove("show");
        setTimeout(function () {
            toast.remove();
        }, 300);
    }, 3000);
}

document.addEventListener("DOMContentLoaded", function () {
    // Smoothly scroll to the booking form when a Book button is clicked.
    var bookButtons = document.querySelectorAll(".book-button");

    bookButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();

            var bookingSection = document.getElementById("booking");
            if (bookingSection) {
                bookingSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
                showToast("Booking form ready!");

                // If this index page has match options, select the clicked match.
                var row = button.closest("tr");
                var matchSelect = document.getElementById("match");

                if (row && matchSelect) {
                    var matchName = row.querySelector("td:nth-child(2)").textContent.trim();
                    matchSelect.value = matchName;
                }
            }
        });
    });

    // Show a confirmation toast after the booking form is submitted.
    var bookingForm = document.querySelector("#booking form");

    if (bookingForm) {
        bookingForm.addEventListener("submit", function (event) {
            event.preventDefault();
            showToast("Booking confirmed successfully!");
        });
    }
});
