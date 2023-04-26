<template>
  <section class="section-form">
    <div class="form__overlay" @click="$emit('closeModal')"></div>
    <div class="form__container">
      <h2 class="form__heading">Enter following details</h2>
      <form @submit.prevent="submitForm">
        <div class="form__group">
          <label for="fname" class="form__label">Full Name</label
          ><input
            class="form__input"
            id="fname"
            name="fname"
            required
            placeholder="John Wick"
            v-model="name"
          />
        </div>
        <div class="form__group">
          <label for="email" class="form__label">Email</label
          ><input
            type="email"
            class="form__input"
            id="email"
            name="email"
            required
            placeholder="Johnwick@example.com"
            v-model="email"
          />
        </div>
        <div class="form__group">
          <label for="message" class="form__label">Message</label
          ><textarea
            id="message"
            cols="50"
            rows="3"
            class="form__input"
            name="msg"
            placeholder="Namaste, I liked your website !"
            v-model="message"
          ></textarea>
        </div>
        <button type="submit" class="form__btn">Send Message</button>
      </form>
    </div>
  </section>
</template>

<script>
const WEB3FORMS_ACCESS_KEY = 0;

import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  validations() {
    return {
      name: { required }, // Matches this.firstName
      email: { required, email }, // Matches this.email
      message: { required }, // Matches this.lastName
    };
  },
  methods: {
    async submitForm() {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: this.name,
          email: this.email,
          message: this.message,
        }),
      });
      const result = await response.json();
      if (result.success) {
        this.$emit("closeModal");
      }
    },
  },
  mounted() {
    console.log();
  },
};
</script>
