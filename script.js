 document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // biar gak reload
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const yakin = confirm (`Apakah Anda yakin ingin mengirim pesan sebagai ${nama}?`);
    if(yakin){


  alert(`Terima kasih, ${nama}! Pesan dari ${email} sudah terkirim.`);
  this.reset();
    }else{
        alert("pengiriman pesan dibatalkan")
    }
});