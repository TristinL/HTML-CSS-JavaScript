
var report = function (celsius, fahrenheit) {
    document.getElementById("result").innerHTML =
        celsius + "\xb0C = " + fahrenheit + "\xb0F";
};

var report2 = function (inches, centimeters) {
    document.getElementById("result2").innerHTML =
      inches + "in = " + centimeters + "cm";
};

var report3 = function (inches2, feet) {
    document.getElementById("result3").innerHTML =
      inches2 + "in = " + feet + "ft";
};

document.getElementById("c_to_f").onclick = function () {
    var celsius = document.getElementById("temperature").value;
    report(celsius, (1.8 * celsius + 32));
};

document.getElementById("f_to_c").onclick = function () {
    var fahrenheit = document.getElementById("temperature").value;
    report(((fahrenheit - 32) / 1.8), fahrenheit);
};


document.getElementById("in_to_cm").onclick = function () {
  var inch = document.getElementById("length").value;
  report2(inch, 2.54 * inch).toFixed(2);
};

document.getElementById("cm_to_in").onclick = function () {
  var cent = document.getElementById("length").value;
  report2((cent / 2.54), cent).toFixed(2);
};

document.getElementById("inches_to_feet").onclick = function () {
  var inches2 = document.getElementById("tilelength").value;
  report3(inches2, inches2 * 5);
};

document.getElementById("feet_to_inches").onclick = function () {
  var feet = document.getElementById("tilelength").value;
  report3(feet / 5, feet);
};