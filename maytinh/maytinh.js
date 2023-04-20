function convert1() {
    let so1 = document.getElementById("so1").value;
    let so2 = document.getElementById("so2").value;
    let result = parseInt(so1) + parseInt(so2);
    document.getElementById("result").innerHTML = result;
}
function convert2(){
    let so1 = document.getElementById("so1").value;
    let so2 = document.getElementById("so2").value;
    let result = parseInt(so1) - parseInt(so2);
    document.getElementById("result").innerHTML = result; 
}
function convert3() {
    let so1 = document.getElementById("so1").value;
    let so2 = document.getElementById("so2").value;
    let result = parseInt(so1) * parseInt(so2);
    document.getElementById("result").innerHTML = result; 
}
function convert4(){
    let so1 = document.getElementById("so1").value;
    let so2 = document.getElementById("so2").value;
    let result = parseInt(so1) / parseInt(so2);
    document.getElementById("result").innerHTML = result; 
}