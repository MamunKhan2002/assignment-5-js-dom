function getInnerTextById(elementId, value) {
    document.getElementById(elementId).innerText = value;
}

function setTotalGrandPriceElementById(elementId, value) {
    const grandTotalPriceText = document.getElementById(elementId).innerText;
    const grandTotalPrice = parseInt(grandTotalPriceText);
    const grandPrice = grandTotalPrice + parseInt(value);
    getInnerTextById("grand-total-price", grandPrice);
    return grandPrice;
}

function getDiscountPrice(price, discountValue) {
    const grandTotalPrice = parseInt(price);
    const discount = grandTotalPrice * discountValue;
    const totalDiscountPrice = parseInt(discount);
    return totalDiscountPrice;
}

function hideElement(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}
