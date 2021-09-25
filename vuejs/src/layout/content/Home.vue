<template>
  <div class="content">
    <div class="box">
      <div class="box-left">
        <div class="lottie">
          <lottie-player
            src="https://assets4.lottiefiles.com/packages/lf20_jkdbuk2i.json"
            background="transparent"
            speed="2"
            style="width: 300px; height: 300px"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
      <div class="box-right center-parrent">
        <div class="form center-child">
          <div class="form-body">
            <div class="btn">
              <div class="btn-left center-parrent">
                <img
                  src="../../assets/random.png"
                  alt="Google"
                  class="center-child"
                />
              </div>
              <div class="btn-rigth">
                <a>Random Pockemon</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  mounted: function () {},
  methods: {},
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
