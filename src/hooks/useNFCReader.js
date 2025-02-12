import { useEffect } from "react";

const useNFCReader = () => {
    useEffect(() => {
        if (typeof window !== "undefined" && "NDEFReader" in window) {
            const ndef = new window.NDEFReader(); // 👈 Agregar `window.` soluciona el error
            ndef.scan().then(() => {
                
                console.log("Escaneando NFC...");
                ndef.onreading = (event) => {
                    const decoder = new TextDecoder();
                    for (const record of event.message.records) {
                        let cardId = decoder.decode(record.data);
                        console.log("Tarjeta detectada:", cardId);
                        alert("id del card: ",cardId)

                        // Enviar el ID de la tarjeta al servidor
                        // fetch("https://tu-servidor.com/validar_tarjeta", {
                        //     method: "POST",
                        //     headers: { "Content-Type": "application/json" },
                        //     body: JSON.stringify({ tarjeta_id: cardId }),
                        // })
                        // .then((response) => response.json())
                        // .then((data) => alert(data.mensaje)) // Respuesta del servidor
                        // .catch((error) => console.error("Error:", error));
                    }
                };
            }).catch((error) => console.log("Error:", error));
        } else {
            console.log("Tu navegador no soporta NFC.");
        }
    }, []);
};

export default useNFCReader;
