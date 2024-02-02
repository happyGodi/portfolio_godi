<script setup lang="ts">
    import { computed } from 'vue';
    import { useLoadingScreen } from '../stores/loadingScreen';
    import { useLanguages } from '@/stores/languages';

    const loader = useLoadingScreen()
    const language = useLanguages()
    const isLoaded = computed<boolean>(() => loader.isLoading )
    const selectedLang = computed<any>(() => language.defaultLang)

</script>

<template>
    <Transition name="curtain">
        <div v-if="isLoaded" class="loadingScreen">
            <div class="loadingContent">
                <h2 :class="[ { first: isLoaded},'hello']">{{ selectedLang.hello }}</h2>
                <h2 :class="[ { second: isLoaded},'hello']">{{ selectedLang.welcome }}</h2>
            </div>
        </div>
    </Transition>
</template>

<style lang="scss" scoped>
@import "../scss/mixing";
@import "../scss/variables";

    .loadingScreen {
        @include setFlex(center, flex-start);
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 20;
        padding: 0rem;
        transition: opacity 0.5s linear, pointer-events 0.5s linear;
        
        .loadingContent {
            @include setFlex(center, center);
            width: 100%;
            height: 100%;
            background-color:  $dark;
            color: $white;

            .hello {
                font-size: 96px;
                font-weight: bolder;
                height: fit-content;
                width: fit-content;
                padding: 10px 16px;
                transition: all 1s linear;
                position: relative;
                opacity: 0;
            }

            .first { 
                animation: first 3s ease-in-out;
            }
            .second { 
                animation: second 3s 2s ease-in-out;
            }
        }
    }

    .curtain-enter-active, .curtain-leave-active {
        transition: opacity 0.8s ease-out;
    }
    .curtain-enter-from, .curtain-leave-to {
        opacity: 0;
    }

    @keyframes first {
        0% {  
            filter: blur(7px);
        }
        50% {
            opacity: 1;
            filter: blur(0px);
        }
        93.5% { filter: blur(7px);}
        100% { opacity: 0; }
    }

    @keyframes second {
        0% { 
            filter: blur(7px);
        }
        50% {
            opacity: 1;
            filter: blur(0px);
        }
        93.5% { filter: blur(7px);}
        100% { opacity: 0; }
    }

    @media screen and (max-width: 1280px) {
        .loadingScreen {
            .loadingContent {
                .hello {
                    font-size: 48px;
                }
            }
        }
    }
    @media screen and (max-width: 1024px) {
        .loadingScreen {
            .loadingContent {
                @include setFlex(center, center, column);
                .hello {
                    font-size: 36px;
                }
            }
        }
    }
</style>