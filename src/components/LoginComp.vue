<template>
    <div class="login-part">
        <div class="login-container">
            <div class="login-title">{{ loginTitle }}</div>
            <div class="flex items-center justify-center flex-col">
                <InputComp :input-text="userNamePlaceholder" v-model="userName" :iconUrl="getImageUrl(iconNameUser)"
                    :inputType="'text'" />
                <InputComp :input-text="passwordPlaceholder" v-model="password" :iconUrl="getImageUrl(iconNamePassword)"
                    :inputType="'password'" />
            </div>
            <div class="warning-text flex justify-center" v-if="isWarning">
                <p>{{ warningText }}</p>
            </div>
            <div class="w-full flex justify-center mt-2.5">
                <div class="login-button flex justify-end">
                    <button @click="login" class="primary-button">{{ buttontext }}</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">

import { defineComponent } from 'vue';
import InputComp from './InputComp.vue'
import { ref } from 'vue'
import router from '../router';

export default defineComponent({
    name: 'LoginComp',
    components: {
        InputComp
    },
    setup() {
        const userNamePlaceholder = ref('Username')
        const passwordPlaceholder = ref('Password')
        const iconNameUser = ref('username-icon.svg')
        const iconNamePassword = ref('password-icon.svg')
        const loginTitle = ref('Login To Forge Studio')
        const warningText = ref('Username or password incorrect')
        const buttontext = ref('Login')
        const userName = ref('')
        const password = ref('')
        const isWarning = ref(false)


        const login = async () => {
            fetch("/api/login", {
                method: 'POST', headers: { "Content-type": "application/json; charset=UTF-8" }, body: JSON.stringify({
                    username: userName.value,
                    password: password.value,
                    userId: 1
                }),
            })
                .then(async response => {
                    if (response.status == 401) {
                        var errorMessage = await response.json().then(js => js)
                        throw new Error(errorMessage);
                    }
                    else {
                        return response.json()
                    }
                })
                .then(json => {
                    localStorage.setItem('token', json.token)
                    router.push('/')
                })
                .catch(() => {
                    isWarning.value = true;
                }
                )
        };

        const getImageUrl = (name: string) => {
            return new URL(`../images/${name}`, import.meta.url).href
        }

        return {
            userNamePlaceholder, passwordPlaceholder, iconNameUser, iconNamePassword, loginTitle, warningText, buttontext, userName, password, login, isWarning, getImageUrl
        }
    }

});
</script>

<style>
.login-part {
    width: 546.13px;
    height: 340px;
    background-color: rgba(255, 255, 255, 0.75);
    border: 1px solid #EDEDED;
    border-radius: 8px;

    .login-title {
        font-family: Inter;
        font-size: 32px;
        font-weight: 600;
        line-height: 122px;
        letter-spacing: -0.02em;
        text-align: left;
        text-align: center;
    }

    .login-container {

        .warning-text p {
            color: #F24E1E;
            width: 348.13px;
            font-family: Inter;
            font-size: 12px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: left;
        }
    }

    .login-button {
        width: 348.13px;

        button {
            width: 109.41px;
            height: 40px;
            padding: 10px, 18px, 10px, 18px;
            border-radius: 8px;
            border: 1px;
            gap: 8px;
            background-color: #5859DF;
            color: #fff;
            font-family: Inter;
            font-size: 16px;
            font-weight: 600;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: center;
        }
    }
}
</style>
  