import math

n = int(input())
i = n
isPowerOf2 = True
while i > 1:
	if i % 2 != 0:
		isPowerOf2 = False;
		print("NO")
		break;
	else:
		i /= 2


if isPowerOf2:
	print("YES")