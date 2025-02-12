// Tuto como preparar un dispositivo para correr el escaneo NFC


// En el celu con NFC...
// Abrí la app de "Configuración".
// Bajá hasta "Acerca del teléfono".
// Tocá en "Información de software".
// Buscá la opción "Número de compilación".
// Tocá 7 veces seguidas en "Número de compilación" hasta que te pida tu PIN o contraseña.
// Si lo hiciste bien, te va a decir: "Modo desarrollador activado".
// Volvé 2 veces atrás y en Configuración ahora vas a ver una nueva opción: "Opciones de Desarrollador".
// 🛠️ Habilitar Depuración USB para inspeccionar en la PC ( está un cachin mas abajo )
// Conectá el teléfono a la PC con un cable USB.
// En el celular, te va a salir un mensaje de "Permitir depuración USB". Aceptalo. (DEMORA EN APARECER) dale tiempo
// 

// Si no aparece anda directo a chrome en la pc y.. chrome://inspect/#devices
// capaz ahi te aparece el mensaje en el celu... "Permitir depuración USB". aceptalo

// En la pc va a aparecer el dispositivo y por debajo las pestañas que estan abiertas en el chrome ( si no lo tenes abierto, abrilo )
// te va a salir una lista con pestañas abiertas en el celu. pone inspect a la que queres inspeccionar.


// AHORA NO VA A PERMITIR HACER NADA HASTA QUE NO PONGAS ESTO EN LA CONSOLA DEL INSEPECT EN LA PC  Y ACEPTES DESDE EL TELEFONO EL PERMISO (FORZAMOS EL PERMISO)

(async () => {
    try {
        const ndef = new NDEFReader();
        await ndef.scan(); // Esto debería hacer que Chrome muestre el pop-up de permisos
        console.log("Escaneando NFC...");
    } catch (error) {
        console.error("Error al intentar escanear NFC:", error);
    }
})();

// Te va a tirar promise en pending hasta que desde el celu le des en aceptar a el permiso de usar NFC;)
// Si esto no es suficiente dale
