///////////string method


// function counter (name,birthYear){
//     return  `${"name" + " " + name} hozir  ${2023 - birthYear} yoshda.`
// }

// console.log(counter("ilyos",2002))




///////// string lenth
// let fullName = "Ilyos programmer";

// console.log(fullName.length);




///////// string counter


// let fullName = "Ilyos";

// console.log(fullName[0]);

// console.log(fullName[4]);

// console.log(fullName[fullName.length - 1])


/// 


// function convert (letters){
//     const array = [];
//     array.push(letters[0].char)
// }





// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
//   }
  
//   for (let el of str) {
//       console.log(el)
//   }
  
//   for (let i in str) {
//       console.log(i)
//   }

               



// function loopString(letters) {
//     const array = [0];
//     for (const let l of letters) {
        
//     }
// }


/////////////Spread operator

         //   let str = "Ilyos";

                        // let arr = [...str];

                        // console.log(arr);








                        //////////////////////////////////////////////////////////////////////

                        ////////////////////////////////HOMEWORK/////////////////////////////



//~ 1. String holda raqamlar beriladi va uni teskari arrayga aylantiruvchi funksiya tuzing. Misol uchun: "34567" => [7, 6, 5, 4, 3]


                    // function teskariArraygaAylantirish(string) {
                    //     let newArray = [];
                    //     for (let i = string.length - 1; i >= 0; i--) {
                    //         newArray.push(parseInt(string[i]));
                    //     }
                    //     return newArray;
                    // }

                    // let string = "34567";
                    // let result = teskariArraygaAylantirish(string);
                    // console.log(result); 








// 2. String qabul qiluvchi funksiya yarating va u stringni nechta ! belgisi bo’lsa hammasini olib tashlagan holda qaytarsin


                    // function remove(string) {
                    //     let result = '';
                    //     for (let i = 0; i < string.length; i++) {
                    //         if (string[i] !== '!') {
                    //             result += string[i];
                    //         }
                    //     }
                    //     return result;
                    // }

                    // let string = "Hello! World!!";
                    // let result = remove(string);
                    // console.log(result); 





// 3. Ikki array qabul qiladigan funksiya yasang va u funksiya ikki arrayni ichidagi raqamlarini yig’indisini qaytarsin.





                    // function raqamlarniYigindisi(array1, array2) {
                    //     let sum = 0;
                    //     for (let num of array1) {
                    //         sum += num;
                    //     }
                    //     for (let num of array2) {
                    //         sum += num;
                    //     }
                    //     return sum;
                    // }

                    // let array1 = [1, 2, 3];
                    // let array2 = [4, 5, 6];
                    // let result = raqamlarniYigindisi(array1, array2);
                    // console.log(result);



// 4. Array qabul qiluvchi funksiya yarating va u funksiya arrayni ichidagi elementlarini teskari qilsin



                    // function teskariQilish(array) {
                    //     return array.reverse();
                    // }

                    // let array = [1, 2, 3, 4, 5];
                    // let result = teskariQilish(array);
                    // console.log(result); 



// 5. Arrayni qabul qiladigan va yangi arrayda qiymatlar turlarini (ma’lumotlar turlarini) qaytaruvchi funksiya yarating:

//   arrayValuesTypes([1, 2, "null", []])
// ➞ ["number", "number", "string", "object"]

//   arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
//   ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]




                        // function arrayValuesTypes(array) {
                        //     return array.map(element => typeof element);
                        // }

                        // let example1 = [1, 2, "null", []];
                        // let example2 = ["214", true, false, 2, 2.15, [], null];

                        // console.log(arrayValuesTypes(example1)); 
                        // console.log(arrayValuesTypes(example2)); 


// 6. Strinlar array'ini qabul qiladigan, va ularni oddiy sonlarga aylantiradigan funksiya yarating:

//   toNumberArray(["9.4", "4.2"]) ➞ [9.4, 4.2]

//   toNumberArray(["91", "44"]) ➞ [91, 44]

//   toNumberArray(["9.5", "8.8"]) ➞ [9.5, 8.8]



                    // function toNumberArray(stringArray) {
                    //     return stringArray.map(parseFloat);
                    // }

                    
                    // let example1 = ["9.4", "4.2"];
                    // let example2 = ["91", "44"];
                    // let example3 = ["9.5", "8.8"];

                    // console.log(toNumberArray(example1)); // [9.4, 4.2]
                    // console.log(toNumberArray(example2)); // [91, 44]
                    // console.log(toNumberArray(example3)); // [9.5, 8.8]



// 7. String.length dan fondalanmasdan stringni uzunligini qaytaradigan funksiya yarating:

//   length("Hello World") ➞ 11

//   length("Edabit") ➞ 6

//   length("wash your hands!") ➞ 16


                    // function length(str) {
                    //     return [...str].length;
                    // }

                    // console.log(length("Hello World")); 
                    // console.log(length("Edabit")); 
                    // console.log(length("wash your hands!")); 



// 8. Funskiya array qabul qiladi va ichidagi sonlarni 2 ga kopaytiradi:

//   getMultipliedArr([2, 5, 3]) ➞ [4, 10, 6]

//   getMultipliedArr([1, 86, -5]) ➞ [2, 172, -10]

//   getMultipliedArr([5, 382, 0]) ➞ [10, 764, 0]




                        // function getMultipliedArr(arr) {
                        //     return arr.map(num => num * 2);
                        // }

                        // console.log(getMultipliedArr([2, 5, 3])); 
                        // console.log(getMultipliedArr([1, 86, -5])); 
                        // console.log(getMultipliedArr([5, 382, 0])); 



// 9. So‘zlar array'ini oladigan va uni har bir so‘z uzunligidagi arrayga aylantiruvchi funksiya yarating:

//   wordLengths(["hello", "world"]) ➞ [5, 5]

//   wordLengths(["Halloween", "Thanksgiving", "Christmas"]) ➞ [9, 12, 9]

//   wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]) ➞ [3, 5, 9, 4, 2, 3, 8]



                    // function wordLengths(words) {
                    //     return words.map(word => word.length);
                    // }

                    // console.log(wordLengths(["hello", "world"])); 
                    // console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"])); 
                    // console.log(wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"])); 


// 10. Raqamlar yoki harflar array'ini oladigan va stringlar array'ini qaytaruvchi funksiya yarating:

//   arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"

//   arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"

//   arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"



                    // function arrayToString(arr) {
                    //     return arr.join('');
                    // }

                    // console.log(arrayToString([1, 2, 3, 4, 5, 6])); 
                    // console.log(arrayToString(["a", "b", "c", "d", "e", "f"])); 
                    // console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"])); 


