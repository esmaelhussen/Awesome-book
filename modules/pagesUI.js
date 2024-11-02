export const showSection = (sectionId) => {
  document.querySelectorAll("#content > div").forEach((section) => {
    section.classList.add("hidden");
  });
  document.getElementById(sectionId).classList.remove("hidden");
};
