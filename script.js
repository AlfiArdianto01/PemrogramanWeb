// script.js
function showHotelImage() {
    const hotelSelect = document.getElementById('hotel');
    const hotelImageContainer = document.getElementById('hotelImageContainer');

    let imgSrc = '';
    switch (hotelSelect.value) {
        case 'hotel1':
            imgSrc = 'img/hotel.jpeg';
            break;
        case 'hotel2':
            imgSrc = 'img/hotel2.jpeg';
            break;
        case 'hotel3':
            imgSrc = 'img/hotel3.jpeg';
            break;
        default:
            imgSrc = '';
    }

    hotelImageContainer.innerHTML = imgSrc ? `<img src="${imgSrc}" alt="Selected Hotel">` : '';
}

function processTransaction() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const hotel = document.getElementById('hotel').value;

    if (name && email && hotel) {
        document.getElementById('transactionResult').textContent = `Thank you, ${name}! Your booking for ${hotel} is confirmed.`;
    } else {
        document.getElementById('transactionResult').textContent = 'Please fill out all fields.';
    }
}
