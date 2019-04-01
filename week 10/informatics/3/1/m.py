import math

cnt = 0
n = int(input())
for i in range(n):
	x = int(input())
	if x == 0:
		cnt += 1

print(cnt)