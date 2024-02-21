document.getElementById("buy-ticket").addEventListener("click", function () {
    const targetSection = document.getElementById("ticket-price-per");
    targetSection.scrollIntoView({ behavior: 'smooth' });
})


//  Offers button clicked js 

document.getElementById("offers-btn").addEventListener("click", function () {
    const targetSection = document.getElementById("ticket-section");
    targetSection.scrollIntoView({ behavior: 'smooth' });
})


// seats button section functionality is here
let seatCount = 0;
let totalSeat = 40;

const seats = document.getElementsByClassName("seats");
let clickCount = 0;
for (const seat of seats) {
    seat.addEventListener("click", function btnClick() {
        clickCount = clickCount + 1;
        if (clickCount >= 5) {
            alert("More than 4 buttons have been clicked.");
            seat.classList.setAttribute('disabled', true);
        }
        // Remove the click event listener
        if (!seat.disabled) {
            seat.removeEventListener('click', btnClick);
        }

        seat.style.backgroundColor = "#1DD100";
        const selectedSeat = seatCount += 1;
        getInnerTextById("selected-seats", selectedSeat);
        getInnerTextById("total-select-seat", selectedSeat);

        const availableSeats = totalSeat -= 1;
        getInnerTextById("available-seats", availableSeats)
        getInnerTextById("seat-count", availableSeats)

        // =================================
        const seatName = document.getElementById("seat-name");
        const seatText = seat.innerText;
        const li = document.createElement("li")
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        p2.innerText = "Economy";
        p1.innerText = seatText;
        li.appendChild(p1)
        li.appendChild(p2)

        // Set the per button value in the li element
        const perSeatPrice = document.getElementById("per-ticket-price").innerText;
        const seatPrice = parseInt(perSeatPrice);
        const p3 = document.createElement("p");
        p3.innerText = seatPrice + " Taka";
        li.appendChild(p3);
        seatName.appendChild(li)

        // Total Price Calculations is here
        const totalPriceText = document.getElementById("total-price").innerText;
        const totalPrice = parseInt(totalPriceText);
        getInnerTextById("total-price", totalPrice + parseInt(perSeatPrice))

        setTotalGrandPriceElementById("grand-total-price", seatPrice);
    })
}

// Discount Input Field & Button js code 
document.getElementById("coupon-btn").addEventListener("click", function (event) {
    const couponBtn = document.getElementById("coupon-btn");
    const inputValue = document.getElementById("input-field").value;

    if (inputValue.toLowerCase() === "new15") {

        const grandPrice = document.getElementById("grand-total-price").innerText;
        getDiscountPrice(grandPrice, (1 - 0.15))
        document.getElementById("grand-total-price").innerText = getDiscountPrice(grandPrice, (1 - 0.15));

        couponBtn.setAttribute("disabled", true)
        // console.log("You got 15% discount!");
    }
    else if (inputValue.toLowerCase() === "couple20") {

        const grandPrice = document.getElementById("grand-total-price").innerText;
        getDiscountPrice(grandPrice, (1 - 0.20));
        document.getElementById("grand-total-price").innerText = getDiscountPrice(grandPrice, (1 - 0.20));

        couponBtn.setAttribute("disabled", true)
        // console.log("You got 20% discount!");
    }
    else {
        alert('Please! enter the correct coupon code')
    }

})

let modal = document.getElementById('modalOpen');
const sections = document.getElementsByClassName("section")
function modalOpen() {
    for (const sec of sections) {
        sec.classList.add("hidden")
    }
    modal.classList.remove('hidden');
}

document.getElementById("continue").addEventListener("click", function () {
    for (const sec of sections) {
        sec.classList.remove("hidden")
    }
    modal.classList.add('hidden');
});


