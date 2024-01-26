<script setup lang="ts">
    import techno from '../assets/techno/techno.json'

    const techs: Array<any> = techno
</script>

<template>
    <div class="techno">
        <h1 class="title">Softwares, Language & tools</h1>       
        <ul class="tech_list" v-for="(t, index) in techs" :key="index">
            <li :class="['tech_el', { tech_el_even : ((index % 2) != 0)}]">
            <div class="picture">
                <img :src="'src/assets/icons/' + t.path" :alt="t.name">
            </div>
                <div class="tech_el_desc">
                    <h4>{{ t.name }}</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, quos quae. Beatae dicta possimus similique explicabo nesciunt, aperiam id minima.</p>
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
        width: 100%;
        height: fit-content;
        padding: 3rem 1rem;

        .title {
            font-size: 48px;
            width: fit-content;
            height: fit-content;
            padding: 6px;
        }
        
        .tech_list{
            @include setFlex(flex-start, flex-start, column);
            list-style-type: none;
            width: 50%;
            height: fit-content;    
            padding: 2rem 1rem;       
            
            .tech_el {
                @include setFlex(flex-start, center, column);
                width: fit-content;
                max-width: 300px;
                height: fit-content;
                min-height: 350px;
                overflow: hidden;
                position: relative;
                box-shadow: 0px 5px 10px $soft-grey;
                background-color: $dark;
                color: $white;

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
                        height: fit-content;
                        padding: 6px;
                        margin-bottom: 12px;
                        font-size: 18px;
                        font-weight: bold;
                    }
                    p {
                        width: 60%;
                        min-height: 150px;
                        font-size: 14px;
                        text-align: center;
                    }
                }
            }
            .tech_el_even {
                margin-left: auto;
            }
        }
        
    }
</style>