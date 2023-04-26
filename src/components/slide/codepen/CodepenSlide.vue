<template>
     <section class="section codepen" :class="{ hide: active != 2 ,active: active === 2}" id=codepen>
      <div class=container>
        <h1 class=primary__heading>
          <span class=ph__span>C</span><span class=ph__span>O</span><span class=ph__span>D</span><span
            class=ph__span>E</span><span class=ph__span>P</span><span class=ph__span>E</span><span
            class=ph__span>N</span><span class=ph__span>&nbsp;</span><span class=ph__span>W</span><span
            class=ph__span>O</span><span class=ph__span>R</span><span class=ph__span>K</span>
        </h1>
        <div class=container--slider>
          <button class="slider__btn slider__btn--left">&larr;</button>
          <div class=slider>
            <div class=slide>
              <h1 class="pen__heading">Analog Clock</h1>
              <div class=slide__content>
                <p class=codepen data-height=400 data-theme-id=dark data-default-tab=result data-slug-hash=oNGmOyr
                  data-preview=true data-user=vaishak101
                  style="height:400px;box-sizing:border-box;display:flex;align-items:center;justify-content:center;border:2px solid;margin:1em 0;padding:1em">
                  <span>See the Pen
                    <a href=https://codepen.io/vaishak101/pen/oNGmOyr>
                      Analog Clock - Javascript</a>
                    by vaishak101 (<a href=https://codepen.io/vaishak101>@vaishak101</a>) on <a
                      href=https://codepen.io>CodePen</a>.</span>
                </p>
                <!-- <script async src=https://cpwebassets.codepen.io/assets/embed/ei.js></script> -->
              </div>
            </div>
            <div class=slide>
              <h1 class="pen__heading">Rock Paper Scissor</h1>
              <div class=slide__content>
                <p class=codepen data-height=400 data-theme-id=dark data-default-tab=result data-slug-hash=abLXXMN
                  data-preview=true data-user=vaishak101
                  style="height:400px;box-sizing:border-box;display:flex;align-items:center;justify-content:center;border:2px solid;margin:1em 0;padding:1em">
                  <span>See the Pen
                    <a href=https://codepen.io/vaishak101/pen/abLXXMN>
                      Rock Paper Scissor - JS</a>
                    by vaishak101 (<a href=https://codepen.io/vaishak101>@vaishak101</a>) on <a
                      href=https://codepen.io>CodePen</a>.</span>
                </p>
                <!-- <script async src=https://cpwebassets.codepen.io/assets/embed/ei.js></script> -->
              </div>
            </div>
            <div class=slide>
              <h1 class="pen__heading">Javascript Calculator</h1>
              <div class=slide__content>
                <p class=codepen data-height=400 data-theme-id=dark data-default-tab=result data-slug-hash=jOGdMyw
                  data-preview=true data-user=vaishak101
                  style="height:400px;box-sizing:border-box;display:flex;align-items:center;justify-content:center;border:2px solid;margin:1em 0;padding:1em">
                  <span>See the Pen
                    <a href=https://codepen.io/vaishak101/pen/jOGdMyw>
                      CALCULATOR - JS</a>
                    by vaishak101 (<a href=https://codepen.io/vaishak101>@vaishak101</a>) on <a
                      href=https://codepen.io>CodePen</a>.</span>
                </p>
                <!-- <script async src=https://cpwebassets.codepen.io/assets/embed/ei.js></script> -->
              </div>
            </div>
            <div class=slide>
              <h1 class="pen__heading">Virtual keyboard</h1>
              <div class=slide__content>
                <p class=codepen data-height=400 data-theme-id=dark data-default-tab=result data-slug-hash=PoOwGEp
                  data-preview=true data-user=vaishak101
                  style="height:400px;box-sizing:border-box;display:flex;align-items:center;justify-content:center;border:2px solid;margin:1em 0;padding:1em">
                  <span>See the Pen
                    <a href=https://codepen.io/vaishak101/pen/PoOwGEp>
                      Simple Virtual Keyboard - JS</a>
                    by vaishak101 (<a href=https://codepen.io/vaishak101>@vaishak101</a>) on <a
                      href=https://codepen.io>CodePen</a>.</span>
                </p>
                <!-- <script async src=https://cpwebassets.codepen.io/assets/embed/ei.js></script> -->
              </div>
            </div>
            <div class=slide>
              <h1 class="pen__heading">Slider</h1>
              <div class=slide__content>
                <p class=codepen data-height=400 data-theme-id=dark data-default-tab=result data-slug-hash=KKywedb
                  data-preview=true data-user=vaishak101
                  style="height:400px;box-sizing:border-box;display:flex;align-items:center;justify-content:center;border:2px solid;margin:1em 0;padding:1em">
                  <span>See the Pen
                    <a href=https://codepen.io/vaishak101/pen/KKywedb>
                      JAVASCRIPT - SLIDER
                    </a>
                    by vaishak101 (<a href=https://codepen.io/vaishak101>@vaishak101</a>) on <a
                      href=https://codepen.io>CodePen</a>.</span>
                </p>
                <!-- <script async src=https://cpwebassets.codepen.io/assets/embed/ei.js></script> -->
              </div>
            </div>
          </div>
          <button class="slider__btn slider__btn--right">&rarr;</button>
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
    return {};
  },

  methods: {},

  mounted() {},
};
</script>
<style >
@import "./pen.css";
</style>
