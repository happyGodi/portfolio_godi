<script setup lang="ts">
    import { ref, computed } from 'vue';
    import cards from "../assets/cards/cards.json"

    let current = ref(false)
    const cardList: Array<any> = cards

    defineProps<{
        name: string,
        path: string,
        tools: string,
        selectedId: number,
        description: string
    }>()

    function hovering(id: Number | undefined): void {
        for (let i = 0; i <= cardList.length + 1; i++) {
            if (i == id) current.value = true
        }  
    }
    function notHover() {
        current.value = false
    }
</script>

<template>
    <div class="card" @mouseenter="hovering(selectedId)" @mouseleave="notHover" >
        <img :src="'src/assets/projects/' + path" :alt="name" :class="[ {picture_scale : !current}, 'picture']" >
        <Transition name="appear">
            <div v-if="current" class="project">
                <h2 class="project_name">{{ name }}</h2>
                <button class="project_view">View</button>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
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
        width: 300px;
        height: calc(450px - 1rem);
        margin: 1rem;
        background-color: white;
        color: var(--vt-c-black);
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        position: relative;
        transition: all 0.35s ease-in-out;
        border: 12px solid rgb(189, 189, 189);
    }
    .card:hover {
        transform: scale(1.05);
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

    .picture_scale {
        filter: grayscale();
    }
    .project {
        position: absolute;
        bottom: 0%;
        left: 50%;
        transform: translateX(-50%) ;
        display: flex;
        flex-direction: row;                                                                              
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 20%;
        max-height: 60%;
        z-index: 1;
        padding: 5px 15px;
        margin: 0;
        color: white;
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(20, 20, 20, 0.8), rgba(20, 20, 20, 0.7));
        
    }
    .project_name {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        text-align: justify;
        width: 30%;
        height: calc(100% - 15px);
        margin: 15px initial;
        font-size: 16px;
        border-bottom: 2px solid white;
    }
    .project_view {
        width: fit-content;
        height: fit-content;
        padding: 10px 16px;
        background-color: var(--vt-c-black);
        color: white;
        border: 2px solid var(--vt-c-black);
        border-radius: 5px;
        transition: transform 0.25s ease-in-out, border 0.25s ease-in-out;
    }
    .project_view:hover {
        transform: scale(1.1);
        cursor: pointer;
        border: 2px solid white;
    }
    .appear-enter-active, .appear-leave-active {
        transition: opacity 0.35s ease-in-out;
        transform-origin: center;
    }
    .appear-enter-from, .appear-leave-to {
        opacity: 0;
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