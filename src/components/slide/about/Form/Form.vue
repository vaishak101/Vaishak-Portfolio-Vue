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
            placeholder="John Wick"
            v-model="fname"
          />
          <p class="error-msg" v-if="fnameError.status">{{ fnameError.msg }}</p>
        </div>
        <div class="form__group">
          <label for="email" class="form__label">Email</label
          ><input
            type="email"
            class="form__input"
            id="email"
            name="email"
            placeholder="Johnwick@example.com"
            v-model="email"
          />
          <p class="error-msg" v-if="emailError.status">{{ emailError.msg }}</p>
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
          <p class="error-msg" v-if="messageError.status">
            {{ messageError.msg }}
          </p>
        </div>
        <button type="submit" class="form__btn" v-show="!disableCheck">
          Send Message
        </button>
        <p v-if="statusText.length > 1">{{ statusText }}</p>
        <button
          v-if="statusText.length > 1"
          class="form__btn"
          @click="$emit('closeModal')"
        >
          Okay
        </button>
      </form>
    </div>
  </section>
</template>

<script>
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;
export default {
  data() {
    return {
      fname: "",
      email: "",
      message: "",
      disableCheck: false,
      statusText: "",
      fnameError: {
        status: false,
        msg: "",
      },
      messageError: {
        status: false,
        msg: "",
      },
      emailError: {
        status: false,
        msg: "",
      },
    };
  },
  methods: {
    async submitForm() {
      if (!this.validate()) {
        return;
      }
      this.disableCheck = true;
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            name: this.fname,
            email: this.email,
            message: this.message,
          }),
        });
        const result = await response.json();
        if (result.success) {
          this.statusText = "Message Sent ! Thank you!";
        }
      } catch (error) {
        console.log(error);
        this.statusText = error.message;
      }
    },
    validate() {
      const checkName = this.fname.trim();
      const checkMsg = this.message.trim();
      const checkEmail = this.email.trim();
      const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

      if (checkName === "") {
        this.fnameError.status = true;
        this.fnameError.msg = "Please enter your name!";
        setTimeout(() => {
          this.fnameError.status = false;
        }, 3500);
        return false;
      } else if (!pattern.test(checkEmail)) {
        this.emailError.status = true;
        this.emailError.msg = "Please enter a valid email!";
        setTimeout(() => {
          this.emailError.status = false;
        }, 3500);
        return false;
      } else if (checkMsg === "" || checkMsg.length > 50) {
        this.messageError.status = true;
        if (checkMsg.length > 50) {
          this.messageError.msg = "Please send msg below 50 characters!";
        } else {
          this.messageError.msg = "Please enter a msg!";
        }
        setTimeout(() => {
          this.messageError.status = false;
        }, 3500);
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>
