<template>
  <div class="content">
    <div class="box">
      <div class="box-left">
        <div>
          <a>Hello Circular,</a>
          <br />
          <a>I'm yofi yonadio</a>
        </div>
      </div>
      <div class="box-right center-parrent">
        <div class="form center-child">
          <div class="form-header">
            <a class="">Login</a>
          </div>
          <div class="form-body">
            <div class="btn">
              <div class="btn-left center-parrent">
                <img
                  src="../../assets/google.svg"
                  alt="Google"
                  class="center-child"
                />
              </div>
              <div class="btn-rigth" v-on:click="authGoogle()">
                <a>Login with Google</a>
              </div>
            </div>
            <div class="btn">
              <div class="btn-left center-parrent">
                <img
                  src="../../assets/guest.png"
                  alt="Google"
                  class="center-child"
                />
              </div>
              <div class="btn-rigth" v-on:click="authGuest()">
                <a>Login as Guest</a>
              </div>
            </div>
          </div>
          <div class="form-footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import jwt from "jsonwebtoken";
import VueCookie from 'vue-cookie';
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
    authGoogle: () => {
      router.push({ name: "Google" });
    },
    authGuest: () => {
      Axios.get(env.API_ORIGIN + "/api/auth/guest", "")
        .then((res) => {
          const token = res.data.datas.token
          jwt.verify(token, env.SECRET, (err, decoded) => {
            if (err) {
              alert(err);
            } else {
              VueCookie.set("token", token, {
                expires: false,
              });
              VueCookie.set("user", JSON.stringify(decoded), {
                expires: false,
              });
              router.push({ name: "Home" });
            }
          });
        })
        .catch((err) => {
          alert(err);
        });
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

.form {
  background: linear-gradient(
    to left,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.15),
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.5)
  ) !important;
  height: 450px;
  width: 350px;
  border-radius: 50px;
}

.form-header {
  width: inherit;
  height: 15%;
  display: flex;
  justify-content: center;
}

.form-body {
  width: inherit;
  display: flex;
  height: 70%;
  flex-direction: column;
  justify-content: space-evenly;
}

.form-footer {
  width: inherit;
  height: 15%;
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
