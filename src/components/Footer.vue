<template>
  <footer class="bg-[#CCC5B9] mt-16">
    <div
      class="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
    >
      <div class="flex justify-center space-x-6 md:order-2">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">{{ item.name }}</span>
          <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
      <div class="mt-8 md:order-1 md:mt-0">
        <p class="text-center text-base text-gray-400 hover:text-[#EB5E28]">
          &copy; 2022 Marcs&Co, Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style></style>
