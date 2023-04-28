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
      this.activeTab = num;
    },
    handleDarkToggle(val) {
      this.toggleDark = val;
    },
  },
};
</script>
