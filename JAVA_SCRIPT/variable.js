// function abc()
//         {
//             alert("welcome")
//         }

// variables

// "use strict"

// var a=20;
// console.log(a);
// console.log(typeof a)

// let b="dinga";
// console.log(b);
// console.log(typeof b)

// const c='A';
// console.log(c);
// console.log(typeof c)

// var d=20.9;
// console.log(d);
// console.log(typeof d)

// let e=true;
// console.log(e);
// console.log(typeof e)

// With out using strict

// var a=20;
// console.log(a);
// console.log(typeof a)

// let b="dinga";
// console.log(b);
// console.log(typeof b)

// const c='A';
// console.log(c);
// console.log(typeof c)

// var d=20.9;
// console.log(d);
// console.log(typeof d)

// let e=true;
// console.log(e);
// console.log(typeof e)


// var keyword

// var num;
// num="dinga";
// var num="dinga";
// console.log(num)


// let keyword

// let num;
// num=30;
// console.log(num)
// let num;
// num="dinga";
// let num="dinga"
// console.log(num)


// const keyword

// const num=40;
// // cont num;
// num="dinga";

// hoisting process

// console.log(num)
// var num=10;
// console.log(num)


// // console.log(num1)   hoisting process is not possible baecuse of temporal dead zone (TDZ)
// let num1="dharani"
// console.log(num1)


// // console.log(PI)    hoisting process is not possible baecuse of temporal dead zone (TDZ)
// const PI=3.14;
// console.log(PI)

// SCOPES IN JAVASCRIPT

// GLOBAL SCOPE ==>> global scope variables we can access anywhere with in the area
// var name1="dharani";
// console.log(name1)
// let num=30.7;
// console.log(num)
// const PI=3.14;
// console.log(PI)

// {
//   console.log(name1)
//   console.log(num) 
//   console.log(PI) 
// }

// function abc()
// {
//     console.log(name1)
//     console.log(num) 
//     console.log(PI) 
// }
// abc()

// BLOCKED SCOPE ==>> We can access with in that block only.

// {
//     var b=30;
//     console.log(b)
//     let name1="dharani";
//     console.log(name1)
//     const a=9.81;
//     console.log(a)
// }

// console.log(b)
// console.log(name1)
// console.log(a)

// FUNCTION SCOPE / LOCAL SCOPE

// function demo()
// {
//     var a=50;
//     console.log(a)
//     let name1="usha";
//     console.log(name1)
//     const PI=3.14;
//     console.log(PI)
// }
// demo()


// EXECUTION PROCESS IN JAVA SCRIPT

// console.log("starts")
// var a=20;
// console.log(a)
// let name1="dharani";
// console.log(name1)
// const PI=3.14;
// console.log(PI)
// console.log("ends")

// EXECUTION PROCESS IN JAVA SCRIPT WITH HOISTING PROCESS

// console.log("starts")
// console.log(a)
// var a=40;
// console.log(a)
// console.log(name1)
// let name1="dharani";
// console.log(name1)
// console.log(PI)
// const PI=3.14;
// console.log(PI)
// console.log("ends")

// GLOBAL VARIABLES WITH LOCAL VARIABLES

// console.log("starts")
// const PI=3.14;
// function demo()
// {
//     var b=20;
//     console.log(b)
//     let name1="dharani";
//     console.log(name1)
//     const a=9.81;
//     console.log(a) 
// }
// demo()
// console.log(PI)
// let name1="dingi";
// console.log("ends")

// EXECUTION PROCESS CALLING ONE FUNCTION INSIDE ANOTHER FUNCTION

// console.log("Starts");
// var num=30;
// demo2();
// console.log(num);

// function demo1()
// {
//     var num1=40;
//     console.log(num1);
//     let name1="dharani";
//     console.log(name1);
//     const PI=3.14;
//     console.log(PI);
// }

// function demo2()
// {
//     const PI=3.14;
//     demo1();
//     console.log(PI)
// }

// console.log("Ends")

// FUNCTION INSIDE ANOTHER FUNCTION (NESTED FUNCTION)

// console.log("Starts");
// function parent() 
// {
//     var b=20;
//     console.log(b);
//     let name1="dharani";
//     console.log(name1);
//     const a=9.81;
//     console.log(a); 

//     function child()
//     {
//         console.log(b);
//         console.log(name1);
//         console.log(a);
//     }
//     child()
// }
// parent()

// console.log("Ends")

console.log("Starts");
function parent()
{
    var num=30;
    console.log(num);
    let name1="dharani";
    console.log(name1);
    const a=9.81;
    console.log(a);

    function parent1()
    {
        var num1=50;
        console.log(num1);
        let name2="usha";
        console.log(name2);
        const PI=3.14;
        console.log(PI);

        function child()
        
        {
            console.log(num);
            console.log(name1);
            console.log(a);
            console.log(num1);
            console.log(name2);
            console.log(PI);
        }
        child()
    }parent1()
}parent()

console.log("Ends")