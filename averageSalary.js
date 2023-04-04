function average(salary){

	salary.sort((a, b) => a - b);
  
	salary.shift()
	salary.pop()
  
	let sumaSalarios = 0
  
	console.log(salary)

	salary.forEach(el => {
		sumaSalarios += el	
	});
	console.log(salary.length)
	console.log(sumaSalarios)
	console.log((sumaSalarios/salary.length).toFixed(5))
  
};
  
average([4000,3000,1000,2000])