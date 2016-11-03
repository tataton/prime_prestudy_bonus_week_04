function splinter(x, y) {
  return [x, y, (x * y)];
}

console.log(splinter(1, 2));

function jScriptFuncOutput() {
  var x = document.getElementById("jScriptNum1").value;
  var y = document.getElementById("jScriptNum2").value;
  var output = splinter(x, y);
  var pg = document.getElementById("jScriptOutput");
  if ((x == "") || (y == "")) {
    pg.textContent = "Please input a number in both of the boxes above.";
  } else {
    pg.textContent = "[" + x + ", " + y + ", " + output[2] + "]";
  }
}

function jQueryFuncOutput() {
  var x = $("#jQueryNum1").val();
  var y = $("#jQueryNum2").val();
  var output = splinter(x, y);
  if ((x == "") || (y == "")) {
    $("#jQueryOutput").text("Please input a number in both of the boxes above.");
  } else {
    $("#jQueryOutput").text("[" + x + ", " + y + ", " + output[2] + "]");
  }
}
