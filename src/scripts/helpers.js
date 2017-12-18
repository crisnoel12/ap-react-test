export function flashMsg(msg) {
  document.body.innerHTML += `<div id="flash-msg">${msg}</div>`;
  setTimeout(() => {
    let flashMsg = document.getElementById("flash-msg");
    document.body.removeChild(flashMsg);
  }, 3000);
}

export function removeClass(arr) {
  arr.forEach(element => {
    element.removeAttribute("class");
  });
}