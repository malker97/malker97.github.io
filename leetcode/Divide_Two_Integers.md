``` C++
class Solution {
public:
    int divide(int dividend, int divisor) {
        if (dividend == INT_MIN && divisor == -1) return INT_MAX;//唯一的问题就是他会爆int,除此之外，这破题真不配叫medium
        long loong_dividend = (long)dividend;
        long loong_divisor = (long)divisor;
        return (long)(dividend/divisor);
    }
};
```