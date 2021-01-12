<template>
  <div class="pt-3 pb-3">
    <div class="text-center title-download">
      Tunggu apa lagi? Daftar sekarang juga!
    </div>
    <div class="d-flex justify-content-center">
      <button class="btn btn-orange1 btn-orange-small1 mt-3" type="button">
        DAFTAR SEKARANG GRATIS!
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DownloadMobile",
};
</script>

<style>
.btn-orange-small1 {
  padding: 10px 0 !important;
  max-width: 200px !important;
}
.btn-orange1:active {
  transform: translateY(2px);
}
.btn-orange1:hover {
  background-color: #de7907 !important;
}
.btn-orange1 {
  width: 100%;
  max-width: 280px !important;
  height: 53px;
  background-color: #fb8907 !important;
  border-bottom: 2px solid #af720d !important;
  color: #fff !important;
}
.title-download {
  font-size: 40px;
  font-weight: 700;
}
</style>