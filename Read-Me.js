// Tuto como preparar un dispositivo para correr el escaneo NFC

// Cosas que vamos a necesitar:

    // CELULAR con : ( una de las siguientes 2 opciones )
    // - NFC Tools (Android) – Permite leer y escribir datos en tarjetas NFC.
    // - NXP TagWriter (Android) – Aplicación oficial para escribir en tarjetas NFC.

    // ACR122U NFC     >> LECTOR/editor NFC PARA PC
    // TARJETAS  >> NFC 13.56 MHz - NTAG215  504 bytes de almacenamiento.


// PASO A PASO:

// 1 - En el celu con NFC...
// 2 - Abrí la app de "Configuración".
// 3 - Bajá hasta "Acerca del teléfono".
// 4 - Tocá en "Información de software".
// 5 - Buscá la opción "Número de compilación".
// 6 - Tocá 7 veces seguidas en "Número de compilación" hasta que te pida tu PIN o contraseña.
// 7 - Si lo hiciste bien, te va a decir: "Modo desarrollador activado".
// 8 - Volvé 2 veces atrás y en Configuración ahora vas a ver una nueva opción: "Opciones de Desarrollador".
// 9 - 🛠️ Habilitar Depuración USB para inspeccionar en la PC ( está un cachin mas abajo )
// 10 - Conectá el teléfono a la PC con un cable USB. En el celular, te va a salir un mensaje de "Permitir depuración USB". Aceptalo. (DEMORA EN APARECER) dale tiempo...


// 11 - Si no aparece anda directo a chrome en la pc y.. chrome://inspect/#devices
// capaz ahi te aparece el mensaje en el celu... "Permitir depuración USB". aceptalo

// 12 - En la pc va a aparecer el dispositivo y por debajo las pestañas que estan abiertas en el chrome ( si no lo tenes abierto, abrilo )
// 13 - te va a salir una lista con pestañas abiertas en el celu. pone inspect a la que queres inspeccionar.


// 14 - AHORA NO VA A PERMITIR HACER NADA HASTA QUE NO PONGAS ESTO EN LA CONSOLA DEL INSEPECT EN LA PC  Y ACEPTES DESDE EL TELEFONO EL PERMISO (FORZAMOS EL PERMISO)

(async () => {
    try {
        const ndef = new NDEFReader();
        await ndef.scan(); // Esto debería hacer que Chrome muestre el pop-up de permisos
        console.log("Escaneando NFC...");
    } catch (error) {
        console.error("Error al intentar escanear NFC:", error);
    }
})();

// 15 - Te va a tirar promise en pending hasta que desde el celu le des en aceptar a el permiso de usar NFC;)
// 16 - Si esto no es suficiente dale
