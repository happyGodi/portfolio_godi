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
            filter: invert(100%);
            mix-blend-mode: difference;
        }
        h1::after {
            content: "";
            width: 50%;
            height: 3px;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            background-color: $dark;
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
                    filter: invert(100%);
                    mix-blend-mode: difference;

                }
                .desc {
                    width: 100%;
                    height: 50%;
                    padding: 12px;
                    font-size: 18px;
                    text-align: justify;
                    filter: invert(100%);
                    mix-blend-mode: difference;
                }
            }
            .project_item:hover{
                cursor: pointer;
            }

            .shrink {
                transform: scale(0.9);
                filter: grayscale(100%) blur(3px);
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
                width: 100%;
                padding: 6px;

                .project_item {
                    height: 300px;
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