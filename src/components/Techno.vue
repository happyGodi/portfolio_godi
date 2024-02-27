<script setup lang="ts">
    import { ref, computed } from 'vue';
    import { useDarkModeStore } from '@/stores/darkMode';

    const darkMode = useDarkModeStore();
    const iconSize = ref(18)
    const iconColor = ref('#f5f5f5')
    let active = ref(false)
    let currentId = ref(null)
    let docVisibilty = ref(false)
    let isDark = computed<boolean>(() => darkMode.isDark);

    function hovering(id: any): void {
        active.value = true
        docVisibilty.value = true
        currentId.value = id
    }
    function notHover() {
        active.value = false
        docVisibilty.value = false
    }
</script>

<template>
    <div class="techno">
        <h1 :class="['title', { title_dark : isDark}]">{{ $t('techno.title') }}</h1>       
        <ul class="tech_list" >
            <li v-for="(t, index) in $tm('technoList')" :key="index" :class="['tech_el', { tech_el_even : ((index % 2) != 0)},  { shrink : (active && (currentId != index))}, { grow : (active && (currentId == index))}]"  @mouseenter="hovering(index)" @mouseleave="notHover()">
                <div class="picture">
                    <img :src="'src/assets/icons/' + $t(`technoList.${index}.path`)" :alt="$t(`technoList.${index}.name`)">
                </div>
                <h4 class="tech_el_desc">{{ $t(`technoList.${index}.name`) }}</h4>
                <div class="start_list">
                    <svg v-for="n in parseInt($t(`technoList.${index}.level`))" style="margin: 3px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" :width="iconSize" :height="iconSize">
                        <path d="M10.2,48.6c-0.2,0-0.4-0.1-0.6-0.2c-0.3-0.2-0.5-0.7-0.4-1.1l4.4-16.4L0.4,20.2C0,20-0.1,19.5,0,19.1 c0.1-0.4,0.5-0.7,0.9-0.7l17-0.9l6.1-15.9C24.2,1.3,24.6,1,25,1c0.4,0,0.8,0.3,0.9,0.6l6.1,15.9l17,0.9c0.4,0,0.8,0.3,0.9,0.7 c0.1,0.4,0,0.8-0.3,1.1L36.4,30.9l4.4,16.4c0.1,0.4,0,0.8-0.4,1.1c-0.3,0.2-0.8,0.3-1.1,0L25,39.2l-14.3,9.2 C10.5,48.6,10.4,48.6,10.2,48.6z" 
                        :fill="iconColor" />
                    </svg>
                </div>
                <Transition>
                    <a v-if="docVisibilty && currentId == index" :href="$t(`technoList.${index}.link`)" target="_blank" class="link">Documentation</a>
                </Transition>
            </li>
        </ul> 
    </div>
</template>

<style scoped lang="scss">
@import "../scss/_mixing.scss";
@import "../scss/variables";

    .v-enter-active, .v-leave-active {
        transition: all 0.25s ease-in-out;
    }
    .v-enter-from, .v-leave-to {
        pointer-events: none;
        opacity: 0;
    }

    .techno {
        @include setFlex(flex-start, center, column);
        @include backgroundImage("../assets/background/techno_bg.png");
        width: 100%;
        height: fit-content;
        padding: 3rem 1rem;

        .title {
            font-size: 72px;
            width: fit-content;
            height: fit-content;
            padding: 6px;
        }
        .title_dark {
            color: $white;
        }
        
        .tech_list{
            @include setFlex(flex-start, flex-start, column);
            list-style-type: none;
            width: 35%;
            height: fit-content;    
            padding: 2rem 1rem;     
            position: relative;
    
            
            .tech_el {
                @include setFlex(flex-start, center, column);
                width: 200px;
                height: 200px;
                position: relative;
                box-shadow: 0px 5px 10px $soft-grey;
                background-color: $dark;
                color: $white;
                transition: cursor 0.25s ease-in-out, transform 0.3s ease-in-out, filter 0.3s ease-in-out;

                &:hover{
                    cursor: pointer;
                }

                .start_list {
                    @include setFlex(center, center);
                    width: fit-content;
                    height: fit-content;
                    padding: 6px;
                    margin: 6px;
                }
                .picture {
                    @include setFlex(center, center);
                    width: auto;
                    height: 50%;
                    padding: 0.25rem;
                    margin-bottom: 0.25rem;
                    img {
                        object-fit: cover;
                        object-position: center;
                        width: 55%;
                        height: auto;
                        padding: 12px
                    }
                }
                .tech_el_desc {
                    @include setFlex(flex-start, center, column);
                    width: 100%;
                    height: 10%;
                    padding: 6px;
                    font-size: 18px;
                    font-weight: bold;
                }
                .link {
                    position: absolute;
                    top: 90%;
                    background-color: $white;
                    color: $dark;
                    padding: 0.25rem 0.5rem;
                    box-shadow: 0px 1px 2px $dark;
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
            .tech_el_even {
                margin-left: auto;
            }
        }
        
    }

    @media screen and (max-width: 1280px) {
        .techno {
            .tech_list {
                width: 50%;
            }
        }
    }
    @media screen and (max-width: 1024px) {
        .techno {
            .title {
                font-size: 24px;
            }
            .tech_list {
                @include setFlex(center, center, row);
                    width: 100%;   
                    padding: 0.5rem;
                    flex-wrap: wrap;
                    flex: 1 1 center;
                    .tech_el {
                        width: 250px;
                        height: 250px;
                        margin: 0.5rem;

                        .tech_el_desc {
                            height: fit-content;
                            font-size: 18px;
                        }
                    }
                }
        }
        
    }
    @media screen and (max-width: 768px) {
        .techno{
            .title {
                font-size: 24px;
            }
            .tech_list {
                @include setFlex(center, center, row);
                    width: 100%;   
                    padding: 0.5rem;
                    flex-wrap: wrap;
                    flex: 1 1 center;
                    .tech_el {
                        width: 150px;
                        height: 150px;
                        margin: 0.5rem;
                        .picture {
                            height: 50%;
                            img {
                                width: 60%;
                            }
                        }
                        .tech_el_desc {
                            height: fit-content;
                            font-size: 12px;
                        }
                        .link {
                            font-size: 12px;
                            top: 100%;
                            color: $dark;
                            padding: 0.25rem 0.5rem;
                        }
                    }
                }
                .tech_el_even {
                    margin:auto;
                }
        }
    }
</style>