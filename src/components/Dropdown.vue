<script setup lang="ts">
    import { useDarkModeStore } from '@/stores/darkMode';
    import { useLanguages } from '@/stores/languages';
    import { ref, computed } from 'vue';

    const darkMode = useDarkModeStore()
    const languages = useLanguages()
    const isDark = computed<boolean>(() => darkMode.isDark)
    const languageList = computed<Array<any>>(() => languages.languages)
    const isOpen = ref<boolean>(false)
    const selectedLang = computed<any>(() => languages.defaultLang)

    function open(): void {
        isOpen.value = !isOpen.value
    }

    function selectLang(lang: any): void {
        languages.switchLang(lang)
    }

</script>

<template>
    <div :onClick="open" :class="['sub-item', { sub_menu_dark : isDark}]">
        <h4 :class="['active-item', { dark: isDark}]">{{ selectedLang.code }}</h4>
        <h4 :class="['active-item lang_name', { dark: isDark}]">{{ selectedLang.name }}</h4>
        <Transition name="fade-down">
            <div v-if="isOpen" :class="['sub-menu', { sub_menu_dark: isDark}]">
                <h4 v-for="(item, i) in languageList" :key="i" @click="selectLang(item)" :class="['list-item', { list_item_dark: isDark}]">{{ item.name }}</h4>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
    .sub-item {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .active-item {
        font-size: 18px;
        font-weight: bold;
        padding: 1rem;
    }
    .active-item:hover {
        cursor: pointer;
    }
    .list-item {
        font-size: 18px;
        font-weight: bold;
        padding: 1rem;
        position: relative;
        z-index: 1;
        border: none;
        outline: none;
    }
    .list_item_dark {
        color: var(--vt-c-white-low);
    }
    .list-item:hover {
        cursor: pointer;
        color: white;
    }
    .list_item_dark:hover {
        cursor: pointer;
        color: var(--vt-c-black);
    }
    .list-item::after {
        content: '';
        position: absolute;
        top: 0%;
        left: 0%;
        height: 100%;
        width: 0%;
        background-color: var(--vt-c-black);
        transition: width 0.2s linear;
        z-index: -1;
    }
    .list_item_dark::after {
        background-color: var(--vt-c-white-low);
    }
    .list-item:hover::after {
        width: 100%;
    }
    .sub-menu {
        position: absolute;
        background-color: white;
        top: 70%;
        left: 50%;
        transform: translateX(-50%);
        width: max-content;
        border-radius: 0px;
        border: none;
        outline: none;
    }
    .sub_menu_dark {
        background-color: var(--vt-c-black);
    }

    .fade-down-enter-active, .fade-down-leave-active {
        transition: opacity 0.2s linear, top 0.2s linear;
        pointer-events: none;
    }
    .fade-down-enter-from, .fade-down-leave-to {
        opacity: 0;
        top: 50%;
    }
    .dark {
        color: var(--vt-c-white-low);
    }
    .lang_name {
        display: none;
    }

    @media screen and (max-width: 768px) {
        .lang_name {
           display: block;
        }
    }
</style>