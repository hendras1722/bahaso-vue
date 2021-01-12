<template>
  <div>
    <section class="section-community">
      <div class="container titleCom">
        Lebih dari 350.000++ orang telah bergabung dalam komunitas pembelajar
        bahasa asing di Bahaso.
      </div>
    </section>
    <section class="section-speakup">
      <div class="container titleCom1">
        <img src="https://bahaso.com/image/landing/speakup.png" />
        <!-- <div class="row">
          <div class="col-sm-12">
          </div>
        </div> -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Section2",
};
</script>

<style>
.titleCom {
  color: #42abe0;
  font-weight: 900;
  font-size: 3vw;
  padding-top: 30px;
}
.section-speakup {
  height: 180px;
  background-color: #e6e6e6;
}
.section-community {
  height: 320px;
  padding-bottom: 0;
  background-color: #f9f9f9;
  background-image: url("https://bahaso.com/image/landing/monumen.png");
  background-size: 1000px auto;
  background-position: bottom;
  background-repeat: no-repeat;
  text-align: center;
}
.container.titleCom1 {
  height: inherit;
  display: flex;
  justify-content: center;
}
.section-speakup img {
  width: 80%;
  position: absolute;
  bottom: 0;
  /* left: 50%; */
  /* margin-left: -45%; */
  height: 360px;
}
</style>