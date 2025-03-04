<script setup>
import { FooterHeading, FooterLinks, CopyrightText } from "~/constants"
</script>

<template>
  <footer
    class="container items-strength footer footer-center py-[65px] bg-base-100 text-base-content flex flex-row justify-between"
  >
    <p class="copyright">©  2021 MoovieTime. All rights reserved.</p>
    <img src="@/images/moovie-logo-grey.png" class="logo-brand" />
    <p class="buildwidth">Made with NuxtJs</p>

  </footer>
</template>

<style>
.bg-blue {
  background: blue;
}

.btn {
  font-family: Gilroy-Bold;
  letter-spacing: 0.2rem;
  font-size: 0.8rem;
}

.copyright {
  font-family: Montserrat;
  font-weight: 400;
  font-size: 13px;
  line-height: 15.85px;
  letter-spacing: 0%;
  color: #929292;
}

.buildwidth {
  font-family: Montserrat;
  font-weight: 400;
  font-size: 13px;
  line-height: 15.85px;
  letter-spacing: 0%;
  text-align: right;
  color: #929292;
}

.footer-links {
  color: var(--primary) !important;
}

.footer-links:hover {
  color: var(--primary-focus) !important;
}
</style>
