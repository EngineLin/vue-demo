<template>
  <div>
    <table class="table table-striped table-condensed">
      <tr v-for="photo in photos" :key="photo.id">
        <td>{{ photo.title }}</td>
        <td><img :src="photo.file_location" class="img-thumbnail"></td>

        <td>
          <!-- 連結到當前 photo 的 show 路由 -->
          <router-link
            class="btn btn-info"
            :to="{ path: '/photo/show', params: { photo: photo }, props: true }"
          >
            Show
          </router-link>
        </td>

        <td><router-link class="btn btn-success" to="/photo/edit">Edit</router-link></td>
        <td><button class="btn btn-danger">Destroy</button></td>
      </tr>
    </table>

    <div class="row">
      <router-link class="btn btn-primary" to="/photo/new">New Photo</router-link>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: "photo",

  created() {
    // $.ajax({
    //   url: 'https://lighthouse-photo-api.herokuapp.com/api/v1/photos',
    //   type: 'GET',
    //   dataType: 'json',
    //   success(res) {
    //     this.photos = res.data
    //   },
    // })
    this.photos = [
      {
        "id": 1,
        "title": "Hi~ this is a photo",
        "description": "Hi~ this is a photo",
        "file_location": {
          "url": "/uploads/photo/file_location/1/26677973_203322050230698_3595655715217896515_o.jpg",
        },
      },
      {
        "id": 2,
        "title": "Code Kata",
        "description": "Code Kata",
        "file_location": {
          "url": "/uploads/photo/file_location/2/shutterstock_699352858.jpg",
        },
      },
      {
        "id": 3,
        "title": "Git Collaboration",
        "description": "Git Collaboration",
        "file_location": {
          "url": "/uploads/photo/file_location/3/shutterstock_345728627.jpg",
        },
      },
      {
        "id": 4,
        "title": "Git Collaboration",
        "description": "Git Collaboration",
        "file_location": {
          "url": "../assets/logo.png",
        },
      },
    ]
  },

  data() {
    return {
      photos: [],
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
