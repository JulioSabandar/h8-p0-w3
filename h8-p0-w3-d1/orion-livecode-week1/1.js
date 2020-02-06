/**
 * Tuliskan ALGORITMA dan PSEUDOCODE Untuk menyelesaikan kasus berikut:
 *
 * Pada tahun 2020, SeaWorld ingin mengganti harga tiketnya. Saat ini, aquarium tersebut memiliki HARGA DASAR dari tiket masuk Rp 25.000.
 * Harga tiket masuk akan disesuaikan dengan umur dan status pelajar dari pengunjung tersebut.
 * Kamu harus membuat program yang akan menghitung harga tiket masuk dari tiap pengunjung. Di program ini nantinya, pengunjung akan menginput NAMA, TAHUN KELAHIRAN,
 * dan STATUS PELAJAR.
 * STATUS PELAJAR bisa diisi: true jika merupakan pelajar
 *                            false jika bukan merupakan pelajar
 *
 * -Umur < 2 tahun: HARGA TIKET GRATIS
 * -Umur 2-10:  Harga tiket seharga HARGA DASAR
 * -Umur 11-18:  Jika bukan pelajar, maka harga adalah harga dasar dikalikan 1.5
 *               Jika pelajar, maka harga adalah harga dasar dikalikan 1.25
 * -Umur 19 keatas: Jika bukan pelajar, harga adalah harga dasar dikalikan 2
 *                  Jika pelajar, maka harga adalah harga dasar dikalikan 1.5
 * -Jika umurnya diatas 120 tahun ATAU dia kelahiran dibawah tahun 1900, maka tampilkan 'Invalid Age' dan hentikan program.
 *
 * Setelah menghitung harga, maka tampilkan NAMA dan HARGA TIKET dari pengunjung tersebut.
 *
 *
 */

// Your algorithm/pseudocode here

//PSEUDOCODE:
//READ and STORE name of visitor to name
//READ and STORE year of birth of visitor to yearOfBirth
//READ AND STORE education status of visitor to status

//COMPUTE age as 2020 minus yearOfBirth

//IF age age is less than 2 THEN
//    SET ticketPrice to 0
//ELSEIF age is more than OR equal to 2 AND less than 11 THEN
//ELSEIF age is more than OR equal to 11 AND less than 19 THEN
//    IF status is student THEN
//        SET ticketPrice to 25000 times 1.25
//    ELSE
//        SET ticketPrice to 25000 times 1.5
//     ENDIF
//ELSEIF age is more than OR equal to 19 AND less than 120 THEN
//    IF status is student THEN
//        SET ticketPrice to 25000 times 1.5
//    ELSE
//        SET ticketPrice to 25000 times 2
//     ENDIF
//ENDIF

//IF age is more than 120 THEN
//    DISPLAY Invalid Age
//    ENDPROGRAM
//ELSE
//    DISPLAY age AND ticketPrice
//ENDIF
