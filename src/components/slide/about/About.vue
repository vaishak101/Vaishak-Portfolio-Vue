<template>
  <section
    class="section about"
    :class="{ hide: active != 3, active: active === 3 }"
    id="about"
  >
    <div class="container">
      <h1 class="primary__heading">
        <span class="ph__span">A</span><span class="ph__span">B</span
        ><span class="ph__span">O</span><span class="ph__span">U</span
        ><span class="ph__span">T</span><span class="ph__span">&nbsp;</span
        ><span class="ph__span">M</span><span class="ph__span">E</span>
      </h1>
      <div class="about__container">
        <div class="about__img"></div>
        <div class="about__desc">
          <p class="about__desc--para">
            <span class="about__desc--fn">function</span>
            <span class="about__desc--fn-name">aboutMe</span
            ><span class="about__desc--brackets">(){</span>
            <br />&nbsp;&nbsp;&nbsp;&nbsp;<span class="about__desc--text"
              >Hello I'm Vaishak, front-end web developer based in India.<br />
              &nbsp;&nbsp;&nbsp;&nbsp;I love to learn, code and ride motorcycle
              ;</span
            ><br />
            <br />
            &nbsp;&nbsp;<span class="about__desc--fn">function</span>
            <span class="about__desc--fn-name">Myskills</span
            ><span class="about__desc--brackets">(){</span><br />
            <span class="about__desc--text"
              >&nbsp;&nbsp;&nbsp;&nbsp;Skills:</span
            >
            <span class="about__desc--skill about__desc--skill-1">
              <ion-icon name="logo-html5"></ion-icon>
            </span>
            <span class="about__desc--skill about__desc--skill-2">
              <ion-icon name="logo-css3"></ion-icon>
            </span>
            <span class="about__desc--skill about__desc--skill-3">
              <ion-icon name="logo-javascript"></ion-icon>
            </span>
            <span class="about__desc--skill about__desc--skill-4">
              <ion-icon name="logo-sass"></ion-icon>
            </span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="about__desc--brackets">}</span
            ><br />
            &nbsp;&nbsp;
            <span class="about__desc--brackets">return();</span><br />
            &nbsp;<span class="about__desc--brackets">}</span>
          </p>
        </div>
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
<style>
@import "./about.css";
</style>
