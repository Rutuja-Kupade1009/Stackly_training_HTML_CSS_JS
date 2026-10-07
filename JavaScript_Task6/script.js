// Array Higher-Order Methods 
//1.Create an array of 5 numbers and use forEach() to print each number.
let numbers = [10, 20, 30, 40, 50];
numbers.forEach(function(number) {
    console.log(number);
});
//2.Create an array of student names and use forEach() to print:Hello, <name></name>
let students = ["Rutuja", "Priya", "Sneha", "Amit"];
students.forEach(function(name) {
    console.log("Hello, " + name);
});
//3.Create an array of numbers and use map() to create a new array containing each number multiplied by 2.
let numbers1=[10,20,30,40,50];
let res=numbers1.map(function(number){
    return number*2;
});
console.log(res);
//4.Create an array of prices and use map() to add 100 to every price.
let numbers2=[10,20,30];
let res1=numbers2.map(function(number){
    return number+100;
});
console.log(res1);
//5.Create an array of numbers and use filter() to get only even numbers.
let numbers3=[1,2,3,4,5,6,7,8,9];
let res2=numbers3.filter(function(number){
    return number%2==0;
});
console.log("Even no:",res2);
//6.Create an array of ages and use filter() to get students whose age is greater than or equal to 18.
let ages=[16,28,23,25,18,14,17,24,29,10];
let filteredAges=ages.filter(function(n){
    return n>=18;
});
console.log("filtered ages:",filteredAges);
//7.Create an array of numbers and use find() to find the first number greater than 50.
let numbers4=[10,20,30,40,50,60,70,80,90,100];
let filteredno=numbers4.find(function(n){
   return n>50;
});
console.log(filteredno);
//8.Create an array of student objects with name and mark. Use find() to 
// find the first student whose mark is greater than 80.
let students1 = [
    { name: "Rutuja", mark: 75 },
    { name: "Priya", mark: 85 },
    { name: "Sneha", mark: 90 },
    { name: "Amit", mark: 70 }
];
let student = students1.find(function(student) {
    return student.mark > 80;
});
console.log(student);
//9.Create an array of numbers and use reduce() to calculate the total sum.
let numbers5=[10,20,30,40];
let sum=numbers5.reduce(function(total, number){
return total+number;
},0);
console.log(sum);
//10.Create an array of prices and use reduce() to calculate the total price.
let prices=[100,200,234,120,156,300];
let pricesSum=prices.reduce(function(t,n){
return t+n;
});
console.log(pricesSum);
//11.Create an array of numbers and use some() to check whether at least one number is greater than 100.
let numbers6 = [20, 40, 80, 120, 50];
let result = numbers6.some(function(number) {
    return number > 100;
});
console.log(result);
//12.Create an array of marks and use every() to check whether all students scored above 35.
let marks = [45, 60, 75, 80, 50];
let result1 = marks.every(function(mark) {
    return mark > 35;
});
console.log(result1);
//Sort / Join / Array Conversion
//13.Create an array of numbers and sort them in ascending order using sort() with a callback.
let numbers7 = [50, 20, 40, 10, 30];
numbers7.sort(function(a, b) {
    return a - b;
});
console.log(numbers7);
//14.Create an array of numbers and sort them in descending order.
let numbers8=[10,20,30,56,23,50];
numbers8.sort(function(a,b){
return b-a;
});
console.log(numbers8);
//15.Create an array of student names and convert the array into a string using toString().
let students2 = ["Rutuja", "Priya", "Sneha", "Amit"];
let result2 = students2.toString();
console.log(result2);
//16.Create an array of names and combine them using join() with " - ".
let names = ["Rutuja", "Priya", "Sneha", "Amit"];
let result3 = names.join(" - ");
console.log(result3);
//17.Create an array of products and use join() to display them as one sentence separated by commas.
let products = ["Laptop", "Mobile", "Tablet", "Headphones"];
let result4 = products.join(", ");
console.log(result4);
//String Methods 
//18.Create a string "JavaScript" and print the character at index 4 using charAt().
let Str="Javascript";
let c=Str.charAt(4);
console.log(c);
//19.Create a string and use charCodeAt() to find the character code of its first character.
let str = "JavaScript";
let result5 = str.charCodeAt(0);
console.log(result5);
//20.Create a string containing "Hello JavaScript" and print its length.
let str1 = "Hello JavaScript";
console.log(str1.length);
//21.Create "JavaScript Developer" and use slice() to extract "JavaScript".
let str2 = "JavaScript Developer";
let result6 = str2.slice(0, 10);
console.log(result6);
//22.Create a string containing lowercase text and convert it to uppercase using toUpperCase().
let str3 = "javascript developer";
let result7 = str3.toUpperCase();
console.log(result7);
//23.Create a string containing uppercase text and convert it to lowercase using toLowerCase().
let str4 = "JAVASCRIPT DEVELOPER";
let result8 = str4.toLowerCase();
console.log(result8);
//24.Create a string with spaces before and after the text. Remove the extra spaces using trim().
let str5 = "   JavaScript Developer   ";
let result9 = str5.trim();
console.log(result9);
//25.Take a sentence from the user using prompt() and use includes(), indexOf(), startsWith(),
//  and endsWith() to check different parts of the sentence.
let sentence = prompt("Enter a sentence:");
console.log("Includes JavaScript:", sentence.includes("JavaScript"));
console.log("Index of JavaScript:", sentence.indexOf("JavaScript"));
console.log("Starts with Hello:", sentence.startsWith("Hello"));
console.log("Ends with Developer:", sentence.endsWith("Developer"));
// Date Methods 
//26.Create a new Date object and print the current: Year Month Date Day
let date = new Date();
console.log("Year:", date.getFullYear());
console.log("Month:", date.getMonth() + 1);
console.log("Date:", date.getDate());
console.log("Day:", date.getDay());
//27.Create a new Date object and print the current: Hours Minutes Seconds
let date1 = new Date();
console.log("Hours:", date1.getHours());
console.log("Minutes:", date1.getMinutes());
console.log("Seconds:", date1.getSeconds());
//28.Create a date and change its year using setFullYear().
let date2 = new Date();
console.log("Before:", date2);
date2.setFullYear(2030);
console.log("After:", date2);
//29.Create a date and change its month and date using setMonth() and setDate().
let date3 = new Date();
date3.setMonth(5);
date3.setDate(15);
console.log(date3);
//30.Get the user's date of birth using prompt(), create a Date object, and find the day of the week on which they were born.
let dob = prompt("Enter your date of birth (YYYY-MM-DD):");
let birthDate = new Date(dob);
let day = birthDate.getDay();
let dayName;
if (day === 0) {
    dayName = "Sunday";
} else if (day === 1) {
    dayName = "Monday";
} else if (day === 2) {
    dayName = "Tuesday";
} else if (day === 3) {
    dayName = "Wednesday";
} else if (day === 4) {
    dayName = "Thursday";
} else if (day === 5) {
    dayName = "Friday";
} else {
    dayName = "Saturday";
}
console.log("You were born on:", dayName);