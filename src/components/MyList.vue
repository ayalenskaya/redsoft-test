/* eslint-disable */
<script setup>
import { ref, watch } from "vue";
import MyLoader from "@/components/MyLoader";

const pictures = ref([
  {
    img: "venera.png",
    title: "«Рождение Венеры» Сандро Боттичелли",
    oldPrice: 2000000,
    newPrice: 1000000,
    id: 1,
    ended: false
  },
  {
    img: "vesheria.png",
    title: "«Тайная вечеря»  Леонардо да Винчи",
    oldPrice: 20000000,
    newPrice: 3000000,
    id: 2,
    ended: false
  },
  {
    img: "adam.png",
    title: "«Сотворение Адама» Микеланджело",
    oldPrice: 6000000,
    newPrice: 5000000,
    id: 3,
    ended: false
  },
  {
    img: "anatomia.png",
    title: "«Урок анатомии»  Рембрандт",
    ended: true,
    id: 4
  }
]);

const picturesOnLocalStorage = localStorage.getItem("pictures");
if (picturesOnLocalStorage) {
  pictures.value = JSON.parse(picturesOnLocalStorage)._value;
}
watch(
    () => pictures,
    (state) => {
      localStorage.setItem("pictures", JSON.stringify(state));
    },
    { deep: true }
);


async function fetchData(id) {
  try {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await resp.json();
    console.log(data);
  } catch (err) {
    console.log("Ошибка!>>>", err);
  }
}

const cart = ref([]);

function addProduct(product) {
  cart.value.push(product);
  pictures.value.map((p) => {
    if (product.id == p.id) {
      p.cart = !p.cart;
    }
  });
}
</script>

<template>
  <div v-for="product in pictures" :key="product.id">
    <div v-if="product.ended !== true" class="renaissance__card">
      <img :alt="product.title" :src="require(`@/assets/img/${product.img}`)" />
      <div class="renaissance__cart__title">{{ product.title }}</div>
      <div class="renaissance__association around">
        <div class="renaissance__price">
          <div class="renaissance__price__op">
            {{ vueNumberFormat(product.oldPrice) }} $
          </div>
          <div class="renaissance__price__np">
            {{ vueNumberFormat(product.newPrice) }} $
          </div>
        </div>
        <MyLoader v-if="product.cart" />
        <div :key="product.id" @click="fetchData(product.id)">
          <transition name="fade">  <button
              class="button"
              href="#"
              @click="addProduct(product)"
          >

              <img v-if="product.cart" src="@/assets/img/done.svg" />
              &nbsp;{{ !product.cart ? "Купить" : "В корзине" }}

          </button>
          </transition>
        </div>
      </div>
    </div>

    <div v-else class="renaissance__card disable">
      <img :alt="product.title" :src="require(`@/assets/img/${product.img}`)" />
      <div class="renaissance__cart__title">{{ product.title }}</div>

      <div class="renaissance__association" disabled>Продана на аукционе</div>
    </div>
  </div>
</template>
<style lang="scss"></style>
