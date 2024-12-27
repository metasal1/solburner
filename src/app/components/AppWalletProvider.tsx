"use client";

import React, { useMemo } from "react";
import {
    ConnectionProvider,
    WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
// import { clusterApiUrl } from "@solana/web3.js";
// import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import { TipLinkWalletAdapter } from "@tiplink/wallet-adapter";
import { createWallet } from '@passkeys/core';

require("@solana/wallet-adapter-react-ui/styles.css");

const wallet = createWallet({
    appId: '23ae7127-a1fb-4aba-87ba-1918d0b8f1df',
    providers: {
        solana: true
    },
});
// imports here

export default function AppWalletProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const network = WalletAdapterNetwork.Mainnet;
    // Use your custom RPC endpoint here
    const customRpcEndpoint = process.env.NEXT_PUBLIC_RPC ?? 'https://xyz.validators.solutions?api-key=2b757f45-e604-478d-bc3b-0578c283b163';
    const endpoint = useMemo(() => customRpcEndpoint, [customRpcEndpoint]);
    const wallets = useMemo(
        () => [
            new TipLinkWalletAdapter({
                title: "Solburner",
                clientId: "166731c5-3737-4128-9cd4-74d998cd1376",
                theme: "system"  // pick between "dark"/"light"/"system"
            }),
        ],
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets}>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}
