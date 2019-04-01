n = int(input())
a = input().split()

cnt = 0
found = False
for i in range(1, n):
	if (int(a[i]) >= 0 and int(a[i-1]) >= 0) or (int(a[i]) < 0 and int(a[i-1]) < 0):
		found = True
		print("YES")
		break

if not found:
	print("NO")