import {
    clusterApiUrl,
    Connection,
    PublicKey,
    Keypair,
    Transaction,
} from "@solana/web3.js";
import { closeAccount, createCloseAccountInstruction } from "@solana/spl-token";
import * as bs58 from "bs58";

(async () => {
    // connection
    const connection = new Connection("https://devnet.helius-rpc.com/?api-key=ff0d3523-6397-47bf-bf5d-acb7d765d5ff");

    // 2vSCAARUfRvYAKANjVreSAEhrnLnEjTsyTHD6p7968eE
    const feePayer = Keypair.fromSecretKey(new Uint8Array([11, 5, 145, 51, 19, 21, 166, 31, 148, 179, 66, 109, 204, 2, 197, 111, 172, 4, 188, 82, 50, 81, 161, 9, 175, 47, 101, 231, 206, 123, 251, 123, 28, 139, 244, 117, 178, 78, 226, 240, 108, 72, 245, 149, 132, 89, 12, 226, 143, 78, 135, 8, 102, 111, 239, 4, 143, 19, 225, 131, 238, 76, 63, 179]));

    const tokenAccountPubkey = new PublicKey(
        // Mint "3Swae3mCqGmdEqXR4vKDm7dxiy6zwgD346X4fQWmMTmY"
        "144AMG8NvXJmpmH7mZF3qkUunuPVqXKMzNGNEG1wqgfE"
    );

    // ATA 8f5a3Q9ebKn8PMhcqNhdFVpakqxoo1BLeEukqGraMqDA

    // 1) use build-in function
    {
        let txhash = await closeAccount(
            connection, // connection
            feePayer, // payer
            tokenAccountPubkey, // token account which you want to close
            feePayer.publicKey, // destination
            feePayer // owner of token account
        );
        console.log(`txhash: ${txhash}`);
    }

    // or

    // 2) compose by yourself
    // {
    //     let tx = new Transaction().add(
    //         createCloseAccountInstruction(
    //             tokenAccountPubkey, // token account which you want to close
    //             feePayer.publicKey, // destination
    //             feePayer.publicKey // owner of token account
    //         )
    //     );
    //     console.log(
    //         `txhash: ${await connection.sendTransaction(tx, [
    //             feePayer,
    //             feePayer /* fee payer + owner */,
    //         ])}`
    //     );
    // }
})();
