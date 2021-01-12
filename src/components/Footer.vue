<template>
  <div class="pb-3 pt-3" v-if="condition === 'Home'">
    <div class="text-center">Ada Pertanyaan? Silakan hubungi kami melalui</div>
    <div class="text-center">info@bahaso.com | +6221 2120 2012</div>
    <div class="text-center company-title mt-5">
      PT Bahaso Intermedia Cakrawala
    </div>
    <div class="text-center">
      Jalan Suryopranoto No 29 A, Jakarta Pusat, Indonesia. 10160.
    </div>
    <div class="text-center follow mt-5">follow us on:</div>
    <div class="text-center follow mt-3 d-flex justify-content-center">
      <div class="d-flex flex-wrap sosialMedia justify-content-center">
        <img
          src="https://bahaso.com/image/landing/social/facebook_on.png"
          class="ml-3 icon-sosmed"
        />
        <img
          src="https://bahaso.com/image/landing/social/twitter_on.png"
          class="ml-3 icon-sosmed"
        />
        <img
          src="https://bahaso.com/image/landing/social/instagram_on.png"
          class="ml-3 icon-sosmed"
        />
        <img
          src="https://bahaso.com/image/landing/social/youtube_on.png"
          class="ml-3 icon-sosmed"
        />
      </div>
    </div>
    <div class="text-center follow mt-5">&#169; bahaso 2017</div>
    <div class="d-flex justify-content-around mt-3">
      <div class="nav-footer">
        <router-link to="/about" :about="about">About</router-link>
      </div>
      <div class="nav-footer">Terms</div>
      <div class="nav-footer">Privacy</div>
      <div class="nav-footer">Career</div>
      <div class="nav-footer">Affiliate</div>
      <div class="nav-footer">Blog</div>
      <div class="nav-footer">Contact</div>
      <div class="nav-footer">FAQ</div>
    </div>
  </div>
  <!-- else -->
  <div v-else class="bg-footer d-flex justify-content-center">
    <div class="linkFooter">
      <div class="d-flex justify-content-between mt-3">
        <div class="nav-footer1">
          <router-link to="/about" :about="about">Tentang</router-link>
        </div>
        <div class="nav-footer1">Syarat & Ketentuan</div>
        <div class="nav-footer1">Privasi</div>
        <div class="nav-footer1">Karir</div>
        <div class="nav-footer1">Kontak</div>
        <div class="nav-footer1">FAQ</div>
        <div class="nav-footer1">Blog</div>
        <div class="text-center follow d-flex justify-content-center">
          <div class="d-flex flex-wrap sosialMedia justify-content-center">
            <img
              src="https://bahaso.com/image/icons/twitter.svg"
              class="ml-2 icon-sosmed"
            />
            <img
              src="https://bahaso.com/image/icons/facebook.svg"
              class="ml-2 icon-sosmed"
            />
            <img
              src="https://bahaso.com/image/icons/instagram.svg"
              class="ml-2 icon-sosmed"
            />
            <img
              src="https://bahaso.com/image/icons/youtube.svg"
              class="ml-2 icon-sosmed"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterPage",
  data() {
    return { condition: "" };
  },
  created() {
    this.condition = this.$route.name;
  },
};
</script>

<style>
.nav-footer {
  font-size: 12px;
}
.nav-footer a {
  text-decoration: none;
  color: #fff;
}

.nav-footer a:hover {
  text-decoration: none;
  color: #fff;
}
.icon-sosmed {
  width: 100%;
  max-width: 20px;
  height: 100%;
  max-height: 20px;
  filter: grayscale(100%) brightness(50%) contrast(100%);
}
.icon-sosmed:hover {
  width: 15%;
  height: 93%;
  filter: none;
}

.sosialMedia {
  width: 150px;
}
.follow {
  font-size: 12px;
}
.company-title {
  font-weight: 700;
  font-size: 22px;
}
.bg-footer {
  background-image: url("https://bahaso.com//image/landing/background.png");
  background-size: 300px;
  position: relative;
  bottom: 0;
  width: 100%;
  padding: 50px 0 40px;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  clear: both;
}
.linkFooter {
  width: 600px;
}
</style>