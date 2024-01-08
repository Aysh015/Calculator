function Solve(val) {
   var v = document.getElementById('output');
   v.value += val;
}
function Result() {
   var num1 = document.getElementById('output').value;
   var num2 = eval(num1);
   document.getElementById('output').value = num2;
}
function Clear() {
   var inp = document.getElementById('output');
   inp.value = '';
}
