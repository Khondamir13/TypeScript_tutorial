
// // O'zgaruvchilarga type berish 
// const firstName: string = "Xondamir" 
// const lastName = "Xudoyarov"
// console.log(typeof lastName)

// const x : number =  7
// const y : number = 8
// const sum  = x+y


// const num : null = null
// const a: undefined = undefined


// // Arraylarga va uning ichidagi o'zgaruvchilarga  type berish

// const colors : string[] = ['red','yellow', 'white']
// const number : number[] = [1,2,5]

// // any => o'zgaruvchining malumoti o'zgarib ketishi mumkin

// let smth: any = 1
// smth = 'sm'

// // Function 
// // default qiymatda parametri a nint type any da turgan bo'ladi
// // Functionning qaytaradigan qiymat turi void boladi (yani return qilinmaydi)

// function logger (a:number | string) :void  {
//     if(typeof a==='number') {
//         console.log(a.toFixed())
//     }else if (typeof a==="string"){
//         console.log( a.toLocaleLowerCase())
//     }
// }


// // const logCar = (car:{name:string, year? :number}) :string => {
// //     return `Name of car ${car.name}, created at - ${car.year}`
// // }
// // year? => bu parametr optional bo'lib qoldi
// // console.log(logCar({name:"BMW"}))


// // Type and Interface



// type CarType = {
//     name: string, 
//     year? : string
// }

// // type orqali vorislash

// type BmwType = CarType & {
//     color:string
// }

// const logCar = (car:CarType) :string => {
//     return `Name of car ${car.name}, created at - ${car.year}`
// }


// type stringOrNumber = number | string // mana shunday holatlarda type ishlatganimiz maqul
// const ds: stringOrNumber = ""

// // interface bilan typening farqi yo'q vorislanishda farqi bor
// interface ICar { 
//     name: string, 
//     year? : string
// }
// interface IBmw extends ICar{
//  color:string   
// }
// // IBmw : {name:string, year?:string, color:string}

// const logBmw = (bmw : IBmw) :void => {
//     console.log(bmw.color)
// }

// // Misol tariqasida
// // interface DB {
// //     name: string,
// //     color : string,
// //     isBallon : boolean,
// //     speed : {
// //         max:number,
// //         min:number
// //     },
// //     price : {
// //         total:string,
// //         credit:string,
// //         discount:number
// //     }
// // }

// // Literal type => ma'lum bir typelarni oladi xalos boshqasini ololmaydi.
// type actionType = "show" | "hide"

// function comparise(action:actionType):1 | -1{
//     switch(action){
//         case "hide":
//             return -1
//         case 'show':
//             return 1
//     }
// }


// //ENUM => constant
// // constda biz objectlarni o'zgartira olamiz lekin enmda uni ham o'zgaritib bo'lmaydi

// enum Dictionary { 
//     Rus,
//     Uzb,
//     Eng
// }

// const uzbIndex = Dictionary.Uzb
// console.log(Dictionary[uzbIndex])


// //  Tuples = Array 
// // Ikkovining farqi biz tuplesda qanday malumotlar kelishini anniq bilamiz, va array ichidagi har bir elementning turini aytib otsak bo'ladi

// const arr :[string, string, number] = ["Ssd", "Ass", 2]
// // Bunga yangi element qosholmaymiz

// // Generics 
// // Biz functionlardan o'zimiz hohlagan ma'lumot turidagi datalarni qabul qila olamiz



// function loggerTime<T>(number: T): T{
//     console.log(new Date())
//     return number
// }

// loggerTime<number>(9)
// loggerTime<string>("asd")


