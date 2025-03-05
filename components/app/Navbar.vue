<template>
  <nav
    class="dark-highlight fixed z-50 md:py-2 md:px-20 gap-20 w-full navbar"
  >
    <div class="container flex flex-row justify-between w-full">
      <NuxtLink to="/" class="flex items-center py-4">
        <img src="@/images/moovie-time-logo.png" class="logo-brand" />
      </NuxtLink>
  
      <label class="flex flex-row gap-8 input items-center">
        <img src="@/images/find-movie-icon.png" class="w-6 h-6" />
        <input type="search" class="input" required placeholder="Find Movie"/>
        <div class="flex align-items:center w-4">
          <svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
        </div>
      </label>
  
      <button class="mobile-menu-btn mr-4 mt-2 btn btn-ghost md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
  
      
      <div class="mr-2 hidden md:flex">
        <div class="hidden md:flex items-center">
          <img src="@/images/categories-icon.png" class="w-6 h-6" />
          <NuxtLink
            to="/signin"
            class="signup-button btn btn-secondary btn-ghost hover:bg-inherit btn-sm pr-8 rounded-none"
            >Categories</NuxtLink
          >
        </div>
        <NuxtLink
          to="/movies"
          class="signup-button btn btn-secondary btn-ghost hover:bg-inherit btn-sm px-4 rounded-none"
          >Movies</NuxtLink
        >
        <NuxtLink
          to="/tvshows"
          class="signup-button btn btn-secondary btn-ghost hover:bg-inherit btn-sm px-4 rounded-none"
          >TV Shows</NuxtLink
        >
        <NuxtLink
          to="/signin"
          class="signup-button btn btn-secondary btn-ghost hover:bg-inherit btn-sm pl-4 rounded-none"
          >Login</NuxtLink
        >
      </div>

    </div>
    
  </nav>
</template>

<style>
.signup-button {
  letter-spacing: 0.2em;
  font-size: 0.8rem;
  color: white;
  height: 2.4rem;
  font-weight: 600;
  font-family: Montserrat !important;
}

.dark-highlight {
  background: rgba(0, 0, 0, 0.3);
}

.input {
  background: #242830 !important;
  height: 36px;
}

.logo-brand {
  color: white;
  width: 112px;
  height: auto;
}

.navbar {
  background: #292E36;
  /* height: 66px; */
  position: fixed;
  top: 0 ;
}

.search-bar {
  display: flex;
  gap: 8px;
}

.search-icon {
  width: 30px;
}

.mobile-menu-btn:hover,
.mobile-menu-btn:active {
  background: var(--secondary);
  outline: none;
}
</style>
