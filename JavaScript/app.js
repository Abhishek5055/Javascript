// // // console.log('Hello World');
// // // console.log("Alva's College");
// // let a =10;
// // let b = 5;
// // // console.log("sum is :",a+b)
// // console.log(`Your pay is: ${a+b} rupees`);


// // Arithmetic Operators
// let a  = 10;
// let b = 5;
// console.log(a+b);
// console.log(a-b)
// console.log(a*b)
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);

// //Unary Operators
// let c= 5;
// let d = 2;

// console.log(c++);
// console.log(d--);

// let e=3;
// let f=4;

// console.log(++e);
// console.log(--f);

// // Assignment Operators

// let g = 4;
// let h = 2;

// console.log(g=h);
// console.log(g)


// // Comparison Operators
// let age = 18;
// console.log(age > 18); //false 

// Conditional Statements ;
// console.log("before if statements ");
// let age = 23;
// if (age >= 18){
//     console.log("You can Vote");
//     console.log("You can drive");
// }
// console.log("After if statements ");

// let firstName = "Abhishek";
// if(firstName == "Abhishek"){
//     console.log(`Hello ${firstName}`);
// }


// let color = "yellow";
// // Traffic light System only using if
// if(color === "red")
// {
//     console.log(`Traffic light is ${color}: stop`);
// }

// if (color === "yellow")
// {
//     console.log(`Traffic light is ${color}: slow Down`);
// }

// if (color === "green")
// {
//     console.log(`Traffic light is ${color}: go`);
// }

// //Else-if Statements
// let age = 12;
// if (age >=18)
// {
//     console.log("You can vote");
// }
// else if (age <18)
// {
//     console.log("You cannot vote");
// }

// let marks = 78;
// if(marks <= 100 & marks >=80)
// {
//     console.log("A")
// }
// else if (marks >=60)
// {
//     console.log("B")
// }
// else if (marks >=35)
// {
//     console.log("C")
// }
// else if (marks< 35)
// {
//     console.log("F");
// }

// // else
// let marks = 78;
// if(marks <= 100 & marks >=80)
// {
//     console.log("A")
// }
// else if (marks >=60)
// {
//     console.log("B")
// }
// else if (marks >=35)
// {
//     console.log("C")
// }
// else
// {
//     console.log("F");
// }

// let age = 18;
// if(age >=18){
//     console.log('You can vote');
// }
// else{
//     console.log('You cannot vote');
// }

// ///Practice Questions
// let size = 'S';
// if(size === 'XL')
// {
//     console.log("Price is Rs:250")
// }
// else if (size === 'L')
// {
//     console.log("Price is Rs.200");
// }
// else if (size === 'M')
// {
//     console.log("Price is Rs.100");
// }
// else
// {
//     console.log("Price is Rs.50");
// }

// // Nested - if else statements
// let marks = 33;
// if (marks >= 33)
// {
//     if(marks >80)
//     {
//         console.log("Marks greater than 80");
//     }
//     else if (marks >50)
//     {
//         console.log("Marks are gfreater than 50 but less than 80");
//     }
//     else
//     {
//         console.log("Marks are greater than 32 and less than 50");
//     }
// }
// else {
//     console.log("Marks are less than 33");
// }

// let marks = 95;

// if(marks >=33)
// {
//     console.log("Pass");
//     if (marks >=80){
//         console.log("Grade: O");
//     }
//     else{
//         console.log("Grade: A");
//     }
// }
// else{
//     console.log("Better luck next time");
// }

// //Logical Operators
// let mks =  90;

// if(mks >=45 && mks >=50){
//     console.log("Pass")
// }

// let mks = 90;

// if(mks >=45 || mks >=50){
//     console.log("Pass")
// }

// //Not Operators
// let mks = 90;

// if (!(mks < 33)){
//     console.log("Pass");
// }

// let mks = 90;

// if ((mks < 33 && mks <=80) || !false){
//     console.log("Pass"); // pass
// }

// // Practice Qs:
// let letter = "abhi";
// c = letter[0]
// if(c == 'a' && letter.length>3)
// {
//     console.log("Good String");
// }
// else
// {
//     console.log("Not a Good String");
// }

// //Truth or Falsy Values
// if(''){
//     console.log("It has True Value");
// }else{
//     console.log("It has False Value");
// }

// // // Switch Statement
// // let color = "green";
// // switch (color)
// // {
// //     case "red":
// //         console.log("Stop");
// //         break;
// //     case "yellow":
// //         console.log("Slow Down");
// //         break;   
// //     case "green":
// //         console.log("Go");
// //         break;
// //     default :
// //         console.log("Broken Light");

// // }

// // console.log("After switch statement");

// // Example 2:
// let day = 5;
// switch (day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//     default :
//         console.log("Wrong Day");
// }

// // // Alert and prompt
// // alert("Something is missing");
// // prompt("Enter Your Name:");
// // console.error("This is an error msg");
// // console.warn("This is a warning msg");

// // //prompt message 
// // let userName = prompt("Enter your Name");
// // console.log(`Your Name is ${userName}`);

