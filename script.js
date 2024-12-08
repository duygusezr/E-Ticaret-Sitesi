// Örnek ürün verileri
const urunler = [
    {
        id: 1,
        isim: "Nike Air Max 270",
        fiyat: 1299.99,
        resim: "images/nike-airmax.jpg",
        kategori: "aksesuar"
    },
    {
        id: 2,
        isim: "iPhone 14 Pro",
        fiyat: 49999.99,
        resim: "images/iphone-14.jpg",
        kategori: "telefon"
    },
    {
        id: 3,
        isim: "Samsung QLED 4K TV",
        fiyat: 15999.99,
        resim: "images/samsung-tv.jpg",
        kategori: "tv"
    },
    {
        id: 4,
        isim: "ASUS ROG Gaming Laptop",
        fiyat: 39999.99,
        resim: "images/asus-laptop.jpg",
        kategori: "bilgisayar"
    },
    {
        id: 5,
        isim: "Sony WH-1000XM4 Kulaklık",
        fiyat: 7299.99,
        resim: "images/sony-headphones.jpg",
        kategori: "aksesuar"
    },
    {
        id: 6,
        isim: "MacBook Pro M2",
        fiyat: 52999.99,
        resim: "images/macbook-pro.jpg",
        kategori: "bilgisayar"
    },
    {
        id: 7,
        isim: "Samsung Galaxy Watch 5",
        fiyat: 4999.99,
        resim: "images/galaxy-watch.jpg",
        kategori: "aksesuar"
    },
    {
        id: 8,
        isim: "PlayStation 5 Digital",
        fiyat: 19999.99,
        resim: "images/ps5.jpg",
        kategori: "konsol"
    },
    {
        id: 9,
        isim: "Canon EOS R6 Fotoğraf Makinesi",
        fiyat: 64999.99,
        resim: "images/canon-camera.jpg",
        kategori: "aksesuar"
    },
    {
        id: 10,
        isim: "Apple iPad Pro 12.9",
        fiyat: 34999.99,
        resim: "images/ipad-pro.jpg",
        kategori: "bilgisayar"
    },
    {
        id: 11,
        isim: "Dyson V15 Detect",
        fiyat: 19999.99,
        resim: "images/dyson-vacuum.jpg",
        kategori: "ev"
    },
    {
        id: 12,
        isim: "Samsung Galaxy S23 Ultra",
        fiyat: 44999.99,
        resim: "images/galaxy-s23.jpg",
        kategori: "telefon"
    },
    {
        id: 13,
        isim: "Apple Watch Series 8",
        fiyat: 12999.99,
        resim: "images/apple-watch.jpg",
        kategori: "aksesuar"
    },
    {
        id: 14,
        isim: "Bose QuietComfort 45",
        fiyat: 6999.99,
        resim: "images/bose-qc45.jpg",
        kategori: "aksesuar"
    },
    {
        id: 15,
        isim: "Dell XPS 15 Laptop",
        fiyat: 45999.99,
        resim: "images/dell-xps15.jpg",
        kategori: "bilgisayar"
    },
    {
        id: 16,
        isim: "GoPro Hero 11 Black",
        fiyat: 14999.99,
        resim: "images/gopro.jpg",
        kategori: "aksesuar"
    },
    {
        id: 17,
        isim: 'LG C2 OLED TV 65"',
        fiyat: 49999.99,
        resim: "images/lg-tv.jpg",
        kategori: "tv"
    },
    {
        id: 18,
        isim: "Xiaomi Robot Vacuum S10+",
        fiyat: 9999.99,
        resim: "images/robot-vacuum.jpg",
        kategori: "ev"
    },
    {
        id: 19,
        isim: "Nintendo Switch OLED",
        fiyat: 11999.99,
        resim: "images/nintendo-switch.jpg",
        kategori: "konsol"
    },
    {
        id: 20,
        isim: "Philips Airfryer XXL",
        fiyat: 4999.99,
        resim: "images/airfryer.jpg",
        kategori: "ev"
    }
];

let sepet = [];
let girisYapildi = false;
const testKullanici = { kullaniciAdi: "test", sifre: "test123" };

