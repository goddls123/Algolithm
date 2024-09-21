def solution(phone_book):
    answer = True
    phone_book.sort()
    
    for i in range(0, len(phone_book)-1):
        flag = True
        for j in range(len(phone_book[i])):
            if phone_book[i+1][j]!=phone_book[i][j]:
                flag=False
                break
        if flag :
            answer =False
            break
    return answer
