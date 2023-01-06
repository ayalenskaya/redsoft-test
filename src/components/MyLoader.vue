<template>
  <div class="lds-facebook">
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div></div>
</template>

<style scoped>
.lds-facebook {
  display: block;
  margin: auto;
  position: relative;
  width: 0;
  height: 0;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: #fcc;
  animation: lds-facebook 1s;
}
.lds-facebook div:nth-child(1) {
  left: -100px;
}
.lds-facebook div:nth-child(2) {
  left: -80px;
}
.lds-facebook div:nth-child(3) {
  left: -60px;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%,
  100% {
    top: 28px;
    height: 26px;
  }
}
</style>

