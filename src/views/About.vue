<template>
  <div>
    <navbar />
    <div class="container screen2 pb-5 mb-3">
      <div class="mb-2">
        <div class="panel-title">TENTANG BAHASO</div>
        <div class="panel-title mt-3 text-center">Latar Belakang</div>
      </div>
      <div class="d-flex justify-content-center">
        <div class="itemsCenter">
          <div class="textin">
            Dibangun pada Januari 2015, Bahaso hadir untuk menjadi solusi bagi
            masyarakat yang ingin belajar bahasa asing dengan cara yang lebih
            efektif, efisien dan fleksibel dalam masalah waktu.
          </div>
          <div class="mt-3 textin">
            Bahaso menggunakan metode pembelajaran terbaru yang disesuaikan
            dengan kondisi saat ini sehingga masyarakat bisa menguasai bahasa
            asing dengan lebih cepat. Para pembelajar bahasa juga dapat belajar
            bahasa asing dimanapun dan kapan saja mereka suka.
          </div>
          <div class="mt-3 textin">
            Diharapkan akan banyak masyarakat Indonesia baik di kota dan
            pedesaan yang mampu menguasai bahasa asing dengan cara yang mudah
            dan menyenangkan.
          </div>
        </div>
      </div>
      <div class="imgSection row">
        <div class="col-sm-12 col-sm-offset-7">
          <div class="d-flex justify-content-end">
            <div class="misi text-left">
              <div>Misi</div>
            </div>
          </div>
          <div class="d-flex justify-content-end">
            <div class="misi1 d-flex justify-content-start text-left">
              <!-- <div> -->
              <ul>
                <li>Merevolusi cara orang belajar bahasa asing</li>
                <li>
                  Menjadikan masyarakat Indonesia memiliki kemampuan berbahasa
                  asing guna menyambut globalisasi.
                </li>
              </ul>
              <!-- </div> -->
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <img
          src="https://bahaso.com/image/footer/bahaso_strategi.png"
          class="img-strategi"
        />
      </div>
      <div class="panel-title text-center mt-3">Strategi</div>
      <div class="d-flex justify-content-center mt-3">
        <div class="itemsCenter">
          <div class="textin">
            Bahaso menyajikan cara belajar secara interaktif melalui media text
            audio dan video. Pendekatan Bahaso adalah mengajarkan bahasa dengan
            mempertimbangkan faktor psikologis, interaksi dan pengalaman
            pengguna dalam menyerap materi yang diberikan.
          </div>
          <div class="mt-3 textin">
            Selain itu kami juga menyediakan fitur Live Teaching dimana pengguna
            bisa mendapatkan bimbingan secara online. Fitur sosial media guna
            mendukung platform pembelajaran.
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <img
          src="https://bahaso.com/image/footer/bahaso_class_ielts_toefl.png"
          class="img-strategi"
        />
      </div>
      <div class="d-flex justify-content-center mt-5">
        <div class="itemsCenter">
          <div class="textin">
            Kelas Bahasa Online dengan program tutoring yang seru dan fleksibel
            melalui aplikasi, website, dan chatting messenger bersama tutor
            berkualitas dan teman-teman yang supportif di mana saja dan kapan
            saja.
          </div>
        </div>
      </div>
      <div class="panel-title text-center mt-3">Leader</div>
      <div class="d-flex justify-content-center mt-4">
        <div class="leader d-flex justify-content-around">
          <div>
            <img
              src="https://bahaso.com/image/footer/bahaso_ceo.png"
              class="CEO-img"
            />
            <div class="text-center">Allana P. Abdullah</div>
            <div class="panel-title mt-2 text-center">CEO</div>
          </div>
          <div>
            <div>
              <img
                src="https://bahaso.com/image/footer/bahaso_cto.png"
                class="CEO-img"
              />
              <div class="text-center">Darwin</div>
              <div class="panel-title mt-2 text-center">CTO</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-page></footer-page>
  </div>
</template>

<script>
import FooterPage from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Navbar,
    FooterPage,
  },
};
</script>

<style lang="css">
.screen2 {
  border: 1px solid #eaeaea;
  width: 100%;
  max-width: 1000px;
  margin-top: 80px;
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
.leader {
  width: 100%;
  max-width: 500px;
}
.CEO-img {
  width: 100%;
  max-width: 120px;
  height: 100%;
  max-height: 120px;
}
</style>