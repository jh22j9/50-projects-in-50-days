const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  console.log("innerText", label.innerText);
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});
