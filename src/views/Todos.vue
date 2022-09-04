<template>
  <div class="container-todos">
    <header class="header">
      <h1>Todo application</h1>
      <router-link to="/">Home</router-link>
      <hr>
      <AddTodo
        class="container"
        @add-todo="addTodo"
      />
      <select
        v-model="filter"
        class="filter"
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="not-completed">Not Completed</option>
      </select>
      <Control
        @mark-all-todo="markAllTodo"
        @remove-all-tags="removeAllTags"
        @delete-all-marked="deleteAllMarked"
      />
      <hr>
    </header>
    <main class="main">
      <Loader v-if="loading" />
      <TodoList
        v-else-if="filteredTodos.length"
        v-bind:todos="filteredTodos"
        @remove-todo="removeTodo"
        @handl-change="handlChange"
      />
      <p v-else>No todos!</p>
    </main>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import AddTodo from "@/components/AddTodo.vue";
import Control from "@/components/Control.vue";
import Loader from "@/components/Loader.vue";

export default {
  name: 'App',
  data() {
    return {
      todos: [],
      loading: true,
      filter: 'all'
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(response => response.json())
      .then(json => {
        setTimeout(() => {
          this.todos = json
          this.loading = false
        }, 1000)
      });
  },
  computed: {
    filteredTodos() {
      if (this.filter === 'all') {
        return this.todos
      }

      if (this.filter === 'completed') {
        return this.todos.filter(t => t.completed)
      }

      if (this.filter === 'not-completed') {
        return this.todos.filter(t => !t.completed)
      }
    }
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id); 
    },
    addTodo(todo) {
      this.todos.push(todo);
    },
    handlChange(id) {
      this.todos = this.todos.map(t => {
        if (t.id === id) {
          return {
            ...t,
            completed: !t.completed
          }
        }

        return t;
      });
    },
    markAllTodo() {
      this.todos = this.todos.map(t => {
        return {
          ...t,
          completed: true
        }
      });
    },
    removeAllTags() {
      this.todos = this.todos.map(t => {
        return {
          ...t,
          completed: false
        }
      });
    },
    deleteAllMarked() {
      this.todos = this.todos.filter(t => !t.completed)
    }
  },
  components: {
    TodoList,
    AddTodo,
    Control,
    Loader,
    Control
}
}
</script>

<style>
  .container-todos {
    display: flex;
    flex-direction: column;
  }

  .main {
    height: 50vh;
    overflow-y: auto;
  }

  .filter {
    height: 25px;
    outline: none;
    margin: 1rem 0;
    color: #42b9af;
    border: 1.5px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
  }

  .filter:hover {
    cursor: pointer;
  }

  .filter:active,
  .filter:focus {
    transition: border 0.22s;
    border: 1.5px solid #42b9af;
  }

  @media screen and (max-height: 700px) {
    .main {
      height: 46vh;
    }
  }

  @media screen and (min-height: 840px) {
    .main {
      height: 57vh;
    }
  }

  @media screen and (min-height: 890px) {
    .main {
      height: 59vh;
    }
  }

  @media screen and (min-height: 1000px) {
    .main {
      height: 62vh;
    }
  }

  @media screen and (min-height: 1100px) {
    .main {
      height: 67vh;
    }
  }

  @media screen and (min-height: 1300px) {
    .main {
      height: 72vh;
    }
  }
</style>
