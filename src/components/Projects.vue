<script setup lang="ts">
    import projects from "../i18n/locales/en.json"
    import { ref, computed } from "vue";
    import { useDarkModeStore } from "@/stores/darkMode";

    const darkMode = useDarkModeStore()
    const isDark = computed<boolean>(() => darkMode.isDark)
    const project: Array<any> = projects.projectList
    let active = ref(false)
    let currentId = ref(null)

    function hovering(id: any): void {
        active.value = true
        currentId.value = id
    }
    function notHover() {
        active.value = false
    }
</script>

<template>
    <div :class="['project', { project_dark : isDark}]">
        <h1>{{ $t('project.title') }}</h1>
        <ul class="project_list">
            <li v-for="(p, index) in $tm('projectList')" :key="index" @mouseenter="hovering(index)" @mouseleave="notHover()"  :class="['project_item', { shrink : (active && (currentId != index))}, { grow : (active && (currentId == index))}]"  >
               <img :src="'src/assets/projects/Assets/' + $t(`projectList.${index}.path`)" :alt="$t(`projectList.${index}.name`)" class="picture" >
                <h4 class="title">{{ $t(`projectList.${index}.name`) }}</h4>
                <p class="desc">
                    {{ $t(`projectList.${index}.desc`) }}
                </p>
                <a v-if="$t(`projectList.${index}.privacy`) === 'false'" :href="$t(`projectList.${index}.link`)" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24">
                        <path fill-rule="evenodd" d="M16 4C9.371094 4 4 9.371094 4 16C4 21.300781 7.4375 25.800781 12.207031 27.386719C12.808594 27.496094 13.027344 27.128906 13.027344 26.808594C13.027344 26.523438 13.015625 25.769531 13.011719 24.769531C9.671875 25.492188 8.96875 23.160156 8.96875 23.160156C8.421875 21.773438 7.636719 21.402344 7.636719 21.402344C6.546875 20.660156 7.71875 20.675781 7.71875 20.675781C8.921875 20.761719 9.554688 21.910156 9.554688 21.910156C10.625 23.746094 12.363281 23.214844 13.046875 22.910156C13.15625 22.132813 13.46875 21.605469 13.808594 21.304688C11.144531 21.003906 8.34375 19.972656 8.34375 15.375C8.34375 14.0625 8.8125 12.992188 9.578125 12.152344C9.457031 11.851563 9.042969 10.628906 9.695313 8.976563C9.695313 8.976563 10.703125 8.65625 12.996094 10.207031C13.953125 9.941406 14.980469 9.808594 16 9.804688C17.019531 9.808594 18.046875 9.941406 19.003906 10.207031C21.296875 8.65625 22.300781 8.976563 22.300781 8.976563C22.957031 10.628906 22.546875 11.851563 22.421875 12.152344C23.191406 12.992188 23.652344 14.0625 23.652344 15.375C23.652344 19.984375 20.847656 20.996094 18.175781 21.296875C18.605469 21.664063 18.988281 22.398438 18.988281 23.515625C18.988281 25.121094 18.976563 26.414063 18.976563 26.808594C18.976563 27.128906 19.191406 27.503906 19.800781 27.386719C24.566406 25.796875 28 21.300781 28 16C28 9.371094 22.628906 4 16 4Z" 
                        fill="#181818" />
                    </svg>
                    Github
                </a>
                <a v-else class="disable">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24">
                        <path fill-rule="evenodd" d="M16 4C9.371094 4 4 9.371094 4 16C4 21.300781 7.4375 25.800781 12.207031 27.386719C12.808594 27.496094 13.027344 27.128906 13.027344 26.808594C13.027344 26.523438 13.015625 25.769531 13.011719 24.769531C9.671875 25.492188 8.96875 23.160156 8.96875 23.160156C8.421875 21.773438 7.636719 21.402344 7.636719 21.402344C6.546875 20.660156 7.71875 20.675781 7.71875 20.675781C8.921875 20.761719 9.554688 21.910156 9.554688 21.910156C10.625 23.746094 12.363281 23.214844 13.046875 22.910156C13.15625 22.132813 13.46875 21.605469 13.808594 21.304688C11.144531 21.003906 8.34375 19.972656 8.34375 15.375C8.34375 14.0625 8.8125 12.992188 9.578125 12.152344C9.457031 11.851563 9.042969 10.628906 9.695313 8.976563C9.695313 8.976563 10.703125 8.65625 12.996094 10.207031C13.953125 9.941406 14.980469 9.808594 16 9.804688C17.019531 9.808594 18.046875 9.941406 19.003906 10.207031C21.296875 8.65625 22.300781 8.976563 22.300781 8.976563C22.957031 10.628906 22.546875 11.851563 22.421875 12.152344C23.191406 12.992188 23.652344 14.0625 23.652344 15.375C23.652344 19.984375 20.847656 20.996094 18.175781 21.296875C18.605469 21.664063 18.988281 22.398438 18.988281 23.515625C18.988281 25.121094 18.976563 26.414063 18.976563 26.808594C18.976563 27.128906 19.191406 27.503906 19.800781 27.386719C24.566406 25.796875 28 21.300781 28 16C28 9.371094 22.628906 4 16 4Z" 
                        fill="#181818" />
                    </svg>
                    {{ $t('project.privacy') }}
                </a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@import "../scss/mixing";
