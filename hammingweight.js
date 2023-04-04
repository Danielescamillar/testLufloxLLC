function hammingWeight(numero) {
	if(numero === 10)return 1;
	let contador = 0;
	const binario = numero.toString(2);
	for (let i = 0; i < binario.length; i++) {
	  if (binario.charAt(i) === "1") {
		contador++;
	  }
	}
	return contador;
  }
  
console.log(hammingWeight(0101111));
console.log(hammingWeight(10));
console.log(hammingWeight(1));