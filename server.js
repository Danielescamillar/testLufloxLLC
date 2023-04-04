const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/rest-get-simple', (res) => {

	let p = ''
	res.setEncoding('utf8')
  res.on('data', (d) => {
	  p = JSON.parse(d);
	  console.log(p.hobbies.join(', '));
  });

}).on('error', (e) => {
  console.error(e);
});