
const precioUnitario = 150
const cantidadPasajeros = document.getElementById("cantidadPasajeros");
const descuento = document.getElementById("descuentoPromocional");

cantidadPasajeros.addEventListener("change", calcular);
descuento.addEventListener("change", calcular);

function calcular() {
    const cp = parseInt (cantidadPasajeros.value);
    const pu = precioUnitario;
    const des = parseInt (descuento.value);

    subTotal= cp * pu;
    promocion = subTotal * (des / 100);
    total = subTotal - promocion;
    console.log(total);
    
    if (total <= 0){
       const valorCero = document.getElementById("precio-total");
       valorCero.innerHTML = ""
    }
    else {
        const cambioPrecio = document.getElementById("precio-total");
        cambioPrecio.innerHTML = total
    }      
}


