import math
def isLeapYear(y):
    if y%4 == 0 and y%100 != 0 or y%400 == 0:
        return True
year = int(input())
if isLeapYear(year):
    print("YES")
else:
    print("NO")