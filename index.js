// console.log("Hello Wprld");
// console.log("hello Shyam");
// // alert("Welcome Here");
// document.write("This is for Document.Write");
// console.warn("this is for worning in Js");
// console.error("this is for error in Js");

// console.log("Hello Shyam", 78 + 2);

// // JavaScrip Var
// var number = 50;
// var number2 = 50;
// console.log(number+number2);
// // alert(number+number2);

// // data types
// var str1 = "This Is my string";
// var str2 = "This is my ne Str hare";
// console.log(str1);
// console.log(str2);

// var marks = {
//     Maths: 78,
//     science: 98,
//     History: 90
// }
// console.log(marks);

// // booleans
// var und;
// console.log(und);

// var n =  null;
// console.log(n);

// // there  are two types os datatypes
// // primitive
// // reference

// var arr = [1,2,3,4,5,6,"Shyam"];
// console.log(arr);

// // opraters in Js
// var a = 100;
// var b = 10;
// console.log("The value is a+b",a+b);
// console.log("The valur of a-b is",a-b);
// console.log("the value of a*b is",a*b);
// console.log("the value os a/b is",a/b);

// // assignment oprators

// var d = a;
// console.log(d);

// function agv(x,a){
//     c = (x+a)/2
//     return c;
// }
// d = agv(10,20);
// r = agv(2,4);
// console.log(d,r); 

// var age = 59;
// if(age>=18){
//     console.log('You are aligible for vote');
// }
// else{
//     console.log('you are not alogible for vote');
// }

// var a = 18;
// if(a>=17){
//     console.log('you are a kid');
// }
// else if(a>=18){
//     console.log('you are an adult');
// }
// else if(a>=59){
//     console.log('you are old man');
// }
// else{
//     console.log('Thank you');
// }

// var arr = [1,2,3,4,5,6,7,8,9,0];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     // console.log(arr[i]);
//     if(i==2){
//         continue;
//     }
//     alert(arr[i]);
// }
// console.log(arr[i]);

// let s = 0;
// // while(s<arr.length){
// //     console.log(arr[s])
// //     s++;
// //     alert(arr[s])
// // }
// do{
//     console.log(arr[s])
//     s++;
// }while(s<arr.length);

  // let myArr=["Fan","TV","Camera","Null",35,"true"];
  // console.log(myArr.length);
// myArr.pop("Vikram");
// myArr.push("Shyam")
// myArr.shift()
// myArr.unshift("Shyam")
// console.log(myArr);

// let mysrting = "Shyam is a very bad boy very";
// console.log(mysrting.length);
// console.log(mysrting.indexOf("bad"));
// console.log(mysrting.lastIndexOf("very"));
// console.log(mysrting.slice(0,14));
// d = mysrting.replace("Shyam","Roham");
// console.log(d,mysrting);
// let mydate= new Date();
// document.write(mydate);
// document.write(mydate.getTime());
// document.write(mydate.getDay());
// document.write(mydate.getFullYear());
// document.write(mydate.getMonth())

// let elem = document.getElementById("click");
// console.log(elem);

// let elemClass = document.getElementsByClassName('container');
// console.log(elemClass);
// elemClass[0].style.background = 'green';
// elemClass[0].classList.add("bg-primary");
// console.log("Variable is  as  a container");
// let a = 98;
// console.log(a);
// a = 'Hello Shyam js allow that one variable store multiles task ';
// console.log(a);

// let comp1 = prompt("Enter Number 1 ");
// let comp2 = prompt("Enter Number 2 ");
// document.write("comparision of two num: ",+comp1===comp2);

// let comp1 = prompt("Enter Number");

// let comp2 = prompt("Enter number 2 ");
//  document.write("Comparision of two numbers is: ",comp1==comp2);
// document.write("<br>comp1 != comp2 is: ",comp1!=comp2);
// document.write("<br>Comp1 == comp2 is: ",comp1==comp2);
// document.write("<br>comp1 === comp2",comp1===comp2);
// document.write("<br>comp1 !== comp2",comp1!==comp2);

// let a = prompt("Hey whats your age: ");
// // document.write(a);
// a = number.parseInt(a);
// document.write(typeof a)

// let a = prompt("Hey Whats your age");
// document.write("Your age is ",a);
// if(a<0){
//   alert("Invilide age");
// }
// else if(a<10){
//   alert("Your are a kid");
// }
// else if(a>=18)
// {
//   alert("Your are a Adult")
// }
// else{  
//   alert("You are not a adult");
// }
// document.write("<br>Thank you");

// document.write("  You can ", (a<18? "Not Drive" : "Drive"));

// let a = prompt("Enter Your Age: ");
// if(a>10 && a<20){
//   document.write("<br> u r under 20");
// }
// else{
//   document.write("<br>you r nut under 10 to 20");
// }

// let age = prompt("Ente");
// switch(age){
//   case '10':
//     document.write("your age is 40");
//     break;
//   case '20':
//     document.write("Your Age is 20");
//     break;
//   case '30':
//     document.write("your Age is 30");
//     break;
//   default:
//     document.write("Inter valide date here");
// }
// let num = prompt("Enter number here")
// if(num%2==0 || num%3==0){
//   document.write("your number is divisible by 2 and 3 ");
// }else{
//   document.write("your number is not divisible by 2 and 3 ");
// }
// document.write("<br>Thank you");

// let num = prompt("Enter num ")
// if(num%2==0){
//   document.write("your number is divisible by 2")
// }else{
//   document.write("<br>your number is not divisible by 2")
// }if(num%3==0){
//   document.write("<br>your number is  divisible by 3 ")
// }else("<br>your number is not divisible by 3")


// let num = prompt("Enter num ")
// document.write("you can ",num>18? "drive" : "not drive");

// let sum=0
// let n = prompt("Enter num");
// n = parseInt(n);
// for(let i=0; i<n; i++){
//   sum += (i+1);
//   // document.write((i+1),"+")
// }
// document.write("Sum of first ",n,"<br/>naturam number ",sum);
// let n = prompt("Enter Value of N: ")
// n = Number.parseInt(n)

// let i = 0

// while(i<=n){
//   document.write("\t",i)
//   i++;
// }

// let n = prompt("Enter any number")
// n = Number.parseInt(n)
// let i = 0
// while(i<n){
//   document.write("<br/>",i)
//   i++
// }

// let n = prompt("Enter value of n: ")
// n = Number.parseInt(n)
// let fact;
// let i = 0

// do{
//   fact=fact*i
// i--
// }while(i>=n)
// document.write("<br/>",fact)

// function oneAgv(x,y){
//   return Math.round(1+(x+y)/2)
  
// }

// let a = prompt("Enter a")
// let b = prompt("Enter b")
// a = Number.parseInt(a)
// b = Number.parseInt(b)
// let c = oneAgv(a,b)

// document.write("Agv is ",c)

// let cn = 40
// let i = 0
// while(i!=cn){
//   alert("Try again")
//   i = prompt("Enter a valid Number")

// }document.write("Your Number is Valide")

// let name = "Shyam"
// document.write(name[2])

// let boy1 = "Shyam"
// let boy2 = "Brijesh"

// let sentence = `${boy1} is friend of ${boy2}`
// document.write(sentence)

let name = "Shyam\rm"
document.write(name)