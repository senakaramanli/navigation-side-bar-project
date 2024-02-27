<template>
    <div class="login-part">
        <div class="login-container">
            <div class="login-title">{{ loginTitle }}</div>
            <div class="flex items-center justify-center flex-col">
                <InputComp :input-text="userNamePlaceholder" :inputEntry="userName" :iconUrl="iconUrlUser" />
                <InputComp :input-text="passwordPlaceholder" :inputEntry="password" :iconUrl="iconUrlPassword" />
            </div>
            <div class="warning-text flex justify-center">
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

export default defineComponent({
    name: 'LoginComp',
    components: {
        InputComp
    },
    setup() {
        const userNamePlaceholder = ref('Username')
        const passwordPlaceholder = ref('Password')
        const iconUrlUser = ref('/src/images/username-icon.svg')
        const iconUrlPassword = ref('/src/images/password-icon.svg')
        const loginTitle = ref('Login To Forge Studio')
        const warningText = ref('Username or password incorrect')
        const buttontext = ref('Login')
        const userName = ref('')
        const password = ref('')
        console.log(userName, password)


        fetch("/api/login", {
            method: 'POST', headers: { "Content-type": "application/json; charset=UTF-8" }, body: JSON.stringify({
                username: "foo",
                password: "bar",
                userId: 1
            }),
        })
            .then(response => response.json())
            .then(json => console.log(json));


        const login = async () => {
            fetch("/api/login", {
                method: 'POST', headers: { "Content-type": "application/json; charset=UTF-8" }, body: JSON.stringify({
                    username: "foo",
                    password: "bar",
                    userId: 1
                }),
            })
                .then(response => response.json())
                .then(json => console.log(json));
        };

        // expose the ref to the template
        return {
            userNamePlaceholder, passwordPlaceholder, iconUrlUser, iconUrlPassword, loginTitle, warningText, buttontext, userName, password, login
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
}

.login-part .login-title {
    font-family: Inter;
    font-size: 32px;
    font-weight: 600;
    line-height: 122px;
    letter-spacing: -0.02em;
    text-align: left;
    text-align: center;
}

.login-part .login-container .warning-text p {
    color: #F24E1E;
    width: 348.13px;
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
}

.login-part .login-button {
    width: 348.13px;
}

.login-part .login-button button {
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
</style>
  