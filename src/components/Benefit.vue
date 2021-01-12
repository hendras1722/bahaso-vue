<template>
  <div class="pb-3 pt-3">
    <div class="text-center title-benefit">Benefit</div>
    <div class="text-center">
      Bahaso memberikan berbagai keunggulan yang tidak Anda dapatkan di
      bimbingan belajar offline.
    </div>
    <b-container class="bv-example-row mt-5" fluid="sm">
      <b-row>
        <b-col>
          <div class="d-flex justify-content-center">
            <img
              src="https://bahaso.com/image/landing/benefit-metode.png"
              alt="logo"
              class="img-logo"
            />
          </div>
          <div class="text-center proven mt-3">Proven Learning Methods</div>
          <div class="text-center des-benefit">
            Kami mendesain metode pembelajaran yang berstandar International.
            Kami mengacu kepada CEFR (Common European Framework of Reference of
            Languages).
          </div>
        </b-col>
        <b-col>
          <div class="d-flex justify-content-center">
            <img
              src="https://bahaso.com/image/landing/benefit-jam.png"
              alt="logo"
              class="img-logo"
            />
          </div>
          <div class="text-center proven mt-3">24 Jam Akses Belajar</div>
          <div class="text-center des-benefit">
            Anda bisa mengakses materi pembelajaran tak terbatas selama 24 jam
            dan 7 hari dalam seminggu. Kapanpun dan dimanapun Anda bebas untuk
            belajar!
          </div>
        </b-col>
        <b-col>
          <div class="d-flex justify-content-center">
            <img
              src="https://bahaso.com/image/landing/benefit-sertifikat.png"
              alt="logo"
              class="img-logo"
            />
          </div>
          <div class="text-center proven mt-3">
            Sertifikat dari Fakultas Ilmu Pengetahuan Budaya Universitas
            Indonesia*
          </div>
          <div class="text-center des-benefit">
            Di akhir kelulusan Anda akan mendapatkan sertifikat yang akan
            memberikan banyak manfaat untuk Anda seperti melamar pekerjaan dan
            mendaftar kuliah.
          </div>
          <div class="italic-note text-center mt-3">*untuk Bahasa Inggris</div>
          <div class="italic-note text-center">
            *tidak berlaku untuk Kelas Tutoring
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Benefit",
};
</script>

<style lang="css">
.italic-note {
  font-style: italic;
  font-size: 12px;
}
.des-benefit {
  font-size: 16px;
}
.proven {
  font-weight: 500;
}
.img-logo {
  height: auto;
}
.title-benefit {
  font-weight: 700;
  font-size: 25px;
}
</style>