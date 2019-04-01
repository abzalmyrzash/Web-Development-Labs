n = int(input())
a = input().split()

cnt = 0
for i in a:
	if int(i) > 0:
		cnt += 1

print(cnt)