// // Example
// let f = prompt("Enter Your firstName: ");
// let l = prompt("Enter Your lastName:");
// // console.log(`Welcome ${f} ${l}`);
// let msg= (`Welcome ${f} ${l}`);
// alert(msg);

// Questions
// let num = 20;
// if(num %10 == 0){
//     console.log("Good");
// }
// else{
//     console.log("Bad");
// }

// //2nd Question
// let nams = prompt("Enter Your name:");
// let age = prompt("Enter Your age:");
// let msg = (`${nams} is ${age} years old`);
// alert(msg);

// //3rd Question
// let quarter = 1;
// switch(quarter){
//     case 1:
//         console.log("Months in Quarter 1: January, February, March");
//         break;
    
//     case 2:
//         console.log("Months in Quarter 2: April , May, June ");
//         break;
    
//     case 3:
//         console.log("Months in Quarter 3: July , August ,September");
//         break;
    
//     case 4:
//         console.log("Months in Quarter 4: October, November, December");
//         break;

//     default: console.log("Not a Quarter");
// }

// // 4th Question
// let str = 'Abcdef';
// if((str[0] === 'a' || str[0] === 'A') &&  (str.length >5)){
//     console.log("golden");
// }else{
//     console.log("not golden");
// }


// // 5th Question
// let a = 222;
// let b = 31;
// let c= 4;

// if(a>=b && a>=c){
//     console.log(a);
// }
// else if(b>=a && b>=c){
//     console.log(b);
// }
// else{
//     console.log(c);
// }


// // //6th Question
// // let a = 23;
// // let b = 23453;
// // let c = Math.abs(a % 10); // Get the last digit of a
// // let d = Math.abs(b % 10); // Get the last digit of b]
// // if(c === d)
// // {
// //     console.log(`Same digit i.e ${c}`);
// // }
// // else{
// //     console.log("Not have same digit");
// // }

// // // or use this one
// // //or use this or above one
// let a = 23;
// let b = 23453;
// if((a%10) == (b%10))
// {
//     console.log("Same last digit", a%10);
// }
// else{
//     console.log("Not same last digit");
// }

// //Trim Method
// let msg= "  Hello   ";
// console.log(msg.trim()); //Hello

// //3rd method 
// let name = "Abhishek";
// console.log("The UpperCase of the given string is :",name.toUpperCase());
// console.log("The LowerCase of the given string is :",name.toLowerCase());


// // index method
// let str = "Abhishek VK Bgm";
// console.log(str.indexOf("A"));
// console.log(str.indexOf("j"));
// console.log(str.indexOf("h"));
// console.log(str.indexOf("VK")); // it will give first occurence

// // Method Chaining 
// // let msg = "   Abhi     ";
// // c = msg.trim();
// // console.log(c)
// // c = c.toUpperCase();
// // console.log(c);
// // // or u can use like this instead of that long code
// let msg = "   Abhi    ";
// let newMsg = msg.trim().toUpperCase();
// console.log(newMsg);

// // //  String slice method 
// // let str = "Good Morning";
// // let msg = str.slice(5);
// // console.log(msg);
// // console.log(str.slice(1,4)); // here upto 4 th index it will print.
// // console.log(str.length); // 12
// // console.log(str.slice(-2)); // 12 -2 = 10th index all letter will print.
// let str = "IloveCoding";
// console.log(str.slice(1,4));

// // replace method
// let str = "ILoveCoding";
// console.log(str.replace("Love","do"));// It will replace love to do in the strr string.
// console.log(str.replace("o","X"));

// // repeat method
// let str = "Mango";
// console.log(str.repeat(3)); // MangoMangoMango 

// Practice Questions
// let msg = "help!";
// console.log(msg.trim().toUpperCase());

// // 2nd Question
// let name = "ApnaCollege";
// console.log(name.slice(4,9)); // Colle
// console.log(name.indexOf("na")); // It will give first letter index
// console.log(name.replace("Apna","Our")); // OurCollege

// // // 3rd Question
// // let name = "ApnaCollege";
// // let newname = name.slice(4).replace("l","t"); // Cotlege
// // console.log(newname.replace("l","t")); // Cottege
// // or another method 
// let name = "ApnaCollege";
// console.log(name.slice(4).replace("l","t").replace("l","t"));


// // Array Data Structure
// let stu = ["Abhi","Rushi",1,true ]

// Visualising Arays
// let marks=[99,86,100]
// console.log(marks)


// let info=[99,86,100,"Abhi",'abc',5.6]
// console.log(info)

// //Array Methods
// let cars=["Tata","Maruti","Mahindra","Honda"]
// console.log(cars.push("Scorpio"))  // push adds a element to an end
// console.log(cars)

// let cs=[2,3,4,5,6]
// console.log(cs.pop())
// console.log(cs)

// let followers = ["a","b","c"]
// let blocked = followers.shift();

// blocked
// 'a'
// followers
// (2)['b', 'c']

// //practice questions
// let a=["january","july","march","august"]
// a.shift()
// a.shift()
// a.unshift("june")
// a.unshift("july")

