

// OBTNER VALORES
const precioUnitario = 150
const cantidadPasajeros = document.getElementById("cantidadPasajeros");
const descuento = document.getElementById("descuentoPromocional");

// CALCULAR PRECIO
function calcular() {
    // PASAR LOS VALORES DE STRING A NUMBER
    const cp = parseInt (cantidadPasajeros.value);
    const pu = precioUnitario;
    const des = parseInt (descuento.value);

    // CALCULO
    subTotal= cp * pu;
    promocion = subTotal * (des / 100);
    total = subTotal - promocion;
    console.log(total);
    
    // INGRESAR RESULTADO EN EL HTML
    const cambioPrecio = document.getElementById("precio-total");
    cambioPrecio.innerHTML = total  
}


