<template>
  <div class="content home-page">
    <p v-for="(item, index) in list" :key="index">{{ item.name }}</p>
    <p>{{ userAgent }}</p>
    <a @click.prevent="openExternal" href="https://github.com" title="https://github.com">github</a>
  </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>