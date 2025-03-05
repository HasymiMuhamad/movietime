<script setup>

import { AuthTokenOptions, BaseUrlAPI } from "~/constants"

const route = useRoute();

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

const imagesFirst = images.slice(0, 5);

const url = `https://api.themoviedb.org/3/movie/${route.params.id}?language=en-US`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWI4ZTU5OTY4YjM5NDgyMTVhMGQzMzEwOTE4NGRmYiIsIm5iZiI6MTc0MTA2NzM3Ny43NTYsInN1YiI6IjY3YzY5NDcxM2E5NzFkZDJjMGMwNzMyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.35ECTIn-eJCH3-oWu8pGmhBCqrKA2Kz6D2_38GUikYg'
  }
};

const { data: detailDataFilm } = await useFetch(url, options);

const { data: filmDetail, pending, error } = useAsyncData(
  'filmDetail',
  () => useFetch(url, options)
)

const imageBanner = () => {
    return {
        imgBackdrop :`https://image.tmdb.org/t/p/w710_and_h400_multi_faces${detailDataFilm?.value?.backdrop_path}`
    }
};

const imageUrl  =`https://image.tmdb.org/t/p/w710_and_h400_multi_faces${detailDataFilm?.value?.backdrop_path}`;

const getImageUrl = (e) => {
    return `https://image.tmdb.org/t/p/w710_and_h400_multi_faces${e}`
}

</script>

<template>
    <div class="mt-[75px]">
        <div  class="banner-detail">
            <img :src="imageUrl" class="img-banner"/>
        </div>
        <div class="info">
            <div class="container z-10 flex flex-row">
                <img :src="imageUrl" class="img-iconic mt-[-126px] z-2"/>
                <div class="flex flex-column mt-[-126px]">
                    <div class="info-title">
                        <p class="info-title__year">2020</p>
                        <p class="info-title__title">Wonder Woman 1984</p>
                        <p class="info-title__genre">Fantasy, Action, Adventure</p>
                        <div class="info-film">
                            <div class="info-score">
                                <img src="@/images/star.png" class="rate-score" />
                            </div>
                            <p class="info-rating">7.0</p>
                            <div class="info-votes">
                                <p class="info-votes__score">user score</p>
                                <p class="info-votes__votes">3621 votes</p>
                            </div>
                            <div class="divider divider-horizontal divider-primary"></div>
                            <div class="info-votes">
                                <p class="info-votes__score">Status</p>
                                <p class="info-votes__votes">Released</p>
                            </div>
                            <div class="divider divider-horizontal divider-primary"></div>
                            <div class="info-votes">
                                <p class="info-votes__score">Language</p>
                                <p class="info-votes__votes">English</p>
                            </div>
                            <div class="divider divider-horizontal divider-primary"></div>
                            <div class="info-votes">
                                <p class="info-votes__score">Budget</p>
                                <p class="info-votes__votes">$200,000,000.00</p>
                            </div>
                            <div class="divider divider-horizontal divider-primary"></div>
                            <div class="info-votes">
                                <p class="info-votes__score">production</p>
                                <p class="info-votes__votes">DC Entertainment</p>
                            </div>
                        </div>
                        <div class="info-overview">
                            <p class="info-overview__headline">OVERVIEW</p>
                            <p class="info-overview__description">
                                Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="review">
            <div class="container flex review-box pt-[150px]">
                <p class="info-overview__headline ">REVIEWS</p>
                <div class="review-list mt-[25px] gap-[32px] flex flex-row">
                    <div class="review-item">
                        test
                    </div>
                    <div class="review-item">
                        test
                    </div>
                </div>
            </div>
        </div>
        <div class="recommendation flex items-center justify-center">
            <div class="container grid grid-cols-5 gap-4">
                <div v-for="image in imagesFirst" :key="image.id">
                    <CardItem :dataImage="image" />
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.img-banner {
    width: 100%;
    height: 400px;
    object-fit: fill;
    min-width: 1028px;
    opacity: 0.3;
}

.img-iconic {
    width: 220px;
    height: 330px;
}

.info {
    width: 100%;
    height: 80px ;
    background: #181919;
}

.info-title {
    padding: 18px 0px 18px 33px ;
}

.info-title__year {
    font-family: Montserrat;
    font-weight: 500;
    font-size: 18px;
    line-height: 21.94px;
    letter-spacing: 0%;
    color: #FFFFFF;
}

.info-title__title {
    font-family: Montserrat;
    font-weight: 600;
    font-size: 36px;
    line-height: 43.88px;
    letter-spacing: 0%;
    color: #E5E5E5;
}

.info-title__genre {
    font-family: Montserrat;
    font-weight: 500;
    font-size: 14px;
    line-height: 17.07px;
    letter-spacing: 0%;
    color: #FFFFFF;
}

.info-film {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 44px;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
}

.info-votes {
    display: flex;
    flex-direction: column;
}

.info-votes__score {
    font-family: Montserrat;
    font-weight: 500;
    font-size: 12px;
    line-height: 14.63px;
    letter-spacing: 0%;
    color: #8b8c8a;
    text-transform: uppercase;
}

.info-votes__votes {
    font-family: Montserrat;
    font-weight: 500;
    font-size: 12px;
    line-height: 14.63px;
    letter-spacing: 0%;
    color: #FFFFFF;
    margin-top: 3px;
    text-transform: uppercase;
}

.info-rating {
    font-family: Montserrat;
    font-weight: 600;
    font-size: 36px;
    line-height: 43.88px;
    letter-spacing: 0%;
    color: #E5E5E5;
}

.info-overview {
    margin-top: 51px;
}

.info-overview__headline {
    font-family: Montserrat;
    font-weight: 600;
    font-size: 14px;
    line-height: 17.07px;
    letter-spacing: 0%;
    color: #FF0000;
    margin-bottom: 8px;
}

.info-overview__description {
    font-family: Montserrat;
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    letter-spacing: 0%;
    color: #000000;
}

.rate-score {
    width: 32px;
    height: 32px;
}

.review {
    width: 100%;
    height: 541px;
    background: #ffffff;
}

.review-box {
    display: flex;
    flex-direction: column;
}

.review-item {
    width: 582px;
    height: 284px;
    border-radius: 14px;
    background: #F9F9F9;
    box-shadow: 0px 4px 4px 0px #0000001A;
}

.recommendation {
    width: 100%;
    height: 541px;
    background: #1e232b;
}

</style>