/* eslint-disable */
<script setup>
import { ref } from "vue";
// eslint-disable-next-line
const props = defineProps({
  list: {
    type: Object,
    default: () => {},
    requared: true,
  },
});
const list = ref(["Каталог", "Доставка", "Оплата", "Контакты", "О галерее"]);
</script>
<template>
  <ul v-for="item in list" :key="item.id">
    <li>{{ item }}</li>
  </ul>
</template>
