<template>
  <h1>Layout</h1>
  <Nav />
  <SlideContainer />
</template>

<script>
import Nav from "./nav/Nav.vue";
import SlideContainer from "./slide/SlideContainer.vue";

export default {
  components: { Nav, SlideContainer },
  data() {
    return {};
  },

  methods: {},

  mounted() {
    console.log(`Layout Mounted`);
  },
};
</script>
