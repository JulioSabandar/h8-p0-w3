/**
 *
 * ================
 * 2 Digit Oddities
 * ================
 *
 * '1234987566710'
 *
 *
 * Pada program ini, kalian harus mengimplementasikan function oddFinder() yang menerima input berupa 'string' berisi angka.
 * String ini pasti diisi oleh angka dan tidak akan diisi oleh huruf/karakter lainnya.
 * Untuk setiap angka 2 digit yang bisa dibentuk dari kiri ke kanan, carilah angka ganjil yang paling besar.
 * Jika tidak ada angka ganjil di dalam string tersebut, maka function akan return 'Tidak ada yang ganjil'
 *
 * RULES :
 * - DILARANG MENGGUNAKAN BUILT-IN METHOD / FUNCTION KECUALI Number .parseInt
 * - HARUS MENULIS PSEUDOCODE / ALGORITMA, TIDAK MENULIS = 0!
 */


function oddFinder(string) {
   //tulis kode disini
   var largestNumber = 0;
   for(i=0; i<string.length; i++){
     var candidate = parseInt(string[i]+ string[i+1]);
     if(candidate%2 != 0 && candidate > largestNumber) {
       largestNumber = candidate;
     }
   }
   if(largestNumber === 0) {
     return ('Tidak ada yang ganjil')
   }
   else {
     return largestNumber;
   }
}


console.log(oddFinder('1234987566710')); //87
console.log(oddFinder('246804422')); //Tidak ada yang ganjil

//pseudocode:
//SET largestNUmber TO 0;
//FOR all double digit numbers in string
//  IF number is not divisible by 2 and is larger than largestNUmber THEN
//    SET largestNUmber to number
//  END IF
//END LOOP

//IF largestNUmber equals 0 THEN
//   RETURN 'Tidak ada yang ganjil'
//ELSE
//   RETURN largestNUmber
//END IF
