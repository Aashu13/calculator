var inputBox = document.getElementById("display_number");
var btns = document.querySelectorAll("button");

for (var i = 0; i <= btns.length; i++) {
  btns[i].addEventListener("click", function() {
    inputBox.value += this.value;

    document.getElementById("answer").onclick = function() {
      inputBox.value = eval(inputBox.value);
    };

    document.getElementById("clearNumber").onclick = function() {
      inputBox.value = "";
    };
  });
}
