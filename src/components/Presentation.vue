<script setup lang="ts">
    import { ref, computed, onMounted } from 'vue';
    import { useDarkModeStore } from '@/stores/darkMode';
    import Card from './Card.vue';
    import { RouterLink } from 'vue-router';
    import Footer from './Footer.vue'
    import Techno from './Techno.vue'
    import Navbar from './Navbar.vue';
    import { useLoadingScreen } from '@/stores/loadingScreen';
    import Projects from './Projects.vue';

    const darkModeStore = useDarkModeStore()
    const loader = useLoadingScreen()
    const iconSize = ref(24)
    const buttonIconOnHoverColor = computed<string>(() => darkModeStore.buttonIconOnHoverColor)
    const buttonIconOnHoverColorInverted = computed<string>(() => darkModeStore.buttonIconOnHoverColorInverted)
    const isDark = computed<boolean>(() => darkModeStore.isDark)
    const isLoading = computed<any>(() => loader.isLoading)
    let active = ref(false)
    let currentId = ref(null)

    onMounted(() => {
        resetColor()
        resetColorReversed()
        loader.startLoading()
        setTimeout(() => {
            loader.stopLoading()
        }, 5750);
    })

    function lightColor() {
        darkModeStore.lightColor()
    }
    function resetColor() {
        darkModeStore.resetColor()
    }
    function lightColorReversed() {
        darkModeStore.lightColorReversed()
    }
    function resetColorReversed() {
        darkModeStore.resetColorReversed()
    }
    function hovering(id: any): void {
        active.value = true
        currentId.value = id
    }
    function notHover() {
        active.value = false
    }
</script>

<template>
    <div :class="['landing_page', { landing_page_loading : isLoading}, { landing_page_dark : isDark }]">
        <Navbar/>
        <div class="presentation">
            <div :class="['content_left', { content_left_dark: isDark}]">
                <h1 :class="['left_title', {left_title_dark: isDark}]">{{ $t('presentation.greeting') }}</h1>
                <h1 :class="['left_title', {left_title_dark: isDark}]">{{ $t('presentation.names')}}</h1>
                <p :class="['description', {description_dark: isDark}]">{{ $t('presentation.description')}}</p>
                <RouterLink to="/project" :class="[isDark ? 'project_dark' : 'project']" :onMouseenter="lightColor" :onMouseleave="resetColor">
                    {{ $t('presentation.project') }}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" :width="iconSize" :height="iconSize">
                        <path d="M29.84375 13.09375C29.066406 13.167969 28.402344 13.691406 28.148438 14.429688C27.890625 15.171875 28.089844 15.992188 28.65625 16.53125L35.125 23L10 23C9.9375 22.996094 9.875 22.996094 9.8125 23C8.707031 23.050781 7.855469 23.988281 7.90625 25.09375C7.957031 26.199219 8.894531 27.050781 10 27L35.125 27L28.625 33.46875C27.839844 34.253906 27.839844 35.527344 28.625 36.3125C29.410156 37.097656 30.683594 37.097656 31.46875 36.3125L41.34375 26.40625L42.78125 25L41.34375 23.59375L31.46875 13.6875C31.046875 13.253906 30.449219 13.035156 29.84375 13.09375Z" 
                            :fill="buttonIconOnHoverColor" />
                    </svg>
                </RouterLink>
            </div>
            <div :class="['content_right', { content_right_dark: isDark}]">
                <h1 :class="['right_title', {right_title_dark: isDark}]"> {{ $t('presentation.next') }}</h1>
                <h1 :class="['right_title', {right_title_dark: isDark}]"> {{ $t('presentation.artistNames') }}</h1>
                <p :class="['description', {description_dark: isDark}]">{{ $t('presentation.artDescription')}}</p>
                <a href="#gallery" :class="[isDark ? 'gallery_dark' : 'gallery']" :onMouseenter="lightColorReversed" :onMouseleave="resetColorReversed">
                    {{ $t('presentation.gallery') }}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" :width="iconSize" :height="iconSize">
                        <path d="M29.84375 13.09375C29.066406 13.167969 28.402344 13.691406 28.148438 14.429688C27.890625 15.171875 28.089844 15.992188 28.65625 16.53125L35.125 23L10 23C9.9375 22.996094 9.875 22.996094 9.8125 23C8.707031 23.050781 7.855469 23.988281 7.90625 25.09375C7.957031 26.199219 8.894531 27.050781 10 27L35.125 27L28.625 33.46875C27.839844 34.253906 27.839844 35.527344 28.625 36.3125C29.410156 37.097656 30.683594 37.097656 31.46875 36.3125L41.34375 26.40625L42.78125 25L41.34375 23.59375L31.46875 13.6875C31.046875 13.253906 30.449219 13.035156 29.84375 13.09375Z" 
                            :fill="buttonIconOnHoverColorInverted" />
                    </svg>
                </a>
            </div>
        </div>
        <div id="gallery" :class="['showroom', { showroom_dark: isDark}]">
            <h1 class="showroom_title"> {{ $t('presentation.gallery') }} </h1>
            <div class="cards">
                <div class="slider" v-for="(c,i) in $tm('cards')" :key="i" ref="cardRef">
                    <Card
                        @mouseenter="hovering(i)" @mouseleave="notHover()" 
                        :class="['card', { shrink : (active && (currentId != i))}, { grow : (active && (currentId == i))}]"
                        :name="$t(`cards.${i}.cardName`)"
                        :path="$t(`cards.${i}.path`)"
                        :description="$t(`cards.${i}.description`)"
                        :selectedId="i"
                    />
                    <h4>{{ $t(`cards.${i}.cardName`)}}</h4> <!-- yes, this is mad -->
                </div>
            </div>
        </div>
        <Techno/>
        <Projects/>
        <Footer/>
    </div>   
