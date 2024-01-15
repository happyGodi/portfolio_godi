<script setup lang="ts">
    import { computed, ref, onMounted } from 'vue';
    import Card from './Card.vue';
    import { useDarkModeStore } from '@/stores/darkMode';
    import { useLanguages } from '@/stores/languages';

    const language = useLanguages()
    const darkMode = useDarkModeStore()
    const isDark = computed<boolean>(() => darkMode.isDark)
    const cardList = computed<any>(() => language.defaultCardList.cards)
    const selectedLang = computed<any>(() => language.defaultLang)

</script>

<template>
    <div :class="['gallery', {gallery_dark : isDark}]">
        <h1 class="title">{{selectedLang.gallery}}</h1>
        <div class="projects">
            <div class="slider" v-for="(c, index) in cardList" :key="index">            
                    <Card
                        :name="c.cardName"
                        :path="c.path"
                        :tools="c.tools"
                        :description="c.description"
                        :selectedId="index"
                    />
            </div>
           
        </div>
    </div>
</template>

<style scoped>
    ::-webkit-scrollbar {
        background-color: var(--vt-c-black);
        width: 10px;
        height: 10px;
        padding: 0px;
        border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--vt-c-grey-soft);
        border-radius: 5px;
    }
    ::-webkit-scrollbar-track {
        background-color: black;
        border-radius: 5px;
        
    }
     .gallery {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        width: 100%;
        min-width: 100%;
        height: 90%;
        padding: 1rem 1.25%;
        position: relative;
    }
     .gallery::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 50%;
        background-color: var(--vt-c-black);
    }
     .gallery_dark::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 50%;
        background-color: var(--vt-c-white-low);
    }
    .title {
        width: fit-content;
        height: fit-content;
        padding: 0.5rem 2rem;
        margin: 0.5rem;
        font-size: 164px;
        font-weight: bold;
        font-family: glympsePeriyotman;
        filter: invert();
        z-index: 1;
        mix-blend-mode: difference;
    }
    .projects {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 5%;
        z-index: 5;
        width: calc((350px *4) + (1rem *8));
        overflow-x: auto;
        height: fit-content;
        padding: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
    .slider{
        display: flex;
        flex-direction: row;
    }

    @media screen and (max-width: 1280px) {
        .projects {
            width: calc((250px *3) + (1rem *6));
        }
        .title {
            font-size: 128px;
        }
    }
    @media screen and (max-width: 1024px) {
        .projects {
            width: calc((200px *3) + (1rem *6));
        }
        .title {
            font-size: 104px;
        }
        /* .gallery::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: 50%;
            width: 100%;
            background-color: var(--vt-c-black);
        }
        .gallery_dark::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: 500%;
            width: 100%;
            background-color: var(--vt-c-white-low);
        } */
    }
    @media screen and (max-width: 768px) {
        .projects {
            width: calc((300px *1) + (1rem *2));
        }
        .title {
            font-size: 80px;
        }
    }

</style>