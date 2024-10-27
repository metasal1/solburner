import { useEffect, useState } from "react";

export default function SignMessage() {

    const [sign, setSign] = useState<string | null>(null);

    const signMessage = async () => {
        const getProvider = () => {
            if ('phantom' in window) {
                const provider = window.phantom?.solana;

                if (provider?.isPhantom) {
                    return provider;
                }
            }

            window.open('https://phantom.app/', '_blank');
        };

        const provider = getProvider(); // see "Detecting the Provider"
        const message = `To avoid digital dognappers, sign below to authenticate with CryptoCorgis`;
        const encodedMessage = new TextEncoder().encode(message);
        const signedMessage = await provider.signMessage(encodedMessage, "utf8");
        const signature = Buffer.from(signedMessage.signature).toString('utf8');
        setSign(signature);
    }
    return (<>
        <button onClick={signMessage}>Sign</button >
        <div>{sign}</div>
    </>)

}