</template>

<style lang="scss" scoped>
@import "../scss/_mixing.scss";
@import "../scss/variables";


::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-thumb {
  background-color: transparent;
  border-radius: 10px;
}
::-webkit-scrollbar-track {
  background-color: transparent;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:horizontal {
  background-color: $lite-dark;
  border-radius: 10px;
}
::-webkit-scrollbar-track:horizontal {
  background-color: $grey;
  border-radius: 10px;
}

    .landing_page_loading {
        overflow: hidden;
    }

    .landing_page {
        /*justify-content*, align-items
            default: row, justify-content => horizontal axis
            if flex-direction goes to column, justify-content => vertical axis, axis is switched
        */
        @include setFlex(flex-start, center, column);
        width: 100%;
        height: 100%;
        padding: 1rem 1.25%;
        margin: 0 ;
        position: relative;
        .presentation {
            @include setFlex(flex-start, center);
            position: relative;
            width: 100%;
            height: 100%;
            min-height: calc(100vh - 1rem);

            .content_left {
                @include setFlex(center, flex-start, column);
                width: 50%;
                height: 100vh;
                min-height: 750px;
                padding: 2rem;
                transition: background-color 0.2s linear;

                .left_title {
                    font-size: 38px;
                    width: 60%;
                }
                .left_title_dark {
                    color: $white;
                }
                .description {
                    width: 60%;
                    font-size: 18px;
                    margin: 12px 0 ;
                }
                .description_dark {
                    color: $white;
                }
                .project {
                    @include setFlex(flex-start, center);
                    border: none;
                    outline: none;
                    width: fit-content;
                    height: fit-content;
                    border: 1px solid $dark;
                    background-color: $dark;
                    color: $white;
                    padding: 0.5rem 1rem;
                    transition: all 0.2s linear;
                    transition-property: background-color, color;
                    overflow: hidden;
                }
                .project_dark {
                    @include setFlex(flex-start, center);
                    border: none;
                    outline: none;
                    border: 1px solid $white;
                    background-color: $white;
                    padding: 0.5rem 1rem;
                    color: $dark;
                    transition: all 0.2s linear;
                    transition-property: background-color, color;
                }
                .project:hover {
                    background-color: $white;
                    color: $dark;
                }
                .project_dark:hover {
                    color: $white;
                    background-color: $dark;
                }
            }
            .content_left_dark {
                background-color: $dark;
            }
            .content_right {
                @include setFlex(center, flex-end, column);
                width: 50%;
                height: 100vh;
                padding: 2rem;
                background-color: $dark;
                transition: background-color 0.2s linear;

                .right_title {
                    font-size: 38px;
                    color: $white;
                    width: 60%;
                }
                .right_title_dark {
                    color: $dark;
                }
                h1 {
                    font-weight: bold;
                }

                .description {
                    width: 60%;
                    font-size: 18px;
                    margin: 12px 0 ;
                    color: $white;
                }
                .description_dark {
                    color: $dark;
                }

                .gallery {
                    @include setFlex(flex-start, center);
                    border: none;
                    outline: none;
                    width: fit-content;
                    height: fit-content;
                    border: 1px solid $white;
                    background-color: $white;
                    color: $dark;
                    padding: 0.5rem 1rem;
                    transition: all 0.2s linear;
                    transition-property: background-color, color;
                }
                .gallery_dark {
                    @include setFlex(flex-start, center);
                    border: none;
                    outline: none;
                    border: 1px solid $dark;
                    background-color: $dark;
                    padding: 0.5rem 1rem;
                    color: $white;
                    transition: all 0.2s linear;
                    transition-property: background-color, color;
                }
                .gallery:hover {
                    background-color: $dark;
                    color: $white;
                }
                .gallery_dark:hover {
                    background-color: $white;
                    color: $dark;
                }
            }
            .content_right_dark {
                background-color: $white;
                color: $dark;
            }
        }

        .showroom {
            position: relative;
            @include setFlex(center, center, column);
            width: 100%;
            height: 100vh;
            padding: 1rem 1.25%;

            .showroom_title {
                width: fit-content;
                height: fit-content;
                padding: 0.5rem 2rem;
                margin: 0.5rem;
                font-size: 164px;
                font-weight: bold;
                font-family: glympsePeriyotman;
                filter: invert(100%);
                mix-blend-mode: difference;
                z-index: 1;
            }

            .cards {
                @include setFlex(flex-start, center, row);
                width: calc((300px *4) + (1rem *8));
                height: fit-content;
                overflow-x: auto;
                overflow-y: hidden;
                padding: 1rem;
                .slider{
                    @include setFlex(flex-start, center, column);
                    h4 {
                        width: fit-content;
                        height: fit-content;
                        padding: 3px;
                        font-size: 21px;
                        filter: invert(100%);
                        mix-blend-mode: difference;
                        transition: font-size 0.25s ease-in-out, cursor 0.25s ease-in-out;
                        position: relative;
                        z-index: 1;
                        transition: all 0.25s linear;
                        overflow: hidden;
                    }
                    h4:hover{
                        cursor: pointer;
                    }
                    h4::after {
                        content: "";
                        position: absolute;
                        width: 0;
                        left: 50%;
                        transform: translateX(-50%);
                        bottom: 0;
                        transition-duration: 0.25s;
                        height: 2px;
                        z-index: -1;
                        background-color: $white;
                        filter: invert(100%);
                        mix-blend-mode: difference;
                    }
                    h4:hover::after {
                        width: 100%;
                    }

                    .card {
                        transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
                        border: 12px solid $grey;
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
        }
        .showroom::before {
            content: "";
            position: absolute;
            top: 0%;
            left: 0%;
            width: 50%;
            height: 100%;
            background-color: $dark;
            z-index: -1;
        }
        .showroom_dark::before {
            content: "";
            position: absolute;
            top: 0%;
            left: 0%;
            width: 50%;
            height: 100%;
            background-color: $white;
            z-index: 0;
        }
    }
    .landing_page_dark {
        background-color: $dark;
    }
    
    @media screen and (max-width: 1280px) {
        .landing_page {
            .showroom {
                .cards {
                    width: calc((200px *4) + (1rem *8));
                }
            }
        }
    }
    @media screen and (max-width: 1024px) {
        .landing_page {
            .presentation {
                .content_left {
                    .left_title {
                        font-size: 32px;
                        width: 60%;
                    }
                    .description {
                        font-size: 14px;
                        width: 60%;
                    }
                    .project {
                        font-size: 12px;
                        padding: 0.25rem 0.5rem;
                    }
                }
                .content_right {
                    .right_title {
                        font-size: 32px;
                        width: 60%;
                    }
                    .description {
                        font-size: 14px;
                        width: 60%;
                    }
                    .gallery {
                        @include setFlex(flex-end, center);
                        font-size: 12px;
                        padding: 0.25rem 0.5rem;
                    }
                }
            }
            .showroom {
                min-height: 100vh;
                .showroom_title {
                    font-size: 96px;
                }
                .cards {
                    width: calc((200px *3) + (1rem *6));
                }
            }
        }
    }
    @media screen and (max-width: 768px) {
        .landing_page {
            .presentation {
                @include setFlex(center, flex-start, column);
                min-height: 100vh;
                margin-top: 0;
                .content_left {
                    @include setFlex(flex-end, flex-start, column); 
                    width: 100%;
                    height: calc(95vh - 2rem);
                   
                    .left_title {
                        font-size: 24px;
                        width: 80%;
                    }
                    .description {
                        font-size: 12px;
                        width: 100%;
                    }
                    .project {
                        font-size: 12px;
                        padding: 0.25rem 0.5rem;
                    }
                }
                .content_right {
                    @include setFlex(center, flex-start, column);
                    width: 100%;
                    height: 95vh;
                    .right_title {
                        font-size: 24px;
                        width: 80%;
                    }
                    .description {
                        font-size: 12px;
                        width: 100%;
                    }
                    .gallery {
                        @include setFlex(flex-end, center);
                        font-size: 12px;
                        padding: 0.25rem 0.5rem;
                    }
                }
            }
            .showroom {
                min-height: 100vh;
                .showroom_title {
                    font-size: 72px;
                }
                .cards {
                    width: calc((300px *1) + (1rem *2));
                }
            }
        }
    }
</style>