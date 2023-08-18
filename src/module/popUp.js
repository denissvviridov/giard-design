export function popUp() {
  let gridItems = document.querySelectorAll(".grid-item");
  let modal = document.querySelector(" .modal-window");
  let overlay = document.querySelector(".overlay");

  gridItems.forEach(function (item) {
    item.addEventListener("click", function () {

      let img = item.childNodes[1];

      let imgClone = img.cloneNode();
      console.log(imgClone);

      modal.append(imgClone);
      overlay.classList.add("active-overlay");
      modal.classList.add("active-popup");
    });
  });

  overlay.addEventListener("click", function () {
    modal.innerHTML = "";
    overlay.classList.remove("active-overlay");
    modal.classList.remove("active-popup");
  });
}
