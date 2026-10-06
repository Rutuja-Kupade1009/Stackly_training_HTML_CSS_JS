//1. Currying & Uncurrying
//1.Create a curried function that accepts 3 numbers one by one and prints their sum.
function add(a) {
    return function(b) {
        return function(c) {
            console.log("Sum:", a + b + c);
        };
    };
}
add(10)(20)(30);
//2.Create a curried function that accepts name, department, and salary and prints all three values.
function employee(name) {
    return function(department) {
        return function(salary) {
            console.log("Name:", name);
            console.log("Department:", department);
            console.log("Salary:", salary);
        };
    };
}
employee("Rutuja")("IT")(700000);
//3.Create a curried function that accepts 3 numbers and prints their multiplication.
function multiply(a) {
    return function(b) {
        return function(c) {
            console.log("Multiplication:", a * b * c);
        };
    };
}
multiply(2)(3)(4);
//4.Convert a curried function that accepts a, b, and c into an uncurried function.
//curried
function calculate1(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}
console.log(calculate1(10)(20)(30));
//uncurried
function calculate2(a, b, c) {
    return a + b + c;
}
console.log(calculate2(10, 20, 30));
//5.Write both curried and uncurried versions of a function that adds 4 numbers.
//curried
function add1(a) {
    return function(b) {
        return function(c) {
            return function(d) {
                return a + b + c + d;
            };
        };
    };
}
console.log(add1(10)(20)(30)(40));
//uncurried
function add2(a, b, c, d) {
    return a + b + c + d;
}
console.log(add2(10, 20, 30, 40));
//2. Spread Operator
//6.Create two arrays of 5 numbers and merge them using the array spread operator.
let arr1 = [10, 20, 30, 40, 50];
let arr2 = [60, 70, 80, 90, 100];
let result = [...arr1, ...arr2];
console.log(result);
//7.Create two arrays containing student names and merge them into one array using spread.
let students1 = ["Rutuja", "Sneha", "Priya"];
let students2 = ["Rahul", "Amit", "Neha"];
let students = [...students1, ...students2];
console.log(students);
//8.Create an array and create another array containing the original values plus 3 new values using spread.
let numbers = [10, 20, 30, 40, 50];
let newNumbers = [...numbers, 60, 70, 80];
console.log(newNumbers);
//9.Create two objects containing employee details and merge them using the object spread operator.
let employee1 = {name: "Rutuja",department: "IT"};
let employee2 = {designation: "Java Developer",experience: 2};
let employee3 = {...employee1,...employee2};
console.log(employee3);
//10.Create an employee object and create a new object by copying it and adding a salary property using spread.
let employee4 = {name: "Rutuja",designation: "Java Developer"};
let newEmployee = {...employee4,salary: 700000};
console.log(newEmployee);
//11.Create two objects with different properties and combine them into one object using spread.
let personalDetails = {name: "Rutuja",age: 24};
let professionalDetails = {company: "Stackly",role: "Java Full Stack Developer"};
let employee5 = {...personalDetails,...professionalDetails};
console.log(employee5);
//12.Create two arrays and use spread to create one array in reverse order.
let array1 = [1, 2, 3];
let array2= [4, 5, 6];
let res = [...array1, ...array2].reverse();
console.log(res);
//3. Rest Operator in Functions
//13.Create a function that accepts two fixed values and stores all remaining values using the rest operator.
function numbers1(a, b, ...remaining) {
    console.log("First:", a);
    console.log("Second:", b);
    console.log("Remaining:", remaining);
}
numbers1(10, 20, 30, 40, 50);
//14.Create a function student(name, department, ...marks) and print the name, department, and marks.
function student1(name, department, ...marks) {
    console.log("Name:", name);
    console.log("Department:", department);
    console.log("Marks:", marks);
}
student1("Rutuja", "Computer Science", 85, 90, 88, 92);
//15.Create a function that accepts two numbers and any number of additional numbers using rest.
function calculate2(a, b, ...numbers) {
    console.log("First number:", a);
    console.log("Second number:", b);
    console.log("Additional numbers:", numbers);
}
calculate2(10, 20, 30, 40, 50, 60);
//16.Create a function that prints the 5th value from the rest parameter.
function numbers5(...values) {
    console.log("5th value:", values[4]);
}
numbers5(10, 20, 30, 40, 50, 60);
//17.Create a function that accepts product, price, and remaining values using rest and prints them.
function productDetails(product, price, ...details) {
    console.log("Product:", product);
    console.log("Price:", price);
    console.log("Remaining details:", details);
}
productDetails("Laptop", 60000, "Dell", "16GB RAM", "512GB SSD");
//18.Create a function that receives 10 numbers and uses rest to store all values after the first two.
function numbers6(a, b, ...remaining) {
    console.log("First:", a);
    console.log("Second:", b);
    console.log("Remaining:", remaining);
}
numbers6(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);
//4. Array Destructuring
//19.Create an array of 4 values and extract all four values using array destructuring.
let values = [10, 20, 30, 40];
let [a, b, c, d] = values;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
//20.Create an array of student details and extract the first, second, and third values using destructuring.
let student3 = ["Rutuja", "Computer Science", 9.66];
let [name, department, cgpa] = student3;
console.log("Name:", name);
console.log("Department:", department);
console.log("CGPA:", cgpa);
//21.Create an array of 5 numbers and extract only the first and fourth values using destructuring.
let numbers7 = [10, 20, 30, 40, 50];
let [first, , , fourth] = numbers7;
console.log("First:", first);
console.log("Fourth:", fourth);
//22.Create a nested array and extract its values using nested destructuring.
let data = ["Rutuja", ["Java", "SQL"]];
let [name1, [skill1, skill2]] = data;
console.log("Name:", name1);
console.log("Skill 1:", skill1);
console.log("Skill 2:", skill2);
//23.Given a nested array containing numbers inside 3 levels, extract the required values using nested destructuring.
let data1 = [ 10,[20, [30, 40]]];
let [a1, [b1, [c1, d1]]] = data1;
console.log(a1);
console.log(b1);
console.log(c1);
console.log(d1);
//5. Object Destructuring
//24.Create an employee object with name, designation, and salary. Extract all values using object destructuring.
let employee6 = {
    name2: "Rutuja",
    designation: "Java Developer",
    salary: 700000
};
let { name2, designation, salary } = employee6;
console.log("Name:", name2);
console.log("Designation:", designation);
console.log("Salary:", salary);
//25.Create a student object with name, department, and cgpa. Extract all values using destructuring.
let student = {
    name3: "Rutuja",
    department1: "Computer Science",
    cgpa1: 9.66
};
let { name3, department1, cgpa1 } = student;
console.log("Name:", name3);
console.log("Department:", department1);
console.log("CGPA:", cgpa1);
//26.Create an object with 5 properties and extract only 3 properties using object destructuring.
let employee7 = {
    name4: "Rutuja",
    age4: 24,
    designation4: "Java Developer",
    salary4: 700000,
    city4: "Pune"
};
let {name4,designation4,city4} = employee7;
console.log("Name:", name4);
console.log("Designation:", designation4);
console.log("City:", city4);
//27.Create a nested object containing employee and team details.
//  Extract the employee name and team member names using nested destructuring
let company = {
 employee: {
        name8: "Rutuja",
        designation: "Java Developer"
    },
    team: {
        members: ["Amit", "Sneha", "Rahul"]
    }
};
let {
    employee: { name8 },
    team: { members }
} = company;
console.log("Employee Name:", name8);
console.log("Team Members:", members);
//28.Create a nested object containing company → department → employee and
//  extract the employee name using nested destructuring.
let company2 = {
    department: {
        employee: {
            name9: "Rutuja",
            designation: "Java Developer"
        }
    }
};
let {
    department: {
        employee: {
            name9
        }
    }
} = company2;
console.log("Employee Name:", name9);
//6. Array Manipulation
//29.Create an array of 5 fruits and add 3 more fruits at the end using push().
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
fruits.push("Pineapple", "Watermelon", "Papaya");
console.log(fruits);
//30.Create an array of 5 numbers and remove the last value using pop().
let numbers2 = [10, 20, 30, 40, 50];
numbers2.pop();
console.log(numbers2);
//31.Create an array of 5 student names and remove the first student using shift().
let students9 = ["Rutuja", "Sneha", "Priya", "Amit", "Rahul"];
students9.shift();
console.log(students9);
//32.Create an array of 4 numbers and add 2 numbers at the beginning using unshift().
let numbers10 = [30, 40, 50, 60];
numbers10.unshift(10, 20);
console.log(numbers10);
//33.Create an array [10,20,30,40,50] and replace 30 with 100 using splice().
let numbers11 = [10, 20, 30, 40, 50];
numbers11.splice(2, 1, 100);
console.log(numbers11);
//34.Create an array of 6 values and remove 2 values from the middle using splice().
let numbers12 = [10, 20, 30, 40, 50, 60];
numbers12.splice(2, 2);
console.log(numbers12);
//35.Create an array and add 3 new values in the middle using splice().
let numbers13 = [10, 20, 50, 60];
numbers13.splice(2, 0, 30, 40);
console.log(numbers13);
//36.Create an array and remove 2 values and add 3 new values at the same position using splice().
let numbers14 = [10, 20, 30, 40, 50, 60];
numbers14.splice(2, 2, 300, 400, 500);
console.log(numbers14);
//37.Create a student list and remove one student from the middle using splice().
let students11 = ["Rutuja", "Sneha", "Priya", "Amit", "Rahul"];
students11.splice(2, 1);
console.log(students11);
//38.Create a shopping cart array and perform push, pop, shift, and unshift operations on it.
let cart = ["Laptop", "Mouse", "Keyboard"];
console.log("Original cart:", cart);
// Add item at the end
cart.push("Headphones");
console.log("After push:", cart);
// Remove item from the end
cart.pop();
console.log("After pop:", cart);
// Remove item from the beginning
cart.shift();
console.log("After shift:", cart);
// Add item at the beginning
cart.unshift("Monitor");
console.log("After unshift:", cart);
//7. Array Merge & Extraction Methods
//39.Create two arrays and merge them using concat().
let arr4 = [10, 20, 30];
let arr5 = [40, 50, 60];
let result1 = arr4.concat(arr5);
console.log(result1);
//40.Create three arrays and merge all three using concat().
let arr6 = [10, 20];
let arr7 = [30, 40];
let arr8 = [50, 60];
let result2 = arr6.concat(arr7, arr8);
console.log(result2);
//41.Create an array of 8 values and extract values from index 2 to index 5 using slice().
let numbers15 = [10, 20, 30, 40, 50, 60, 70, 80];
let result3 = numbers15.slice(2, 6);
console.log(result3);
//42.Create an array of student names and extract the first 3 students using slice().
let students15 = ["Rutuja", "Sneha", "Priya", "Amit", "Rahul"];
let result4 = students15.slice(0, 3);
console.log(result4);
//43.Create a nested array with 3 levels and convert it into a single-level array using flat().
let numbers16 = [1, [2, [3, 4]]];
let result5 = numbers16.flat(2);
console.log(result5);
//44.Create a nested array with 4 levels and use flat() to remove the nesting.
let numbers17 = [1, [2, [3, [4, 5]]]];
let result6 = numbers.flat(Infinity);
console.log(result6);
//45.Explain through code the difference between slice() and splice() by performing an operation with both.
let arr9 = [10, 20, 30, 40, 50];
let result7 = arr9.slice(1, 4);
console.log("Original:", arr9);
console.log("Result:", result7);
let arr10 = [10, 20, 30, 40, 50];
let result8 = arr10.splice(1, 2);
console.log("Original:", arr10);
console.log("Removed:", result8);
//8. Search & Other Array Methods
//46.Create an array of numbers and check whether 50 exists using includes().
let numbers18 = [10, 20, 30, 40, 50];
let result9 = numbers18.includes(50);
console.log(result9);
//47.Create an array containing duplicate values and find the first occurrence of a value using indexOf().
let numbers19 = [10, 20, 30, 20, 40, 20];
let result10 = numbers19.indexOf(20);
console.log(result10);
//48.Create an array containing duplicate values and find the last occurrence using lastIndexOf().
let numbers20 = [10, 20, 30, 20, 40, 20];
let result11 = numbers20.lastIndexOf(20);
console.log(result11);
//49.Create an array of numbers and sort it using sort().
let numbers21 = [40, 10, 100, 20, 5];
numbers21.sort();
console.log(numbers21);
//50.Create an array of numbers and reverse its order using reverse(). Pasted markdown
let numbers22 = [10, 20, 30, 40, 50];
numbers22.reverse();
console.log(numbers22);