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

    // Fungsi untuk menghitung luas jajargenjang
    function hitungLuasJajargenjang() {
        const alas = document.getElementById('alasJ').value;
        const tinggi = document.getElementById('tinggiJ').value;
        const luasField = document.getElementById('luasHasilJ');

        if (alas === "" || tinggi === "") {
            alert("Harap masukkan nilai Alas dan Tinggi untuk jajargenjang.");
            return;
        }

        const luas = alas * tinggi;
        luasField.value = luas.toFixed(2);
    }

    // Fungsi untuk menghitung keliling jajargenjang
    function hitungKelilingJajargenjang() {
        const alas = document.getElementById('alasK').value;
        const sisiMiring = document.getElementById('sisiMiringK').value;
        const kelilingField = document.getElementById('kelilingHasilJ');

        if (alas === "" || sisiMiring === "") {
            alert("Harap masukkan nilai Alas dan Sisi Miring untuk keliling jajargenjang.");
            return;
        }

        const keliling = 2 * (parseFloat(alas) + parseFloat(sisiMiring));
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
    // Fungsi untuk reset form jajargenjang
    function resetLuasJajargenjang() {
        document.getElementById('alasJ').value = '';
        document.getElementById('tinggiJ').value = '';
        document.getElementById('luasHasilJ').value = '';
    }

    function resetKelilingJajargenjang() {
        document.getElementById('alasK').value = '';
        document.getElementById('sisiMiringK').value = '';
        document.getElementById('kelilingHasilJ').value = '';
    }

    // Event listener untuk tombol hasil pada luas segitiga
    document.getElementById('hitungLuas').addEventListener('click', hitungLuas);
    document.getElementById('resetLuas').addEventListener('click', resetLuas);

    // Event listener untuk tombol hasil pada keliling segitiga
    document.getElementById('hitungKeliling').addEventListener('click', hitungKeliling);
    document.getElementById('resetKeliling').addEventListener('click', resetKeliling);

    // Event listener untuk tombol hasil pada luas jajargenjang
    document.getElementById('hitungLuasJajargenjang').addEventListener('click', hitungLuasJajargenjang);
    document.getElementById('resetLuasJajargenjang').addEventListener('click', resetLuasJajargenjang);

     // Event listener untuk tombol hasil pada keliling jajargenjang
     document.getElementById('hitungKelilingJajargenjang').addEventListener('click', hitungKelilingJajargenjang);
     document.getElementById('resetKelilingJajargenjang').addEventListener('click', resetKelilingJajargenjang);
     
    // Event listener untuk mengganti tampilan konten
    document.querySelector('.segitiga').addEventListener('click', () => {
        document.getElementById('segitigaContent').style.display = 'block';
        document.getElementById('jajargenjangContent').style.display = 'none';
    });

    document.querySelector('.jajargenjang').addEventListener('click', () => {
        document.getElementById('segitigaContent').style.display = 'none';
        document.getElementById('jajargenjangContent').style.display = 'block';
    });
});


