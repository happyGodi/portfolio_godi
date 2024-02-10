<script setup lang="ts">
    import { ref, computed, onMounted } from 'vue';
    import { useDarkModeStore } from '@/stores/darkMode';

    const darkModeStore = useDarkModeStore()
    const iconSize = ref(40)
    const isDark = computed<boolean>(() => darkModeStore.isDark )
    const buttonIconOnHoverColor = computed<string>(() => darkModeStore.buttonIconOnHoverColor)

    onMounted(() => {
        resetColor()
        resetColorReversed()
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
</script>

<template>
    <div :class="['footer', { footer_dark : isDark}]">
        <a href="https://web.facebook.com/godigodiii" target="_blank" class="infos">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" :width="iconSize" :height="iconSize">
                <path d="M21.125 0L4.875 0C2.183594 0 0 2.183594 0 4.875L0 21.125C0 23.816406 2.183594 26 4.875 26L21.125 26C23.816406 26 26 23.816406 26 21.125L26 4.875C26 2.183594 23.816406 0 21.125 0 Z M 20.464844 14.003906L18.03125 14.003906L18.03125 23.007813L13.96875 23.007813L13.96875 14.003906L12.390625 14.003906L12.390625 10.96875L13.96875 10.96875L13.96875 9.035156C13.96875 6.503906 15.019531 5 18.007813 5L21.03125 5L21.03125 8.023438L19.273438 8.023438C18.113281 8.023438 18.035156 8.453125 18.035156 9.265625L18.03125 10.96875L20.796875 10.96875Z" 
                :fill="buttonIconOnHoverColor" />
            </svg>
            <h4>Godi Godi/ HappyGodi Apple Art</h4>
        </a>
        <a href="https://www.instagram.com/happy_godiii/" target="_blank" class="infos">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" :width="iconSize" :height="iconSize">
                <path d="M7.546875 0C3.390625 0 0 3.390625 0 7.546875L0 18.453125C0 22.609375 3.390625 26 7.546875 26L18.453125 26C22.609375 26 26 22.609375 26 18.453125L26 7.546875C26 3.390625 22.609375 0 18.453125 0 Z M 7.546875 2L18.453125 2C21.527344 2 24 4.46875 24 7.546875L24 18.453125C24 21.527344 21.53125 24 18.453125 24L7.546875 24C4.472656 24 2 21.53125 2 18.453125L2 7.546875C2 4.472656 4.46875 2 7.546875 2 Z M 20.5 4C19.671875 4 19 4.671875 19 5.5C19 6.328125 19.671875 7 20.5 7C21.328125 7 22 6.328125 22 5.5C22 4.671875 21.328125 4 20.5 4 Z M 13 6C9.144531 6 6 9.144531 6 13C6 16.855469 9.144531 20 13 20C16.855469 20 20 16.855469 20 13C20 9.144531 16.855469 6 13 6 Z M 13 8C15.773438 8 18 10.226563 18 13C18 15.773438 15.773438 18 13 18C10.226563 18 8 15.773438 8 13C8 10.226563 10.226563 8 13 8Z" 
                :fill="buttonIconOnHoverColor" />
            </svg>
            <h4>@happy_godiii</h4>
        </a>
        <a href="https://github.com/happyGodi" target="_blank" class="infos">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" :width="iconSize" :height="iconSize">
                <path fill-rule="evenodd" d="M16 4C9.371094 4 4 9.371094 4 16C4 21.300781 7.4375 25.800781 12.207031 27.386719C12.808594 27.496094 13.027344 27.128906 13.027344 26.808594C13.027344 26.523438 13.015625 25.769531 13.011719 24.769531C9.671875 25.492188 8.96875 23.160156 8.96875 23.160156C8.421875 21.773438 7.636719 21.402344 7.636719 21.402344C6.546875 20.660156 7.71875 20.675781 7.71875 20.675781C8.921875 20.761719 9.554688 21.910156 9.554688 21.910156C10.625 23.746094 12.363281 23.214844 13.046875 22.910156C13.15625 22.132813 13.46875 21.605469 13.808594 21.304688C11.144531 21.003906 8.34375 19.972656 8.34375 15.375C8.34375 14.0625 8.8125 12.992188 9.578125 12.152344C9.457031 11.851563 9.042969 10.628906 9.695313 8.976563C9.695313 8.976563 10.703125 8.65625 12.996094 10.207031C13.953125 9.941406 14.980469 9.808594 16 9.804688C17.019531 9.808594 18.046875 9.941406 19.003906 10.207031C21.296875 8.65625 22.300781 8.976563 22.300781 8.976563C22.957031 10.628906 22.546875 11.851563 22.421875 12.152344C23.191406 12.992188 23.652344 14.0625 23.652344 15.375C23.652344 19.984375 20.847656 20.996094 18.175781 21.296875C18.605469 21.664063 18.988281 22.398438 18.988281 23.515625C18.988281 25.121094 18.976563 26.414063 18.976563 26.808594C18.976563 27.128906 19.191406 27.503906 19.800781 27.386719C24.566406 25.796875 28 21.300781 28 16C28 9.371094 22.628906 4 16 4Z" 
                :fill="buttonIconOnHoverColor" />
            </svg>
            <h4>happyGodi</h4>
        </a>
        <div class="infos">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" :width="iconSize" :height="iconSize">
                <path d="M6 7.03125C5.691406 7.03125 5.402344 7.089844 5.125 7.175781L8.039063 9.03125L23.960938 9.03125L26.875 7.175781C26.597656 7.089844 26.308594 7.03125 26 7.03125 Z M 4.113281 7.71875C3.4375 8.269531 3 9.097656 3 10.03125L3 23.03125C3 24.683594 4.347656 26.03125 6 26.03125L26 26.03125C27.652344 26.03125 29 24.683594 29 23.03125L29 10.03125C29 9.097656 28.5625 8.269531 27.886719 7.71875L16 15.28125 Z M 6 12.445313L16 18.8125L26 12.445313L26 24.03125L6 24.03125Z" 
                :fill="buttonIconOnHoverColor" />
            </svg>
            <h4>godiramaru0@gmail.com</h4>
        </div>
        <a class="infos" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" :width="iconSize" :height="iconSize">
                <path d="M15 3C8.373 3 3 8.373 3 15C3 17.251208 3.6323415 19.350068 4.7109375 21.150391L3.1074219 27L9.0820312 25.431641C10.829354 26.425062 12.84649 27 15 27C21.627 27 27 21.627 27 15C27 8.373 21.627 3 15 3 z M 10.892578 9.4023438C11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562C11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281C12.395859 10.509828 12.972875 11.979906 13.046875 12.128906C13.120875 12.277906 13.173313 12.453437 13.070312 12.648438C12.972312 12.848437 12.921344 12.969484 12.777344 13.146484C12.628344 13.318484 12.465078 13.532109 12.330078 13.662109C12.181078 13.811109 12.027219 13.974484 12.199219 14.271484C12.371219 14.568484 12.968563 15.542125 13.851562 16.328125C14.986562 17.342125 15.944188 17.653734 16.242188 17.802734C16.540187 17.951734 16.712766 17.928516 16.884766 17.728516C17.061766 17.533516 17.628125 16.864406 17.828125 16.566406C18.023125 16.268406 18.222188 16.319969 18.492188 16.417969C18.766188 16.515969 20.227391 17.235766 20.525391 17.384766C20.823391 17.533766 21.01875 17.607516 21.09375 17.728516C21.17075 17.853516 21.170828 18.448578 20.923828 19.142578C20.676828 19.835578 19.463922 20.505734 18.919922 20.552734C18.370922 20.603734 17.858562 20.7995 15.351562 19.8125C12.327563 18.6215 10.420484 15.524219 10.271484 15.324219C10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906C9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375C10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z" 
                :fill="buttonIconOnHoverColor" />
            </svg>
            <h4>+261 34 51 427 80</h4>
        </a>
    </div>
</template>

<style scoped lang="scss">
@import "../scss/_mixing.scss";
@import "../scss/variables";

    .footer {
        @include setFlex(center, space-evenly);
        @include flexing();
        width: 100%;
        height: fit-content;
        padding: 5rem 1rem;
        background-color: $dark;
        color: $white;

        .infos {
            @include setFlex(center, center, column);
            width: 300px;
            height: 150px;
            overflow: hidden;
            padding: 0.5rem 1rem;
            margin: 0.5rem;
            position: relative;

            h4 {
                font-size: 18px;
                width: fit-content;
                height: fit-content;
                padding: 6px;
                text-align: center;
                filter: invert(100%);
                -webkit-filter: invert(100%);
                mix-blend-mode: difference;
                color: $dark;
            }
        }
        .infos:hover {
            cursor: pointer;
        }
        .infos::after {
            content: "";
            width: 0;
            height: 2px;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            transition: width 0.25s ease-in-out;
            background-color: $white;
        }
        .infos:hover::after {
            width: 60%;
        }
    }
    .footer_dark {
        color: $dark;
        background-color: $white;
    }

    @media screen and (max-width:1024px) {
        .footer {
            .infos {
                width: 250px;
                height: 250px;
                padding: 0.5rem 1rem;

                h4 {
                    font-size: 14px;
                }
            }
        }
    }

</style>