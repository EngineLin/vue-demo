<template>
<div>
  <h2 class="d-flex justify-content-center">Sign up</h2>

  <div class="row d-flex justify-content-center">
    <div class="col-6 d-flex flex-column">
      <label for="email">Email</label>
      <input
        class="input"
        type="email"
        name="email"
        id="email"
        v-model="email"
      >

      <label for="password" class="mt-3">Password</label>
      <input
        class="input"
        type="password"
        name="password"
        id="password"
        v-model="password"
      >
      <em v-if="minimumPasswordLength" class="ml-auto">
        {{ minimumPasswordLength }} characters minimum
      </em>

      <label for="passwordConfirmation"> Password Confirmation </label>
      <input
        class="input"
        type="password"
        name="passwordConfirmation"
        id="passwordConfirmation"
        v-model="passwordConfirmation"
      >
    </div>
  </div>

  <div class="row d-flex justify-content-end mr-5">
    <button class="btn btn-primary" @click="signUp">Sign up</button>
  </div>
</div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'SignUp',

  data: () => {
    return {
      minimumPasswordLength: 10,
      email: '',
      password: '',
      passwordConfirmation: '',
    }
  },

  methods: {
    signUp() {
      if (!this.checkpasswordLength) return alert('密碼長度不足!');
      if (this.password !== this.passwordConfirmation) return alert('密碼與確認密碼不相同。')

      const myData = {
        email: this.email,
        password: this.password,
      }
      $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/https://lighthouse-photo-api.herokuapp.com/api/v1/signup',
        data: myData,
        type: 'POST',
        datatype: 'json',
        error: (res) => {
          alert('Sign up error: ' + res.statusText)
        },
        success: (res) => {
          alert('Sign up success and your user_id is: ' + res.user_id)
          this.$router.push('/user/login')
        }
      })
    },
    checkpasswordLength() {
      return this.password.length >= this.minimumPasswordLength ? true : false;
    },
  }
}
</script>