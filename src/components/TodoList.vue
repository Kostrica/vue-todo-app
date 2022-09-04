<template>
  <div>
    <ul>
      <TodoItem
        v-for="(todo, i) of todos"
        v-bind:todo="todo"
        v-bind:index="i"
        v-on:remove-todo="removeTodo"
        v-on:handl-change="handlChange"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";
export default {
  props: ["todos"],
  components: {
    TodoItem,
  },
  methods: {
    removeTodo(id) {
      this.$emit('remove-todo', id);
    },
    handlChange(id) {
      this.$emit('handl-change', id);
    }
  }
}
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
