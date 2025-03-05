<script setup>

import { AuthTokenOptions, BaseUrlAPI } from "~/constants"


const { data: detailData } = await useFetch(BaseUrlAPI, AuthTokenOptions);

const images = detailData?.value?.results?.map( itm => {
  return {
    id : itm?.id,
    url: `https://image.tmdb.org/t/p/w710_and_h400_multi_faces${itm?.backdrop_path}`,
    overview : itm?.overview,
    title: itm?.title,
    rating: itm?.vote_average,
    releaseDate: itm?.release_date?.split("-")[0]
  }
});

</script>



<template>
  <div class="bg-gradient-to-b from-transparent h-16"></div>
  <!-- <div class="bg-base-36 h-[333px] w-full"></div> -->
  <section class="container bg-base-23 flex flex-col  items-center">
    <div class="flex flex-row justify-between w-full mb-12">
      <div class="flex-column ">
        <div class="red-line mb-[12px]"></div>
        <p class="headline" >Discover Movies</p>
      </div>
      <div class="flex-row gap-20 w-100 ">
        <button class="btn-primary-lite">Popularity</button>
        <button class="btn-secondary-lite">Release Date</button>
      </div>
    </div>
    <div class="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-1 gap-7 flex">
      <div v-for="image in images" :key="image.id">
        <CardItem :dataImage="image" />
      </div>
    </div>
  </section>
</template>


<style>

.bg-base-36 {
  background: #292E36;
}

.bg-base-23 {
  min-height: 800px;
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
