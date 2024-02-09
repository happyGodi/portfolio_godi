<script setup lang="ts">
    import { ref, computed } from 'vue';
    import { RouterLink } from 'vue-router';
    import { useDarkModeStore } from '../stores/darkMode';
    import { useLanguages } from '@/stores/languages';
    import Dropdown from './Dropdown.vue';

    const darkModeStore = useDarkModeStore()  
    const language = useLanguages()
    const isDark = computed<boolean>(() => darkModeStore.isDark)
    const iconSize = ref(24)
    const iconColor = computed<string>(() => darkModeStore.iconColor)
    const sunIconColor = computed<string>(() => darkModeStore.sunIconColor)
    const moonIconColor = computed<string>(() => darkModeStore.moonIconColor)
    let isExpanded = ref<boolean>(false)
   
    function switchDark (): void {
        darkModeStore.switchDark()
    }
    function switchLight (): void {
        darkModeStore.switchLight()
    }
    function expand(): void {
        isExpanded.value = !isExpanded.value
    }
</script>

<template>
    <div :class="['navbar', { navbarDark: isDark}, { navbar_expanded : isExpanded}]">
        <ul :class="['nav-items links', { links_expanded : isExpanded}]">
            <li :class="['nav-links facebook', { facebook_dark : isDark}]">
                <a href="https://web.facebook.com/godigodiii" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" :width="iconSize" :height="iconSize">
                        <path d="M21.125 0L4.875 0C2.183594 0 0 2.183594 0 4.875L0 21.125C0 23.816406 2.183594 26 4.875 26L21.125 26C23.816406 26 26 23.816406 26 21.125L26 4.875C26 2.183594 23.816406 0 21.125 0 Z M 20.464844 14.003906L18.03125 14.003906L18.03125 23.007813L13.96875 23.007813L13.96875 14.003906L12.390625 14.003906L12.390625 10.96875L13.96875 10.96875L13.96875 9.035156C13.96875 6.503906 15.019531 5 18.007813 5L21.03125 5L21.03125 8.023438L19.273438 8.023438C18.113281 8.023438 18.035156 8.453125 18.035156 9.265625L18.03125 10.96875L20.796875 10.96875Z" 
                        :fill="iconColor" />
                    </svg>
                </a>
            </li>
            <li :class="['nav-links instagram', { instagram_dark : isDark}]">
                <a href="https://www.instagram.com/happy_godiii/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" :width="iconSize" :height="iconSize">
                        <path d="M7.546875 0C3.390625 0 0 3.390625 0 7.546875L0 18.453125C0 22.609375 3.390625 26 7.546875 26L18.453125 26C22.609375 26 26 22.609375 26 18.453125L26 7.546875C26 3.390625 22.609375 0 18.453125 0 Z M 7.546875 2L18.453125 2C21.527344 2 24 4.46875 24 7.546875L24 18.453125C24 21.527344 21.53125 24 18.453125 24L7.546875 24C4.472656 24 2 21.53125 2 18.453125L2 7.546875C2 4.472656 4.46875 2 7.546875 2 Z M 20.5 4C19.671875 4 19 4.671875 19 5.5C19 6.328125 19.671875 7 20.5 7C21.328125 7 22 6.328125 22 5.5C22 4.671875 21.328125 4 20.5 4 Z M 13 6C9.144531 6 6 9.144531 6 13C6 16.855469 9.144531 20 13 20C16.855469 20 20 16.855469 20 13C20 9.144531 16.855469 6 13 6 Z M 13 8C15.773438 8 18 10.226563 18 13C18 15.773438 15.773438 18 13 18C10.226563 18 8 15.773438 8 13C8 10.226563 10.226563 8 13 8Z" 
                        :fill="iconColor" />
                    </svg>
                </a>
            </li>
            <li :class="['nav-links github', { github_dark : isDark}]">
                <a href="https://github.com/happyGodi" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" :width="iconSize" :height="iconSize">
                        <path fill-rule="evenodd" d="M16 4C9.371094 4 4 9.371094 4 16C4 21.300781 7.4375 25.800781 12.207031 27.386719C12.808594 27.496094 13.027344 27.128906 13.027344 26.808594C13.027344 26.523438 13.015625 25.769531 13.011719 24.769531C9.671875 25.492188 8.96875 23.160156 8.96875 23.160156C8.421875 21.773438 7.636719 21.402344 7.636719 21.402344C6.546875 20.660156 7.71875 20.675781 7.71875 20.675781C8.921875 20.761719 9.554688 21.910156 9.554688 21.910156C10.625 23.746094 12.363281 23.214844 13.046875 22.910156C13.15625 22.132813 13.46875 21.605469 13.808594 21.304688C11.144531 21.003906 8.34375 19.972656 8.34375 15.375C8.34375 14.0625 8.8125 12.992188 9.578125 12.152344C9.457031 11.851563 9.042969 10.628906 9.695313 8.976563C9.695313 8.976563 10.703125 8.65625 12.996094 10.207031C13.953125 9.941406 14.980469 9.808594 16 9.804688C17.019531 9.808594 18.046875 9.941406 19.003906 10.207031C21.296875 8.65625 22.300781 8.976563 22.300781 8.976563C22.957031 10.628906 22.546875 11.851563 22.421875 12.152344C23.191406 12.992188 23.652344 14.0625 23.652344 15.375C23.652344 19.984375 20.847656 20.996094 18.175781 21.296875C18.605469 21.664063 18.988281 22.398438 18.988281 23.515625C18.988281 25.121094 18.976563 26.414063 18.976563 26.808594C18.976563 27.128906 19.191406 27.503906 19.800781 27.386719C24.566406 25.796875 28 21.300781 28 16C28 9.371094 22.628906 4 16 4Z" 
                        :fill="iconColor" />
                    </svg>
                </a>
            </li>
        </ul>
        <RouterLink to="/" :class="['home', { homeDark: isDark}, { home_expanded : isExpanded}]"> <div class="home_text">{{ $t('nav.home')}}</div></RouterLink>
        <ul :class="['nav-items settings', { settings_expanded : isExpanded}]">
            <li :onclick="switchLight" :class="['nav-links light_mode', { light_mode_dark : isDark}]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" :width="iconSize" :height="iconSize">
                    <path d="M15 3L15 8L17 8L17 3 Z M 7.5 6.09375L6.09375 7.5L9.625 11.0625L11.0625 9.625 Z M 24.5 6.09375L20.9375 9.625L22.375 11.0625L25.90625 7.5 Z M 16 9C12.144531 9 9 12.144531 9 16C9 19.855469 12.144531 23 16 23C19.855469 23 23 19.855469 23 16C23 12.144531 19.855469 9 16 9 Z M 16 11C18.773438 11 21 13.226563 21 16C21 18.773438 18.773438 21 16 21C13.226563 21 11 18.773438 11 16C11 13.226563 13.226563 11 16 11 Z M 3 15L3 17L8 17L8 15 Z M 24 15L24 17L29 17L29 15 Z M 9.625 20.9375L6.09375 24.5L7.5 25.90625L11.0625 22.375 Z M 22.375 20.9375L20.9375 22.375L24.5 25.90625L25.90625 24.5 Z M 15 24L15 29L17 29L17 24Z" 
                    :fill="sunIconColor" />
                </svg>
            </li>
            <li :onclick="switchDark" :class="['nav-links dark_mode', { dark_mode_dark : isDark}]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" :width="iconSize" :height="iconSize">
                    <path d="M22,21c-6.627,0-12-5.373-12-12c0-1.95,0.475-3.785,1.3-5.412C6.485,5.148,3,9.665,3,15c0,6.627,5.373,12,12,12 c4.678,0,8.72-2.682,10.7-6.588C24.534,20.79,23.292,21,22,21z" 
                    :fill="moonIconColor" />
                </svg>
            </li>
            <li :class="['nav-items lang', { lang_dark : isDark}]">
                <Dropdown/> 
            </li>
        </ul>
        <button @click="expand()" :class="['expand_button', { expand_button_dark : isDark}, { expand_button_expanded : isExpanded}]">
            <div class="burger">
                <span :class="['line', { line_extended : isExpanded}, { line_dark : isDark}]">&nbsp;</span>
                <span :class="['line', { line_extended : isExpanded}, { line_dark : isDark}]">&nbsp;</span>
                <span :class="['line', { line_extended : isExpanded}, { line_dark : isDark}]">&nbsp;</span>
            </div>
        </button>
    </div>
