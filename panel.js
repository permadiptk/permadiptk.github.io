// Mendapatkan referensi form dan tabel
const form = document.getElementById('adminForm');
const table = document.getElementById('dataTable');

// Menangani submit form
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Mendapatkan nilai dari input form
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;

  // Menambahkan data ke tabel
  addDataToTable(name, phone, email, address);

  // Menyimpan data ke localStorage
  saveDataToLocalStorage(name, phone, email, address);

  // Menghapus nilai input form
  form.reset();
});

// Menyimpan data ke localStorage
function saveDataToLocalStorage(name, phone, email, address) {
  // Mengambil data yang tersimpan saat ini, jika ada
  let savedData = localStorage.getItem('adminData');

  // Mengubah data yang tersimpan menjadi objek JavaScript
  savedData = savedData ? JSON.parse(savedData) : [];

  // Menambahkan data baru ke dalam objek JavaScript
  savedData.push({
    name: name,
    phone: phone,
    email: email,
    address: address
  });

  // Mengubah data menjadi string JSON dan menyimpannya di localStorage
  localStorage.setItem('adminData', JSON.stringify(savedData));
}

// Mendapatkan data dari localStorage saat halaman dimuat
function loadDataFromLocalStorage() {
  // Mengambil data yang tersimpan dari localStorage
  const savedData = localStorage.getItem('adminData');

  // Mengubah data menjadi objek JavaScript
  const parsedData = savedData ? JSON.parse(savedData) : [];

  // Menambahkan data ke dalam tabel
  parsedData.forEach(data => {
    addDataToTable(data.name, data.phone, data.email, data.address);
  });
}

// Menambahkan data ke tabel
function addDataToTable(name, phone, email, address) {
  // Membuat baris baru pada tabel
  const row = table.insertRow(-1);

  // Menambahkan data ke dalam sel-sel baru
  const nameCell = row.insertCell(0);
  const phoneCell = row.insertCell(1);
  const emailCell = row.insertCell(2);
  const addressCell = row.insertCell(3);

  nameCell.innerHTML = name;
  phoneCell.innerHTML = phone;
  emailCell.innerHTML = email;
  addressCell.innerHTML = address;
}

// Memuat data dari localStorage saat halaman dimuat
loadDataFromLocalStorage();
