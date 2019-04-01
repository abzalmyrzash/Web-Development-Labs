import math

x = int(input())

cnt = 0
sqrt = int( math.sqrt(x) )
for i in range(1, sqrt + 1 ):
	if x % i == 0:
		cnt += 1

cnt = cnt * 2
if sqrt * sqrt == x:
	cnt -= 1
print(cnt)