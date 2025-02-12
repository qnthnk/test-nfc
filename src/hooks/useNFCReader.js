import { useEffect } from "react";

const useNFCReader = () => {
    useEffect(() => {
        if ("NDEFReader" in window) {
            // Verificar si ya tenemos permiso de NFC
            navigator.permissions.query({ name: "nfc" }).then((result) => {
                console.log("Estado del permiso NFC:", result.state);

                if (result.state === "granted") {
                    console.log("Permiso de NFC concedido automáticamente.");
                    iniciarLecturaNFC();
                } else if (result.state === "prompt") {
                    console.log("El navegador pedirá permisos de NFC.");
                    iniciarLecturaNFC();
                } else {
                    console.log("Permiso de NFC denegado. No se podrá leer.");
                }
            });
        } else {
            console.log("Tu navegador no soporta NFC.");
        }
    }, []);

    const iniciarLecturaNFC = () => {
        const ndef = new NDEFReader();
        ndef.scan().then(() => {
            console.log("Escaneando NFC...");
            ndef.onreading = (event) => {
                const decoder = new TextDecoder();
                for (const record of event.message.records) {
                    let cardId = decoder.decode(record.data);
                    console.log("Tarjeta detectada:", cardId);
                }
            };
        }).catch((error) => console.error("Error al escanear NFC:", error));
    };
};

export default useNFCReader;
