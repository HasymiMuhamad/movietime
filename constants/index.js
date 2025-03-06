export const FooterLinks = [
  "FAQ",
  "Investor Relations",
  "Ways to Watch",
  "Help Center",
  "Account",
  "Media Center",
  "Jobs",
  "Redeem Gift Cards",
  "Buy Gift Cards",
  "Terms of Use",
  "Privacy",
  "Cookie Preferences",
  "Corporate Information",
  "Contact Us",
  "Speed Test",
  "Legal",
  "Notices",
  "Only on Netflix",
]

export const FooterHeading = "Questions? Call 1-844-505-2993"

export const CopyrightText =
  "© 2022 NetflixNuxt is a UI Clone/Study site by Cai Toy..."


// In Production Mode : API Key will be in ENV
export const AuthTokenOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWI4ZTU5OTY4YjM5NDgyMTVhMGQzMzEwOTE4NGRmYiIsIm5iZiI6MTc0MTA2NzM3Ny43NTYsInN1YiI6IjY3YzY5NDcxM2E5NzFkZDJjMGMwNzMyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.35ECTIn-eJCH3-oWu8pGmhBCqrKA2Kz6D2_38GUikYg'
  }
};

export const BaseUrlAPI = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
export const DetailUrlAPI = (e) => {
  return `https://api.themoviedb.org/3/movie/${e}?language=en-US`;
}

// In Production Mode : API Key will be in ENV
export const DetailTokenOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YWI4ZTU5OTY4YjM5NDgyMTVhMGQzMzEwOTE4NGRmYiIsIm5iZiI6MTc0MTA2NzM3Ny43NTYsInN1YiI6IjY3YzY5NDcxM2E5NzFkZDJjMGMwNzMyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.35ECTIn-eJCH3-oWu8pGmhBCqrKA2Kz6D2_38GUikYg'
  },
  lazy: true
};
