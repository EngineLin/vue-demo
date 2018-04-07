<template>

  <div class="container">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          
          <router-link class="btn btn-outline-primary" to="/">我的家庭相簿</router-link>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <!-- <li><%= link_to 'All User', users_path %></li> -->
          </ul>
          <ul class="nav navbar-nav navbar-right">

            <div v-if="user">
              <li><p class="navbar-text">Hi, {{ user.email }}</p></li>
              <!-- <li><%= link_to('Log out', destroy_user_session_path, method: :delete) %></li>
              <li><%= link_to('Edit Profile', edit_user_registration_path) %></li> -->
            </div>

            <div v-else>
              <router-link role="li" :to="{path: '/user/registration'}">Sign up</router-link>
              <router-link role="li" :to="{path: '/user/session'}"></router-link>
              <!-- <li><%= link_to('Sign up', new_user_registration_path) %></li> -->
              <!-- <li><%= link_to('Log in', new_user_session_path) %></li>
              <li><%= link_to "Sign in with Facebook", user_facebook_omniauth_authorize_path %></li> -->
            </div>

          </ul>
        </div>
      </div>

    </nav>
    <div v-if="user">
      <p class="pull-right">你的 API Token：<code>{{ user.authentication_token }}</code></p>
    </div>

    <!-- <% if flash[:notice] %>
      <div class="alert alert-success" role="alert"><%= notice %></div>
    <% elsif flash[:alert] %>
      <div class="alert alert-danger" role="alert"><%= alert %></div>
    <% end %> -->

    <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: 'App',

  data: () => {
    return {
      user: {
        email: 'APHCamp@exaple.com',
        authentication_token: 'fake_token',
      },
    }
  }
}
</script>