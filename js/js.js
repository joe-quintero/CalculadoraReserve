
function enviar(){
    let monto=document.getElementById("recibe").value;
    let enviar = (monto*1)/0.99;
    let redondeo = enviar.toFixed(2);
    alert(redondeo);
}