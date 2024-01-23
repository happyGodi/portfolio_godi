<script setup lang="ts">
    import Navbar from './Navbar.vue';
    import { useDarkModeStore } from '@/stores/darkMode';
    import { useLoadingScreen } from '@/stores/loadingScreen';
    import { computed } from 'vue';
    import { onBeforeMount, onMounted } from 'vue';
    import LoadingScreen from './LoadingScreen.vue';

    const darkModeStore = useDarkModeStore()
    const loader = useLoadingScreen()
    const isDark = computed<boolean>(() => darkModeStore.isDark)
    
    onBeforeMount(() => {
        loader.startLoading()
    })

    onMounted(() => {
         setTimeout(() => {
            loader.stopLoading()
        }, 6000);
    })

</script>

<template>
    <div :class="['landing', {landingDark: isDark}]">
        <Transition name="fade">
            <LoadingScreen/>
        </Transition>
        <Navbar/>
        <RouterView></RouterView>
    </div>
</template>

<style lang="scss" scoped>
@import "../scss/mixing";

    .landing {
        position: relative;
        width: 100%;
        height: 100%;
        @include setFlex(flex_start, center, column);
        position: relative;
        transition: background-color 0.2s linear;
    }
    .landingDark {
        background-color: var(--vt-c-black);
    }
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