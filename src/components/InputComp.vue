<template>
    <div class="input-field flex items-center">
        <div class="content flex items-center">
            <div class="icon">
                <img :src="iconUrl">
            </div>
            <input class="text" :placeholder="inputText" :v-model="inputEntry" />
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'login',
    props: {
        iconUrl: String,
        inputText: String,
        inputEntry: String
    }

});
</script>

<style>
.input-field {
    width: 348.13px;
    height: 40px;
    background-color: #fff;
    border: 1px solid #EDEDED;
    border-radius: 6px;
    margin-bottom: 10px;

    .content .icon {
        padding: 10px 12px 10px 12px;
    }
}

.input-field .content input:focus {
    outline: none;
}
</style>
  