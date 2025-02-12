/* global NDEFReader */
import { useEffect } from "react";

const useNFCReader = (setCardId) => {
    useEffect(() => {
        if (typeof window !== "undefined" && "NDEFReader" in window) {
            const ndef = new NDEFReader();

            ndef.scan().then(() => {
                console.log("Escaneando NFC...");

                ndef.onreading = (event) => {
                    const decoder = new TextDecoder();

                    for (const record of event.message.records) {
                        let cardId;

                        try {
                            if (record.data instanceof DataView) {
                                // Convertimos a Uint8Array para decodificar
                                const buffer = new Uint8Array(record.data.buffer);
                                cardId = decoder.decode(buffer);
                            } else if (record.data instanceof ArrayBuffer) {
                                // Si ya es un ArrayBuffer, lo usamos directamente
                                cardId = decoder.decode(new Uint8Array(record.data));
                            } else {
                                // Si no es un formato esperado, lo convertimos a string manualmente
                                cardId = String(record.data);
                            }
                            
                            console.log("Tarjeta detectada:", cardId);
                            setCardId(cardId); // Actualiza el estado en App.js
                        } catch (error) {
                            console.error("Error al decodificar NFC:", error, record);
                        }
                    }
                };
            }).catch((error) => console.error("Error al escanear NFC:", error));
        } else {
            console.log("Tu navegador no soporta NFC.");
        }
    }, [setCardId]);
};

export default useNFCReader;
