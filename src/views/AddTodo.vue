<template>
  <div>
    <h3>Add Todo</h3>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="title" placeholder="Add Todo...">
        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                title: ''
            }
        },

        methods: {
            onSubmit (e) {
                
            }
        }
    }
</script>
