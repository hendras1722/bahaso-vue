<template>
  <div>
    <navbar />
    <div class="container mt-3 screen2 pb-3 mb-3">
      <div class="mt-2 mb-2">
        <div class="panel-title">CONTACT</div>
      </div>
      <div class="row mt-4">
        <div class="col-sm-12 p-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7933.412199096373!2d106.817457!3d-6.170094!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf786ff313b2f0f54!2sBahaso%20Building!5e0!3m2!1sen!2sid!4v1610462207556!5m2!1sen!2sid"
            width="100%"
            height="300"
            frameborder="0"
            style="border: 0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
      <div class="panel-title">PT Bahaso Intermedia Cakrawala</div>
      <div class="mt-3">
        <div class="parag">Bahaso Building</div>
        <div class="parag">
          Jalan Suryopranoto No 29 A, Jakarta Pusat, Indonesia. 10160.
        </div>
        <div class="parag">Kelurahan Petojo, Kecamatan Gambir.</div>
      </div>
      <div class="mt-5">
        <div class="parag">Email: info@bahaso.com</div>
        <div class="parag">Customer service: +62 815 8523 3481</div>
      </div>
    </div>
    <footer-page />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import FooterPage from "../components/Footer.vue";
export default {
  components: { Navbar, FooterPage },
  name: "Kontak",
};
</script>


<style lang="css">
.screen2 {
  border: 1px solid #eaeaea;
  width: 100%;
  max-width: 1000px;
}
.panel-title {
  color: #23abfa;
  font-size: 22px;
}
.itemsCenter {
  width: 100%;
  max-width: 700px;
  font-size: 15px;
}
.imgSection {
  background: url("https://bahaso.com/image/footer/bahaso_misi.png");
  background-size: cover;
  position: relative;
  bottom: 0;
  margin-top: 30px;
  padding: 50px 0 60px;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
}
.misi {
  width: 350px;
  color: #fff;
  font-size: 25px;
}
.misi1 {
  color: #fff;
  width: 350px;
}
.img-strategi {
  margin-top: 60px;
  width: 100%;
  height: 100%;
  max-width: 450px;
}
.textin {
  text-align: justify;
}
.parag {
  font-size: 14px;
}
</style>