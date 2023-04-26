<template>
  <Nav @nav-click="handleClick" />
  <SlideContainer :activeTab="activeTab" />
</template>

<script>
import Nav from "./nav/Nav.vue";
import SlideContainer from "./slide/SlideContainer.vue";

export default {
  components: { Nav, SlideContainer },
  data() {
    return {
      activeTab: 0,
    };
  },

  methods: {
    handleClick(num) {
      console.log(num);
      this.activeTab = num;
    },
  },

  mounted() {
    console.log(`Layout Mounted ${typeof this.activeTab}`);
  },
};
</script>
