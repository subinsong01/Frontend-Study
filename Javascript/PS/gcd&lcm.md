# GCD(최대공약수) vs LCM(최소공배수)

**📍 최소공배수(LCM) 구하는 함수**

```js
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
```

**📍 최대공약수(GCD) 구하는 함수 (유클리드 호제법)**

```js
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
```
