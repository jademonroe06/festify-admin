    const dateInput = document.getElementById('copyright-year');
    const displaySpan = document.getElementById('copyright-display');

    dateInput.addEventListener('change', () => {
        const selectedDate = new Date(dateInput.value);
        const year = selectedDate.getFullYear();
        displaySpan.textContent = `© ${year}`; // Muestra el copyright con el año
    });