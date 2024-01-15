import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import lang from '../assets/lang/langagues.json';
import cards from '../assets/cards/cards.json';


export const useLanguages = defineStore('languages', () => {

    const languages = ref<Array<any>>(lang)
    const cardList = ref<Array<any>>(cards)

    let defaultLang = ref(languages.value.find((lang) => lang.default === true)) 
    let defaultCardList = ref(cardList.value.find((card) => card.code === 'En'))

    function switchLang(selected: any): void {
        defaultLang.value = selected
        defaultCardList.value = cardList.value.find((card) => card.code === selected.code)
    }

    return { languages, defaultLang, switchLang, defaultCardList}
})