@import "../scss/variables";

    .project {
        @include setFlex(center, center, column);
        position: relative;
        width: 100%;
        min-height: 100vh;
        height: fit-content;
        padding: 1rem 1.25%;
        margin-bottom: 1rem;
        color: $dark;

        h1 {
            font-size: 72px;
            position: relative;
            width: fit-content;
            height: fit-content;
            padding: 6px;
            color: $dark;
            filter: invert(100%);
            -webkit-filter: invert(100%);
            mix-blend-mode: difference;

            &::after {
                content: "";
                width: 50%;
                height: 3px;
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                background-color: $dark;
            }
        }

        .project_list {
            @include setFlex(center, center, row);
            @include flexing();
            width: 70%;
            height: fit-content;
            padding: 1rem;

            .project_item {
                @include setFlex(flex-start, flex-start, column);
                list-style-type: none;
                width: 300px;
                height: 400px;
                box-shadow: 0 3px 5px $grey;
                overflow: hidden;
                margin: 1rem;
                position: relative;
                transition: cursor 0.25s ease-in-out, transform 0.25s ease-in-out, filter 0.25s ease-in-out;
                background-color: $dark;

                &:hover{
                    cursor: pointer;
                }
                .picture {
                    width: 100%;
                    height: 40%;
                    object-fit: cover;
                    object-position: center;
                }
                .title {
                    width: 100%;
                    height: 10%;
                    padding: 12px;
                    text-align: left;
                    font-size: 24px;
                    font-weight: bold;
                    color: $white;

                }
                .desc {
                    width: 100%;
                    height: 35%;
                    padding: 12px;
                    font-size: 18px;
                    text-align: justify;
                    color: $white;
                }
                a {
                    @include setFlex(space-evenly, center);
                    width: fit-content;
                    height: fit-content;
                    padding: 0.25rem 0.75rem;
                    margin: 12px;
                    background-color: $white;
                    color: $dark;
                    font-weight: bold;
                }
                .disable {
                    background-color: $hard-grey;
                }
            }

            .shrink {
                transform: scale(0.9);
                filter: grayscale(100%) blur(3px);
                -webkit-filter: grayscale(100%) blur(3px);
            }
            .grow {
                transform: scale(1.1);
            }
        }
        
    }
    .project::after {
        content: "";
        position: absolute;
        width: 50%;
        height: 100%;
        top: 0%;
        right: 0%;
        background-color: $dark;
        z-index: -1;
    }
    .project_dark::before {
        content: "";
        position: absolute;
        width: 50%;
        height: 100%;
        top: 0%;
        right: 0%;
        background-color: $white;
        z-index: 0;
    }

    @media screen and (max-width: 768px) {

        .project {
            h1 {
                font-size: 24px;
                font-weight: bold;
            }
            .project_list {
                @include setFlex(center, flex-start, row);
                width: 100%;
                padding: 6px;
                max-height: calc((400px * 1) + (1rem * 2));
                overflow-x: hidden;
                overflow-y: auto;

                .project_item {
                    height: 400px;
                    .title {
                        font-size: 18px;
                    }
                    .desc {
                        font-size: 14px;
                    }
                }
            }
        }
    }
</style>