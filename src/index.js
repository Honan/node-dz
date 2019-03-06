const http = require('http');
const url = require('url');

http
  .createServer((req, res) => {
    if (req.method === 'GET') {
      const parse = url.parse(req.url, true).query;

      let { count, interval } = parse;

      if (typeof count === 'undefined' || typeof interval === 'undefined') {
        console.log('Count и interval не заданы');
        return;
      }

      count = Number(count);
      interval = Number(interval);

      if (count < 1 || interval < 0) {
        console.log('Count и interval должны быть больше нуля');
        return;
      }

      let promise = new Promise(resolve => {
        var i = 1;
        const myTimer = () => {
          if (i === count) {
            clearInterval(myVar);
            resolve();
          }
          console.log(new Date(new Date().toUTCString()));
          ++i;
        };

        let myVar = setInterval(myTimer, interval);
      });

      promise
        .then(() => {
          console.log('Остановка консольного ввода ' + new Date(new Date().toUTCString()));
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end('');
        });
    }
  })
  .listen(3000, () => console.log('Сервер запущен'));
