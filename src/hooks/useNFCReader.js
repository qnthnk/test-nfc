/* global NDEFReader */
import { useEffect } from "react";

const useNFCReader = (setCardId) => {
    useEffect(() => {
        if (typeof window !== "undefined" && "NDEFReader" in window) {
            const ndef = new NDEFReader();

            ndef.scan().then(() => {
                console.log("Escaneando NFC...");

                ndef.onreading = (event) => {
                    console.log("🔍 Evento NFC Detectado:", event);

                    if (!event.message || event.message.records.length === 0) {
                        console.warn("⚠️ Tarjeta no tiene datos en formato NDEF.");
                        setCardId("⚠️ Tarjeta no compatible con NDEF");
                        return;
                    }

                    const decoder = new TextDecoder();
                    for (const record of event.message.records) {
                        let cardId;

                        if (record.data instanceof DataView) {
                            const buffer = new Uint8Array(record.data.buffer);
                            cardId = decoder.decode(buffer);
                        } else {
                            cardId = decoder.decode(record.data);
                        }

                        console.log("✅ Tarjeta detectada:", cardId);
                        setCardId(cardId || "⚠️ Tarjeta vacía o formato desconocido");
                    }
                };
            }).catch((error) => console.error("Error al escanear NFC:", error));
        } else {
            console.log("⚠️ Tu navegador no soporta NFC.");
        }
    }, [setCardId]);
};

export default useNFCReader;