</template>

<style lang="scss" scoped>
@import "../scss/mixing";
@import "../scss/variables";

    .navbar {
        position: absolute;
        top: 0;
        left: 0;
        @include setFlex(space-between, center);
        width: 97.5%;
        height: 10vh;
        border-bottom: 2px solid $dark;
        margin: 0 1.25%;
        margin-bottom: 1rem;
        z-index: 10;
        background-color: $white;

        .home {
            @include setFlex(center, center);
            width: fit-content;
            height: 130%;
            padding: 1rem 2rem;
            background-color: $dark;
            outline: 5px solid $white;
            color: $white;
        }
        .home:hover {
            cursor: pointer;
        }
        .homeDark {
            outline: 5px solid $dark;
            background-color: $white-low;
            color: $dark;
        }
        ul {
            @include setFlex(center, center);
            flex-direction: row;
            height: 100%;

            li {
                padding: 1rem;
                list-style-type: none;
            }
        }
        .expand_button {
            display: none;
        }
    }
    .navbarDark {
        border-bottom: 2px solid $white;
        background-color: $dark;
    }
    
    @media screen and (max-width: 768px) {
        .navbar {
            @include setFlex(flex-start, flex-start, column);
            position: relative;
            width: 97.5%;
            height: 5vh;
            border-bottom: 2px solid $dark;
            background-color: $white;
            transition: height 0.3s ease-in-out, min-height 0.3s ease-in-out;

            .home {
                @include setFlex(center, center);
                position: absolute;
                top: 0;
                left: 0;
                width: fit-content;
                height: 5vh;
                padding: 0.5rem 1rem;
                transition: none;
            }
            .links {
                @include setFlex(flex-start, flex-start, column);
                position: absolute;
                top: 50%;
                left: 0;
                height: 30%;
                min-width: 100%;
                padding: 1rem 2rem;
                opacity: 0;
                pointer-events: none;
                transition: opacity 0.3s ease-in-out, pointer-events 0.3s ease-in-out;

                .facebook::after {
                    content: "Godi Godi";
                    display: inline-block;
                    height: 100%;
                    width: fit-content;
                    font-size: 18px;
                    margin-left: 12px;
                    margin-top: auto;
                }
                .instagram::after {
                    content: "godi_godiii";
                    display: inline-block;
                    height: 100%;
                    width: fit-content;
                    font-size: 18px;
                    margin-left: 12px;
                    margin-top: auto;
                }
                .github::after {
                    content: "happyGodi";
                    display: inline-block;
                    height: 100%;
                    width: fit-content;
                    font-size: 18px;
                    margin-left: 12px;
                    margin-top: auto;
                }


                .facebook_dark::after {
                    content: "Godi Godi";
                    display: inline-block;
                    height: 100%;
                    width: fit-content;
                    font-size: 18px;
                    margin-left: 12px;
                    margin-top: auto;
                    color: $white;
                }
                .instagram_dark::after {
                    content: "godi_godiii";
                    display: inline-block;
                    height: 100%;
                    width: fit-content;
                    font-size: 18px;
                    margin-left: 12px;
                    margin-top: auto;
                    color: $white;
                }
                .github_dark::after {
                    content: "happyGodi";
                    display: inline-block;
                    height: 100%;
                    width: fit-content;
                    font-size: 18px;
                    margin-left: 12px;
                    margin-top: auto;
                    color: $white;
                }
            }

            .links_expanded {
                pointer-events: all;
                opacity: 1;
            }
            .settings {
                @include setFlex(flex-start, flex-start, column);
                position: absolute;
                top: 20%;
                left: 0;
                min-width: 100%;
                height: fit-content;
                padding: 1rem 2rem;
                opacity: 0;
                pointer-events: none;
                transition: opacity 0.3s ease-in-out, pointer-events 0.3s ease-in-out;

                .light_mode::after {
                    content: "Light mode";
                    display: inline-block;
                    height: 100%;
                    width: fit-content;
                    font-size: 18px;
                    margin-left: 12px;
                    margin-top: auto;
                }
                .dark_mode::after {
                    content: "Dark mode";
                    display: inline-block;
                    height: 100%;
                    width: fit-content;
                    font-size: 18px;
                    margin-left: 12px;
                    margin-top: auto;
                }

                .light_mode_dark::after {
                    content: "Light mode";
                    display: inline-block;
                    height: 100%;
                    width: fit-content;
                    font-size: 18px;
                    margin-left: 12px;
                    margin-top: auto;
                    color: $white;
                }
                .dark_mode_dark::after {
                    content: "Dark mode";
                    display: inline-block;
                    height: 100%;
                    width: fit-content;
                    font-size: 18px;
                    margin-left: 12px;
                    margin-top: auto;
                    color: $white;
                }

            }

            
            .settings_expanded {
                pointer-events: all;
                opacity: 1;
            }

            .expand_button {
                @include setFlex(center, center);
                position: absolute;
                top: 5px;
                right: 0;
                width: 35px;
                height: 35px;
                background-color: transparent;
                border: none;
                
                .burger {
                    @include setFlex(center, center, column);
                    width: 35px;
                    height: auto;
                    position: relative;
                    .line {
                        width: 100%;
                        height: 3px;
                        border-radius: 6px;
                        margin: 3px;
                        background-color: $dark;
                        transition: position 0.25s ease-in-out, transform 0.25s ease-in-out;
                    }
                    .line_dark {
                        background-color: $white;
                    }
                    .line_extended {
                        position: absolute;
                    }
                    .line_extended:nth-child(1) {                  
                        transform: rotate(-45deg);
                    }
                    .line_extended:nth-child(2) {
                        opacity: 0;
                    }
                    .line_extended:nth-child(3) {
                        transform: rotate(45deg);
                    }
                }
            }

            /*dark classes */
            .expand_button_dark {
                background-color: $dark;
            }
        }
        .navbarDark {
            border-bottom: 2px solid $white-low;
            background-color: $dark;
        }
        /*Expsansion */
        .navbar_expanded {
            height: 100vh;
        }
    }

</style>