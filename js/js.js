
function enviar(){
    let monto=document.getElementById("recibe").value;
    let tasaDolar=document.getElementById("tasaDolar").value;
    let enviar = (monto*1)/tasaDolar;
    let redondeo = enviar.toFixed(2);
    alert(redondeo);
}