<template>
  <div>
    <h3>{{ photo.title }}</h3>
    <img :src="photo.file_location.url" class="img-thumbnail mt-2">
    <p class="mt-5">{{ photo.description }}</p>
    <router-link class="btn btn-success" to="/">Back to index</router-link>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: "show",

  created() {
    const token = sessionStorage.getItem('myToken')
    if (token === null) {
      this.photo.title = '您還沒有登入!'
      return
    }
    const that = this
    const myData = { auth_token: token }
    const id = this.$route.params.id
    $.ajax({
      url: 'https://cors-anywhere.herokuapp.com/https://lighthouse-photo-api.herokuapp.com/api/v1/photos/' + id,
      data: myData,
      type: 'GET',
      dataType: 'json',
      error: (res) => {
        alert('get data error: ' + res.statusText)
      },
      success: (res) => {
        that.photo = res
      }
    })
  },

  data: () => {
    return {
      photo: {
        id: 0,
        title: "",
        description: "",
        file_location: {
          url: "",
        },
      },
    }
  }
}
</script>

