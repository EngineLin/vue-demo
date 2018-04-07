<template>
  <div>
    <h3>{{ photo.title }}</h3>
    <img :src="photo.file_location.url" class="img-thumbnail">
    <p>{{ photo.description }}</p>

    <router-link class="btn btn-warning" to="/">Back to index</router-link>
  </div>
</template>

<script>
export default {
  name: "show",

  data: () => {
    return {
      photo: {
        "id": 1,
        "title": "Hi~ this is a photo",
        "description": "Hi~ this is a photo",
        "file_location": {
          "url": "/uploads/photo/file_location/1/26677973_203322050230698_3595655715217896515_o.jpg",
        },
      },
    }
  }
}
</script>

