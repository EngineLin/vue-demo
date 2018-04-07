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

      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'edit/new',

  data: () => {
    return {
      title: '',
      date: '',
      description: '',
      fileLocation: '',
    }
  }
}
</script>
