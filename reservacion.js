// OBTNER DATOS

const formulario = document.querySelector("#form");
const obtenerPasajeros = document.querySelector("#cantidadPasajeros");
const obtenerDescuento = document.querySelector("#descuentoPromocional");
const botonBorrar = document.querySelector("#botonBorrar");

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
    console.log(total)

    
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

    // ALERTA
    swal({
        title: "Enviado con exito",
        icon: "success"
    });
}

// BORRAR EL FORMULARIO

function borrarFormulario() {
    const nPasajero = document.querySelector("#nombreForm").value;
    const apPasajero = document.querySelector("#apellidoForm").value;
    const emailPasajero = document.querySelector("#emailForm").value;
    const pasajeros = parseInt (document.querySelector("#cantidadPasajeros").value);
    const descuento = parseInt (document.querySelector("#descuentoPromocional").value);

    // CONDICIONAL PARA LAS ALERTAS 
    
    if (nPasajero === "" 
    && apPasajero === "" 
    && emailPasajero === ""
    && pasajeros === 0 
    && descuento === 0)  {
        swal({
            title: "No hay campos para borrar",
            icon: "error"
        });
    } else {
        formulario.reset();
        // ALERTA
        swal({
            title: "Formulario borrado con éxito",
            icon: "success"
        });
    }
}



// EVENTOS DE ESCUCHA

obtenerPasajeros.addEventListener("change", calcular)

obtenerDescuento.addEventListener("change", calcular)

botonBorrar.addEventListener("click", borrarFormulario)

formulario.addEventListener("submit", datos);