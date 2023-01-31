
function RetirarPanama(){
    let monto=document.getElementById("recibePanama").value;
    let tasaDolar=document.getElementById("tasaDolar").value;
    let enviar = (monto*1)/tasaDolar;
    let redondeo = enviar.toFixed(2);
    return alert(redondeo);
}

function CargarBs(){
    let TasaBs=document.getElementById("tasaBs").value;
    let tienes=document.getElementById("tienesBs").value;
    let recepcion = (tienes/TasaBs);
    let redondeo = recepcion.toFixed(2);
    return alert ("Serian: $"+redondeo);
}