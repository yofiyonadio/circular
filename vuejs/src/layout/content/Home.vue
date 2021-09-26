<template>
  <div class="content">
    <div class="box">
      <div class="box-left">
        <div class="lottie">
          <lottie-player
            id="lottie-pockemon"
            src="https://assets4.lottiefiles.com/packages/lf20_jkdbuk2i.json"
            background="transparent"
            speed="2"
            style="width: 250px; height: 250px"
            loop
          ></lottie-player>
        </div>
        <div class="pockemon hide">
          <div class="pockemon-img">
            <div>
              <div class="left">
                <div class="pockemon-image top">
                  <img id="front_default" src="../../assets/logout2.svg" />
                </div>
              </div>
              <div class="right">
                <div class="pockemon-image top">
                  <img id="front_shiny" src="../../assets/logout2.svg" />
                </div>
              </div>
            </div>
            <div>
              <div class="left">
                <div class="pockemon-image bottom">
                  <img id="back_default" src="../../assets/logout2.svg" />
                </div>
              </div>
              <div class="right">
                <div class="pockemon-image bottom">
                  <img id="back_shiny" src="../../assets/logout2.svg" />
                </div>
              </div>
            </div>
          </div>
          <div class="pockemon-stat">
            <div>
              <a class="title">Name :</a>
              <br />
              <a id="name" class="text"></a>
            </div>
            <div>
              <a class="title">Type :</a>
              <br />
              <a id="type" class="text"></a>
            </div>
            <div>
              <a class="title">Url :</a>
              <br />
              <a
                href="https://www.w3schools.com/"
                target="_blank"
                id="url"
                class="text"
              ></a>
            </div>
          </div>
        </div>
      </div>
      <div class="box-right center-parrent">
        <div class="form center-child">
          <div class="form-body">
            <div class="btn">
              <div class="btn-left center-parrent" v-on:click="random()">
                <img
                  src="../../assets/random.png"
                  alt="Google"
                  class="center-child"
                />
              </div>
              <div class="btn-rigth" v-on:click="random()">
                <a>Random Pockemon</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="logout" v-on:click="signout()">
      <div class="logout-left">
        <a>Sign Out</a>
      </div>
      <div class="logout-right center-parrent">
        <img src="../../assets/logout2.svg" alt="sigout" class="center-child" />
      </div>
    </div>
  </div>
</template>
<script>
import VueCookie from "vue-cookie";
import Axios from "../../helper/axios";
import { router, env } from "../..";

export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  mounted: function () {},
  methods: {
    signout: function () {
      VueCookie.delete("token");
      VueCookie.delete("user");
      router.push({ name: "Login" });
    },
    getPokemon: function () {
      Axios.get(env.API_ORIGIN + "/api/pokemon", "")
        .then((datas) => {
          const data = datas.data.datas;
          this.setPokemonStat(
            data.pokemon.name,
            data.pokemon.url,
            data.types[0].type.name
          );
          this.setPokemonImage(data.sprites);
          this.lottieStop();
          this.lottieHide();
          this.pokemonShow();
        })
        .catch((error) => {
          this.lottieStop();
          alert(error);
        });
    },
    setPokemonStat: function (names, urls, types) {
      const name = document.querySelector("#name");
      const url = document.querySelector("#url");
      const type = document.querySelector("#type");
      name.innerHTML = names;
      url.innerHTML = urls;
      url.href = urls;
      type.innerHTML = types;
    },
    setPokemonImage: function (image) {
      const front_default = document.querySelector("#front_default");
      const front_shiny = document.querySelector("#front_shiny");
      const back_default = document.querySelector("#back_default");
      const back_shiny = document.querySelector("#back_shiny");
      front_default.src = image.front_default;
      front_shiny.src = image.front_shiny;
      back_default.src = image.back_default;
      back_shiny.src = image.back_shiny;
    },
    lottiePlay: function () {
      const lottie = document.querySelector("#lottie-pockemon");
      lottie.play();
    },
    lottieStop: function () {
      const lottie = document.querySelector("#lottie-pockemon");
      lottie.stop();
    },
    lottieHide: function () {
      const lotties = document.querySelector(".lottie");
      lotties.classList.remove("show");
      lotties.classList.add("hide");
    },
    lottieShow: function () {
      const lotties = document.querySelector(".lottie");
      lotties.classList.remove("hide");
      lotties.classList.add("show");
    },
    pokemonHide: function () {
      const pokemon = document.querySelector(".pockemon");
      pokemon.classList.remove("flex");
      pokemon.classList.add("hide");
    },
    pokemonShow: function () {
      const pokemon = document.querySelector(".pockemon");
      pokemon.classList.remove("hide");
      pokemon.classList.add("flex");
    },

    random: function () {
      this.lottiePlay();
      this.pokemonHide();
      this.lottieShow();
      this.getPokemon();
    },
  },
};
</script>
<style scoped>
a {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: rgb(53, 53, 53);
}
.content {
  position: fixed;
  background: linear-gradient(
    to right,
    rgb(14, 182, 233),
    rgb(14, 182, 233),
    rgb(49, 238, 191)
  ) !important;
  height: 100vh;
  width: 100vw;
  padding: 0px;
  margin: 0px;
  z-index: 0;
}

