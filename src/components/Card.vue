<script setup lang="ts">
    import { ref, computed } from 'vue';
    import cards from "../assets/cards/cards.json"

    const cardList: Array<any> = cards

    defineProps<{
        name: string,
        path: string,
        selectedId: number,
        description: string,
    }>()

   
</script>

<template>
    <div class="card" >
        <img :src="'src/assets/artworks/' + path" :alt="name" :class="['picture']" >
    </div>
</template>

<style lang="scss" scoped>
@import "../scss/_mixing.scss";
@import "../scss/variables";

  ::-webkit-scrollbar {
        background-color: var(--vt-c-black);
        width: 5px;
        height: 5px;
        padding: 0px;
        margin: 3px;
        border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--vt-c-white-low);
        border-radius: 5px;
    }
    ::-webkit-scrollbar-track {
        background-color: var(--vt-c-black);
        border-radius: 5px;
        
    }
    .card {
        @include setFlex(flex-start, flex-start, column);
        width: 300px;
        height: calc(400px - 1rem);
        margin: 1rem;
        background-color: white;
        color: var(--vt-c-black);
        position: relative;
        transition: all 0.35s ease-in-out;
    }
    .picture {
        width: 100%;
        max-width: 100%;
        max-height: 100%;
        height: 100%;
        overflow: hidden;
        object-fit: cover;
        object-position: center;
        transition: filter 0.35s ease-in-out, transform 0.35s ease-in-out;
    }

    
    @media screen and (max-width: 1280px) {
        .card {
            width: 250px;
            height: calc(350px - 1rem);
        }
    }
    @media screen and (max-width: 1024px) {
        .card {
            width: 200px;
            height: calc(300px - 1rem);
        }
    }
    @media screen and (max-width: 768px) {
        .card {
            width: 300px;
            height: calc(450px - 1rem);
        }
    }
</style>