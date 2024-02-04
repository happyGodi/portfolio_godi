<script setup lang="ts">
    import techno from '../assets/techno/techno.json'
    import { ref } from 'vue';

    const techs: Array<any> = techno
    const iconSize = ref(24)
</script>

<template>
    <div class="techno">
        <h1 class="title">Softwares, Language & tools</h1>       
        <ul class="tech_list" v-for="(t, index) in techs" :key="index">
            <li :class="['tech_el', { tech_el_even : ((index % 2) != 0)}]">
            <div class="picture">
                <img :src="'src/assets/icons/' + t.path" :alt="t.name">
            </div>
            <div :class="['box', { box_even : ((index % 2) != 0)}]">
                <a :href="t.link" target="_blank" class="link">Read<br>docs?</a>
            </div>
                <div class="tech_el_desc">
                    <h4>{{ t.name }}</h4>
                    <p> {{ t.desc }}
                    </p>
                </div>
            </li>
        </ul> 
    </div>
</template>

<style scoped lang="scss">
@import "../scss/_mixing.scss";
@import "../scss/variables";

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
        
        .tech_list{
            @include setFlex(flex-start, flex-start, column);
            list-style-type: none;
            width: 40%;
            height: fit-content;    
            padding: 2rem 1rem;     
            position: relative;
    
            
            .tech_el {
                @include setFlex(flex-start, center, column);
                width: 300px;
                height: 400px;
                overflow: hidden;
                position: relative;
                box-shadow: 0px 5px 10px $soft-grey;
                background-color: $dark;
                color: $white;

                .box {
                    width: fit-content;
                    position: absolute;
                    bottom: 45%;
                    right: 0;
                    z-index: 3;
                    background-color: $white;
                   
                    .link {
                            @include setFlex(flex-start, center);
                            width: 100%;
                            height: 100%;
                            padding: 6px;
                            background-color: transparent;
                            color: $dark;
                            font-size: 14px;
                            font-weight: bold;
                            position: relative;
                            transition: cursor 0.25s ease-in-out;
                        }
                        .link:hover {
                            cursor: pointer;
                        }
                }
                .box_even {
                    left: 0;
                }
                .picture {
                    @include setFlex(center, center);
                    width: 100%;
                    height: 40%;
                    padding: 1rem;

                    img {
                        object-fit: cover;
                        object-position: center;
                        width: 50%;
                        height: auto;
                        padding: 12px
                    }
                }
                .tech_el_desc {
                    @include setFlex(center, center, column);
                    width: 100%;
                    height: 60%;
                    margin-top: auto;
                    padding: 6px;

                    h4 {
                        width: fit-content;
                        height: 10%;
                        padding: 6px;
                        margin-bottom: 12px;
                        font-size: 18px;
                        font-weight: bold;
                    }
                    p {
                        width: 65%;
                        height: 60%;
                        font-size: 14px;
                        text-align: center;
                        margin: 1rem;
                    }
                }
            }
            .tech_el_even {
                margin-left: auto;
            }
        }
        
    }

    @media screen and (max-width: 1280px) {
        .techno{
            .tech_list {
                    width: 60%;   
                    padding: 1rem;

                    .tech_el {
                        width: 250px;
                        height: 350px;
                        .picture {
                            height: 30%;
                        }
                        .box {
                            .link {
                                font-size: 12px;
                            }
                        }
                        .tech_el_desc {
                            @include setFlex(center, center, column);
                            height: 70%;
                            h4 {
                                margin-bottom: 12px;
                            }
                            p {
                                width: 65%;
                                height: 60%;
                                font-size: 12px;
                                margin: 0.5rem;
                            }
                        }
                    }
                }
        }
    }
    @media screen and (max-width: 1024px) {
        .techno{
            .tech_list {
                    width: 80%;   
                    padding: 1rem;
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
                        width: 250px;
                        height: 350px;

                        .picture {
                            height: 30%;
                        }
                        .tech_el_desc {
                            height: 70%;
                            h4 {
                                margin-bottom: 12px;
                                font-size: 14px;
                            }
                            p {
                                width: 65%;
                                height: 60%;
                                font-size: 12px;
                                margin: 0.5rem;
                            }
                        }
                }
                }
                .tech_el_even {
                    margin:auto;
                }
        }
    }
</style>