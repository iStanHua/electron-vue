<template>
  <div class="header">
    <img class="logo" :src="logoImg" />
    <div class="header-drag"></div>
    <div class="header-icon">
      <i class="icon i-minimize" @click="minimize"></i>
      <i class="icon " :class="{'i-maximize':isMaximize,'i-reduce':!isMaximize,}" @click="maximize"></i>
      <i class="icon i-close" @click="close"></i>
    </div>
  </div>
</template>
<style lang="scss" src="./header.scss"></style>
<script src="./header.js"></script>
