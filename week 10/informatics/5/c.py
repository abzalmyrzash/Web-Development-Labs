def Xor(x, y):
	return x != y

x, y = input().split()
x, y = int(x), int(y)
if Xor(x, y):
	print(1)
else:
	print(0)