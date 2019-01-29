<template>
  <div class="content home-page">
    <p v-for="(item, index) in list" :key="index">{{ item.name }}</p>
  </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>