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
        <div class="work__card">
          <span class="work__card--span-1">Elegant Design</span>
          <span class="work__card--span-2">#Project 1</span>
          <div class="work__card--container">
            <img
              src="./../../../assets/img/work/whitestone-1.webp"
              class="work__card--img"
              alt="White Stone Website
            Image"
            />
          </div>
          <p class="work__card--desc">
            Static Webpage Styled In Elegant Design.
          </p>
          <div class="word__card--cta-wrap">
            <a
              href="https://github.com/vaishak101/white-stone"
              target="_blank"
              class="work__card__btn"
              >Git Hub</a
            >
            <a
              href="https://vaishak101.github.io/white-stone/"
              target="_blank"
              class="work__card__btn"
              >View Page</a
            >
          </div>
        </div>
        <div class="work__card">
          <span class="work__card--span-1">React App</span>
          <span class="work__card--span-2">#Project 2</span>
          <div class="work__card--container">
            <img
              src="./../../../assets/img/work/citaz-0.jpg"
              class="work__card--img"
              alt="Citaz
            bank website image"
            />
          </div>
          <p class="work__card--desc">
            A Minimalistic Design Website Built With React.js
          </p>
          <div class="word__card--cta-wrap">
            <a
              class="work__card__btn"
              href="https://github.com/vaishak101/citaz-react-app"
              target="_blank"
              >Git Hub</a
            >
            <a
              class="work__card__btn"
              href="https://vaishak101.github.io/citaz-react-app/"
              target="_blank"
              >View Page</a
            >
          </div>
        </div>
        <div class="work__card">
          <span class="work__card--span-1">Bold Design</span>
          <span class="work__card--span-2">#Project 3</span>
          <div class="work__card--container">
            <img
              src="./../../../assets/img/work/revhead-0.webp"
              class="work__card--img"
              alt="Revhead Motors webssite Img"
            />
          </div>
          <p class="work__card--desc">Static Webpage Styled In Bold Design</p>
          <div class="word__card--cta-wrap">
            <a
              href="https://github.com/vaishak101/revhead"
              target="_blank"
              class="work__card__btn"
              >Git Hub</a
            >
            <a
              href="https://vaishak101.github.io/revhead/"
              target="_blank"
              class="work__card__btn"
              >View Page</a
            >
          </div>
        </div>
        <div class="work__card">
          <span class="work__card--span-1">Todo List - PWA</span>
          <span class="work__card--span-2">#Project 4</span>
          <div class="work__card--container">
            <div class="work__card--todo">
              <img
                src="./../../../assets/img/work/todo-0.webp"
                class="work__card--todo--img work__card--todo--img-1"
                alt="V-todo website img "
              />
              <img
                src="./../../../assets/img/work/todo-1.webp"
                class="work__card--todo--img work__card--todo--img-2"
                alt="V-todo website img "
              />
            </div>
          </div>
          <p class="work__card--desc">
            Todo App Built using React which performs CRUD operation, also works
            as PWA.
          </p>
          <div class="word__card--cta-wrap">
            <a
              class="work__card__btn"
              href="https://github.com/vaishak101/vaishak-react-todo"
              target="_blank"
              >Git Hub</a
            >
            <a
              class="work__card__btn"
              href="https://vaishak101.github.io/vaishak-react-todo/"
              target="_blank"
              >View Page</a
            >
          </div>
        </div>
        <div class="work__card">
          <span class="work__card--span-1">MERN Stack App</span>
          <span class="work__card--span-2">#Project 4</span>
          <div class="work__card--container">
            <div class="work__card--todo">
              <img
                src="./../../../assets/img/work/lunchbox.webp"
                class="work__card--todo--img work__card--todo--img-1"
                alt="LunchBOX"
              />
            </div>
          </div>
          <p class="work__card--desc">
            A Full Stack Food Ordering App, built on MERN.
          </p>
          <div class="word__card--cta-wrap">
            <a
              class="work__card__btn"
              href="https://github.com/vaishak101/lunch-box"
              target="_blank"
              >Git Hub</a
            >
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
