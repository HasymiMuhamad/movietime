<script setup>
import { nextTick } from 'vue';

import { AuthTokenOptions, BaseUrlAPI, DetailUrlAPI, DetailTokenOptions } from "~/constants"

const route = useRoute();
const { data: recommendationFilmList } = await useFetch(BaseUrlAPI, AuthTokenOptions);
const { data: detailDataFilm, refresh } = await useFetch(DetailUrlAPI(route?.params?.id), DetailTokenOptions);

const images = recommendationFilmList?.value?.results?.map( itm => {
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
const getImageUrl = (e) => {
    return `https://image.tmdb.org/t/p/w710_and_h400_multi_faces${e}`
}


onMounted(async () => {
    await nextTick();
    await refresh();
});


</script>

<template>
    <div class="mt-[75px]">
        <div  class="banner-detail">
            <img :src="getImageUrl(detailDataFilm?.backdrop_path)" class="img-banner"/>
        </div>
        <div class="info">
            <div class="container z-10 flex flex-row">
                <img :src="getImageUrl(detailDataFilm?.backdrop_path)" class="img-iconic mt-[-126px] z-2"/>
                <div class="flex flex-column mt-[-126px]">
                    <div class="info-title">
                        <p class="info-title__year">{{ detailDataFilm?.release_date?.split("-")[0] }}</p>
                        <p class="info-title__title">{{ detailDataFilm?.original_title }}</p>
                        <p class="info-title__genre">{{ `${detailDataFilm?.genres[0]?.name}` }}</p>
                        <div class="info-film">
                            <div class="info-score">
                                <img src="@/images/star.png" class="rate-score" />
                            </div>
                            <p class="info-rating">{{ Math.round(detailDataFilm?.vote_average * 10) / 10 }}</p>
                            <div class="info-votes">
                                <p class="info-votes__score">user score</p>
                                <p class="info-votes__votes">{{ detailDataFilm?.vote_count }} votes</p>
                            </div>
                            <div class="divider divider-horizontal divider-primary"></div>
                            <div class="info-votes">
                                <p class="info-votes__score">Status</p>
                                <p class="info-votes__votes">{{ detailDataFilm?.status }}</p>
                            </div>
                            <div class="divider divider-horizontal divider-primary"></div>
                            <div class="info-votes">
                                <p class="info-votes__score">Language</p>
                                <p class="info-votes__votes">{{ detailDataFilm?.spoken_languages[0]?.english_name }}</p>
                            </div>
                            <div class="divider divider-horizontal divider-primary"></div>
                            <div class="info-votes">
                                <p class="info-votes__score">Budget</p>
                                <p class="info-votes__votes">{{ (detailDataFilm?.revenue)?.toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                    }) }}
                                </p>
                            </div>
                            <div class="divider divider-horizontal divider-primary"></div>
                            <div class="info-votes">
                                <p class="info-votes__score">production</p>
                                <p class="info-votes__votes">{{ detailDataFilm?.production_companies[0]?.name }}</p>
                            </div>
                        </div>
                        <div class="info-overview">
                            <p class="info-overview__headline">OVERVIEW</p>
                            <p class="info-overview__description">
                                {{ detailDataFilm?.overview }}
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
                    <div class="review-item flex flex-col">
                        <div class="flex justify-between w-[100%] mb-[31px]">
                            <div class="flex flex-row gap-4">
                                <div class="w-[48px] h-[48px] review-logo"></div>
                                <div class="flex flex-col justify-around">
                                    <p class="review-name">SWITCH.</p>
                                    <p class="review-date">December 18, 2020</p>
                                </div>
                            </div>
                            <div class="score-box">
                                <div class="flex flex-row gap-[8px]">
                                    <img src="@/images/star.png" class="w-[17px] h-[17px] mt-[7px]" />
                                    <p class="score-star">7.0</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p class="review-desc">
                                It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adore, but it does come across as a bit of a mess, even though the action sequences are breathtaking. If you're a fan of the original film, you'll be more willing to take the ride, but for those more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing Zimmer's jaw-dropping score like on the big screen. - Chris dos Santos... <span class="text-[#e74b3c] underline underline-offset-[8]">read the rest.</span>
                            </p>
                        </div>
                    </div>
                    <div class="review-item flex flex-col">
                        <div class="flex justify-between w-[100%] mb-[31px]">
                            <div class="flex flex-row gap-4">
                                <div class="w-[48px] h-[48px] review-logo"></div>
                                <div class="flex flex-col justify-around">
                                    <p class="review-name">SWITCH.</p>
                                    <p class="review-date">December 18, 2020</p>
                                </div>
                            </div>
                            <div class="score-box">
                                <div class="flex flex-row gap-[8px]">
                                    <img src="@/images/star.png" class="w-[17px] h-[17px] mt-[7px]" />
                                    <p class="score-star">7.0</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p class="review-desc">
                                It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adore, but it does come across as a bit of a mess, even though the action sequences are breathtaking. If you're a fan of the original film, you'll be more willing to take the ride, but for those more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing Zimmer's jaw-dropping score like on the big screen. - Chris dos Santos... <span class="text-[#e74b3c] underline underline-offset-[8]">read the rest.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="recommendation flex flex-col">
            <div class="container pt-[28px]">
                <p>RECOMMENDATION MOVIES</p>
            </div>
            <div class="container grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-4 flex items-center justify-center pb-[50px] overflow-x-scroll">
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
    opacity: 0.3;
}

.img-iconic {
    width: 220px;
    height: 330px;
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

.review-list {
    display: flex;
    overflow: scroll;
    max-height: 350px;
}

.review-item {
    width: 582px;
    height: auto;
    padding: 24px;
    border-radius: 14px;
    background: #F9F9F9;
    box-shadow: 0px 4px 4px 0px #0000001A;
    color: black;
}

.review-desc {
    font-family: Montserrat;
    font-weight: 400;
    font-style: italic;
    font-size: 13px;
    line-height: 19.5px;
    letter-spacing: 0%;
}

.review-logo {
    background: #cbcccd;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.review-name {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 14px;
    line-height: 17.07px;
    letter-spacing: 0%;
    color: #1E232A;
}

.review-date {
    font-family: Montserrat;
    font-weight: 400;
    font-size: 12px;
    line-height: 14.63px;
    letter-spacing: 0%;
    color: #666666;
}

.score-box {
    padding: 6px;
    width: 97px;
    height: 52px;
    background: #C4C4C447;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.score-star {
    font-family: Montserrat;
    font-weight: 600;
    font-size: 36px;
    line-height: 43.88px;
    letter-spacing: 0%;
    color: #000000;
}

.recommendation {
    width: 100%;
    height: 541px;
    background: #1e232b;
}

</style>