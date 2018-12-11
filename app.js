(function() {
  var btn = document.createElement("button");
  var btnText = document.createTextNode("Click me");

  btn.appendChild(btnText);

  var $buttonDiv = document.getElementById("button-div");
  $buttonDiv.appendChild(btn);
})();
