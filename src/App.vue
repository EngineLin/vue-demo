<template>
<div class="container-fluid">

  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <button
      type="button"
      class="navbar-toggler"
      data-toggle="collapse"
      data-target="#user-info"
      aria-expanded="false"
      aria-controls="user-info"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand text-light" href="#">Photo Album</a>
    <div class="collapse navbar-collapse" id="user-info">
      <ul class="navbar-nav">
        <li class="nav-item mt-2 mt-lg-0"><router-link class="btn btn-outline-light" to="/">我的家庭相簿</router-link></li>

        <!-- if is log in -->
        <template v-if="isLogin">
          <li class="nav-item ml-lg-5 mt-2 mt-lg-0 text-light d-flex align-items-center">Hi, {{ email }}</li>
          <li class="nav-item ml-lg-5 mt-2 mt-lg-0"><button class="btn btn-secondary" @click="logOut">Log out</button></li>
        </template>
        <!-- if not log in -->
        <template v-else>
          <li class="nav-item ml-lg-5 mt-2 mt-lg-0"><router-link class="btn btn-success" to="/user/signup">Sign up</router-link></li>
          <li class="nav-item ml-lg-3 mt-2 mt-lg-0"><router-link class="btn btn-primary" to="/user/login">Log in</router-link></li>
        </template>
        <!-- end -->
      </ul>
    </div>
  </nav>

  <div v-if="authentication_token">
    <p class="pull-right ml-5">您的 API Token：<code>{{ authentication_token }}</code></p>
  </div>

  <div class="container">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'App',

  created() {
    this.$bus.$on('checkLoginState', () => {
      this.checkLoginState();
    });
    this.checkLoginState();
  },

  data: () => {
    return {
      isLogin: false,
      authentication_token: '',
      email: '',
    };
  },

  methods: {
    checkLoginState() {
      // 如果 sessionStorage 中沒有名稱為 myToken 的資料則回傳 null
      const token = sessionStorage.getItem('myToken');
      const email = sessionStorage.getItem('myEmail');
      if (token) {
        this.isLogin = true;
        this.authentication_token = token;
        this.email = email;
      } else {
        this.isLogin = false;
        this.authentication_token = '';
        this.email = '';
      }
    },
    logOut() {
      const that = this;
      const myData = { auth_token: this.authentication_token };

      $.ajax({
        url:
          'https://cors-anywhere.herokuapp.com/https://lighthouse-photo-api.herokuapp.com/api/v1/logout',
        data: myData,
        type: 'POST',
        error: res => {
          alert('Log out error: ' + res.statusText);
        },
        success: res => {
          alert('Log out successfully');
          sessionStorage.removeItem('myToken');
          sessionStorage.removeItem('myEmail');
          that.checkLoginState();
          that.$router.push('/');
        },
      });
    },
  },

  beforeDestroy: () => {
    this.$bus.$off('checkLoginState');
  },
};
</script>