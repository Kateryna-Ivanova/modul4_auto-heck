// const a = Math.random() > 0.5;
// console.log(a)


// TASK 4
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess,onError) {
//     if(this.pizzas.includes(pizzaName)){
//       onSuccess(pizzaName)
//       console.log(onSuccess(pizzaName))
//       return onSuccess(pizzaName)
//     }else{
//       onError(pizzaName)
//       console.log(onError(pizzaName))
//       return onError(pizzaName)
//     }
//   },
// };
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }
// function onOrderError(error) {
//   return `Error! There is no pizza with a name ${error} in the assortment.`
// }
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);






  // TASK 5   
  // БУЛО
  // function calculateTotalPrice(orderedItems) {
  //   let totalPrice = 0;
  //   // Change code below this line
  
  //   for (let i = 0; i < orderedItems.length; i += 1) {
  //     totalPrice += orderedItems[i];
  //   }
  
  //   // Change code above this line
  //   return totalPrice;
  // }
  
// СТАЛО ( рефакторинг функції)
  // function calculateTotalPrice(orderedItems) {
  //   let totalPrice = 0;
  //   // массив.forEach(function callback(element, index, array) {
  //   //  Тіло колбек-функції
  //   // });

  //   orderedItems.forEach(function calculateTotalPrice(number){
  //     totalPrice += number;
  //     console.log(totalPrice)
  //   })
  

  //   return totalPrice;
  // }
  // calculateTotalPrice([12, 85, 37, 4])
  // calculateTotalPrice([164, 48, 291])
  // calculateTotalPrice([412, 371, 94, 63, 176])



  // TASK 6
  // function filterArray(numbers, value) {
  //   const filteredNumbers = [];
  
  //   numbers.forEach(function filterArray(number)
  // {if (number > value){ filteredNumbers.push(number)}}
  //   )
  // console.log(filteredNumbers)
  //   return filteredNumbers;
  // }
  // filterArray([1, 2, 3, 4, 5], 3)
  // filterArray([1, 2, 3, 4, 5], 4)
  // filterArray([1, 2, 3, 4, 5], 5)
  // filterArray([12, 24, 8, 41, 76], 38)
  // filterArray([12, 24, 8, 41, 76], 20)




  // TASK 7
  // function getCommonElements(firstArray, secondArray) {
  //   const commonElements = [];
  //   // Change code below this line
  //   firstArray.forEach(function getCommonElements ( number) {
  //     if (secondArray.includes(number)) {
  //       commonElements.push(number);
  //       console.log(commonElements)
  //     }
  //   } )
  
  //   return commonElements;
  // }
  // getCommonElements([1, 2, 3], [2, 4])
  // getCommonElements([1, 2, 3], [2, 1, 17, 19])
  // getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])
  // getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])
  // getCommonElements([1, 2, 3], [10, 20, 30])




  // TASK 8

  // Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона була оголошена як стрілочна.

// БУЛО
  // function calculateTotalPrice(quantity, pricePerItem) {
  //   return quantity * pricePerItem;
  // }

  // СТАЛО
//  const calculateTotalPrice = (quantity, pricePerItem) => { return quantity * pricePerItem};
//  calculateTotalPrice(5, 100)
//  calculateTotalPrice(8, 60)
//  calculateTotalPrice(3, 400)


  // TASK 9
// Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона використовувала неявне повернення.
// БУЛО
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };

// СТАЛО
  // const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
  // calculateTotalPrice(5, 100)
  // calculateTotalPrice(8, 60)
  // calculateTotalPrice(3, 400)
  


  // TASK 10
  // Виконай рефакторинг функції calculateTotalPrice(orderedItems), замінивши її оголошення на стрілочну функцію. Заміни колбек-функцію, передану в метод forEach(), на стрілочну функцію.

// БУЛО
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });
//   return totalPrice;
// }


// СТАЛО
// const calculateTotalPrice = (orderedItems) =>{
//   let totalPrice = 0;
//   orderedItems.forEach((number) => {
//     totalPrice += number;
//   });

//   return totalPrice;
// }
// calculateTotalPrice([12, 85, 37, 4])
// calculateTotalPrice([164, 48, 291])
// calculateTotalPrice([412, 371, 94, 63, 176])


  // TASK 11 
// Заміни оголошення функції filterArray() і колбек для методу forEach() на стрілочні функції.
// БУЛО
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   return filteredNumbers;
// }


// СТАЛО
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => { 
//     if (number > value){
//       filteredNumbers.push(number);
//     }
//   });
//   return filteredNumbers
// }
// filterArray([1, 2, 3, 4, 5], 3)
// filterArray([1, 2, 3, 4, 5], 4)
// filterArray([1, 2, 3, 4, 5], 5)
// filterArray([12, 24, 8, 41, 76], 38)
// filterArray([12, 24, 8, 41, 76], 20)


  // TASK 12
  // Заміни оголошення функції getCommonElements() і колбек для методу forEach() на стрілочні функції.
  // БУЛО
  // function getCommonElements(firstArray, secondArray) {
  //   const commonElements = [];
  
  //   firstArray.forEach(function (element) {
  //     if (secondArray.includes(element)) {
  //       commonElements.push(element);
  //     }
  //   });
  
  //   // Change code above this line
  //   return commonElements;
  // }

// СТАЛО

// const getCommonElements = (firstArray, secondArray) =>{
//   const commonElements = [];

// firstArray.forEach(element => {if (secondArray.includes(element)) {
//   commonElements.push(element);}
// })
// return commonElements;
// }




  // TASK 13






  
  // TASK
  // TASK
  // TASK
  // TASK
  // TASK
  // TASK