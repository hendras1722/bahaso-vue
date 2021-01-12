<template>
  <div>
    <navbar />
    <div class="d-flex justify-content-center mb-4">
      <div class="screen3">
        <div class="bg-faq">
          <div class="row">
            <div class="col-8 border-faq">
              <div>
                <div class="tab-content" id="v-pills-tabContent">
                  <div
                    class="tab-pane fade show active p-3"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <pengenalan />
                  </div>
                  <div
                    class="tab-pane fade p-3"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <menggunakan />
                  </div>
                  <div
                    class="tab-pane fade p-3"
                    id="v-pills-messages"
                    role="tabpanel"
                    aria-labelledby="v-pills-messages-tab"
                  >
                    <berlangganan />
                  </div>
                  <div
                    class="tab-pane fade p-3"
                    id="v-pills-settings"
                    role="tabpanel"
                    aria-labelledby="v-pills-settings-tab"
                  >
                    <menggunakanbeasiswa />
                  </div>
                  <div
                    class="tab-pane fade p-3"
                    id="v-pills-sertifikat"
                    role="tabpanel"
                    aria-labelledby="v-pills-settings-tab"
                  >
                    <sertifikat />
                  </div>
                  <div
                    class="tab-pane fade p-3"
                    id="v-pills-penilaian"
                    role="tabpanel"
                    aria-labelledby="v-pills-settings-tab"
                  >
                    <penilaian />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="border-faq">
                <div class="p-3" style="color: blue; font-size: 20px">HELP</div>
                <div
                  class="nav flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <a
                    class="nav-link active"
                    id="v-pills-home-tab"
                    data-toggle="pill"
                    href="#v-pills-home"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                    >Pengenalan</a
                  >
                  <a
                    class="nav-link"
                    id="v-pills-profile-tab"
                    data-toggle="pill"
                    href="#v-pills-profile"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                    >Menggunakan Bahaso</a
                  >
                  <a
                    class="nav-link"
                    id="v-pills-messages-tab"
                    data-toggle="pill"
                    href="#v-pills-messages"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                    >Berlangganan Premium Membership</a
                  >
                  <a
                    class="nav-link"
                    id="v-pills-settings-tab"
                    data-toggle="pill"
                    href="#v-pills-settings"
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                    >Menggunakan Beasiswa</a
                  >
                  <a
                    class="nav-link"
                    id="v-pills-settings-tab"
                    data-toggle="pill"
                    href="#v-pills-sertifikat"
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                    >Sertifikat</a
                  >
                  <a
                    class="nav-link"
                    id="v-pills-settings-tab"
                    data-toggle="pill"
                    href="#v-pills-penilaian"
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                    >Penilaian</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-page />
  </div>
</template>

<script>
import FooterPage from "../../components/Footer.vue";
import Navbar from "../../components/Navbar.vue";
import berlangganan from "./berlangganan.vue";
import Menggunakan from "./menggunakan.vue";
import Menggunakanbeasiswa from "./menggunakanbeasiswa.vue";
import Pengenalan from "./pengenalan.vue";
import Penilaian from "./penilaian.vue";
import Sertifikat from "./sertifikat.vue";
export default {
  components: {
    Navbar,
    Pengenalan,
    Menggunakan,
    FooterPage,
    berlangganan,
    Menggunakanbeasiswa,
    Sertifikat,
    Penilaian,
  },
};
</script>
<style>
.screen3 {
  margin-top: 80px;
  height: auto;
}
.border-faq {
  border: 1px solid #eaeaea;
}
.bg-faq {
  width: 100%;
  max-width: 1000px;
  height: 100%;
}
</style>