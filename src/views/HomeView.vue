<script setup>
import MyHeader from "@/components/MyHeader";
import MyFooter from "@/components/MyFooter";
import MyWrapper from "@/components/MyWrapper";
</script>
<template>
  <div class="wrapper">
    <MyHeader />
    <MyWrapper />
    <MyFooter />
  </div>
</template>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap");
$var1: #f6f3f3;
$var2: #403432;
$var3: #ffffff;
$var4: #776763;
$var5: #5b3a32;
$var6: #e1e1e1;
$var7: #9f9f9f;
$var8: #a0a0a0;
$var9: #eceaea;

html,
body {
  background-color: $var1;
  height: 100vh;
}

.disable {
  opacity: 0.4;
}

nav {
  cursor: pointer;
}

img {
  border: 0;
  max-width: 100%;
}

a {
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

#app {
  font-family: "Merriweather", sans-serif;
  height: 100vh;
}

li {
  list-style: none;
}

.button {
  padding: 14px 22px;
  background-color: $var2;
  color: $var3;
  cursor: pointer;
  &__loader {
    top: 0;
    left: 0;
    background-color: transparent;
    position: relative;
    display: flex;
    width: 100%;
    height: 50%;
    justify-content: center;
    align-items: center;
    img {
      position: absolute;
      top: 0;
      &:first-child {
        animation: 3s ease-in 1s;
      }
      &:last-child {
        animation: 3s ease-in 1s;
      }
    }
  }
}

button:hover {
  background-color: $var4;
}

button:disabled {
  display: flex;
  cursor: default;
}

.done {
  padding: 14px 36px;
  color: $var3;
  cursor: pointer;
  background-color: $var5;
}

.around {
  display: flex;
  justify-content: space-between;
}

.header,
.footer {
  border-bottom: 1px solid $var6;
  justify-content: space-around;
  height: 96px;
  align-items: center;
}

.input {
  border-color: $var6;
  background-color: $var1;
  color: $var7;
  max-width: 416px;
  min-width: 345px;
  min-height: 48px;
  outline: none;
  font-family: "Merriweather", sans-serif;

  &::placeholder {
    color: $var7;
  }

  &:hover {
    border-color: $var6;
  }
}

.header,
.nav,
footer {
  display: flex;
  flex-wrap: wrap;
}

.renaissance {
  box-sizing: border-box;
  min-height: 100%;
  padding-bottom: 90px;
  .renaissance__title {
    display: flex;
    justify-content: center;
  }
  .renaissance__cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .renaissance__card {
    width: 280px;
    height: 338px;
    padding: 2px 16px;
    margin: 0 32px 15px 0;
    border: 1px solid $var6;

    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
  }

  .renaissance__cart__title {
    font-size: 18px;
    padding: 20px 0 23px 24px;
    padding-top: 20px;
    padding-bottom: 23px;
  }

  .renaissance__price {
    margin-right: 25px;
  }
}

.renaissance__price__op {
  color: $var8;
  text-decoration: line-through;
  font-size: 14px;
}

.renaissance__price__np {
  font-weight: 700;
  font-size: 16px;
}

.footer {
  background-color: $var9;
  height: 80px;
  margin-top: -80px;
}

.wrapper {
  height: 100%;
  &__contacts {
    display: flex;
    align-items: center;
    cursor: pointer;
    flex-wrap: wrap;
  }

  &__contact__phone {
    padding-right: 50px;
  }
}

@media screen and (max-width: 1092px) {
  header {
    border-bottom: none;
  }
}

@media screen and (max-width: 634px) {
  .header,
  .nav,
  footer {
    justify-content: center;
  }
  .renaissance__title {
    padding-top: 50px;
  }
}

@media screen and (max-width: 474px) {
  .renaissance__title {
    padding-top: 142px;
  }
  .header__input {
    display: flex;
    flex-direction: column;
  }
}

</style>
