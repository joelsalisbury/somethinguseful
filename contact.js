const copyButton = document.querySelector("[data-copy]");
const copyStatus = document.querySelector("#copy-status");

if (copyButton && copyStatus) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(copyButton.dataset.copy);
      copyStatus.textContent = "Email copied.";
    } catch {
      copyStatus.textContent = "Couldn't copy. Please copy the email address manually.";
    }
  });
}
