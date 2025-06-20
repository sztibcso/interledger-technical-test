import * as readline from 'readline';
import { Peer } from './peer';
import { createServer, sendFunds } from './network';

const peer = new Peer();

const args = process.argv.slice(2);
const localPort = parseInt(args[0]) || 5000;
const remotePort = parseInt(args[1]) || 5001;
const remoteHost = args[2] || 'localhost';

createServer((amount: number) => {
  peer.receive(amount);
  console.log(`💸 Incoming transfer detected: +${amount} credits received.`);
}, localPort);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

console.log('🎩 Welcome to the Peering Ledger – where trust meets code.');
rl.prompt();

rl.on('line', (line) => {
  const input = line.trim().toLowerCase();

  if (input === 'check balance') {
    console.log(`💼 Current balance: ${peer.getBalance()} credits`);
  } else if (input.startsWith('send ')) {
    const parts = input.split(' ');
    const amount = parseFloat(parts[1]);

    if (!isNaN(amount) && parts[2] === 'credits') {
      peer.send(amount);
      sendFunds(remoteHost, remotePort, amount);
      console.log(`📤 Funds dispatched. Smooth as silk.`);
    } else {
      console.log(`🤔 Hmm, that doesn't look like a valid amount or format.`);
    }
  } else if (input === 'farewell') {
    console.log(`🫡 Session ended. Stay solvent, friend.`);
    process.exit(0);
  } else {
    console.log(`🤷 Unrecognized instruction. Try again, virtuoso.`);
  }

  rl.prompt();
});
