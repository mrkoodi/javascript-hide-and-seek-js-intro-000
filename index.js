function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div.target');
}

function deepestChild() {
  var lis = document.getElementById("#div").querySelector("div");
  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + 1).toString();
  }
}

function increaseRankBy(n) {

}
