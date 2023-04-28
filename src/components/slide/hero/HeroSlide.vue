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
  </section>
</template>

<script>
export default {
  props: {
    active: Number,
  },
  data() {
    return {
      blinkInterval: setInterval(this.blink, 5000),
      greetInterval: setInterval(this.checkHour, 20000),
    };
  },
  created() {
    console.log(this.active, "hero");
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
        indexTwo = 22;
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
          if (indexTwo < -1) return (indexTwo = 22), void clearInterval(o);
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
