const web3 = require('@solana/web3.js');

async function closeAccount() {
    // Connect to the Solana network (replace with your desired network)
    const connection = new web3.Connection(process.env.RPCM, 'confirmed');

    // Replace with your actual keypair or load it from a file
    const payerKeypair = web3.Keypair.fromSecretKey(new Uint8Array([11, 5, 145, 51, 19, 21, 166, 31, 148, 179, 66, 109, 204, 2, 197, 111, 172, 4, 188, 82, 50, 81, 161, 9, 175, 47, 101, 231, 206, 123, 251, 123, 28, 139, 244, 117, 178, 78, 226, 240, 108, 72, 245, 149, 132, 89, 12, 226, 143, 78, 135, 8, 102, 111, 239, 4, 143, 19, 225, 131, 238, 76, 63, 179]));
    // Replace with the public key of the account you want to close
    const accountToClose = new web3.PublicKey('8f5a3Q9ebKn8PMhcqNhdFVpakqxoo1BLeEukqGraMqDA');

    // Create a transaction
    const transaction = new web3.Transaction();

    // Add the close account instruction
    transaction.add(
        web3.SystemProgram.closeAccount({
            source: accountToClose,
            destination: payerKeypair.publicKey,
            authority: payerKeypair.publicKey,
        })
    );

    try {
        // Sign and send the transaction
        const signature = await web3.sendAndConfirmTransaction(
            connection,
            transaction,
            [payerKeypair]
        );

        console.log('Account closed successfully. Transaction signature:', signature);
    } catch (error) {
        console.error('Error closing account:', error);
    }
}

closeAccount();