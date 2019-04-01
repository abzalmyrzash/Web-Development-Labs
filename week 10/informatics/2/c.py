import math

student_ans = int(input())
test_ans = int(input())
if (test_ans == 1 and student_ans == 1) or (test_ans != 1 and student_ans != 1):
    print("YES")
else:
    print("NO")