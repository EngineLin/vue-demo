<template>
  <div>
    <table class="table table-striped table-condensed">

      <!-- 這個範圍內的按照資料重複渲染 -->
      <tr v-for="photo in photos" :key="photo.id">
        <td> {{ photo.title }} </td>
        <td><img :src="photo.file_location" class="img-thumbnail"></td>
        <td><router-link class="btn btn-info" :to="'/photo/' + photo.id">Show</router-link></td>
        <td><router-link class="btn btn-success" :to="'/photo/edit/' + photo.id">Edit</router-link></td>
        <td><button class="btn btn-danger" @click="destroyPhoto(photo.id)">Destroy</button></td>
      </tr>
      <!-- end -->

    </table>

    <div class="row">
      <router-link class="btn btn-primary" to="/photo/new">New Photo</router-link>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'photo',

  created() {
    this.loadData();
  },

  data() {
    return {
      photos: [],
    };
  },

  methods: {
    destroyPhoto(id) {
      const that = this;
      const token = sessionStorage.getItem('myToken');
      const myData = { auth_token: token };
      $.ajax({
        url:
          'https://cors-anywhere.herokuapp.com/https://lighthouse-photo-api.herokuapp.com/api/v1/photos/' +
          id,
        type: 'DELETE',
        data: myData,
        error(err) {
          console.log(err);
        },
        success(res) {
          alert(res.message);
          that.loadData();
        },
      });
    },
    loadData() {
      const that = this;
      $.ajax({
        url:
          'https://cors-anywhere.herokuapp.com/https://lighthouse-photo-api.herokuapp.com/api/v1/photos',
        type: 'GET',
        dataType: 'json',
        error(err) {
          console.log(err);
        },
        success(res) {
          that.photos = res.data;
        },
      });
    },
  },
};
</script>
