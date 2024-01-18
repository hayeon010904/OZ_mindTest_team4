const ToResult = document.querySelector(".ToResult");
const value = localStorage.getItem("breadType");
value !== null
  ? ToResult.classList.add("display_block")
  : ToResult.classList.remove("display_block");
