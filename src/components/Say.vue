<template>
  <div class="pb-3 pt-3 bg-say">
    <div class="text-center title-say">Apa kata mereka tentang Bahaso?</div>
    <div class="d-flex mt-3 align-items-center">
      <img
        src="https://bahaso.com/image/landing/testimoni-ayu.png"
        class="img-say"
      />
      <div>
        Bahaso.com memberikan kemudahan bagi saya untuk belajar dan menguasai
        bahasa Inggris dengan cepat. Dengan platform ini saya bisa belajar kapan
        saja dimana saja sesuka saya, Lebih fleksibel dibanding bimbel les
        konvensional.<br />
        <strong class="text-primary">Ayu Purnamasari</strong> - Jakarta
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Say",
};
</script>

<style>
.title-say {
  font-weight: 700;
  font-size: 22px;
}
.img-say {
  width: 17%;
  height: 60%;
  margin-right: 10px;
}
.bg-say {
  width: 100%;
  max-width: 700px;
}
</style>