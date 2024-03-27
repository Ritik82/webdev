document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const carouselList = document.getElementById("carouselList");

    let currentIndex = 0;
    const maxIndex = carouselList.children.length / 2; // divided by 2 because we have duplicated the items
    const itemWidth = carouselList.children[0].offsetWidth; // assuming 10px margin

    // Function to update carousel position
    const updateCarousel = () => {
        console.log(itemWidth);
        carouselList.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

        // Disable or enable buttons based on the current index
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === maxIndex;
    };

    // Event listener for previous button
    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    // Event listener for next button
    nextBtn.addEventListener("click", () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Initial update of the carousel
    updateCarousel();
});
