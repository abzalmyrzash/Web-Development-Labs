n = int(input())
a = input().split()

#a.reverse()
for i in range(n//2):
	temp = a[i]
	a[i] = a[n - i - 1]
	a[n - i - 1] = temp

for i in a:
	print(i)