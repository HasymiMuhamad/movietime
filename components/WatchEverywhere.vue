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


const listOfGenres = [
  {
    name : 'Action'
  },
  {
    name : 'Adventure'
  },
  {
    name : 'Animation'
  },
  {
    name : 'Comedy'
  },
  {
    name : 'Crime'
  },
  {
    name : 'Documentary'
  },
  {
    name : 'Drama'
  },
  {
    name : 'Family'
  },
  {
    name : 'Fantasy'
  },
  {
    name : 'History'
  },
  {
    name : 'Horor'
  }
];
</script>


<template>
  <section class="flex flex-col md:py-8 px-2 md:px-20">
    <div class="container pt-[66px]">
      <div class="flex-column my-[59px]">
        <div class="red-line mb-[12px]"></div>
        <p class="headline" >Movies</p>
      </div>
      
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-3 ... filter">
          <div class="px-[18px] pt-[20px] pb-[18px]">
            <p class="filter-note">Sort Result By</p>
          </div>
          <div class="p-[18px]">
            <div class="dropdown">
              <div tabindex="0" role="button" class=" m-1 dropdown-box dropdown-title">Popularity</div>
              <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
              </ul>
            </div>
          </div>
          <div class="px-[18px] pt-[20px] pb-[18px]">
            <p class="filter-note">Genres</p>
          </div>

          <div v-for="item in listOfGenres" class="flex flex-row justify-between items-center px-[18px] py-[8px]">
            <p class="genre-title">{{ item?.name }}</p>
            <input type="checkbox" checked="true" class="checkbox checkbox-error" />
          </div>

        </div>

        <div class="col-span-9 ...">
          <div class="grid grid-cols-4 gap-[20px]">
            <div v-for="image in images" :key="image.id">
              <CardItem :dataImage="image" />
            </div>
          </div>

          <div class="flex items-center justify-center mt-[63px]">
            <button class="btn-primary-lite">
              Load More
            </button>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>


<style>

.filter {
  width: 100%;
  height: auto;
  max-height: 700px;
  /* background: black; */
  border-radius: 8px;
  /* background: linear-gradient(180deg, #0E1723 0%, rgba(30, 35, 42, 0) 100%); */
  background: #111925;
}

.filter-note {
  font-family: Montserrat;
  font-weight: 600;
  font-size: 16px;
  line-height: 19.5px;
  letter-spacing: 0%;
}

.dropdown-box {
  width: auto;
  min-width: 220px;
  height: 36px;
  border-radius: 4px;
  background: #E0E0E021;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 17px;
}

.dropdown-title {
  font-family: Montserrat;
  font-weight: 400;
  font-size: 14px;
  line-height: 17.07px;
  letter-spacing: 0%;
  color: #E5E5E5;
}

.genre-title {
  font-family: Montserrat;
  font-weight: 400;
  font-size: 14px;
  line-height: 17.07px;
  letter-spacing: 0%;
  color: #FFFFFF;
}

</style>
