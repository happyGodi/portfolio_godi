import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useLoadingScreen: any = defineStore('loader', () => {
    const isLoading = ref<boolean>(true)

    function startLoading() {
        isLoading.value = true
    }
    function stopLoading() {
        isLoading.value = false
    }

    return { isLoading, startLoading, stopLoading }
})