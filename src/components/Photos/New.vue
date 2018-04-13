<template>
  <div>
    <!-- <ul v-if="@photo.errors.present?">
      <li v-for="(error, message) in @photo.errors">
        {{ error.capitalize }} {{ message }}
      </li>
    </ul> -->
    <div class="form container">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          class="form-control"
          v-model="title"
        >
      </div>

      <div class="form-group">
        <label for="date">Date</label>
        <input
          type="date"
          name="date"
          id="date"
          class="form-control"
          v-model="date"
        >
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="area"
          name="description"
          id="description"
          class="form-control"
          v-model="description"
        >
      </div>

      <div class="form-group">
        <label for="file_location">File Location</label>
        <input
          type="text"
          name="file_location"
          id="file_location"
          class="form-control"
          v-model="fileLocation"  
        >
      </div>

      <div class="row justify-content-end mr-3">
        <button type="submit" class="btn btn-primary" @click="submit">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'new',

  data: () => {
    return {
      title: '',
      date: '',
      description: '',
      fileLocation: '',
    };
  },

  methods: {
    submit() {
      const that = this;
      const token = sessionStorage.getItem('myToken');
      if (
        this.title &&
        this.date &&
        this.description &&
        this.fileLocation &&
        token
      ) {
        const myData = {
          auth_token: token,
          title: this.title,
          date: this.date,
          description: this.description,
          file_location: this.fileLocation,
        }
        $.ajax({
          url:
            'https://cors-anywhere.herokuapp.com/https://lighthouse-photo-api.herokuapp.com/api/v1/photos',
          data: myData,
          type: 'POST',
          error: err => {
            alert('create new photo error: ' + err);
          },
          success: res => {
            alert('new photo created');
            that.$router.push('/');
          },
        });
      } else {
        alert('您的資料輸入不完整喔!')
      }
    },
  },
};
</script>
