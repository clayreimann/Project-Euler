FACT_MAP = {
	0: 1,
	1: 1
}

def factorial(n):
	if n in FACT_MAP:
		return FACT_MAP[n]
	return n * factorial(n - 1)

def sumDigits(toSum):
		value = 0
		while toSum > 0:
			value += toSum % 10
			toSum = toSum // 10
		return value

sumDigits(factorial(100))
