import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import i18n from '@/i18n/i18n';
import { useI18n } from 'vue-i18n';


export const useLanguages = defineStore('languages', () => {
    const selected = ref('')
    const lang = ref([
        { code : 'en', language : 'English'},
        { code : 'fr', language : 'Français'}
    ])

    const { t } = useI18n({ //t function to translate
        
    })

    const changeLocal  = (locale: string) => {
        i18n.global.locale.value = locale
    }


    /* //const languages = ref<Array<any>>(lang)
    const cardList = ref<Array<any>>(cards)

    let defaultLang = ref(languages.value.find((lang) => lang.default === true)) 
    let defaultCardList = ref(cardList.value.find((card) => card.code === 'En'))

    function switchLang(selected: any): void {
        defaultLang.value = selected
        defaultCardList.value = cardList.value.find((card) => card.code === selected.code)
    } */

    return { lang, changeLocal, t}
})