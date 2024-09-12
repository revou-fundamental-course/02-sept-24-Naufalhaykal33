document.addEventListener('DOMContentLoaded', () => {
    // Fungsi untuk menghitung luas segitiga
    function hitungLuas() {
        const alas = document.getElementById('alas').value;
        const tinggi = document.getElementById('tinggi').value;
        const luasField = document.getElementById('luasHasil');

        if (alas === "" || tinggi === "") {
            alert("Harap masukkan nilai Alas dan Tinggi.");
            return;
        }

        const luas = 0.5 * alas * tinggi;
        luasField.value = luas.toFixed(2); // Menampilkan hasil dengan 2 angka di belakang koma
    }

    // Fungsi untuk menghitung keliling segitiga
    function hitungKeliling() {
        const sisi1 = document.getElementById('sisi1').value;
        const sisi2 = document.getElementById('sisi2').value;
        const sisi3 = document.getElementById('sisi3').value;
        const kelilingField = document.getElementById('kelilingHasil');

        if (sisi1 === "" || sisi2 === "" || sisi3 === "") {
            alert("Harap masukkan nilai semua sisi.");
            return;
        }

        const keliling = parseFloat(sisi1) + parseFloat(sisi2) + parseFloat(sisi3);
        kelilingField.value = keliling.toFixed(2);
    }

    // Fungsi untuk reset form
    function resetLuas() {
        document.getElementById('alas').value = '';
        document.getElementById('tinggi').value = '';
        document.getElementById('luasHasil').value = '';
    }

    function resetKeliling() {
        document.getElementById('sisi1').value = '';
        document.getElementById('sisi2').value = '';
        document.getElementById('sisi3').value = '';
        document.getElementById('kelilingHasil').value = '';
    }

    // Event listener untuk tombol hasil pada luas segitiga
    document.getElementById('hitungLuas').addEventListener('click', hitungLuas);
    document.getElementById('resetLuas').addEventListener('click', resetLuas);

    // Event listener untuk tombol hasil pada keliling segitiga
    document.getElementById('hitungKeliling').addEventListener('click', hitungKeliling);
    document.getElementById('resetKeliling').addEventListener('click', resetKeliling);
});
