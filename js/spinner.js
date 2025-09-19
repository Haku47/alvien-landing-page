// Kita akan menunggu dua hal terjadi sebelum menyembunyikan spinner
// 1. Halaman selesai dimuat (window.onload)
// 2. Waktu minimal 3 detik telah berlalu

// Promise yang akan selesai setelah halaman dimuat
const pageLoadPromise = new Promise(resolve => {
    window.onload = resolve;
});

// Promise yang akan selesai setelah 3 detik
const minTimePromise = new Promise(resolve => {
    setTimeout(resolve, 3000); // 3000 milidetik = 3 detik
});

// Jalankan kode HANYA SETELAH kedua promise di atas selesai
Promise.all([pageLoadPromise, minTimePromise]).then(() => {
    // Ambil elemen pembungkus spinner
    const spinnerWrapper = document.getElementById('spinner-wrapper');

    // Tambahkan kelas untuk memulai transisi fade-out
    spinnerWrapper.classList.add('hidden');

    // Opsional: Hapus elemen dari DOM setelah transisi selesai
    // Ini baik untuk performa agar elemen tidak ada lagi di halaman
    setTimeout(() => {
        spinnerWrapper.style.display = 'none';
    }, 500); // Harus cocok dengan durasi transisi di CSS (0.5s)
});