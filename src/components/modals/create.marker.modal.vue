<template>

</template>

<script>
export default {
  name: "create.marker.modal",
  methods: {
    async openModal(lat, lng) {
      const {value: formValues} = await this.$swal.fire({
        title: 'Створити маркер',
        html:
            '<input id="name" placeholder="Назва" type="text" class="swal2-input">' +
            `<input id="latitude" placeholder="Широта" value="${lat}" type="text" class="swal2-input">` +
            `<input id="longitude" placeholder="Довгота" value="${lng}" type="text" class="swal2-input">`,
        focusConfirm: false,
        confirmButtonText: 'Додати',
        preConfirm: () => {
          return [
            document.getElementById('name').value,
            document.getElementById('latitude').value,
            document.getElementById('longitude').value,
          ]
        }
      })
      let [name, latitude, longitude] = formValues;
      this.$emit('create', {'name': name, 'latitude': latitude, 'longitude': longitude})
    }
  }
}
</script>

<style scoped>

</style>
