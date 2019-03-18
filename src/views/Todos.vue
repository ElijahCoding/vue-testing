<template>
    <div class="container">
        <h3>Todos</h3>
        <div class="todos">
            <div class="todo" v-for="todo in allTodos" :key="todo.id">
                {{ todo.title }}
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        created () {
            this.fetchTodos()
        },

        methods: mapActions([
            'fetchTodos'
        ]),

        computed: mapGetters([
            'allTodos'
        ])
    }
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
