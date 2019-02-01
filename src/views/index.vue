<template>
  <div class="content home-page">
    <p>{{ userAgent }}</p>
    <a @click.prevent="openExternal" href="https://github.com" title="https://github.com">github</a>
  </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>