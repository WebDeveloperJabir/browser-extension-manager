let baseURL = "data.json";
let data = null;
let extensionsContainer = document.getElementById("extensions");
let extensionDOM = ``;
let currentState = "all";
let prevState = null;
let buttons = { all: document.getElementById("all-btn"), active: document.getElementById("active-btn"), inactive: document.getElementById("inactive-btn") };

buttons.all.classList.add("active-state");

fetch(baseURL)
  .then((response) => {
    return response.json();
  })
  .then((jsonData) => {
    data = jsonData;
    data.forEach((element) => {
      if (true) {
        extensionDOM += `
          <div class="extension">
            <div class="extension-top-place">
              <img src="${element.logo}" alt="" />
              <div class="extension-info">
                <h3>${element.name}</h3>
                <p>${element.description}</p>
              </div>
            </div>
            <div class="extension-bottom-place">
              <button>Remove</button>
              <div class="toggle-button">
                <input type="checkbox" name="" id="" />
                <span class="slider"></span>
              </div>
            </div>
          </div>`;
      }
    });
    extensionsContainer.innerHTML = extensionDOM;
  });
function setState(state) {
  prevState = currentState;
  currentState = state;
  buttons[currentState].classList.add("active-state");
  buttons[prevState].classList.remove("active-state");
}
