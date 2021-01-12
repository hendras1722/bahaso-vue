<template>
  <div>
    <div class="title-faq">MENGGUNAKAN BAHASO</div>
    <div class="mt-3">
      <div class="title-faq-parag">
        Pilih Level 1 untuk Beginner atau Tes Penempatan?
      </div>
      <div class="title-faq-text">
        Bahaso menyediakan tes penempatan level untuk mengukur kemampuan Bahasa
        Inggris mu. Berkolaborasi dengan Fakultas Ilmu Pengetahuan Budaya
        Universitas Indonesia (FIB UI), Bahaso menyajikan konten ke dalam 4
        level: Beginner (Level 1), Elementary (Level 2), Intermediate (Level 3),
        dan Upper-intermediate (Level 4). Kamu bisa memilih Level 1 jika ingin
        belajar bahasa dari level paling dasar.
      </div>
    </div>
    <div class="mt-3">
      <div class="title-faq-parag">Saya terlanjur memilih Level 1 di awal.</div>
      <div class="title-faq-text">
        Bisa tidak saya ikut tes penempatan lagi?
      </div>
    </div>
    <div class="mt-3">
      <div class="title-faq-parag">
        Saya mengalami kendala dengan soal yang menggunakan rekaman.
      </div>
      <div class="title-faq-text">
        Kamu bisa klik nonaktifkan mikrofon atau turn off microphone agar bisa
        lanjut ke soal berikutnya.
      </div>
    </div>
    <div class="mt-3">
      <div class="title-faq-parag">
        Saya mendaftar menggunakan email yang berbeda dengan facebook saya,
        apakah saya bisa log in dengan facebook?
      </div>
      <div class="title-faq-text">
        Bisa, tapi kamu akan memiliki dua akun, dan beasiswa hanya berlaku untuk
        satu email.
      </div>
    </div>
    <div class="mt-3">
      <div class="title-faq-parag">Saya mengalami kendala di soal xxxx</div>
      <div class="title-faq-text">
        Ketika mengalami kendala di soal tertentu, yang harus dilakukan adalah
        refresh ulang aplikasi dan pastikan koneksi internet berjalan dengan
        lancar. Kalau masih terjadi hal yang sama, kirim feedback melalui email
        ke info@bahaso.com dengan menyertakan:
        <ul>
          <li style="list-style: decimal">
            Tampilan layar (screen capture) yang error
          </li>
          <li style="list-style: decimal">
            Email yang kamu gunakan untuk mendaftar Bahaso
          </li>
          <li style="list-style: decimal">Merek HP</li>
          <li style="list-style: decimal">
            Versi Android/iOs (terdapat di about phone)
          </li>
          <li style="list-style: decimal">Detail kategori pembelajaran.</li>
          <li style="list-style: none">
            Contoh: A1- Where are you From – Cities and Countries – halaman 10
          </li>
        </ul>
      </div>
      <div class="mt-3 title-faq-text">
        Setelah itu, tim kami akan mencari tahu masalah yang di alami.
      </div>
    </div>
    <div class="mt-3">
      <div class="title-faq-parag">
        Apa yang harus dilakukan jika video/recording tidak keluar suaranya?
      </div>
      <div class="title-faq-text">
        <ul>
          <li style="list-style: decimal">Cek koneksi internet</li>
          <li style="list-style: decimal">
            Uji coba di HP lain. Apabila di HP lain tidak mengalami kendala,
            silahkan email ke info@bahaso.com dengan detail:
            <div class="mt-3">
              <ul>
                <li style="list-style: none">
                  Subject: [Report Audio, Domisili, Merk HP]
                </li>
                <li style="list-style: none">
                  contoh: [Report Audio, Jakarta, Xiaomi Note 4G].
                </li>
              </ul>
            </div>
            <div class="mt-3">
              <ul>
                <li style="list-style: none">
                  Isi email: Detail kategori pembelajaran
                </li>
                <li style="list-style: none">
                  contoh: A1- Where are you From – Cities and Countries –
                  halaman 10.
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="mt-3">
        <div class="title-faq-parag">
          Apa saja yang harus diperhatikan ketika mengerjakan soal writing?
        </div>
        <div class="title-faq-text">
          <div class="mt-3">
            <ul>
              <li style="list-style: decimal">
                Gunakan tanda baca dan huruf kapital dengan tepat. Walaupun
                jawaban kamu benar, poin akan tetap dikurangi jika penggunaan
                tanda baca dan huruf kapitalnya tidak tepat.
              </li>
              <li style="list-style: decimal">
                Perhatikan instruksi dan petunjuk (jika ada) supaya dapat
                menjawab dengan tepat.
              </li>
              <li style="list-style: decimal">
                Tidak boleh menjawab sama persis dengan contoh jawaban dari
                Bahaso (jika tulisan kamu sebelumnya sudah pernah direvisi
                Bahaso dan diberikan contoh jawaban yang diharapkan).
              </li>
              <li style="list-style: decimal">
                Perhatikan baik-baik lesson dan sublesson yang sedang kamu
                pelajari karena soal writing di akhir lesson berkaitan dengan
                pembahasan sebelumnya.
              </li>
              <li style="list-style: decimal">
                Jangan menerjemahkan soal/instruksi ke dalam Bahasa Inggris,
                tapi jawab soal tersebut sesuai dengan instruksi yang diberikan.
              </li>
              <li style="list-style: decimal">
                Jangan menerjemahkan soal/instruksi ke dalam Bahasa Inggris,
                tapi jawab soal tersebut sesuai dengan instruksi yang diberikan.
              </li>
              <li style="list-style: decimal">
                Jangan lupa untuk membaca koreksi dari Bahaso untuk tulisanmu
                dan pelajari dengan seksama letak kesalahannya.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "menggunakan",
  data() {
    return { name: "" };
  },
  created() {
    this.name = this.$route.name;
  },
};
</script>

<style>
.title-faq-text {
  font-size: 14px;
}
.title-faq-parag {
  color: #23abfa;
  font-size: 16px;
  font-weight: 500;
}
.title-faq {
  color: #23abfa;
  font-size: 20px;
}
</style>