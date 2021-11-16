const http = require("http");

const server = http
  .createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.end(`
        <h1>This is my first response</h1>
        <h2>This is my second</h2>
        <p>This is my third response</p>
        `);
  })
  .listen(3000, () => console.log("i am listening"));
