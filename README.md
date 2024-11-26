# 📸 PicTion - Mengubah Gambar Menjadi Caption
![PicTion](https://github.com/user-attachments/assets/2ec805f2-41a5-4e34-80b0-84d6872a23f8)

PicTion adalah sebuah aplikasi berbasis web sederhana yang memanfaatkan teknologi AI untuk menganalisis gambar dan menghasilkan deskripsi otomatis. Proyek ini menggunakan model [`Salesforce/blip-image-captioning-base`](https://huggingface.co/Salesforce/blip-image-captioning-base) dari Hugging Face dan dikembangkan dengan framework Django.

## 🚀 Fitur Utama
- **Analisis AI Cepat**: Proses gambar dengan cepat untuk menghasilkan caption deskriptif.
- **Desain Modern**: Dibangun menggunakan Tailwind CSS untuk tampilan yang responsif dan menarik.
- **Unggah Gambar**: Mudah mengunggah gambar melalui antarmuka interaktif.
- **Notifikasi Real-Time**: Memberikan feedback instan selama proses analisis.

## 📂 Teknologi yang Digunakan
- Backend: Django
- Frontend: HTML, Tailwind CSS, FontAwesome
- Model AI: `Salesforce/blip-image-captioning-base`
- Hosting: [Pythonanywhere](https://www.pythonanywhere.com/)

## 📥 Instalasi & Menjalankan Proyek
### Prasyarat
- Python 3.x
- Django
- Paket-paket yang diperlukan tercantum di `requirements.txt`

### Langkah-Langkah Instalasi
1. Clone repositori ini:
    ```bash
    git clone https://github.com/RozhakXD/PicTion.git
    cd PicTion
    ```
2. Buat virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate   # Untuk Windows: venv\Scripts\activate
   ```
3. Instal dependensi:
   ```bash
   pip install -r requirements.txt
   ```
4. Jalankan server Django:
   ```bash
   python manage.py runserver
   ```
5. Buka browser Anda dan akses:
   ```
   http://localhost:8000
   ```

## 🛠️ Konfigurasi Token Hugging Face
PicTion menggunakan model dari Hugging Face yang memerlukan token akses untuk berfungsi. Ikuti langkah-langkah berikut untuk mengatur token Anda:

1. **Dapatkan Token Akses**:
    - Buat atau login ke akun Hugging Face Anda di [Hugging Face](https://huggingface.co/) dan buat token akses API di halaman pengaturan akun.
2. **Tambahkan Token ke Proyek**:
    - Buka file konfigurasi atau kode yang menangani permintaan API. Ganti "`your_hf_access_token`" dengan token Anda.
3. **Simpan dan Jalankan Proyek**:
    - Setelah token disiapkan, simpan perubahan dan jalankan server Django seperti biasa.

## 🖼️ Tangkapan Layar
**Halaman Utama:**

![Halaman Utama](https://github.com/user-attachments/assets/ed8c6de8-6bed-4d6a-8973-b2425629671d)

**Hasil Caption:**
![Hasil Caption](https://github.com/user-attachments/assets/e3ffd23f-63f7-4900-89ed-33a4d181e4f5)

## 📖 Cara Menggunakan
- **Unggah Gambar**: Klik pada area unggah gambar atau seret dan lepaskan gambar ke dalamnya.
- **Proses Analisis**: Tekan tombol "Analisis Gambar".
- **Hasil Caption**: Lihat hasil caption yang dihasilkan oleh AI secara langsung di bawah gambar.

## 🌐 Demo Langsung
- [PicTion](https://piction.pythonanywhere.com/?)

## ☕ Dukungan Proyek Ini
Jika Anda menyukai PicTion dan ingin mendukung pengembangan lebih lanjut, Anda dapat memberikan donasi melalui salah satu platform berikut:

- [Trakteer](https://trakteer.id/rozhak_official/tip)
- [PayPal](https://paypal.me/rozhak9)
- [Saweria](https://saweria.co/rozhak9)

Setiap dukungan Anda sangat berarti dan membantu kami untuk terus mengembangkan proyek ini! Terima kasih! ❤️

## 📝 Lisensi
Proyek ini dilisensikan di bawah lisensi MIT. Lihat file [LICENSE](https://github.com/RozhakXD/PicTion/blob/main/LICENSE) untuk informasi lebih lanjut.
