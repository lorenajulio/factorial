


	var total = 10; 
	for (i=1; i<=10; i++) {
		total = total * i; 
	}
	console.log(total); 


    var dato = 10;
    var i= dato-1; 
	while(i<1) {
		dato = dato * i; 
        
	}
	console.log(total); 



function factorialRecursivo (n) { 
	if (n == 0){ 
		return 1; 
	}
	return n * factorialRecursivo (n-1); 
}
console.log(factorialRecursivo(10))


