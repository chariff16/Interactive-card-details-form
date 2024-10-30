//! A header comment

let del = document.querySelector(".form");
let show = document.querySelector(".complete");
function e() {
  document.querySelector(".abs-fc").style.zIndex = "1";
  document.querySelector(".abs-bc").style.zIndex = "0";
  let name = document.querySelector(".name").value;
  let number = document.querySelector(".number").value;
  let m = document.querySelector(".m").value;
  let y = document.querySelector(".y").value;
  let cvc = document.querySelector(".cvc").value;
  if (
    number.length == 16 &&
    /^[a-zA-Z ]+$/.test(name) &&
    cvc.length == 3 &&
    m.length != 0 &&
    y.length != 0 &&
    /^[0-9]+$/.test(number) &&
    /^[0-9]+$/.test(cvc)
  ) {
    del.style.display = "none";
    show.style.display = "flex";
  }
  if (/^[a-zA-Z ]+$/.test(name)) {
    document.querySelector(".no-name").style.display = "none";
    document.querySelector(".name").style.border = "1px solid #000";
  } else {
    if (name.length == 0) {
      document.querySelector(".no-name").innerHTML = "please entre your name";
      document.querySelector(".name").style.border =
        "1px solid hsl(0, 100%, 66%)";
      document.querySelector(".no-name").style.display = "inline";
    } else {
      document.querySelector(".no-name").innerHTML =
        "please entre a valid name";
      document.querySelector(".no-name").style.display = "inline";
      document.querySelector(".name").style.border =
        "1px solid hsl(0, 100%, 66%)";
    }
  }
  if (number.length != 16) {
    document.querySelector(".no-number").innerHTML =
      "wrong format or unvalid card number";
    document.querySelector(".no-number").style.display = "inline";
    document.querySelector(".number").style.border =
      "1px solid hsl(0, 100%, 66%)";
  } else {
    document.querySelector(".no-number").style.display = "none";
    document.querySelector(".number").style.border = "1px solid #000";
  }
  if (m.length == 0 || y.length == 0) {
    document.querySelector(".no-date").innerHTML = "can't be blank";
    document.querySelector(".y").style.border = "1px solid hsl(0, 100%, 66%)";
    document.querySelector(".m").style.border = "1px solid hsl(0, 100%, 66%)";
    document.querySelector(".no-date").style.display = "inline";
  } else {
    if (0 < m.length < 2 && y.length == 2) {
      document.querySelector(".no-date").style.display = "none";
      document.querySelector(".y").style.border = "1px solid #000";
      document.querySelector(".m").style.border = "1px solid #000";
    }
  }
  if (cvc.length == 3 && /^[0-9]+$/.test(cvc)) {
    document.querySelector(".no-cvc").innerHTML = "";
    document.querySelector(".cvc").style.border = "1px solid #000";
  } else {
    if (cvc.length == 0) {
      document.querySelector(".no-cvc").innerHTML = "can't be blank";
      document.querySelector(".cvc").style.border =
        "1px solid hsl(0, 100%, 66%)";
    } else {
      document.querySelector(".no-cvc").innerHTML =
        "wrong format or unvalid CVC";
      document.querySelector(".cvc").style.border =
        "1px solid hsl(0, 100%, 66%)";
    }
  }
}
function isInputNumber(evt) {
  var ch = String.fromCharCode(evt.which);
  if (!/[0-9]/.test(ch)) {
    evt.preventDefault();
  }
}
function v() {
  del.style.display = "block";
  show.style.display = "none";
  document.querySelector(".name").value = "";
  document.querySelector(".number").value = "";
  document.querySelector(".m").value = "";
  document.querySelector(".y").value = "";
  document.querySelector(".cvc").value = "";
  document.querySelector(".show-name-fc").innerHTML = "Jane Appleseed";
  document.querySelector(".show-number-fc").innerHTML = "0000 0000 0000 0000";
  document.querySelector(".show-m-fc").innerHTML = "--";
  document.querySelector(".show-y-fc").innerHTML = "--";
  document.querySelector(".show-cvc-bc").innerHTML = "123";
}
function show_num() {
  let num = document.querySelector(".number").value;
  let joy = num.match(/.{1,4}/g);
  document.querySelector(".show-number-fc").innerHTML = joy.join(" ");
}
function show_n() {
  let n = document.querySelector(".name").value;
  document.querySelector(".show-name-fc").innerHTML = n;
}
function show_m() {
  let m = document.querySelector(".m").value;
  document.querySelector(".show-m-fc").innerHTML = m;
}
function show_y() {
  let y = document.querySelector(".y").value;
  document.querySelector(".show-y-fc").innerHTML = y;
}
function show_cvc() {
  let cvc = document.querySelector(".cvc").value;
  document.querySelector(".show-cvc-bc").innerHTML = cvc;
}
function fc_show() {
  document.querySelector(".abs-fc").style.zIndex = "1";
  document.querySelector(".abs-bc").style.zIndex = "0";
}
function bc_show() {
  document.querySelector(".abs-bc").style.zIndex = "1";
  document.querySelector(".abs-fc").style.zIndex = "0";
}
