import * as net from 'net';

export function createServer(onReceive: (amount: number) => void, port: number) {
  const server = net.createServer(socket => {
    socket.on('data', data => {
      const amount = parseFloat(data.toString());
      if (!isNaN(amount)) {
        onReceive(amount);
      }
    });
  });

  server.listen(port, () => {
    console.log(`🛰️ Listening for incoming credits on port ${port}...`);
  });
}

export function sendFunds(host: string, port: number, amount: number) {
  const client = new net.Socket();
  client.connect(port, host, () => {
    client.write(amount.toString());
    client.end();
  });
}
