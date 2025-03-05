<script setup>

const props = defineProps({
  dataImage: Object
});
const { dataImage } = props;

</script>


<template>
  <div class="item-base">
    <div class="flex items-end justify-end">
      <div class="flex justify-center item-rate items-center">{{ Math.round(dataImage?.rating * 10) / 10 }}</div>
    </div>
    <img class="item-image"  :src="dataImage?.url" alt="image" />
    <div class="items-start py-2">
      <p class="item-title py-1">{{ dataImage?.title }}</p>
      <p class="item-year">{{ dataImage?.releaseDate }}</p>
    </div>
  </div>
</template>

<style>
.item-base {
  width: auto;
  min-width: 220px;
  height: 383px;
}

.item-image {
  width: 100%;
  height: 330px;
}

.item-image:hover {
  width: 100%;
  height: 330px;
  z-index: 52;
  opacity: 0.2;
}

.item-rate {
  width: 48px;
  height: 32px;
  background: #1E232BCC;
  z-index: 2;
  margin-bottom: -32px;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 18px;
  line-height: 21.94px;
  letter-spacing: 0%;
  text-align: center;
}

.item-title {
  font-family: Montserrat;
  font-weight: 600;
  font-size: 16px;
  line-height: 19.5px;
  letter-spacing: 0%;
  color: #E5E5E5;
}

.item-year {
  font-family: Montserrat;
  font-weight: 400;
  font-size: 14px;
  line-height: 17.07px;
  letter-spacing: 0%;
  color: #929292;
}
</style>