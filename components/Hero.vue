<script setup>
import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { AuthTokenOptions, BaseUrlAPI } from "~/constants"


const { data: detailData } = await useFetch(BaseUrlAPI, AuthTokenOptions);

const images = detailData?.value?.results?.map( itm => {
  return {
    id : itm?.id,
    url: `https://image.tmdb.org/t/p/w710_and_h400_multi_faces/${itm?.backdrop_path}`,
    overview : itm?.overview,
    title: itm?.title,
    rating: itm?.vote_average,
    releaseDate: itm?.release_date?.split("-")[0]
  }
})

const config = {
  height: 500,
  itemsToShow: 2.5,
  gap: 2,
  autoplay: 1000,
  wrapAround: true,
  pauseAutoplayOnHover: true,
};


</script>

<template>
  <div class="mb-[50px]"></div>
  <Carousel v-bind="config">
    <Slide v-for="image in images" :key="image.id">
      <div class="card-slider flex flex-row items-center">
        <img class="card-img"  :src="image?.url" alt="image" />
        <div class="card-desc gap-4">
          <div class="flex flex-row gap-4 items-center">
            <img src="@/images/star.png" class="rate-icon" />
            <p class="card-rating">{{image?.rating}}</p>
          </div>
          <p class="card-title">{{image?.title}}</p>
          <div class="flex flex-row gap-3 items-center">
            <p class="card-genre">{{image?.releaseDate}}</p>
            <div class="card-bullet"></div>
            <p class="card-genre">Sci-Fi</p>
          </div>
          <p>{{image?.overview}}</p>
        </div>
      </div>
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<style>
.card-slider {
  width: 541px;
  height: 334px;
}

.card-img {
  width: 50%;
  height: 364px;
}

.card-bullet {
  width: 8px;
  height: 8px;
  background: #808080;
  border-radius: 100%;
}

.card-desc {
  padding: 20px;
  color: #FFFFFF;
  width: 50%;
  height: 324px;
  max-height: 324px;
  background: #000000;
  display: flex;
  overflow-y: scroll;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0%;
  flex-direction: column;
}

.card-genre {
  font-family: Montserrat;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0%;
  color: #FFFFFF;
}

.card-rating {
  font-family: Montserrat;
  font-weight: 700;
  font-size: 18px;
  line-height: 21.94px;
  letter-spacing: 0%;
  color: #FFFFFF;
}

.card-title {
  font-family: Montserrat;
  font-weight: 500;
  font-size: 28px;
  line-height: 34.13px;
  letter-spacing: 0%;
}

.rate-icon {
  width: 17px;
  height: 17px;
}

</style>