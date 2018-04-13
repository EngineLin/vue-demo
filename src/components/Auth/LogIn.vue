<template>
<div>
  <h2 class="d-flex justify-content-center">Log in</h2>

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
        @keyup.enter="logIn"
      >
      <em v-if="minimumPasswordLength" class="ml-auto">
        {{ minimumPasswordLength }} characters minimum
      </em>
    </div>
  </div>

  <div class="row d-flex justify-content-end mr-5">
    <button class="btn btn-primary" @click="logIn">Log in</button>
  </div>
</div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'LogIn',

  data: () => {
    return {
      minimumPasswordLength: 10,
      email: '',
      password: '',
    };
  },

  methods: {
    logIn() {
      if (!this.checkpasswordLength) return alert('密碼長度不足!');

      const that = this;
      const myData = {
        email: this.email,
        password: this.password,
      };
      $.ajax({
        url:
          'https://cors-anywhere.herokuapp.com/https://lighthouse-photo-api.herokuapp.com/api/v1/login',
        type: 'POST',
        data: myData,
        error: res => {
          alert('Sign up error: ' + res.statusText);
        },
        success: res => {
          if (res.message !== 'Ok') return alert("Log in isn't success!");

          // sessionStorage 在「視窗關閉」或「分頁關閉」時自動清除
          console.log(res);
          sessionStorage.setItem('myToken', res.auth_token);
          sessionStorage.setItem('myEmail', that.email);
          that.$bus.$emit('checkLoginState', null);
          that.$router.push('/');
        },
      });
    },
    checkpasswordLength() {
      return this.password.length >= this.minimumPasswordLength ? true : false;
    },
  },
};
</script>