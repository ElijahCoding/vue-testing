<template>
    <div class="container">
        <AddTodo />
        <FilterTodos />
        <h3>Todos</h3>
        <div class="todos">
            <div
              v-for="todo in allTodos"
              :key="todo.id"
              class="todo"
            >
              {{ todo.title }}
              <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import AddTodo from './AddTodo'
    import FilterTodos from './FilterTodos'
    import { mapGetters, mapActions } from 'vuex'

    export default {
        components: {
            AddTodo, FilterTodos
        },

        created () {
            this.fetchTodos()
        },

        methods: {
            ...mapActions([
                'fetchTodos', 'deleteTodo'
            ])
        },

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

.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
