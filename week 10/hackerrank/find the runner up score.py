if __name__ == '__main__':
    n = int(raw_input())
    arr = map(int, raw_input().split())

    max = -100
    second = -100
    for i in arr:
        if i > max:
            second = max
            max = i
        elif i > second and i != max:
            second = i

    print(second)