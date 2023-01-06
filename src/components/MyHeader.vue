<script setup>
import MyItemList from "@/components/MyItemList";
// eslint-disable-next-line
const props = defineProps({
  list: {
    type: Object,
    default: () => {},
    requared: true,
  },
});
</script>
<template>
  <header class="header">
    <nav class="nav">
      <img alt="logo" src="@/assets/img/logo-museum.svg" />
      <MyItemList :list="list" />
    </nav>
    <div class="header__input">
      <input
        class="input"
        placeholder="Поиск по названию картины"
        type="search"
      />
      <button class="button" type="button">Найти</button>
    </div>
  </header>
</template>
