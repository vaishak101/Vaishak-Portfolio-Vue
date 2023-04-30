<template>
  <section
    class="section hero"
    :class="{
      activex: active === 0,
      hide: active != 0,
      hidex: active != 0,
      active: active === 0,
    }"
    id="hero"
  >
    <kinesis-container
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
    >
      <div class="hero-container">
        <div class="blob-1">
          <kinesis-element :strength="20">
            <div class="tk-blob">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 747.2 726.7">
                <path
                  d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z"
                ></path>
              </svg>
            </div>
          </kinesis-element>
        </div>
        <div class="blob-2">
          <kinesis-element :strength="80">
            <div
              class="tk-blob"
              style="--time: 5s; --amount: 10; --fill: #56cbb9"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 747.2 726.7">
                <path
                  d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z"
                ></path>
              </svg>
            </div>
          </kinesis-element>
        </div>
        <div class="blob-3">
          <kinesis-element :strength="80">
            <div class="tk-blob" style="--time: 8s; --fill: #ff4b82">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 319.2 356.7">
                <path
                  d="M271.9 50.3c30.6 29.3 51.3 75.5 46.6 123.9-4.6 48.4-34.6 99-86.5 136.3s-125.6 61.4-168.3 35.3S9.4 243.5 3.4 177.3C-2.7 111.2-3.1 55.2 24 26.7 51.1-1.9 105.9-2.9 153.4 2.8c47.6 5.8 88 18.2 118.5 47.5z"
                ></path>
              </svg>
            </div>
          </kinesis-element>
        </div>
        <div class="blob-4">
          <div class="tk-blob" style="--fill: #fdd25d">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 425.9 377">
              <path
                d="M389.3 42c39.8 40.8 47.5 116.3 21.3 165.4-26.1 49.1-86 71.8-145.9 104.3-59.8 32.5-119.6 74.8-168.9 63.4C46.5 363.7 7.6 298.5 1 235.7-5.5 173 20.3 112.5 59.8 71.9 99.3 31.2 152.4 10.2 215 2.8 277.5-4.7 349.5 1.2 389.3 42z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="blob-5">
          <div class="tk-blob" style="--time: 6s; --fill: #e3f2c1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 274 303.2">
              <path
                d="M260.2 41.4c20 29.2 14.6 74.5 7.2 124.4-7.3 49.9-16.6 104.5-49.2 126-32.5 21.6-88.4 10.2-132-15.2s-75-64.7-83.6-107.8C-6.1 125.7 8 79 36.3 47.8 64.5 16.7 107 1.3 150.9.1c43.9-1.1 89.3 12 109.3 41.3z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="blob-6">
          <div class="tk-blob" style="--fill: #f44336">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 341.4 374.7">
              <path
                d="M309.9 70.6c37.8 52.7 39.8 128.7 15.4 184.1-24.3 55.4-75 90.1-125.4 107.4-50.4 17.4-100.4 17.4-136.2-3.3-35.7-20.7-57.2-62-62.4-102.1-5.2-40.2 5.8-79 29.1-128.3C53.6 79.1 89.1 19.3 143.7 4.1 198.3-11.2 272 18 309.9 70.6z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="content-wrap">
          <kinesis-element :strength="40">
            <h1 class="hero__heading">
              <span class="greet__text">Welcome</span>
              <span class="intro__text">I</span>
              <span class="intro__text">'</span>
              <span class="intro__text">M</span>
              <span class="intro__text space">&nbsp;</span>
              <div class="hero__text--hide">
                <span class="intro__text">V</span>
                <span class="intro__text">A</span>
                <span class="intro__text">I</span>
                <span class="intro__text">S</span>
                <span class="intro__text">H</span>
                <span class="intro__text">A</span>
                <span class="intro__text">K</span>
              </div>
            </h1>
          </kinesis-element>
          <kinesis-element :strength="50">
            <h2 class="hero__heading--2">
              <div class="hero__text--hide">
                <span class="intro__text--2">W</span>
                <span class="intro__text--2">E</span>
                <span class="intro__text--2">B</span>
                <span class="intro__text--2 space-2">&nbsp;</span>
                <span class="intro__text--2--block">
                  <span class="intro__text--2">D</span>
                  <span class="intro__text--2">E</span>
                  <span class="intro__text--2">V</span>
                  <span class="intro__text--2">E</span>
                  <span class="intro__text--2">L</span>
                  <span class="intro__text--2">O</span>
                  <span class="intro__text--2">P</span>
                  <span class="intro__text--2">E</span>
                  <span class="intro__text--2">R</span>
                </span>
              </div>
            </h2>
          </kinesis-element>
        </div>
      </div>
    </kinesis-container>
  </section>
</template>

<script>
import { KinesisContainer, KinesisElement } from "vue-kinesis";

export default {
  name: "HeroSlide",
  props: {
    active: Number,
  },
  components: {
    KinesisContainer,
    KinesisElement,
  },
  data() {
    return {
      blinkInterval: setInterval(this.blink, 5000),
      greetInterval: setInterval(this.checkHour, 20000),
      changeParticle: () => {},
    };
  },

  watch: {
    active(val) {
      if (val != 0) {
        clearInterval(this.blinkInterval);
        clearInterval(this.greetInterval);
      } else {
        this.blinkInterval = setInterval(this.blink, 5000);
        this.greetInterval = setInterval(this.checkHour, 3000);
      }
    },
  },
  methods: {
    blink() {
      console.log("blink");
      const nameText = document.querySelectorAll(".intro__text"),
        descText = document.querySelectorAll(".intro__text--2");
      let colorTextHero,
        colorBlink,
        dark,
        index = 0,
        indexTwo = 12;
      document.querySelector("body").classList.contains("dark")
        ? (dark = true)
        : (dark = false);

      dark
        ? ((colorTextHero = "white"), (colorBlink = "#0F1FA7"))
        : 0 == dark && ((colorTextHero = "black"), (colorBlink = "cyan"));
      let e = setInterval(function () {
          nameText.forEach((e) => (e.style.color = `${colorTextHero}`));
          let o = nameText[index++];
          if (index > 11) return (index = 0), void clearInterval(e);
          o.style.color = `${colorBlink}`;
        }, 50),
        o = setInterval(function () {
          descText.forEach((e) => (e.style.color = `${colorTextHero}`));
          let e = descText[indexTwo--];
          if (indexTwo < -1) return (indexTwo = 12), void clearInterval(o);
          e.style.color = `${colorBlink}`;
        }, 26);
    },
    checkHour() {
      console.log("hour");
      const msg = document.querySelector(".greet__text");
      const t = new Date();
      let e = (t.getHours() + t.getMinutes() / 60).toFixed(2);
      e < 12 && e >= 0
        ? (msg.textContent = "Morning")
        : e >= 12 && e < 18
        ? (msg.textContent = "Hello there")
        : e >= 18 && (msg.textContent = "Good Evening");
    },
  },

  mounted() {},
};
</script>
<style>
@import "./hero.css";
</style>
