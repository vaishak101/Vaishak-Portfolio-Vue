<template>
  <HeroSlide :active="activeTab" :toggle="toggleDark" ref="hero" />
  <WorkSlide v-if="pageLoad" :active="activeTab" />
  <CodepenSlide v-if="pageLoad" :active="activeTab" />
  <About v-if="pageLoad" :active="activeTab" />
</template>

<script>
import HeroSlide from "./hero/HeroSlide.vue";
import WorkSlide from "./work/WorkSlide.vue";
import CodepenSlide from "./codepen/CodepenSlide.vue";
import About from "./about/About.vue";

export default {
  components: { HeroSlide, WorkSlide, CodepenSlide, About },
  props: {
    activeTab: Number,
    toggleDark: Boolean,
  },
  watch: {
    toggleDark(val) {
      this.$refs.hero.blink();
      this.$refs.hero.changeParticle();
    },
  },
  data() {
    return {
      pageLoad: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.pageLoad = true;
    }, 2000);
  },
  methods: {
    animateSection(e) {
      const sections = document.querySelectorAll(".section");
      if (0 == e) {
        sections[0].classList.remove("hidex");
        sections[0].classList.add("activex");
        for (let t = 1; t < sections.length; t++) {
          sections[t].classList.add("hide");
          sections[t].classList.remove("active");
        }
      } else {
        sections[0].classList.add("hidex");
        sections[0].classList.remove("activex");
        for (let t = 1; t < sections.length; t++) {
          sections[t].classList.add("hide"),
            sections[t].classList.remove("active");
        }
        sections[e].classList.add("active");
        sections[e].classList.remove("hide");
      }
    },
  },
};
</script>
<style>
@import "./slide.css";
@import "./animation.css";
</style>
