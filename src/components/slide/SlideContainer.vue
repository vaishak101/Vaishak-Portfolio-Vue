<template>
  <HeroSlide :active="activeTab" />
  <WorkSlide :active="activeTab" />
  <CodepenSlide :active="activeTab" />
  <About :active="activeTab" />
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
  },
  watch: {
    activeTab(val) {
      // this.animateSection(val);
    },
  },
  data() {
    return {};
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
