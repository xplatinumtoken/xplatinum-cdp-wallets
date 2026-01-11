import { CdpClient } from "@coinbase/cdp-sdk";
import dotenv from "dotenv";

dotenv.config();

async function main() {
  const cdp = new CdpClient();

  // Create EVM (Ethereum-compatible) account
  const evmAccount = await cdp.evm.createAccount({
    name: "XP Treasury EVM Wallet"
  });

  console.log("EVM wallet created:");
  console.log("Address:", evmAccount.address);

  // Create Solana account (optional but supported)
  const solanaAccount = await cdp.solana.createAccount({
    name: "XP Treasury Solana Wallet"
  });

  console.log("Solana wallet created:");
  console.log("Address:", solanaAccount.address);

  await cdp.close();
}

main().catch((err) => {
  console.error("Wallet creation failed:");
  console.error(err);
});
