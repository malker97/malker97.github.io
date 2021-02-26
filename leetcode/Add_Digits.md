```C
int addDigits(int num){
    if(num < 10)
        return num;
    int temp_num = 0;
    while(num){
        printf("num: %d\n",num);
        temp_num += num%10;
        printf("temp_num: %d\n",num);
        num/=10;
    }
    return addDigits(temp_num);
}
```