function loadNavbar() {
    const isInsideFolder = window.location.pathname.includes('/semester/') ||
                           window.location.pathname.includes('/profile/') ||
                           window.location.pathname.includes('/materi/');
    
    const path = isInsideFolder ? '../navbar.html' : 'navbar.html';

    fetch(path)
    .then(Response => {
        if (!Response.ok) throw new Error('Navbar tidak ditemukan di:' + path);
        return Response.text();
    })
    .then(data => {
        const container = document.getElementById('sidebar-container');
        if (container) {
            if (isInsideFolder) {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = data;

                const allLinks = tempDiv.querySelectorAll('a');

                allLinks.forEach(item => {
                    const href = item.getAttribute('href');
                    if (href && !href.startsWith('http') && !href.startsWith('javascript') && !href.startsWith('#')) {
                        item.setAttribute('href', '../' + href);
                    }
                });
                container.innerHTML = tempDiv.innerHTML;
            } else {
                container.innerHTML = data;
            }
            console.log("Navbar berhasil dimuat!");
        }
    })
    .catch( error => console.error('Gagal memuat navbar', error));
}
    


    

window.onload = loadNavbar;

function openMenu() {
    document.getElementById("side-menu").style.width = "300px";
}

function closeMenu() {
    document.getElementById("side-menu").style.width = "0";
}



/*function updateTime() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    const dateString = now.toLocaleDateString('id-ID', options);

    document.getElementById('clock').textContent = `${hours}: ${minutes}:${seconds}`;
    document.getElementById('date').textContent = dateString;

    if(clockElement && dateElement) {
        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
        dateElement.textContent = dateString;
    }
}
    setInterval(updateTime, 1000);

    updateTime();*/


    /*function previewImage() {
        const input = document.getElementById('inputFoto');
        const previewImage = document.getElementById('fotoTampil');

        if (input.files && input.files[0]) {
            const reader = new FileReader();

            reader.onload = function(e) {
                imagePreview.src = e.target.result;
            }

            reader.readAsDataURL(input.files[0]);
        }
    }


    function updateBiodata() {
        const nama = document.getElementById('InputNama').value;
        const nim = document.getElementById('InputNIM').value;
        const kelas = document.getElementById('InputKelas').value;
        const ket = document.getElementById('InputKet').value;

        if(nama) document.getElementById('namaTampil').innerText = nama;
        if(nim) document.getElementById('nimTampil').innerText = nim;
        if(kelas) document.getElementById('kelasTampil').innerText = kelas;
        if(ket) document.querySelector('InputKet').innerText = ket;

        alert("Biodata Berhasil diperbarui!");



    }*/
