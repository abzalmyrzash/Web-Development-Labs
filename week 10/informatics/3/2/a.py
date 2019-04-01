import math

n = int(input())
i = 1
while i <= n:
	j = int(math.sqrt(i))
	if i == j * j:
		print(i)
	i += 1