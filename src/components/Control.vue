<template>
  <div class="container">
    <button
      class="btn"
      @click="$emit('mark-all-todo')"
    >Mark all</button>
    <button
      class="btn"
      @click="$emit('remove-all-tags')"
    >Remove all tags</button>
    <button
      class="btn"
      @click="$emit('delete-all-marked')"
    >Delete all marked</button>
  </div>
</template>

<style>
  .btn {
    color: #42b9af;
    border-radius: 8px;
    border: 1.5px solid #42b9af;
    background: #fff;
    width: 200px;
    margin: 0 0.5rem 0.3rem 0.5rem;
    padding: 0.2rem 1rem;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .btn:hover {
    cursor: pointer;
    opacity: 0.8;
  }
</style>
