<template>
  <form class="form" @submit.prevent="onSubmit">
    <input
      type="text"
      v-bind:placeholder="placeholderString"
      v-model="title"
    />
    <button class="btn-create" type="submit">Add</button>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        placeholderString: 'Enter a new todo',
        title: '',
      }
    },
    methods: {
      onSubmit() {
        if (this.title.trim()) {
          const newTodo = {
            userId: 1,
            id: Date.now(),
            title: this.title,
            completed: false,
          }

          this.$emit('add-todo', newTodo);
          this.title = '';
        }
      }
    }
  }
</script>

<style scoped>
  .form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  input {
    width: 50vw;
    margin: 0;
    outline: none;
    border: 1.5px solid #ccc;
    display: block;
    color: #2c3e50;
    padding: 0.5rem 1.5rem;
    border-radius: 8px 0 0 8px;
  }

  input:active,
  input:focus {
    transition: border 0.22s;
    border: 1.5px solid #42b9af;
  }

  .btn-create {
    color: #42b9af;
    border-radius: 0 8px 8px 0;
    border: 1.5px solid #42b9af;
    background: #fff;
    padding: 0.5rem 1.5rem;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .btn-create:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  .btn-create:active {
  box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
}
</style>
