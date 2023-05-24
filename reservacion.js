
// CALCULAR PRECIO

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
    
    const cambioPrecio = document.getElementById("precio-total");
    cambioPrecio.innerHTML = total
}

const totalPagar = calcular();
console.log(totalPagar)


// CAMBIAR PRECIO EN EL DOCUMENTO

