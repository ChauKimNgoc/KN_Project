function checkPrime(n) {
    let flag = 1;
    if (n < 2) return flag = 0

    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return flag = 0;

        }
    }
    return flag;
}


let a = 10
let b = 20
let arrayNumber = []

for (let i = a; i <= b; i++) {
    arrayNumber.push(i)
}
console.log(arrayNumber)

for (let i = 0; i < arrayNumber.length; i++) {
    if (checkPrime(arrayNumber[i]) == 1) console.log(arrayNumber[i])
}