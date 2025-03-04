<template>
  <div class="bg-gradient-to-b from-transparent h-16"></div>
  <div class="bg-base-36 h-[333px] w-full"></div>
  <section class="container bg-base-23 flex flex-col  items-center">
    <div class="flex flex-row justify-between w-full">
      <div class="flex-column mt-[-223px]">
        <div class="red-line mb-[12px]"></div>
        <p class="headline" >Discover Movies</p>
      </div>
      <div class="flex-row gap-20 w-100 mt-[-223px]">
        <button class="btn-primary-lite">Popularity</button>
        <button class="btn-secondary-lite">Release Date</button>
      </div>
    </div>
    <div class="grid grid-cols-5 gap-7">
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </div>
  </section>
</template>


<style>

.bg-base-36 {
  background: #292E36;
}

.bg-base-23 {
  min-height: 800px;
  background: #IE232B;
  /* background: red; */
}

.btn-primary-lite {
  min-width: 107px;
  min-height: 32px;
  width: auto;
  height: auto;
  border-radius: 32px;
  background: #FF0000;
  color: #E5E5E5;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 14px;
  line-height: 17.07px;
  letter-spacing: 0%;
}

.btn-secondary-lite {
  min-width: 107px;
  min-height: 32px;
  width: auto;
  height: auto;
  border-radius: 32px;
  background: #00000033;
  color: #E5E5E5;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 14px;
  line-height: 17.07px;
  letter-spacing: 0%;
}

.red-line {
  width: 112px;
  height: 6px;
  background: #E74C3C;
}

.headline {
  font-family: Montserrat;
  font-weight: 600;
  font-size: 24px;
  line-height: 29.26px;
  letter-spacing: 0%;
}

</style>
