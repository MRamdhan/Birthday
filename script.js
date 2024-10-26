// Efek Confetti
function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.left = `${Math.random() * 100}%`;
        confettiPiece.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`;
        confettiPiece.style.animationDelay = `${Math.random() * 2}s`; // Tambahkan delay untuk variasi jatuh
        confettiContainer.appendChild(confettiPiece);
    }
}

createConfetti();

// Fungsi untuk menampilkan hadiah
function displayGift() {
    const card = document.getElementById('card');
    card.classList.remove('hidden'); // Menghilangkan kelas 'hidden' agar muncul
    card.style.opacity = '1'; // Pastikan opacity diatur ke 1 untuk tampil
    card.style.transform = 'translate(-50%, -50%) scale(1)';
}

// Fungsi untuk menutup kartu ucapan
function closeCard() {
    const card = document.getElementById('card');
    card.style.opacity = '0';
    card.style.transform = 'translate(-50%, -50%) scale(0.8)';
    setTimeout(() => {
        card.classList.add('hidden'); // Tambahkan kembali kelas 'hidden' setelah animasi selesai
    }, 300);
}