const hargaMenu = {
  "Nasi Goreng Spesial": 15000,
  "Ayam Geprek": 12000,
  "Soto Ayam": 10000,
  "Mie Goreng Jawa": 13000,
};
const hargaKerupuk = 1000;

const menuPilihan = document.getElementById("menu");
const checkboxKerupuk = document.getElementById("kerupuk");
const displayHarga = document.getElementById("hargaTampil");
const orderForm = document.getElementById("orderForm");

function hitungTotalHarga() {
  const menuTerpilih = menuPilihan.value;
  let hargaUtama = hargaMenu[menuTerpilih] || 0;

  let hargaTambahan = 0;
  if (checkboxKerupuk.checked) {
    hargaTambahan = hargaKerupuk;
  }

  const totalHarga = hargaUtama + hargaTambahan;

  displayHarga.innerHTML = `Total Harga: Rp ${totalHarga.toLocaleString(
    "id-ID"
  )}`;
}

menuPilihan.addEventListener("change", hitungTotalHarga);
checkboxKerupuk.addEventListener("change", hitungTotalHarga);

orderForm.addEventListener("submit", function (event) {
  const nama = document.getElementById("nama").value.trim();
  const menu = document.getElementById("menu").value;

  if (nama === "" || menu === "") {
    alert("Nama dan Pilihan Menu tidak boleh kosong!");
    event.preventDefault();
  }
});
