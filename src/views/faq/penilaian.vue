<template>
  <div>
    <div class="title-faq">PENILAIAN</div>
    <div class="mt-3">
      <div class="title-faq-parag">Bagaimana sistem penilaian di bahaso?</div>
      <div class="title-faq-text mt-3">
        Berikut ini adalah persentase perhitungan nilai atau skor untuk General
        English:
      </div>
      <div class="title-faq-text mt-3">
        Skor per level:
        <div>
          <ul>
            <li>40% dari total skor review test</li>
            <li>60% dari skor level test</li>
          </ul>
        </div>
      </div>
      <div class="title-faq-text mt-3">
        Skor per course
        <div>
          <ul>
            <li>40% dari total skor keseluruhan review test</li>
            <li>60% dari skor keseluruhan level test</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "penilaian",
  data() {
    return { name: "" };
  },
  created() {
    this.name = this.$route.name;
  },
};
</script>

<style>
.body {
  margin: 0;
}
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