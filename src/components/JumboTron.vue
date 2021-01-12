<template>
  <div>
    <b-container class="bv-example-row mt-3" fluid="sm">
      <b-row>
        <b-col>
          <div class="headline-body">
            <div class="text-center title">Mau Les Bahasa Online?</div>
            <div class="text-center desc">
              Belajar Bahasa Inggris dan Bahasa lainnya jadi lebih efektif,
              cepat, dan fleksibel dengan Bahaso.
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row class="row-image d-flex justify-content-center">
        <b-col class="d-flex justify-content-center mt-3">
          <a class="product-container p-3">
            <div class="product-image text-center">
              <img
                src="https://bahaso.com/image/landing/materi.png"
                alt="photo1"
              />
              <div class="titles">Materi Interaktif</div>
              <div class="description">
                Belajar via Video, Gambar, dan Audio (tanpa Tutor). Tersedia
                untuk General English dan Mandarin.
              </div>
              <div class="mt-3">
                <button class="btn btn-orange btn-orange-small" type="button">
                  Belajar Sekarang
                </button>
              </div>
            </div>
          </a>
        </b-col>
        <b-col class="d-flex justify-content-center mt-3">
          <a class="product-container p-3">
            <div class="product-image text-center">
              <img
                src="https://bahaso.com/image/landing/kelas.png"
                alt="photo1"
              />
              <div class="titles">KELAS TUTORING</div>
              <div class="description">
                Kelas online untuk persiapan IELTS dan TOEFL yang dibimbing
                langsung oleh Tutor berpengalaman.
              </div>
              <div class="mt-3">
                <button class="btn btn-orange btn-orange-small" type="button">
                  Daftar Sekarang
                </button>
              </div>
            </div>
          </a>
        </b-col>
      </b-row>
      <div class="headline-footer text-center mt-3">
        <div>Apa itu Bahaso?</div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "JumboTron",
};
</script>

<style lang="css">
.headline-footer:after {
  content: " ";
  display: inline-block;
  width: 12px;
  height: 12px;
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.description:hover {
  color: #fff !important;
  text-decoration: none !important;
}
.description {
  color: #fff;
}
.titles:hover {
  color: #fff !important;
  text-decoration: none !important;
}
.row-image {
  width: 100%;
  max-width: 900px;
  margin: auto !important;
}
.titles {
  color: #fff;
  font-weight: 700;
  font-size: 18px;
}
.btn-orange-small {
  padding: 10px 0 !important;
  max-width: 200px !important;
}
.btn-orange:active {
  transform: translateY(2px);
}

.btn-orange:hover {
  background-color: #de7907 !important;
}
.btn-orange {
  width: 100%;
  max-width: 280px;
  height: 43px;
  background-color: #fb8907 !important;
  border-bottom: 2px solid #af720d !important;
  color: #fff !important;
}
.product-container:hover {
  color: #fff;
  text-decoration: none;
  box-shadow: 0 0 5px 4px rgba(0, 0, 0, 0.08);
}
.product-container {
  width: 360px;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  background-color: transparent;
  text-decoration: none !important;
}
.product-image > img {
  width: 70%;
  height: 70%;
}
.title {
  font-size: 22px;
  font-weight: 700;
}
.headline-body .desc {
  max-width: 480px;
  margin: auto;
}
</style>