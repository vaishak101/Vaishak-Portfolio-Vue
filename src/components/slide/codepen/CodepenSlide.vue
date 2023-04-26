<template>
  <section
    class="section codepen"
    :class="{ hide: active != 2, active: active === 2 }"
    id="codepen"
  >
    <div class="container">
      <h1 class="primary__heading">
        <span class="ph__span">C</span><span class="ph__span">O</span
        ><span class="ph__span">D</span><span class="ph__span">E</span
        ><span class="ph__span">P</span><span class="ph__span">E</span
        ><span class="ph__span">N</span><span class="ph__span">&nbsp;</span
        ><span class="ph__span">W</span><span class="ph__span">O</span
        ><span class="ph__span">R</span><span class="ph__span">K</span>
      </h1>

      <div class="container--slider">
        <button
          class="slider__btn slider__btn--left"
          ref="prev"
          @click="leftSlide"
        >
          &larr;
        </button>
        <div class="slider">
          <div class="slide" ref="slide">
            <h1 class="pen__heading">Analog Clock</h1>
            <div class="slide__content">
              <p
                class="codepen"
                data-height="400"
                data-theme-id="dark"
                data-default-tab="result"
                data-slug-hash="oNGmOyr"
                data-preview="true"
                data-user="vaishak101"
                style="
                  height: 400px;
                  box-sizing: border-box;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border: 2px solid;
                  margin: 1em 0;
                  padding: 1em;
                "
              >
                <span
                  >See the Pen
                  <a href="https://codepen.io/vaishak101/pen/oNGmOyr">
                    Analog Clock - Javascript</a
                  >
                  by vaishak101 (<a href="https://codepen.io/vaishak101"
                    >@vaishak101</a
                  >) on <a href="https://codepen.io">CodePen</a>.</span
                >
              </p>
            </div>
          </div>
          <div class="slide" ref="slide">
            <h1 class="pen__heading">Rock Paper Scissor</h1>
            <div class="slide__content">
              <p
                class="codepen"
                data-height="400"
                data-theme-id="dark"
                data-default-tab="result"
                data-slug-hash="abLXXMN"
                data-preview="true"
                data-user="vaishak101"
                style="
                  height: 400px;
                  box-sizing: border-box;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border: 2px solid;
                  margin: 1em 0;
                  padding: 1em;
                "
              >
                <span
                  >See the Pen
                  <a href="https://codepen.io/vaishak101/pen/abLXXMN">
                    Rock Paper Scissor - JS</a
                  >
                  by vaishak101 (<a href="https://codepen.io/vaishak101"
                    >@vaishak101</a
                  >) on <a href="https://codepen.io">CodePen</a>.</span
                >
              </p>
            </div>
          </div>
          <div class="slide" ref="slide">
            <h1 class="pen__heading">Javascript Calculator</h1>
            <div class="slide__content">
              <p
                class="codepen"
                data-height="400"
                data-theme-id="dark"
                data-default-tab="result"
                data-slug-hash="jOGdMyw"
                data-preview="true"
                data-user="vaishak101"
                style="
                  height: 400px;
                  box-sizing: border-box;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border: 2px solid;
                  margin: 1em 0;
                  padding: 1em;
                "
              >
                <span
                  >See the Pen
                  <a href="https://codepen.io/vaishak101/pen/jOGdMyw">
                    CALCULATOR - JS</a
                  >
                  by vaishak101 (<a href="https://codepen.io/vaishak101"
                    >@vaishak101</a
                  >) on <a href="https://codepen.io">CodePen</a>.</span
                >
              </p>
            </div>
          </div>
          <div class="slide" ref="slide">
            <h1 class="pen__heading">Virtual keyboard</h1>
            <div class="slide__content">
              <p
                class="codepen"
                data-height="400"
                data-theme-id="dark"
                data-default-tab="result"
                data-slug-hash="PoOwGEp"
                data-preview="true"
                data-user="vaishak101"
                style="
                  height: 400px;
                  box-sizing: border-box;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border: 2px solid;
                  margin: 1em 0;
                  padding: 1em;
                "
              >
                <span
                  >See the Pen
                  <a href="https://codepen.io/vaishak101/pen/PoOwGEp">
                    Simple Virtual Keyboard - JS</a
                  >
                  by vaishak101 (<a href="https://codepen.io/vaishak101"
                    >@vaishak101</a
                  >) on <a href="https://codepen.io">CodePen</a>.</span
                >
              </p>
            </div>
          </div>
          <div class="slide" ref="slide">
            <h1 class="pen__heading">Slider</h1>
            <div class="slide__content">
              <p
                class="codepen"
                data-height="400"
                data-theme-id="dark"
                data-default-tab="result"
                data-slug-hash="KKywedb"
                data-preview="true"
                data-user="vaishak101"
                style="
                  height: 400px;
                  box-sizing: border-box;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border: 2px solid;
                  margin: 1em 0;
                  padding: 1em;
                "
              >
                <span
                  >See the Pen
                  <a href="https://codepen.io/vaishak101/pen/KKywedb">
                    JAVASCRIPT - SLIDER
                  </a>
                  by vaishak101 (<a href="https://codepen.io/vaishak101"
                    >@vaishak101</a
                  >) on <a href="https://codepen.io">CodePen</a>.</span
                >
              </p>
            </div>
          </div>
        </div>
        <button
          class="slider__btn slider__btn--right"
          ref="next"
          @click="rightSlide"
        >
          &rarr;
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    active: Number,
  },
  data() {
    return {
      slide: [],
      currentPosition: 0,
      maxPosition: 0,
    };
  },
  methods: {
    slider(t) {
      this.slide.forEach((e, i) => {
        e.style.transform = `translate(${200 * (i - t)}%,-50%)`;
      });
    },
    leftSlide() {
      0 === this.currentPosition
        ? (this.currentPosition = this.maxPosition)
        : this.currentPosition--,
        this.slider(this.currentPosition);
    },
    rightSlide() {
      this.currentPosition === this.maxPosition
        ? (this.currentPosition = 0)
        : this.currentPosition++,
        this.slider(this.currentPosition);
    },
  },
  mounted() {
    this.slide = document.querySelectorAll(".slide");
    this.maxPosition = this.slide.length - 1;
    this.slider(0);
    let codePenScript = document.createElement("script");
    codePenScript.setAttribute(
      "src",
      "https://cpwebassets.codepen.io/assets/embed/ei.js"
    );
    document.head.appendChild(codePenScript);
  },
};
</script>
<style>
@import "./pen.css";
</style>
