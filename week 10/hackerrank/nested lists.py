def alphabetic_order(a, b):
    if a[0] > b[0]:
        return 1
    elif a[0] < b[0]:
        return -1
    else:
        return 0

if __name__ == '__main__':
    arr = []
    for _ in range(int(raw_input())):
        name = raw_input()
        score = float(raw_input())

        arr.append([name, score])

    arr.sort(alphabetic_order)
    
    min = 100
    second = 100

    for i in arr:
        if i[1] < min:
            second = min
            min = i[1]
        elif i[1] < second and i[1] != min:
            second = i[1]
    
    for i in arr:
        if i[1] == second:
            print(i[0])