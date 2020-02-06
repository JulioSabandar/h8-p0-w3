//contoh input

function dataHandling (array){
  for (i=0; i<array.length; i++) {
    //for (j=0; i<array[j].length); j++
    console.log('Nomor ID:\t' + array[i][1]);
    console.log('Nama Lengkap:\t' + array[i][2]);
    console.log('TTL:\t \t' + array[i][3]);
    console.log('Hobi:\t \t' + array[i][4]);
    console.log('');
  }

}

var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]

dataHandling(input)
