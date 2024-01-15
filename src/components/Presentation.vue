<script setup lang="ts">
    import { ref, computed, onMounted } from 'vue';
    import { useDarkModeStore } from '@/stores/darkMode';
    import { useLanguages } from '@/stores/languages';
import { RouterLink } from 'vue-router';

    const darkModeStore = useDarkModeStore()
    const languages = useLanguages()
    const selectedLang = computed<any>(() => languages.defaultLang)
    const iconSize = ref(24)
    const buttonIconOnHoverColor = computed<string>(() => darkModeStore.buttonIconOnHoverColor)
    const isDark = computed<boolean>(() => darkModeStore.isDark)

    function lightColor() {
        darkModeStore.lightColor()
    }
    function resetColor() {
        darkModeStore.resetColor()
    }
    onMounted(() => {
        resetColor()
    })
</script>

<template>
    <div class="landing_content">
        <div :class="['content_left', { content_left_dark: isDark}]">
            <h1 :class="['left_title', {left_title_dark: isDark}]">{{ selectedLang.greeting }}</h1>
            <h1 :class="['left_title', {left_title_dark: isDark}]">{{ selectedLang.names}}</h1>
            <p :class="['description', {description_dark: isDark}]">{{ selectedLang.description}}</p>
            <RouterLink to="/gallery" :class="[isDark ? 'gallery_dark' : 'gallery']" :onMouseenter="lightColor" :onMouseleave="resetColor">
                {{ selectedLang.gallery }}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" :width="iconSize" :height="iconSize">
                <path d="M29.84375 13.09375C29.066406 13.167969 28.402344 13.691406 28.148438 14.429688C27.890625 15.171875 28.089844 15.992188 28.65625 16.53125L35.125 23L10 23C9.9375 22.996094 9.875 22.996094 9.8125 23C8.707031 23.050781 7.855469 23.988281 7.90625 25.09375C7.957031 26.199219 8.894531 27.050781 10 27L35.125 27L28.625 33.46875C27.839844 34.253906 27.839844 35.527344 28.625 36.3125C29.410156 37.097656 30.683594 37.097656 31.46875 36.3125L41.34375 26.40625L42.78125 25L41.34375 23.59375L31.46875 13.6875C31.046875 13.253906 30.449219 13.035156 29.84375 13.09375Z" 
                    :fill="buttonIconOnHoverColor" />
                </svg>
            </RouterLink>
        </div>
        <div :class="['content_right', { content_right_dark: isDark}]">
            <h1 :class="['right_title', {right_title_dark: isDark}]"> {{ selectedLang.next }}</h1>
            <h1 :class="['right_title', {right_title_dark: isDark}]"> {{ selectedLang.artistNames }}</h1>
        </div>
    </div>
</template>

<style scoped>
     .landing_content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        width: 100%;
        min-width: 100%;
        height: 90%;
        padding: 1rem 1.25%;
    }
    .content_left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 50%;
        height: 100%;
        min-height: 100%;
        padding: 2rem;
        transition: background-color 0.2s linear;
    }
    .content_left_dark {
        background-color: var(--vt-c-black);
    }
    .content_right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        width: 50%;
        height: 100%;
        min-height: 100%;
        padding: 2rem;
        background-color: var(--vt-c-black);
        transition: background-color 0.2s linear;
    }
    .content_right_dark {
        background-color: #fff;
    }
    .left_title {
        font-size: 52px;
        widows: 60%;
    }
    .left_title_dark {
        color: #fff;
    }
    .right_title {
        font-size: 52px;
        color: white;
        width: 60%;
    }
    .right_title_dark {
        color: var(--vt-c-black);
    }
    .description {
        width: 70%;
        font-size: 18px;
        margin: 12px 0 ;
    }
    .description_dark {
        color: #fff;
    }
    .gallery {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        border: none;
        outline: none;
        border: 1px solid var(--vt-c-black);
        background-color: var(--vt-c-black);
        color: white;
        padding: 0.5rem 1rem;
        transition: all 0.2s linear;
        transition-property: background-color, color;
    }
    .gallery_dark {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        border: none;
        outline: none;
        border: 1px solid #fff;
        background-color: #fff;
        padding: 0.5rem 1rem;
        color: var(--vt-c-black);
        transition: all 0.2s linear;
        transition-property: background-color, color;
    }
    .gallery:hover {
        background-color: white;
        color: var(--vt-c-black);
    }
    .gallery_dark:hover {
        color: white;
        background-color: var(--vt-c-black);
    }
    h1 {
        font-weight: bold;
    }
    /* RESPONSIVITY */
    @media screen and (max-width: 1280px) {
        .landing_content {
            justify-content: flex-start;
            flex-direction: column;
            width: 100%;
            min-width: 100%;
            height: 90%;
        }
        .content_left {
            justify-content: flex-start;
            width: 100%;
            height: 50%;
            min-height: 50%;
        }

        .content_right {
            width: 100%;
            height: 50%;
            min-height: 50%;
        }
        .left_title {
            widows: 50%;
        }
        .right_title {
            width: 60%;
        }
    }
    @media screen and (max-width: 1024px) {
        
    }
</style>