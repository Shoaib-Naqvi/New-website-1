
// Swap two numbers
// using third variable

function swapNumbersUsingThirdVariable(x, y) {
    console.log(`"Before swapping:" x = ${x}, y = ${y}`);
    var result = x;
    x = y;
    y = result;
    console.log(`"After swapping:" x = ${x}, y = ${y}`);

}
swapNumbersUsingThirdVariable(2,7);


// Swap two numbers without using third variable
function swapNumbersWithoutThirdVariable(x, y) {
    console.log(`"Before swapping:" x = ${x}, y = ${y}`);
    x = x + y; // x now becomes 9

    y = x - y; // y becomes 7

    x = x - y;  // x becomes 2
    
 
    console.log(`"After swapping:" x = ${x}, y = ${y}`);

}
swapNumbersWithoutThirdVariable(2,7);




// Fibonacci Series




function fibonacciSeries(n) {
    var a = 0;
     var b = 1;
       var nextTerm;
    console.log('Fibonacci Series:');
    for (let i = 1; i <= n; i++) {
        console.log(a); // Print the first term
        nextTerm = a + b; // Calculate the next term

        a = b; // Update a to the next term
        b = nextTerm; // Update b to the next term
    }

}

fibonacciSeries(7);



// Sum of n natural numbers
function sumOfNumbers(n) {
    var sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i; // sum = sum + i
    }
    console.log(`Sum of first ${n} natural numbers is: ${sum}`);


}
sumOfNumbers(8);



//armstrongNumber

 armstrongNumber 
function armstrongNumber(n) {
    var sum = 0;
    var temp = n;
    while (temp > 0) {
        var remainder = temp % 10;
        sum += remainder * remainder * remainder;
        temp = parseInt(temp / 10);
    }
    if (sum == n) {
        console.log(`${n} is an Armstrong number`);
    } else {
        console.log(`${n} is not an Armstrong number`);
    }
}

armstrongNumber(153);


// Perfect Number
function isPerfectNumber(n) {
    var sum = 0;
    for (let i = 1; i <= n / 2; i++) {
        if (n % i == 0) {

            sum += i;
        }
    }
    if (sum == n) {

        console.log(`${n} is a Perfect number`);
    }   
    else {
        console.log(`${n} is not a Perfect number`);
    }
}
isPerfectNumber(28);



//performStringReverse

function performStringReverse(str) {
    var reversedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    console.log(`Reversed string is: ${reversedString}`);
}
performStringReverse("hello");
       

//performNumberReverse
function performNumberReverse(num) {
    var reversedNumber = 0;

    while (num > 0) {
        var remainder = num % 10;
        reversedNumber = reversedNumber * 10 + remainder;
        num = parseInt(num / 10);
    }
    console.log(`Reversed number is: ${reversedNumber}`);
}
performNumberReverse(12345);


//checkPalindrome
function checkPalindrome(str) {
    var reversedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    if (str == reversedString) {    
        console.log(`${str} is a palindrome`);
    } else {
        console.log(`${str} is not a palindrome`);
    }   
}
checkPalindrome("madam");   

// Prime Number

var s =5;
 var t = 6;

 function PrimeNumber(s,t){
    for (let i = s; i <= t; i++) 
        var u=0;
        for (let j = 1; j <= s; j++) {
            if (s % j == 0) {
                u++;
            }
        }
        if (u == 2) {
            console.log(s);
        }
    }
    
PrimeNumber(5,6);









