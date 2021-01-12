<template>
  <div class="bg-client">
    <div class="text-center title-client">Corporate client kami</div>
    <div class="d-flex justify-content-around">
      <img
        src="https://bahaso.com/image/landing/media/gojek.png"
        class="logoclient"
      />
      <img
        src="https://bahaso.com/image/landing/media/polri.png"
        class="logoclient"
      />
      <img
        src="https://bahaso.com/image/landing/media/studentjob.png"
        class="logoclient"
      />
    </div>
    <div class="text-center mt-3">
      dan lainnya.<br />
      (Bahaso melayani training bahasa asing untuk karyawan perusahaan)
    </div>
  </div>
</template>

<script>
export default {
  name: "clientPartner",
};
</script>

<style>
.logoclient {
  width: 100%;
  height: 30%;
  margin-top: 20px;
}
.bg-client {
  width: 100% !important;
  max-width: 500px !important;
}
.title-client {
  font-weight: 700;
  font-size: 22px;
}
</style>