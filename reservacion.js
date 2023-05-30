
// OBTNER VALORES

function capturarForm() {
    const nombrePasajero = document.querySelector("#nombreForm").value;
    const ApellidoPasajero = document.querySelector("#apellidoForm").value;
    const emailPasajero = document.querySelector("#emailForm").value;
    const cantidadPasajeros = parseInt (document.querySelector("#cantidadPasajeros").value);
    const descuento = parseInt (document.querySelector("#descuentoPromocional").value);
    const sumit = document.querySelector("#botonSumit");
    
    sumit.addEventListener('click', function() {
       const datosFormulario = [nombrePasajero, ApellidoPasajero, emailPasajero, cantidadPasajeros, descuento]
       console.log(datosFormulario)
     });
     
    };


// CALCULAR PRECIO

function calcular() {
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
    cambioPrecio.innerHTML = total  
}




