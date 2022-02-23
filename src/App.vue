<template>
  <div class="h-100vh flex-col flex-center">
    <h1 class="text-30px">{{ str }}</h1>
    <Icon icon="mdi-wechat" class="text-40px text-blue-400 cursor-pointer" />
    <h1 class="text-30px">{{ auth.piniaName }}</h1>
    <img alt="Vue logo" :src="ImgLogo" class="w-200px h-auto" />
    <HelloWorld msg="Hello Vue2 + Cli" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from '@vue/composition-api';
import { Icon } from '@iconify/vue2';
import { useAuthStore } from '@/store';
// 支持别名
import { ImgLogo } from '@/assets';
import HelloWorld from './components/HelloWorld.vue';

const auth = useAuthStore();
const str = ref<string>('composition-api');
</script>

<style lang="scss"></style>
