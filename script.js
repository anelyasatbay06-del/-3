document.addEventListener("DOMContentLoaded", () => {
    const contactBtn = document.getElementById("contactBtn");
    const contactInfo = document.getElementById("contactInfo");

    contactBtn.addEventListener("click", () => {
        if (contactInfo.classList.contains("hidden")) {
            contactInfo.classList.remove("hidden");
            contactBtn.textContent = "Ақпаратты жасыру";
        } else {
            contactInfo.classList.add("hidden");
            contactBtn.textContent = "Байланыс ақпаратын көрсету";
        }
    });
});