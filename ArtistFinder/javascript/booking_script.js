//booking_script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bookingForm');
    const artistSelect = document.getElementById('artist');
    const hoursInput = document.getElementById('hours');
    const totalFeeDisplay = document.getElementById('totalFee');
    const bookingTableBody = document.querySelector('#bookingTable tbody');

    const calculateTotalFee = () => {
        const selectedArtist = artistSelect.options[artistSelect.selectedIndex];
        const feePerHour = parseFloat(selectedArtist.getAttribute('data-fee')) || 0;
        const hours = parseInt(hoursInput.value) || 0;
        const totalFee = feePerHour * hours;
        totalFeeDisplay.textContent = totalFee.toFixed(2);
    };

    artistSelect.addEventListener('change', calculateTotalFee);
    hoursInput.addEventListener('input', calculateTotalFee);

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const bookingDetails = {
            name: form.name.value,
            email: form.email.value,
            artist: form.artist.options[form.artist.selectedIndex].text,
            date: form.date.value,
            location: form.location.value,
            hours: form.hours.value,
            totalFee: totalFeeDisplay.textContent
        };

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${bookingDetails.name}</td>
            <td>${bookingDetails.email}</td>
            <td>${bookingDetails.artist}</td>
            <td>${bookingDetails.date}</td>
            <td>${bookingDetails.location}</td>
            <td>${bookingDetails.hours}</td>
            <td>$${bookingDetails.totalFee}</td>
        `;
        console.log("New Row HTML:", newRow.innerHTML);
        bookingTableBody.appendChild(newRow);
        console.log("Current Table Body HTML:", bookingTableBody.innerHTML);
        form.reset();
        totalFeeDisplay.textContent = '0.00';
        alert("Booking Successful! Check the booking details below.");
    });
});
