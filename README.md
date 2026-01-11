# XP Platinum — CDP Server Wallets v2  
This repository creates Coinbase-managed wallets using the Coinbase Developer Platform (CDP) Server Wallet v2.  
## What this does  
- Creates EVM (Ethereum-compatible) wallets  
- Creates Solana wallets  
- Uses Coinbase-managed custody (issuer-grade)  
- Compatible with Coinbase compliance & custody workflows  
## Setup  
```bash  
npm install  
cp .env.example .env  
```  
Fill in your CDP credentials in `.env`.  
## Run  
```bash  
npm start  
```  
## Output  
Wallet addresses will appear in:  
- CDP Portal → Server Wallets  
- On-chain explorers (Ethereum / Solana)  
GitHub stores code only. Wallets are rendered by Coinbase. 
