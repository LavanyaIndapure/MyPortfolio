document.addEventListener("DOMContentLoaded", function () {
    // Get all the links in the navbar
    const navLinks = document.querySelectorAll("navLinks");

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Add a scroll event listener to the window
    window.addEventListener("scroll", function () {
        let currentSectionId = "";

        // Loop through sections to find the one in the viewport
        for (const section of document.querySelectorAll("section")) {
            if (isInViewport(section)) {
                currentSectionId = section.id;
                break;
            }
        }

        // Remove "active" class from all links
        navLinks.forEach(link => link.classList.remove("active"));

        // Add "active" class to the link corresponding to the current section
        const currentNavLink = document.querySelector(`nav a[href="#${currentSectionId}"]`);
        if (currentNavLink) {
            currentNavLink.classList.add("active");
        }
    });
});
