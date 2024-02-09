<script setup lang="ts">
    import { useDarkModeStore } from '@/stores/darkMode';
    import { useLanguages } from '@/stores/languages';
    import { ref, computed } from 'vue';

    const darkMode = useDarkModeStore()
    const languages = useLanguages()
    const isDark = computed<boolean>(() => darkMode.isDark)
    const isOpen = ref<boolean>(false)
    const lang = ref([
        { language : 'en', name : 'English'},
        { language : 'fr', name : 'Français'}
    ])

    function open(): void {
        isOpen.value = !isOpen.value
    }
    function selectLang(lang: string): void {
        languages.changeLocal(lang)
    }

</script>

<template>
    <div :onClick="open" :class="['sub-item', { sub_menu_dark : isDark}]">
        <h4 :class="['active-item', { dark: isDark}]">{{ $t('dropdown.language') }}</h4>
        <h4 :class="['active-item lang_name', { dark: isDark}]">{{ $t('dropdown.name') }}</h4>
        <Transition name="fade-down">
            <div v-if="isOpen" :class="['sub-menu', { sub_menu_dark: isDark}]">
                <h4 v-for="(item, i) in lang" :key="i" @click="selectLang(item.language)" :class="['list-item', { list_item_dark: isDark}]">{{ item.name }}</h4>
            </div>
        </Transition>
    </div>
</template>

<style lang="scss" scoped>
@import "../scss/mixing";
@import "../scss/variables";

    .sub-item {
        @include setFlex(center, center);
        width: 100%;
        height: 100%;
        position: relative;

        .active-item {
            font-size: 18px;
            font-weight: bold;
            padding: 1rem;
        }
        .active-item:hover {
            cursor: pointer;
        }
        .dark {
            color: $white-low;
        }
        .sub-menu {
            position: absolute;
            background-color: $white;
            top: 70%;
            left: 50%;
            transform: translateX(-50%);
            width: max-content;
            border-radius: 0px;
            border: none;
            outline: none;

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
                color: $white-low;
            }
            .list-item:hover {
                cursor: pointer;
                color: $white;
            }
            .list_item_dark:hover {
                cursor: pointer;
                color: $dark;
            }
            .list-item::after {
                content: '';
                position: absolute;
                top: 0%;
                left: 0%;
                height: 100%;
                width: 0%;
                background-color: $dark;
                transition: width 0.2s linear;
                z-index: -1;
            }
            .list_item_dark::after {
                background-color: $white;
            }
            .list-item:hover::after {
                width: 100%;
            }
        }
        .sub_menu_dark {
            background-color: $dark;
        }
    }

    .fade-down-enter-active, .fade-down-leave-active {
        transition: opacity 0.2s linear, top 0.2s linear;
        pointer-events: none;
    }
    .fade-down-enter-from, .fade-down-leave-to {
        opacity: 0;
        top: 50%;
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