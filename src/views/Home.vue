<template>
  <div>
    <div class="bgparralax">
      <navbar />
      <div style="position: relative">
        <jumbo-tron></jumbo-tron>
      </div>
    </div>
    <div class="bg-benefit container">
      <benefit></benefit>
    </div>
    <div style="position: relative">
      <div class="bgparralax1 pt-3 pb-2 d-flex justify-content-center">
        <youtube></youtube>
      </div>
    </div>
    <div class="pt-5 pb-5">
      <fitur></fitur>
    </div>
    <div>
      <section-2></section-2>
    </div>
    <div class="container d-flex justify-content-center">
      <peresmian></peresmian>
    </div>
    <div class="bgparralax2 pt-3 pb-2 d-flex justify-content-center">
      <div>
        <download-mobile></download-mobile>
      </div>
    </div>
    <div class="bgparralax3 pt-3 pb-3 d-flex justify-content-center">
      <div>
        <b-container class="bv-example-row" fluid="sm">
          <b-row>
            <b-col class="d-flex align-items-center">
              <div class="d-flex flex-wrap">
                <img
                  src="https://bahaso.com/image/landing/btn-playstore.png"
                  class="bg-mobile"
                />
                <img
                  src="https://bahaso.com/image/landing/btn-appstore.png"
                  class="bg-mobile"
                />
              </div>
            </b-col>
            <b-col>
              <div class="title-downloadBahaso">
                Belajar menjadi lebih fleksibel dengan Bahaso di mobile!
              </div>
              <div class="mt-3">
                Download Bahaso di Play Store atau App Store sekarang untuk
                kenyamanan Anda belajar bahasa asing kapan saja dan di mana
                saja!
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
    <div class="pt-3 pb-3 d-flex justify-content-center container">
      <client-partner></client-partner>
    </div>
    <div class="pt-3 pb-3 container d-flex justify-content-center">
      <media></media>
    </div>
    <div>
      <div class="bgparralax4 pt-3 pb-2 d-flex justify-content-center">
        <support></support>
      </div>
    </div>
    <div class="container pt-3 pb-2 d-flex justify-content-center">
      <say></say>
    </div>
    <div class="bgparralax2 pt-3 pb-2 d-flex justify-content-center">
      <div>
        <download-mobile></download-mobile>
      </div>
    </div>
    <div style="position: relative">
      <div class="bgparralax1 pt-3 pb-3 d-flex justify-content-center">
        <footer-page></footer-page>
      </div>
    </div>
  </div>
</template>

<script>
import JumboTron from "../components/JumboTron.vue";
// @ is an alias to /src
import Navbar from "../components/Navbar.vue";
import Benefit from "../components/Benefit.vue";
import Youtube from "../components/Youtube.vue";
import Fitur from "../components/Fitur.vue";
import Section2 from "../components/Section2.vue";
import Peresmian from "../components/Peresmian.vue";
import DownloadMobile from "../components/DownloadMobile.vue";
import ClientPartner from "../components/ClientPartner.vue";
import Media from "../components/Media.vue";
import Support from "../components/Support.vue";
import Say from "../components/Say.vue";
import FooterPage from "../components/Footer.vue";
// import Parallax from "vue-parallaxy";
export default {
  name: "Home",
  components: {
    Navbar,
    JumboTron,
    Benefit,
    Youtube,
    Fitur,
    Section2,
    Peresmian,
    DownloadMobile,
    ClientPartner,
    Media,
    Support,
    Say,
    FooterPage,
  },
};
</script>

<style lang="css" scoped>
.homebg {
  padding-bottom: 10px;
}
.bgparralax {
  background-image: url("https://bahaso.com/image/landing/background.png");
  background-attachment: fixed;
  background-size: 400px 400px;
  color: #fff;
  background-color: #1b9ae2;
  height: auto;
  padding-bottom: 20px;
}
.bg-mobile {
  margin: 10px;
  width: 250px;
  height: 100%;
}
/* #696969 */
.bgparralax1 {
  background-image: url("https://bahaso.com/image/landing/background.png");
  background-attachment: fixed;
  background-size: 400px 400px;
  color: #fff;
  background-color: #696969;
  height: auto;
}
.bgparralax2 {
  background-image: url("https://bahaso.com/image/landing/background.png");
  background-attachment: fixed;
  background-size: 400px 400px;
  background-color: #04a17b;
  color: #fff;
  height: auto;
}
.title-downloadBahaso {
  font-weight: 700;
  font-size: 22px;
}
.bgparralax3 {
  background-image: url("https://bahaso.com/image/landing/background.png");
  background-attachment: fixed;
  background-size: 400px 400px;
  background-color: #1b9ae2;
  color: #fff;
  height: auto;
}
.bgparralax4 {
  background-image: url("https://bahaso.com/image/landing/background.png");
  background-attachment: fixed;
  background-size: 400px 400px;
  background-color: #1b9ae2;
  color: #fff;
  height: auto;
}
.bg-benefit {
  height: auto;
  padding: 10px;
  background: #fff;
}
</style>