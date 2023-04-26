<template>
  <section
    class="section work"
    :class="{ hide: active !== 1, active: active === 1 }"
    id="work"
  >
    <div class="container">
      <h1 class="primary__heading">
        <span class="ph__span">P</span><span class="ph__span">R</span
        ><span class="ph__span">O</span><span class="ph__span">J</span
        ><span class="ph__span">E</span><span class="ph__span">C</span
        ><span class="ph__span">T</span><span class="ph__span">S</span>
      </h1>
      <div class="work__container">
        <div class="work__card--row">
          <div class="work__card">
            <span class="work__card--span-1">Elegant Design</span>
            <span class="work__card--span-2">#Project 1</span>
            <div class="work__card--container">
              <img src=assets/img/whitestone-1.webp class=work__card--img
              alt="White Stone Website Image">
            </div>
            <p class="work__card--desc">
              Elegant personality for strong companies
            </p>
            <a class="work__card__btn" data-id="0">View</a>
          </div>
          <div class="work__card">
            <span class="work__card--span-1"> Minimalist Design</span>
            <span class="work__card--span-2">#Project 2</span>
            <div class="work__card--container">
              <img src=assets/img/citaz-0.jpg class=work__card--img alt="Citaz
              bank website image">
            </div>
            <p class="work__card--desc">
              Minimalist and light personality website
            </p>
            <a class="work__card__btn" data-id="1">View</a>
          </div>
        </div>
        <div class="work__card--row">
          <div class="work__card">
            <span class="work__card--span-1">Bold Design</span>
            <span class="work__card--span-2">#Project 3</span>
            <div class="work__card--container">
              <img src=assets/img/revhead-0.webp class=work__card--img
              alt="Revhead Motors webssite Img">
            </div>
            <p class="work__card--desc">
              Bold personality with animations and effects
            </p>
            <a class="work__card__btn" data-id="2">View</a>
          </div>
          <div class="work__card">
            <span class="work__card--span-1">Todo List</span>
            <span class="work__card--span-2">#Project 4</span>
            <div class="work__card--container">
              <div class="work__card--todo">
                <img src=assets/img/todo-0.webp class="work__card--todo--img
                work__card--todo--img-1" alt="V-todo website img "> <img
                src=assets/img/todo-1.webp class="work__card--todo--img
                work__card--todo--img-2" alt="V-todo website img ">
              </div>
            </div>
            <p class="work__card--desc">
              A todo list that performs CRUD & uses local storage
            </p>
            <a class="work__card__btn" data-id="3">View</a>
          </div>
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
@import "./work.css";
</style>
