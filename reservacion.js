// OBTNER DATOS

const submit = document.querySelector("#form");
const obtenerPasajeros = document.querySelector("#cantidadPasajeros");
const obtenerDescuento = document.querySelector("#descuentoPromocional");

// CALCULO DEL PRECIO

function calcular() {

    // PASAR A NUMEROS
    const precioUnitario = 150
    const cantidadPasajeros = parseInt (document.querySelector("#cantidadPasajeros").value);
    const descuento = parseInt (document.querySelector("#descuentoPromocional").value);

    // CALCULO
    subTotal= cantidadPasajeros * precioUnitario;
    promocion = subTotal * (descuento / 100);
    total = subTotal - promocion;
    console.log(total);
    
    // INGRESAR RESULTADO EN EL HTML
    const cambioPrecio = document.querySelector("#precio-total");
    cambioPrecio.innerText = total  
}

// ENVIAR FORMULARIO

function datos(event) {
    event.preventDefault();
    const form = new FormData(this);
    const datosFormulario = [form.get("name"), form.get("lastName"), form.get("email"), form.get("pasajeros"), form.get("descuento")]
    console.log (datosFormulario);
}

// EVENTOS DE ESCUCHA

obtenerPasajeros.addEventListener("change", calcular)

obtenerDescuento.addEventListener("change", calcular)

submit.addEventListener("submit", datos);