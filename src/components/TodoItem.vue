<template>
  <li class="list-item">
    <label class="checkbox-other" :class="{done: todo.completed}">
      <input
        type="checkbox"
        :checked="todo.completed"
        @change="$emit('handl-change', todo.id)"
      >
      <strong>{{ index + 1 }}</strong>
      {{ uppercaseTitle }}
    </label>
    <button
      class="btn-remove"
      @click="$emit('remove-todo', todo.id)"
    >&times;</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: Number,
  },
  computed: {
    uppercaseTitle() {
      return this.todo.title.toUpperCase()
    }
  }
}
</script>

<style scoped>
  .list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 2rem;
    margin-bottom: 1rem;
    border-radius: 10px;
    background-color: #fff;
    color: #2c3e50;
    border: 1px solid #ccc;
  }

  .checkbox-other {
    display: flex;
    align-items: center;
    user-select: none;
    position: relative;
    cursor: pointer;
  }

  .checkbox-other input[type=checkbox] {
    position: absolute;
    z-index: -1;
    opacity: 0;
    display: block;
    width: 0;
    height: 0;
  }

  .checkbox-other strong {
    display: inline-block;
    position: relative;
    padding: 0 0 0 35px;
    line-height: 22px;   
  }

  .checkbox-other strong:before {
    content: "";
    display: inline-block;
    width: 22px;
    height: 22px;
    position: absolute;
    left: 0;
    top: 0;
    transition: background 0.2s ease;
    background: url(../assets/img/checkbox-1.svg) 0 0 no-repeat;
  }

  /* Checked */
  .checkbox-other input[type=checkbox]:checked + strong:before {
    background-image: url(../assets/img/checkbox-2.svg);
  }

  /* Focus */
  .focused strong:before {
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
  }

  /* Hover */
  .checkbox-other strong:hover:before {
    filter: brightness(110%);
  }

  /* Active */
  .checkbox-other strong:active:before {
    filter: brightness(80%);
  }

  /* Disabled */
  .checkbox-other input[type=checkbox]:disabled + span {
    color: #666;
    cursor: default;
  }

  .checkbox-other input[type=checkbox]:disabled + strong:before {
    filter: grayscale(100%);
    opacity: 0.6;
  }

  input,
  strong {
    margin-right: 1rem;
  }

  input:hover {
    cursor: pointer;
  }

  .btn-remove {
    height: 20px;
    width: 20px;
    margin-left: 1rem;
    background: red;
    border: red;
    color: #fff;
    border-radius: 50%;
    font-weight: bold;
  }

  .btn-remove:hover {
    cursor: pointer;
  }

  .done {
    transition: color 0.2s ease;
    text-decoration: line-through;
    color: #2c3e5070;
  }
</style>
