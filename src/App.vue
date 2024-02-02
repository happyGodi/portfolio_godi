<script setup lang="ts">
import { RouterView } from 'vue-router'
import LoadingScreen from './components/LoadingScreen.vue';
import { useLoadingScreen } from '@/stores/loadingScreen';
import { onMounted } from 'vue';

const loader = useLoadingScreen()
onMounted(() => {
        loader.startLoading()
        setTimeout(() => {
            loader.stopLoading()
        }, 5750);
    })
</script>

<template>
    <Transition name="fade">
            <LoadingScreen/>
        </Transition>
    <RouterView />
</template>

<style lang="scss" scoped>
   .fade-enter-active, .fade-leave-active {
        transition: opacity 0.2s linear;
    }
    .fade-enter-from {
        opacity: 0;
    }
    .fade-leave-to {
        opacity: 0;
    }
</style>
