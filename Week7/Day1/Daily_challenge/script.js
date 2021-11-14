const lN = require("./main.js");
const http = require("http");

const b = 5;
console.log(lN.largeNumber + b);

http
  .createServer((req, res) => {
    res.writeHead(200);

    res.end(
      `<p>My Module is:</p>
      <p>${lN.largeNumber + b}</p>
      <h1>Hello to fronend</h1>`
    );
  })
  .listen(3000);

http
  .createServer((req, res) => {
    res.writeHead(200);
    res.end(`<h1>The date and the time are currently: ${lN.now()}</h1>`);
  })
  .listen(8080);
