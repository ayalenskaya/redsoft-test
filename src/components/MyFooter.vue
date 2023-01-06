<script setup>
import MyItemList from "@/components/MyItemList";
</script>

<template>
  <footer class="footer">
    <nav class="nav">
      <img alt="logo" src="@/assets/img/logo-museum2.svg" />
      <MyItemList :list="list" />
    </nav>
    <div class="footer__contacts">
      <div class="footer__contact__phone">
        <img alt="tel" src="@/assets/img/tel.svg" />
        <a href="tel:+1234567890" type="tel" />
        +7 (495) 555-55-55
      </div>
      <div class="footer__contact__addres">
        <img alt="tel" src="@/assets/img/adress.svg" />
        г. Москва, ул. Расплетина, 24
      </div>
    </div>
  </footer>
</template>
