def power(a, n):
	res = 1
	for i in range(n):
		res *= a
	return res

a, n = input().split()
a, n = float(a), int(n)
print( power(a, n) )