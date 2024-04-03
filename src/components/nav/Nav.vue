<template>
  <nav class="nav" :class="{ show: menuOpen }">
    <h1>
      <span
        class="nav__logo"
        data-sect="0"
        @click="sendActive(0)"
        :class="{ disabled: disabled }"
      >
        <img
          class="nav__logo nav__logo--img click"
          src="./../../assets/img/V-studio.webp"
          data-sect="0"
          alt="Vaishak Nair Logo"
        />
      </span>
    </h1>
    <ul class="nav__ul">
      <li>
        <span
          href="#"
          class="nav__links click"
          data-sect="1"
          @click="sendActive(1)"
          :class="{ disabled: disabled, activelink: active === 1 }"
          >Work</span
        >
      </li>
      <li>
        <span
          href="#"
          class="nav__links click"
          data-sect="2"
          @click="sendActive(2)"
          :class="{ disabled: disabled, activelink: active === 2 }"
          >Pens</span
        >
      </li>
      <li>
        <span
          href="#"
          class="nav__links click"
          data-sect="3"
          @click="sendActive(3)"
          :class="{ disabled: disabled, activelink: active === 3 }"
          >About</span
        >
      </li>
    </ul>
    <span class="darkBtn" @click="darkModeHandle">
      <svg
        v-if="darkMode"
        fill="#ffffff"
        width="800px"
        height="800px"
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>cog</title>
        <path
          d="M0 16q0-0.832 0.576-1.408t1.44-0.576h1.984q0.032 0 0.064 0t0.064 0.032 0.064 0q0.448-2.72 2.080-4.992-0.128-0.064-0.16-0.096l-1.408-1.44q-0.608-0.576-0.608-1.408t0.608-1.408 1.408-0.608 1.408 0.608l1.408 1.408q0.032 0.032 0.096 0.16 2.304-1.632 5.024-2.048 0-0.032-0.032-0.096t0-0.128v-1.984q0-0.832 0.576-1.408t1.408-0.608 1.408 0.608 0.608 1.408v1.984q0 0.032-0.032 0.096t0 0.128q2.72 0.416 4.992 2.048 0.064-0.128 0.096-0.16l1.408-1.408q0.576-0.608 1.408-0.608t1.44 0.608 0.576 1.408-0.576 1.408l-1.408 1.408q-0.064 0.064-0.192 0.128 1.632 2.272 2.080 4.992 0.032 0 0.096 0t0.096-0.032h2.016q0.8 0 1.408 0.576t0.576 1.408-0.576 1.44-1.408 0.576h-2.016q-0.032 0-0.096-0.032t-0.096-0.032q-0.448 2.752-2.080 5.024 0.128 0.064 0.192 0.128l1.408 1.408q0.576 0.576 0.576 1.376t-0.576 1.44-1.44 0.576-1.408-0.576l-1.408-1.408q-0.032-0.064-0.096-0.16-2.272 1.6-4.992 2.048 0 0.032 0 0.096t0.032 0.096v2.016q0 0.832-0.608 1.408t-1.408 0.576-1.408-0.576-0.576-1.408v-2.016q0-0.032 0-0.096t0.032-0.096q-2.72-0.448-5.024-2.048-0.064 0.128-0.096 0.16l-1.408 1.408q-0.576 0.576-1.408 0.576t-1.408-0.576-0.608-1.44 0.608-1.376l1.408-1.408q0.064-0.064 0.16-0.128-1.632-2.272-2.080-5.024 0 0-0.064 0.032t-0.128 0.032h-1.984q-0.832 0-1.44-0.576t-0.576-1.44zM8 16q0 3.328 2.336 5.664t5.664 2.336 5.664-2.336 2.336-5.664-2.336-5.632-5.664-2.368-5.664 2.368-2.336 5.632z"
        ></path>
      </svg>

      <svg
        v-else
        fill="#000000"
        width="800px"
        height="800px"
        viewBox="0 0 35 35"
        data-name="Layer 2"
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.44,34.68a18.22,18.22,0,0,1-2.94-.24,18.18,18.18,0,0,1-15-20.86A18.06,18.06,0,0,1,9.59.63,2.42,2.42,0,0,1,12.2.79a2.39,2.39,0,0,1,1,2.41L11.9,3.1l1.23.22A15.66,15.66,0,0,0,23.34,21h0a15.82,15.82,0,0,0,8.47.53A2.44,2.44,0,0,1,34.47,25,18.18,18.18,0,0,1,18.44,34.68ZM10.67,2.89a15.67,15.67,0,0,0-5,22.77A15.66,15.66,0,0,0,32.18,24a18.49,18.49,0,0,1-9.65-.64A18.18,18.18,0,0,1,10.67,2.89Z"
        />
      </svg>
    </span>
  </nav>
  <span
    v-show="mobMode"
    class="nav__slider"
    :class="{ 'close-active': menuOpen }"
    @click="toggleMenu"
  >
    <div class="nav__btn" :class="{ menuactive: menuOpen }">
      <span class="bar-one bar"></span>
      <span class="bar-two bar"></span>
      <span class="bar-three bar"></span>
    </div>
  </span>
  <div
    v-show="mobMode"
    v-if="menuOpen"
    class="nav_overlay"
    @click="toggleMenu"
  ></div>
</template>

<script>
export default {
  emits: ["nav-click", "darkModeToggle"], // Declare custom events here
  data() {
    return {
      mobMode: window.innerWidth <= 1200,
      windowWidth: window.innerWidth,
      active: 0,
      darkMode: false,
      disabled: false,
      menuOpen: false,
    };
  },
  watch: {
    windowWidth(val) {
      val <= 1200 ? (this.mobMode = true) : (this.mobMode = false);
    },
  },
  methods: {
    sendActive(num) {
      this.menuOpen = !this.menuOpen;
      if (num !== this.active) {
        this.disabled = true;
        setTimeout(() => {
          this.disabled = false;
        }, 2500);
      }
      this.active = num;
      this.$emit("nav-click", num);
    },
    darkModeHandle() {
      this.darkMode = !this.darkMode;
      document.body.classList.toggle("dark");
      this.$emit("darkModeToggle", this.darkMode);
    },
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>
<style scoped>
@import "./nav.css";
</style>
