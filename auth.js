/* === auth.js === */

// 1. Ambil elemen tombol Login dari Navbar
const tombol = document.getElementById('tombolAuth');

// 2. Cek status login
const status = localStorage.getItem('statusLogin');

// Logika: Jika user SUDAH login
if (status === 'sudah_masuk') {
    
    // Ubah tampilan tombol
    tombol.textContent = 'Logout';
    tombol.style.backgroundColor = '#c0392b'; // Merah
    tombol.style.color = 'white';
    
    // Matikan link default
    tombol.href = "#"; 
    
    // Tambahkan fungsi klik untuk Logout
    tombol.addEventListener('click', function(e) {
        e.preventDefault(); 
        
        let yakin = confirm("Apakah Anda yakin ingin keluar?");
        
        if (yakin) {
            // 1. Hapus status login
            localStorage.removeItem('statusLogin');
            
            alert("Anda berhasil Logout.");
            
            // 2. Redirect (Pindahkan) kembali ke halaman Login (index.html)
            window.location.href = 'index.html'; 
        }
    });
} 
// Logika Tambahan: Proteksi Halaman (Opsional)
// Jika user BELUM login, tapi mencoba membuka halaman selain index.html
else {
    // Cek nama file saat ini
    const path = window.location.pathname;
    const pageName = path.split("/").pop();

    // Jika bukan di halaman login (index.html), paksa balik ke login
    if (pageName !== "index.html" && pageName !== "") {
        // Hapus tanda komentar di bawah ini jika ingin memaksa user login dulu
        // alert("Silakan Login Terlebih Dahulu!");
        // window.location.href = 'index.html';
    }
}