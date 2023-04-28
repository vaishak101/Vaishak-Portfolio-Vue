<template>
  <Nav @nav-click="handleClick" @darkModeToggle="handleDarkToggle" />
  <SlideContainer :activeTab="activeTab" :toggleDark="toggleDark" />
</template>

<script>
import Nav from "./nav/Nav.vue";
import SlideContainer from "./slide/SlideContainer.vue";

export default {
  components: { Nav, SlideContainer },
  data() {
    return {
      activeTab: 0,
      toggleDark: Boolean,
    };
  },

  methods: {
    handleClick(num) {
      console.log(num);
      this.activeTab = num;
    },
    handleDarkToggle(val) {
      this.toggleDark = val;
    },
  },

  mounted() {
    console.log(`Layout Mounted ${typeof this.activeTab}`);
  },
};
</script>