// Mevcut ürünler dizisinin başına eklenecek
const cokSatanlar = [2, 6, 12, 17, 19]; // Çok satan ürünlerin ID'leri

// Sayfa yönetimi için yeni fonksiyonlar
function sayfaGoster(sayfaId) {
    document.querySelectorAll('.sayfa').forEach(sayfa => {
        sayfa.classList.add('gizle');
    });
    document.getElementById(sayfaId).classList.remove('gizle');
}

// Giriş modalını kontrol et
document.getElementById('kullanici-durum').addEventListener('click', function() {
    if (!girisYapildi) {
        document.getElementById('giris-modal').classList.remove('gizle');
    } else {
        cikisYap();
    }
});

// Bildirim göster
function bildirimGoster(mesaj, tur = 'success') {
    const bildirim = document.createElement('div');
    bildirim.className = 'bildirim';
    
    let icon = 'check-circle';
    if (tur === 'error') icon = 'times-circle';
    if (tur === 'warning') icon = 'exclamation-circle';
    
    bildirim.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <span>${mesaj}</span>
    `;
    
    document.body.appendChild(bildirim);
    
    setTimeout(() => {
        bildirim.remove();
    }, 3000);
}

// Giriş formunu işle
document.getElementById('giris-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const kullaniciAdi = document.getElementById('kullanici').value;
    const sifre = document.getElementById('sifre').value;

    if (kullaniciAdi === testKullanici.kullaniciAdi && sifre === testKullanici.sifre) {
        girisYapildi = true;
        document.getElementById('giris-modal').classList.add('gizle');
        document.getElementById('kullanici-durum').textContent = `Hoş geldin, ${kullaniciAdi} (Çıkış)`;
        sayfaGoster('anasayfa');
        bildirimGoster('Başarıyla giriş yaptınız! Hoş geldiniz.');
    } else {
        bildirimGoster('Kullanıcı adı veya şifre hatalı!', 'error');
    }
});

// Çıkış fonksiyonu
function cikisYap() {
    girisYapildi = false;
    document.getElementById('kullanici-durum').textContent = 'Giriş Yap';
    document.getElementById('kullanici').value = '';
    document.getElementById('sifre').value = '';
    sepet = []; // Sepeti temizle
    sepetGuncelle();
    bildirimGoster('Başarıyla çıkış yaptınız!', 'warning');
}

// Çok satan ürünleri yükle
function cokSatanlariYukle() {
    const cokSatanlarListesi = document.querySelector('.cok-satanlar');
    if (!cokSatanlarListesi) {
        console.error('.cok-satanlar elementi bulunamadı.');
        return;
    }
    cokSatanlarListesi.innerHTML = '';

    cokSatanlar.forEach(urunId => {
        const urun = urunler.find(u => u.id === urunId);
        if (urun) {
            const urunKarti = document.createElement('div');
            urunKarti.className = 'urun-karti';
            urunKarti.innerHTML = `
                <div class="etiket">Çok Satan</div>
                <div class="urun-resim-container">
                    <img class="urun-resim" src="${urun.resim}" alt="${urun.isim}">
                </div>
                <h3>${urun.isim}</h3>
                <p>${urun.fiyat} TL</p>
                <button onclick="sepeteEkle(${urun.id})">Sepete Ekle</button>
            `;
            cokSatanlarListesi.appendChild(urunKarti);
        }
    });
}

// Tüm ürünleri yükle
function tumUrunleriYukle(gosterilecekUrunler = urunler) {
    const urunListesi = document.querySelector('.tum-urunler');
    if (!urunListesi) {
        console.error('.tum-urunler elementi bulunamadı.');
        return;
    }
    urunListesi.innerHTML = '';

    gosterilecekUrunler.forEach(urun => {
        const urunKarti = document.createElement('div');
        urunKarti.className = 'urun-karti';
        urunKarti.innerHTML = `
            <div class="kategori-etiketi">${urun.kategori.toUpperCase()}</div>
            <div class="urun-resim-container">
                <img class="urun-resim" src="${urun.resim}" alt="${urun.isim}">
            </div>
            <h3>${urun.isim}</h3>
            <p>${urun.fiyat} TL</p>
            <button onclick="sepeteEkle(${urun.id})">Sepete Ekle</button>
        `;
        urunListesi.appendChild(urunKarti);
    });
}

// Sepete ürün ekle
function sepeteEkle(urunId) {
    if (!girisYapildi) {
        alert('Ürün eklemek için önce giriş yapmalısınız!');
        return;
    }
    const urun = urunler.find(u => u.id === urunId);
    if (urun) {
        sepet.push(urun);
        sepetGuncelle();
        alert('Ürün sepete eklendi!');
    }
}

// Sepeti güncelle
function sepetGuncelle() {
    const sepetSayisi = document.getElementById('sepet-sayisi');
    const sepetUrunler = document.getElementById('sepet-urunler');
    const toplamFiyat = document.getElementById('toplam-fiyat');

    sepetSayisi.textContent = sepet.length;

    // Sepet içeriğini güncelle
    sepetUrunler.innerHTML = '';
    sepet.forEach(urun => {
        const sepetUrunu = document.createElement('div');
        sepetUrunu.className = 'sepet-urun';
        sepetUrunu.innerHTML = `
            <div class="sepet-urun-detay">
                <div class="urun-resim-container" style="width: 60px; height: 60px;">
                    <img class="urun-resim" src="${urun.resim}" alt="${urun.isim}">
                </div>
                <div class="urun-bilgi">
                    <h4>${urun.isim}</h4>
                    <p>${urun.fiyat} TL</p>
                </div>
            </div>
        `;
        sepetUrunler.appendChild(sepetUrunu);
    });

    // Toplam fiyatı hesapla
    const toplam = sepet.reduce((acc, urun) => acc + urun.fiyat, 0);
    toplamFiyat.textContent = toplam.toFixed(2);
}

// Sayfa ykleme olayını güncelle
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('giris-modal').classList.add('gizle');
    cokSatanlariYukle();
    tumUrunleriYukle();
    sayfaGoster('anasayfa');
});

// Navigasyon olaylarını ekle
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const sayfa = this.dataset.sayfa;
        sayfaGoster(sayfa);
    });
});

// Ürünleri sırala
function urunleriSirala(urunler, siralamaTuru) {
    let siraliUrunler = [...urunler];
    
    switch(siralamaTuru) {
        case 'artan':
            siraliUrunler.sort((a, b) => a.fiyat - b.fiyat);
            break;
        case 'azalan':
            siraliUrunler.sort((a, b) => b.fiyat - a.fiyat);
            break;
        case 'isim-a-z':
            siraliUrunler.sort((a, b) => a.isim.localeCompare(b.isim));
            break;
        case 'isim-z-a':
            siraliUrunler.sort((a, b) => b.isim.localeCompare(a.isim));
            break;
        default:
            siraliUrunler.sort((a, b) => a.id - b.id);
    }
    
    return siraliUrunler;
}

// Kategori filtreleme fonksiyonunu güncelle
function urunleriFiltrele(kategori) {
    const siralamaTuru = document.getElementById('siralama-select').value;
    const filtreliUrunler = kategori === 'hepsi' ? urunler : urunler.filter(urun => urun.kategori === kategori);
    const siraliUrunler = urunleriSirala(filtreliUrunler, siralamaTuru);
    tumUrunleriYukle(siraliUrunler);
    
    document.querySelectorAll('.kategori-btn').forEach(btn => {
        btn.classList.remove('aktif');
        if(btn.dataset.kategori === kategori) {
            btn.classList.add('aktif');
        }
    });
}

// Sıralama olayını dinle
document.addEventListener('DOMContentLoaded', function() {
    // Mevcut DOMContentLoaded kodları...

    document.getElementById('siralama-select').addEventListener('change', function() {
        const aktifKategori = document.querySelector('.kategori-btn.aktif').dataset.kategori;
        urunleriFiltrele(aktifKategori);
    });

    document.querySelectorAll('.kategori-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const kategori = this.dataset.kategori;
            urunleriFiltrele(kategori);
        });
    });
}); 