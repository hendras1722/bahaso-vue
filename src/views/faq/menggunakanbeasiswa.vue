<template>
  <div>
    <div class="title-faq">MENGGUNAKAN BEASISWA</div>
    <div class="mt-3">
      <div class="title-faq-parag">
        Apa yang dimaksud dengan Beasiswa Bahaso?
      </div>
      <div class="title-faq-text">
        Beasiswa Bahaso adalah kesempatan untuk bisa mengakses premium
        membership GRATIS selama periode yang telah ditentukan. Kamu bisa
        memasukkan kode beasiswa yang kamu miliki di kolom Kode Beasiswa /
        Scholarship Redeem, BUKAN di kolom voucher. Pastikan kamu memasukkan
        kode di menu yang benar. Jika kamu dapat menyelesaikan pembelajaran
        hingga level akhir selama masa beasiswa masih berlaku, kamu akan
        mendapatkan sertifikat kelulusan layaknya premium member.
      </div>
    </div>
    <div class="mt-3">
      <div class="title-faq-parag">
        Apa perbedaan sebelum dan sudah mendapat beasiswa?
      </div>
      <div class="title-faq-text">
        Kamu dapat melanjutkan pelajaran hingga lesson-lesson berikutnya.
      </div>
    </div>
    <div class="mt-3">
      <div class="title-faq-parag">
        Apakah saya bisa menggunakan kode beasiswa lain jika sudah pernah
        menggunakan kode beasiswa?
      </div>
      <div class="title-faq-text">
        Tidak. Kode beasiswa hanya berlaku untuk satu pengguna dan satu kali.
        Jika beasiswa sudah habis, kamu harus berlangganan premium membership
        untuk bisa melanjutkan pembelajaran.
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
      <div class="title-faq-parag">
        Saya sudah memasukkan kode beasiswa, kenapa tidak valid?
      </div>
      <div class="title-faq-text">
        Hal ini dikarenakan kode yang kamu masukkan salah. Coba periksa kembali
        kode yang kamu input dan apakah kamu sudah memasukkan kode di menu yang
        benar.
      </div>
    </div>
    <div class="mt-3">
      <div class="title-faq-parag">
        Kalau dalam 3 bulan tidak bisa menyelesaikan pembelajaran Bahaso?
      </div>
      <div class="title-faq-text">
        Kamu harus berlangganan premium membership. Oleh karena itu, segera
        tamatkan pembelajaran di Bahaso dengan pengerjaan minimal 1 jam per
        hari.
      </div>
      <div class="mt-3">
        <div class="title-faq-parag">
          Bagaimana cara tau masa berlaku beasiswa dan premium membership saya?
        </div>
        <div class="title-faq-text">Kamu bisa melihatnya di menu upgrade.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "menggunakanBeasiswa",
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