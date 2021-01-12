<template>
  <div>
    <div class="text-center title-fitur">Fitur</div>
    <div class="mt-5">
      <b-container class="bv-example-row" fluid="sm">
        <b-row>
          <b-col>
            <div class="text-center">
              <img
                src="https://bahaso.com/image/landing/mockup1.png"
                class="fitur-logo"
              />
            </div>
          </b-col>
          <b-col class="d-flex align-items-center">
            <div class="row">
              <div class="col">
                <div class="fitur-titlelogo">Kurikulum dan Level</div>
                <div class="fitur-deslogo">
                  Platform belajar yang memudahkan dan menyenangkan, Anda akan
                  mendapatkan akses level dan kurikulum sesuai dengan kemampuan
                  Anda.
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="d-flex align-items-center">
            <div class="row">
              <div class="col">
                <div class="fitur-titlelogo">Interactive</div>
                <div class="fitur-deslogo d-flex justify-content-center">
                  Anda akan mendapatkan platform pembelajaran yang interaktif
                  untuk mempercepat Anda dalam belajar writing, reading,
                  speaking, dan listening. Setiap materi akan disajikan dengan
                  text, foto, audio, dan video.
                </div>
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="text-center">
              <img
                src="https://bahaso.com/image/landing/mockup2.png"
                class="fitur-logo"
              />
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div class="text-center">
              <img
                src="https://bahaso.com/image/landing/mockup3.png"
                class="fitur-logo"
              />
            </div>
          </b-col>
          <b-col class="d-flex align-items-center">
            <div class="row">
              <div class="col">
                <div class="fitur-titlelogo">Speech Recognition</div>
                <div class="fitur-deslogo">
                  Belajar berbicara bahasa asing menjadi lebih interaktif dengan
                  fitur speech recognition atau pengenalan suara yang bermanfaat
                  untuk melatih kemampuan speaking.
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "Fitur",
};
</script>

<style>
.fitur-deslogo {
  font-size: 19px;
}
.fitur-titlelogo {
  font-size: 22px;
  font-weight: 600;
}
.fitur-logo {
  height: 40%;
  width: 80%;
}
.title-fitur {
  font-size: 22px;
  font-weight: 700;
}
</style>