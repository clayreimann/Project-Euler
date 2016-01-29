function factorial(n) { 
	if (factorial.values[n]) { 
		return factorial.values[n]; 
	} 
	return n * factorial(n - 1); 
}

factorial.values = {
	0: 1,
	1: 1
};

function sumDigits(toSum) { 
	var sum = 0; 
	while (toSum > 0) { 
		sum += toSum % 10;
		toSum = Math.floor(toSum / 10); 
	} 
	return sum; 
}

sumDigits(factorial(100));
