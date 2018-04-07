<template>
  <div id="signUpTemplate">
    <h2>Sign up</h2>

    <div class="field">
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="email">
    </div>

    <div class="field">
      <label for="password">Password</label>
      <input type="password" name="password" id="password" v-model="password">
      <em v-if="minimumPasswordLength">{{ minimumPasswordLength }} characters minimum</em>
    </div>

    <div class="field">
      <label for="passwordConfirmation">Password Confirmation</label>
      <input type="password" name="passwordConfirmation" id="passwordConfirmation" v-model="passwordConfirmation">
    </div>

    <h3>Profile</h3>

    <div class="field">
      <label for="name">Name</label>
      <input type="text" name="name" id="name" v-model="name">
    </div>

    <div class="field">
      <label for="gender">Gender</label>
      <select name="gender" id="gender" v-model="gender">
        <option
          v-for="value in genderOptionsArray"
          value="value"
          :key="value"
        >
          {{ value }}
        </option>
      </select>
    </div>

    <div class="field">
      <label for="age">Age</label>
      <input type="number" name="age" id="age" v-model="age">
    </div>

    <div class="field">
      <label for="region">Region</label>
      <input type="text" name="region" id="region" v-model="region">
    </div>

    <div class="field">
      <label for="phone">Phone</label>
      <input type="text" name="phone" id="phone" v-model="phone">
    </div>

     <br>

    <button class="btn btn-primary actions" @click="signup">
      Sign up
    </button>
  </div>
</template>

<script>
export default {
  name: 'Registration',
  data: () => {
    return {
      minimumPasswordLength: 100,
      genderOptionsArray: [
        'male',
        'female',
        'other',
      ],
      email: '',
      password: '',
      passwordConfirmation: '',
      name: '',
      gender: '',
      age: '',
      region: '',
      phone: '',
    }
  },
  methods: {
    signup() {
      console.log(this.$data)
    }
  }
}
</script>

