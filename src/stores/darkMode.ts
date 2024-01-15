import { defineStore } from "pinia";
import { ref } from "vue";

export const useDarkModeStore: any = defineStore('darkMode', () => {
    const isDark = ref<boolean>(false)
    const iconColor = ref('#181818')
    const sunIconColor = ref('#ffd100')
    const moonIconColor = ref('#181818')
    const buttonIconOnHoverColor = ref('#fff')

    function switchDark (): void {
        isDark.value = true
        iconColor.value = '#fff'
        sunIconColor.value = '#fff'
        moonIconColor.value = '#009aff'
        buttonIconOnHoverColor.value = '#181818'
    }
    function switchLight (): void {
        isDark.value = false
        iconColor.value = '#181818'
        sunIconColor.value = '#ffd100'
        moonIconColor.value = '#181818'
        buttonIconOnHoverColor.value = '#fff'
    }
    function lightColor(): void {
        isDark.value ? buttonIconOnHoverColor.value = '#fff' : buttonIconOnHoverColor.value = '#181818'
    }
    function resetColor(): void {
        isDark.value ? buttonIconOnHoverColor.value = '#181818' : buttonIconOnHoverColor.value = '#fff'
    }

    return { isDark, iconColor, sunIconColor, moonIconColor, switchDark, switchLight, buttonIconOnHoverColor, lightColor, resetColor}
})