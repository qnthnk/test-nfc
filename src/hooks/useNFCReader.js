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
                    const decoder = new TextDecoder();

                    for (const record of event.message.records) {
                        console.log("📡 Registro NFC:", record);

                        let cardId = null;

                        try {
                            if (record.data instanceof DataView) {
                                console.log("📄 DataView detectado");
                                const buffer = new Uint8Array(record.data.buffer);
                                cardId = decoder.decode(buffer);
                            } else if (record.data instanceof ArrayBuffer) {
                                console.log("🔵 ArrayBuffer detectado");
                                cardId = decoder.decode(new Uint8Array(record.data));
                            } else {
                                console.log("⚠️ Formato desconocido de datos NFC:", record.data);
                                cardId = String(record.data);
                            }

                            console.log("✅ Tarjeta detectada:", cardId);
                            setCardId(cardId); // Actualiza el estado en App.js
                        } catch (error) {
                            console.error("❌ Error al decodificar NFC:", error, record);
                        }
                    }
                };
            }).catch((error) => console.error("❌ Error al escanear NFC:", error));
        } else {
            console.log("❌ Tu navegador no soporta NFC.");
        }
    }, [setCardId]);
};

export default useNFCReader;
