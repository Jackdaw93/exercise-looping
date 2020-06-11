let ulangi = confirm("Apakah anda mau mengulang?");
let jumlah = 0;

while(ulangi){
    let isi = confirm("Apakah anda mau mengulang?")
    jumlah++;
    if(isi == false){
        ulangi = false;
    }
}

document.write("Perulangan sudah dilakuakn sebanyak "+ jumlah +" kali");