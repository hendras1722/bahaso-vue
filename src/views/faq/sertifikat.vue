<template>
  <div>
    <div class="title-faq">SERTIFIKAT</div>
    <div class="mt-3">
      <div class="title-faq-parag">
        Apakah setelah belajar di Bahaso akan mendapatkan sertifikat?
      </div>
      <div class="title-faq-text">
        Pengguna Bahaso yang berhasil menyelesaikan pembelajaran pada setiap
        level di Bahaso akan mendapat sertifikat resmi dari Bahaso dan Fakultas
        Ilmu Pengetahuan Budaya Universitas Indonesia (FIB UI). Sertifikat
        digital tersebut dapat diunduh melalui aplikasi. Sertifikat dapat
        digunakan untuk mendaftar kerja dan universitas.
      </div>
    </div>
    <div class="mt-3">
      <div class="title-faq-parag">
        Berapa lama proses sertifikat sampai bisa didownload melalui aplikasi?
      </div>
      <div class="title-faq-text">
        Sertifikat akan diberikan paling cepat 1 bulan setelah user
        menyelesaikan level tersebut.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sertifikat-page",
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