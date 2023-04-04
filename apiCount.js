const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/age-counting', (response) => {
  let data = '';
  
  response.on('data', (chunk) => {
    data += chunk;
  });

  response.on('end', () => {
	  
	  const dataPase = JSON.parse(data)
	  const dataStr = dataPase.data;
	  const keyValuePairs = dataStr.split(', ');
	  
	  let ages = [];
	  for (const pair of keyValuePairs) {
		const [key, value] = pair.split('=');
		if (key === 'age') {
		  const age = parseInt(value);
		  if (age >= 50) {
			ages.push(age);
			}
			//console.log(age)
		}
	  }
	  console.log(ages)
	   console.log(ages.length)
	  
  });

}).on('error', (error) => {
  console.error(error);
});