.box {
  height: inherit;
  width: inherit;
  display: flex;
}

.box-left {
  height: inherit;
  width: 50%;
  display: inline-flex;
  justify-content: center;
}

.box-left div {
  align-self: center;
}

.box-left div a {
  font-size: 40px;
}

.box-right {
  height: inherit;
  width: 50%;
  position: relative;
}

.pockemon {
  height: 450px;
  width: 600px;
  display: flex;
}

.pockemon-img {
  width: 50%;
  height: inherit;
}

.pockemon-img > div {
  width: 100%;
  height: 50%;
  display: flex;
}

.pockemon-img > div > div {
  width: 50%;
  height: 100%;
  display: flex;
}

.pockemon-img > div > .left {
  justify-content: end;
}

.pockemon-img > div > .right {
  justify-content: start;
}

.pockemon-img > div > div > .top {
  align-self: flex-end;
}

.pockemon-img > div > div > .bottom {
  align-self: flex-start;
}

.pockemon-image {
  background-color: lavenderblush;
  height: 100px;
  width: 100px;
  margin: 10px;
}

.pockemon-image > img {
  height: inherit;
  width: inherit;
}

.pockemon-stat {
  width: 50%;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.pockemon-stat div {
  align-self: flex-start;
}

.title {
  font-size: 20px !important;
}

.text {
  font-size: 25px !important;
}

#name {
  font-weight: bold;
}

#url {
  font-size: 20px !important;
}


.lottie {
}

/***-----------------------------------------------------------------***/

.hide {
  display: none;
}

.show {
  display: block;
}

.flex {
  display: flex;
}

.form {
  height: 450px;
  width: 350px;
  border-radius: 10px;
}

.form-body {
  width: inherit;
  display: flex;
  height: inherit;
  flex-direction: column;
  justify-content: space-evenly;
}

.form-header a {
  align-self: flex-end;
  font-size: 30px;
}

.btn {
  align-self: center;
  background-color: lavenderblush;
  width: calc(350px - 100px);
  height: calc(350px - 290px);
  margin: 2px;
  display: flex;
  cursor: pointer;
  border-radius: 10px;
}

.btn-left {
  height: inherit;
  width: calc(350px - 290px);
}

.btn-rigth {
  height: inherit;
  width: calc(100% - (calc(350px - 290px)));
  display: inline-flex;
  justify-content: center;
}

.btn-rigth a {
  align-self: center;
  font-weight: bold;
}

.btn-left img {
  height: 40px;
  width: 40px;
}

.logout {
  position: fixed;
  height: 50px;
  width: 150px;
  top: 0;
  right: 0;
  margin: 5px;
  display: flex;
  cursor: pointer;
}

.logout-left {
  height: inherit;
  width: calc(100% - 50px);
  display: inline-flex;
  justify-content: center;
  font-size: 18px;
}

.logout-left a {
  align-self: center;
}

.logout-right {
  height: inherit;
  width: 50px;
}

.logout-right img {
  height: 30px;
}

.center-parrent {
  position: relative;
}
.center-child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
}
</style>
