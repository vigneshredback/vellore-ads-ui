sentance = input("enter sentance to reverce: ")

# print(sentance[::-1])

ans = ""
for x in range((len(sentance) - 1),-1,-1):
    ans =  ans + sentance[x]
    

    
print(ans)
