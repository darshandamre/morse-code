const input = document.getElementById("input");
const button = document.querySelector(".btn");
const output = document.getElementById("output");

const url = "https://api.funtranslations.com/translate/morse.json";

button.addEventListener("click", () => {
  fetch(url + "?text=" + input.value)
    .then((response) => response.json())
    .then((json) => {
      if (json.error) {
        return alert(json.error.message);
      }

      output.innerText = json.contents.translated;
    })
    .catch((err) => alert(err));
});
