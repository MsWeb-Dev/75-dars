$(document).ready(function(){
  $('button').click((e)=>{
    let val = $(".name").val()
    // e.preventDefault()

    let val2 = $(".firstname").val()
    console.log(val);
    console.log(val2);
   
    localStorage.setItem(val,val2)
    $("table").append( ' <tr><td>' + val +'</td>' +'<td>' + val2 + '</td></tr>')
    e.preventDefault()

  })
})

// //default parametr

// // function coder (name){
// //     console.log(`${name} is the best coder`)

// // }

// // coder("Shaxnoza")
// // function coder (name="Shaxnoza"){
// //     console.log(`${name} is the best coder`)

// // }

// // coder("SHag'zod")

// // function addNumber (num1=0,num2=0){
// //     console.log(num1+num2)
// // }
// // addNumber(9,8)
// //________________________________
// ///for ofni  objectlarda qollash
// // const student = [
// //     {name:"Aziz",age:16,job:"Developer"},
// //     {name:"Aziza",age:17,job:"Teacher"},
// //     {name:"Azizjon",age:18,job:"Customer"}
// // ]

// // for(let students of student){
// //     console.log(`${students.name} yoshi ${students.age} va u ${students.job} kasbiga qiziqadi`)
// // }
// //____________________________
// //Rest operator
// // function number (...num){
// // for(let numb of num){
// //     // console.log(numb)
// //     // console.log(numb<50)
// //     // numb<50 ? console.log(numb) : console.log()
// //     // numb<40 ? console.log(numb) : console.log()
// //     numb<70 ? console.log(numb) : console.log()
// //     numb<75 ? console.log(numb) : console.log()


// // }
// // }
// // number(45,56,76) //bu yerda 1ta parametr bolganligi uchun faqat 1ta qiymat qaytaradi 
// //rest operatoridan foydalanib 1ta parametr yordamida barcha qiymatlarni chiqarish mumkin
// //buning uchun num parametri oldiga 3ta nuqta qoyiladi ...num


// //___________rest va trenary👆🏻_______________________


// //includes yani array ichidan qidirish
// // const arr =[21,12,32,23,43]
// // //bor bolsa true ,yoq bolsa false qaytadi
// // console.log(arr.includes(21))



// // const group8 =["Aziz","Odina","Shaxnoza","Javohir","Diyor"]

// // const name = "Alisher"

// // group8.includes(name) ? console.log(`${name} bugun darsda qatnashdi`) :console.log(`${name} bugun darsda qatnahmadi`)

// //_____________includes_👆🏻______________

// //class constructor 
// // class car {
// //     constructor(model,year){
// //      this.model  = model,
// //      this.year = year
// //     }
// // }
// // //ezma usul
// // const car1={
// //     model:"Nexia3",
// //     year:2022
// // }
// // //oson usul
// // const car2 = new car("Malibu",2023)
// // const car3 = new car("Matiz",2016)

// // console.log(car1)
// // console.log(car2)
// // console.log(car3)
// //_____________________________________


// //chart js
const myChart = new Chart("myChart", {
    type: "scatter",
    data: {},
    options: {}
  });

// // const myChart = new Chart("myChart", {
// //     type: "line",
// //     data: {},
// //     options: {}
// //   });

// // const myChart = new Chart("myChart", {
// //     type: "bar",
// //     data: {},
// //     options: {}
// //   });

// // var xyValues = [
// //     {x:50, y:7},
// //     {x:60, y:8},
// //     {x:70, y:8},
// //     {x:80, y:9},
// //     {x:90, y:9},
// //     {x:100, y:9},
// //     {x:110, y:10},
// //     {x:120, y:11},
// //     {x:130, y:14},
// //     {x:140, y:14},
// //     {x:150, y:15}
// //   ];
  
// //   new Chart("myChart", {
// //     type: "scatter",
// //     data: {
// //       datasets: [{
// //         pointRadius: 4,
// //         pointBackgroundColor: "rgb(0,0,255)",
// //         data: xyValues
// //       }]
// //     },
// //     options: {
// //       legend: {display: false},
// //       scales: {
// //         xAxes: [{ticks: {min: 40, max:160}}],
// //         yAxes: [{ticks: {min: 6, max:16}}],
// //       }
// //     }
// //   });

// // const xValues = [50,60,70,80,90,100,110,120,130,140,150];
// // const yValues = [7,8,8,9,9,9,10,11,14,14,15];

// // new Chart("myChart", {
// //   type: "line",
// //   data: {
// //     labels: xValues,
// //     datasets: [{
// //       fill: false,
// //       lineTension: 0,
// //       backgroundColor: "rgba(0,0,255,1.0)",
// //       borderColor: "rgba(0,0,255,0.1)",
// //       data: yValues
// //     }]
// //   },
// //   options: {
// //     legend: {display: false},
// //     scales: {
// //       yAxes: [{ticks: {min: 6, max:16}}],
// //     }
// //   }
// // });
// // const xValues = [100,200,300,400,500,600,700,800,900,1000];

// // new Chart("myChart", {
// //   type: "line",
// //   data: {
// //     labels: xValues,
// //     datasets: [{
// //       data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
// //       borderColor: "red",
// //       fill: false
// //     },{
// //       data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
// //       borderColor: "green",
// //       fill: false
// //     },{
// //       data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
// //       borderColor: "blue",
// //       fill: false
// //     }]
// //   },
// //   options: {
// //     legend: {display: false}
// //   }
// // });

// // const xValues = [];
// // const yValues = [];
// // generateData("x * 2 + 7", 0, 10, 0.5);


// // generateData("Math.sin(x)", 0, 10, 0.5);

// var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
// var yValues = [55, 49, 44, 24, 15];
// var barColors = ["red", "green","blue","orange","brown"];
// new Chart("myChart", {
//     type: "line",
//     data: {
//       labels: xValues,
//       datasets: [{
//         fill: false,
//         pointRadius: 1,
//         borderColor: "rgba(255,0,0,0.5)",
//         data: yValues
//       }]
//     },
//     options: {}
//   });
  
//   function generateData(value, i1, i2, step = 1) {
//     for (let x = i1; x <= i2; x += step) {
//       yValues.push(eval(value));
//       xValues.push(x);
//     }
//   }
// new Chart("myChart", {
//     type: "bar",
//   data: {
//     labels: xValues,
//     datasets: [{
//       backgroundColor: barColors,
//       data: yValues
//     }]
//   },
//   options:{}
// });
// new Chart("myChart", {
//     type: "doughnut",
//   data: {
//     labels: xValues,
//     datasets: [{
//       backgroundColor: barColors,
//       data: yValues
//     }]
//   },
//   options:{}
// });
// setInterval(() => {
//     new Chart("myChart", {
//         type: "pie",
//         data: {
//           labels: xValues,
//           datasets: [{
//             backgroundColor: barColors,
//             data: yValues
//           }]
//         },
//         options: {
//           title: {
//             display: true,
//             text: "World Wide Wine Production"
//           }
//         }
//       });
// }, 2000);