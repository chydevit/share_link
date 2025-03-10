// Getting all required elements
const shareBox = document.querySelector(".share__box"),
  socialLinks = document.querySelectorAll(".social__link"),
  shareField = document.querySelector(".field__wrp"),
  copyBtn = document.querySelector("#copyBtn"),
  shareFieldInput = document.querySelector("#inputField");

// Loop through each social link
socialLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default behavior

    // Remove active class from all links
    socialLinks.forEach((s) => s.classList.remove("active"));

    // Get social link from data-link attribute
    let socialLinkValue = link.getAttribute("data-link");

    // Set the input field value
    shareFieldInput.value = socialLinkValue;
    link.classList.add("active");
    shareField.classList.add("active");

    // Open the link in a new tab
    window.open(socialLinkValue, "_blank");
  });
});

// Copy button functionality
copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(shareFieldInput.value);
    copyBtn.innerText = "Copied";

    setTimeout(() => {
      copyBtn.innerText = "Copy";
      shareField.classList.remove("active");
      shareFieldInput.value = "example.com/share-link";
      socialLinks.forEach((s) => s.classList.remove("active"));
    }, 3000);
  } catch (err) {
    console.error("Failed to copy:", err);
  }
});
