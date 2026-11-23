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
  var matchSelect = document.getElementById("match");
  var standSelect = document.getElementById("stand");
  var quantityInput = document.getElementById("quantity");

  // Ticket prices based on match and stand category.
  var ticketPrices = {
    "RCB vs CSK": { General: 800, Premium: 2000, VIP: 5000 },
    "MI vs KKR": { General: 900, Premium: 2200, VIP: 5500 },
    "SRH vs RR": { General: 700, Premium: 1800, VIP: 4500 },
    "CSK vs MI": { General: 800, Premium: 2000, VIP: 5000 },
  };

  // Read the form selections and update the Booking Summary live.
  function updateBookingSummary(showUpdateToast) {
    var matchSummary = document.querySelector("#summary-match");
    var standSummary = document.querySelector("#summary-stand");
    var priceSummary = document.querySelector("#summary-price");
    var quantitySummary = document.querySelector("#summary-quantity");
    var totalSummary = document.querySelector("#summary-total");

    if (!matchSummary || !standSummary || !priceSummary ||
        !quantitySummary || !totalSummary) {
      return;
    }

    var selectedMatch = matchSelect ? matchSelect.value : "";
    var selectedStand = standSelect ? standSelect.value : "";
    var quantity = quantityInput ? Number(quantityInput.value) : 0;

    if (quantity < 0) {
      quantity = 0;
    }
    if (quantity > 10) {
      quantity = 10;
    }

    var ticketPrice = 0;
    if (ticketPrices[selectedMatch] && ticketPrices[selectedMatch][selectedStand]) {
      ticketPrice = ticketPrices[selectedMatch][selectedStand];
    }

    var totalAmount = ticketPrice * quantity;

    matchSummary.textContent = "Match: " +
      (selectedMatch ? selectedMatch : "Not Selected");
    standSummary.textContent = "Stand: " +
      (selectedStand ? selectedStand : "Not Selected");
    priceSummary.textContent = "Ticket Price: ₹" + ticketPrice;
    quantitySummary.textContent = "Quantity: " + (quantity || 0);
    totalSummary.textContent = "Total Amount: ₹" + totalAmount;

    if (showUpdateToast && selectedMatch && selectedStand && quantity > 0) {
      showToast("Booking summary updated!");
    }
  }

  if (matchSelect) {
    matchSelect.addEventListener("change", function () {
      updateBookingSummary(true);
    });
  }

  if (standSelect) {
    standSelect.addEventListener("change", function () {
      updateBookingSummary(true);
    });
  }

  if (quantityInput) {
    quantityInput.addEventListener("change", function () {
      updateBookingSummary(true);
    });

    quantityInput.addEventListener("input", function () {
      updateBookingSummary(false);
    });
  }

  var bookingForm = document.querySelector("#booking form");
  if (bookingForm) {
    bookingForm.addEventListener("reset", function () {
      setTimeout(function () {
        updateBookingSummary(false);
      }, 10);
    });
  }

  updateBookingSummary(false);

  // Smoothly scroll to the booking form when a Book button is clicked.
  var bookButtons = document.querySelectorAll(".book-button");

  bookButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      var bookingSection = document.getElementById("booking");
      if (bookingSection) {
        bookingSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        showToast("Booking form ready!");

        // If this index page has match options, select the clicked match.
        var row = button.closest("tr");
        var matchSelect = document.getElementById("match");

        if (row && matchSelect) {
          var matchName = row
            .querySelector("td:nth-child(2)")
            .textContent.trim();
          matchSelect.value = matchName;
          updateBookingSummary(false);
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
