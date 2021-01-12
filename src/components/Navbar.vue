<template>
  <div>
    <div v-if="condition === 'Home'" class="container p-3">
      <b-navbar toggleable="sm" type="dark" variant="transparent">
        <b-navbar-brand
          ><img src="https://bahaso.com/image/logo-white.svg" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <router-link to="/">
              <b-button size="sm" class="btn-register btnin mr-3" type="button">
                Daftar
              </b-button>
            </router-link>
            <a>
              <b-button size="sm" class="btn-masuk btnin" type="button">
                Masuk
              </b-button>
            </a>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div v-else>
      <b-navbar
        toggleable="sm"
        class="navbar1 d-flex justify-content-center"
        fixed="top"
      >
        <div class="container1">
          <b-navbar-brand
            ><img
              src="https://bahaso.com/image/logo-white.svg"
              style="width: 120px"
            />
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <div class="mr-auto pt-2">
            <b-collapse id="nav-collapse" is-nav>
              <!-- Right aligned nav items -->
              <b-navbar-nav>
                <b-nav-item to="/" class="navItem mr-3">HOME</b-nav-item>
                <b-nav-item
                  to="/about"
                  :style="{
                    borderBottom:
                      condition === 'About' ? '5px solid #FFF' : 'none',
                    color: condition === 'About' ? '#FFF' : '#bde6fd',
                  }"
                  :active="condition === 'About' ? true : false"
                  class="navItem mr-3"
                  >TENTANG</b-nav-item
                >
                <b-nav-item
                  to="/career"
                  class="navItem mr-3"
                  :style="{
                    borderBottom:
                      condition === 'Karir' ? '5px solid #FFF' : 'none',
                  }"
                  :active="condition === 'Karir' ? true : false"
                  >KARIR</b-nav-item
                >
                <b-nav-item
                  to="/faq"
                  class="navItem mr-3"
                  :style="{
                    borderBottom:
                      condition === 'faq' ? '5px solid #FFF' : 'none',
                  }"
                  :active="condition === 'faq' ? true : false"
                  >FAQ</b-nav-item
                >
                <b-nav-item
                  to="/contact"
                  class="navItem mr-3"
                  :style="{
                    borderBottom:
                      condition === 'Kontak' ? '5px solid #FFF' : 'none',
                  }"
                  :active="condition === 'Kontak' ? true : false"
                  >KONTAK</b-nav-item
                >
              </b-navbar-nav>
            </b-collapse>
          </div>
        </div>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return { condition: "" };
  },
  created() {
    this.condition = this.$route.name;
  },
};
</script>

<style lang="css">
img {
  height: 35px;
}
.container1 {
  width: 100%;
  display: flex;
  max-width: 1000px;
}
.container {
  max-width: 1000px;
  position: relative;
}
.btn-secondary:focus,
.btn-secondary.focus {
  outline: 0 !important;
  box-shadow: none;
  border: none;
}
.btn-masuk {
  width: 172px;
  height: 52px;
  border: 2px solid #fff !important;
  background: #1b9ae2 !important;
  color: #fff !important;
  font-weight: 700 !important;
  font-size: 20px !important;
  box-shadow: 0 4px 0 0 rgba(0, 0, 0, 0.2) !important;
  outline: none !important;
}
.btn-register {
  width: 172px;
  height: 52px;
  border: 2px solid #fff !important;
  background: #fff !important;
  color: #1b9ae2 !important;
  font-weight: 700 !important;
  font-size: 20px !important;
  box-shadow: 0 4px 0 0 rgba(0, 0, 0, 0.2) !important;
  outline: none !important;
}
.btnin:hover {
  background: #fff;
  color: #1b9ae2;
  border: 2px solid #fff;
  transform: translateY(-1px);
  box-shadow: 0 4px 0 0 rgba(0, 0, 0, 0.2);
  outline: none !important;
}
.btnin:active {
  background: #fff;
  color: #1b9ae2;
  border: 2px solid #fff;
  box-shadow: none !important;
  transform: translateY(2px);
  outline: none !important;
}
.navbar-light .navbar-nav .show > .nav-link,
.navbar-light .navbar-nav .active > .nav-link,
.navbar-light .navbar-nav .nav-link.show,
.navbar-light .navbar-nav .nav-link.active {
  color: #fff !important;
}
.navItem a {
  font-weight: 500 !important;
}
.navbar-light .navbar-nav .nav-link {
  color: #fff;
}
/* .navbar-light .navbar-nav .nav-link {
  color: #fff !important;B9E4FD
  font-weight: 400;
  font-size: 15px;
} */
.navbar-light .navbar-nav .nav-link:hover {
  color: #fff !important;
}
.navbar {
  padding: 0px !important;
}
.navbar1 {
  position: fixed;
  background-color: #23abfa;
}
</style>