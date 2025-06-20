# 🧾 Interledger Technical Test – Peer-to-Peer Credit System

Welcome to the Peering Ledger – where trust meets code. 🎩  
This is a lightweight peer-to-peer CLI app, built with TypeScript and raw TCP sockets.

Two virtual characters (e.g. Alice and Bob) can exchange credits through a basic interactive command-line interface. No Docker required (anymore). 😅

---

## ✨ Features

- 🔁 Bidirectional peer-to-peer communication over TCP
- 💳 Credit transfer between peers (`send 10 credits`)
- 💼 Balance checking (`check balance`)
- 🫡 Graceful exit (`farewell`)
- 👓 Elegant logging with emojis and friendly language

---

## 🚀 Getting Started

### 1. Clone the repo

git clone https://github.com/your-username/interledger-technical-test.git
cd interledger-technical-test

### 2. Install dependencies

npm install

### 3. Start two terminals
In Terminal 1:
npm run start:alice

In Terminal 2:
npm run start:bob


### 🎮 Commands
Once inside the CLI:

send 10 credits – sends 10 credits to the other peer

check balance – displays current credit balance

farewell – exits the app

anything else – gives a gentle nudge back on track

### 🧪 How it works
The app takes three arguments:
ts-node src/index.ts <localPort> <remotePort> <remoteHost>

For example:
ts-node src/index.ts 5000 5001 localhost
It creates a TCP server on <localPort>, and when sending credits, connects to <remoteHost>:<remotePort>.

Each instance listens and sends messages as if they were peers on a network.

### 🧠 Why this setup?
We used TypeScript for safety and structure.

Node.js built-in net module provides raw TCP socket capability, which is perfect for simulating peer-to-peer messaging.

We avoided Docker in the final version to simplify running locally without networking issues.

readline creates an interactive CLI for commands.

### 💡 Ideas for improvement
Use encryption (TLS)

Persist balances

Add peer discovery

Add a web dashboard with WebSocket support

Multiplayer 💰💰💰

### Made with care, keyboard, and caffeine ☕
