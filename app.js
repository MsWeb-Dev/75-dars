//default parametr

// function coder (name){
//     console.log(`${name} is the best coder`)

// }

// coder("Shaxnoza")
// function coder (name="Shaxnoza"){
//     console.log(`${name} is the best coder`)

// }

// coder("SHag'zod")

// function addNumber (num1=0,num2=0){
//     console.log(num1+num2)
// }
// addNumber(9,8)
//________________________________
///for ofni  objectlarda qollash
// const student = [
//     {name:"Aziz",age:16,job:"Developer"},
//     {name:"Aziza",age:17,job:"Teacher"},
//     {name:"Azizjon",age:18,job:"Customer"}
// ]

// for(let students of student){
//     console.log(`${students.name} yoshi ${students.age} va u ${students.job} kasbiga qiziqadi`)
// }
//____________________________
//Rest operator
// function number (...num){
// for(let numb of num){
//     // console.log(numb)
//     // console.log(numb<50)
//     // numb<50 ? console.log(numb) : console.log()
//     // numb<40 ? console.log(numb) : console.log()
//     numb<70 ? console.log(numb) : console.log()
//     numb<75 ? console.log(numb) : console.log()


// }
// }
// number(45,56,76) //bu yerda 1ta parametr bolganligi uchun faqat 1ta qiymat qaytaradi 
//rest operatoridan foydalanib 1ta parametr yordamida barcha qiymatlarni chiqarish mumkin
//buning uchun num parametri oldiga 3ta nuqta qoyiladi ...num


//___________rest va trenary👆🏻_______________________


//includes yani array ichidan qidirish
// const arr =[21,12,32,23,43]
// //bor bolsa true ,yoq bolsa false qaytadi
// console.log(arr.includes(21))



// const group8 =["Aziz","Odina","Shaxnoza","Javohir","Diyor"]

// const name = "Alisher"

// group8.includes(name) ? console.log(`${name} bugun darsda qatnashdi`) :console.log(`${name} bugun darsda qatnahmadi`)

//_____________includes_👆🏻______________

//class constructor 
// class car {
//     constructor(model,year){
//      this.model  = model,
//      this.year = year
//     }
// }
// //ezma usul
// const car1={
//     model:"Nexia3",
//     year:2022
// }
// //oson usul
// const car2 = new car("Malibu",2023)
// const car3 = new car("Matiz",2016)

// console.log(car1)
// console.log(car2)
// console.log(car3)