// console.log(a)

// //Array Methods
// let primary=["red","blue","yellow"]
// primary.indexOf('red') // 0 
// primary.indexOf('green') // -1 because not there
// primary.indexOf('blue') // 1

// primary.includes('red') // true
// primary.includes('pink') //false


// let primary=["red","blue","yellow"]
// let secondary=["yellow","blue","green"]

// primary.concat(secondary) // // ['red', 'blue', 'yellow', 'yellow', 'blue', 'green']
// primary.reverse()  // //  ['yellow', 'blue', 'red']
// // in reverse method original array changes . but in concat method original array remains same but new array will hold the changed value


// slice:copies a portion of an array
//slice methods
// let colors  =['red','blue','green','pink','yellow']
// console.log(colors.slice()); //['red', 'blue', 'green', 'pink', 'yellow'
// console.log(colors.slice(2)); //['green', 'pink', 'yellow']
// console.log(colors.slice(2,3)); // ['green']
// console.log(colors.slice(2,4)) // ['green', 'pink']
// console.log(colors.slice(-2)); // ['pink', 'yellow']
// console.log(colors.slice(-4,-2)); // ['blue', 'green']

// splice : removes / replaces/add elements in place

// let colors = ["red","yellow","blue","green","orange","pink"];
// // colors.splice(4); //['orange','pink']
// // colors; // ['red','yellow','blue','green']
// // colors.splice(0,1); // ['red']
// // colors;//['yellow','blue','green']
// // colors.splice(0,1,'violet','vanilla');// ['yellow']
// // colors;//['violet','vanilla','blue','green']
// colors.splice(3,3,"ac","cd");//['green', 'orange', 'pink']
// colors; //['red', 'yellow', 'blue', 'ac', 'cd']
// colors.splice(0,0,"as","cd");//[]
// colors;//['as', 'cd', 'red', 'yellow', 'blue', 'green', 'orange', 'pink']

// colors.splice(1,0,"lime"); //[]
// colors; //['red', 'lime', 'yellow', 'blue', 'green', 'orange', 'pink']

// colors.splice(1,1,"bore"); // ['yellow']
// colors; //['red', 'bore', 'blue', 'green', 'orange', 'pink']


// // sort  methgid
// let alphabets=['a','b','f','c','i','g']
// // alphabets.sort();

// // let squares=[4,36,25,81,9,125];
// // squares.sort(); //  [125, 25, 36, 4, 81, 9]

// practice Questions
// Queation 1
// let a=['january','july','march','august'];
// a.splice(0,2,"july","june");

// // Question 2
// let lan=['c','c++','html','javascript','python','java','c#','sql']
// lan.reverse().indexOf('javascript')

// // Array Refernces
// let arr=['a','b','c','d']
// let arrCopy = arr;
// undefined
// arr === arrCopy;
// true
// arr == arrCopy;
// true
// arr.push('d')
// 5
// arr;
// ['a', 'b', 'c', 'd', 'd']
// arrCopy;
// ['a', 'b', 'c', 'd', 'd']
// arrCopy.pop('d');
// 'd'
// arr
// ['a', 'b', 'c', 'd']
// arrCopy;
// ['a', 'b', 'c', 'd']

// //Constant arrays
// const arr=[1,2,3,4];
// arr;//[1, 2, 3, 4]
// arr.push(4);//5
// arr;//[1, 2, 3, 4, 4]
// arr.pop(4);//4
// arr;//[1, 2, 3, 4]
// // arr = [1,5,6];//VM1276:1 Uncaught TypeError: Assignment to constant variable. at <anonymous>:1:5

// // Nested Arrays
// let nums = [[1,2],[3,4],[5,6]];
// console.log(nums) //(3) [Array(2), Array(2), Array(2)]
// console.log(nums.length) // 3
// console.log(nums[0]) // (2) [1,2]
// console.log(nums[0].length); // 2
// console.log(nums[0][0])// 1

// // Tic -tac o toe game
// let game = [['X',null,'O'],[null,'X',null],['O',null,'X']];


// //pratice Qs
// let array=[7,9,0,-2]
// let n =3;
// console.log(array.slice(0,n));
// // console.log(array.reverse().slice(0,n).reverse());
// console.log(array.slice(array.length-n));

// // 3 Questions
// let str = prompt("Enter a string");
// if(str.length == 0){
//     console.log("String is  empty")
// }
// else{
//     console.log("String is not empty")
// }

// // 4 Question
// let str = "AbHishEk";
// let idx=2;

// if(str[idx] == str[idx].toLowerCase())
// {
//     console.log("Character is lowercase")
// }
// else{
//     console.log("Character is not lowercase")
// }

// // 5 Question
// let ab="    bced   "
// console.log(ab.trim())

// // 6 Question
// let arr =["hello","a",99,85,99];
// let item = 85;

// if(arr.indexOf (item)!=-1)
// {
//     console.log("elements exists in array");
// }
// else{
//     console.log("element doesn't exist in array");
// }
