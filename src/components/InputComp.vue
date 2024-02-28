<template>
    <div class="input-field flex items-center">
        <div class="content flex items-center">
            <div class="icon">
                <img :src="iconUrl">
            </div>
            <input :type=inputType class="text" :placeholder="inputText" :value="modelValue"
                @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'InputComponent',
    props: {
        iconUrl: String,
        inputText: String,
        inputType: String,
        modelValue: {
            type: String,
            required: true
        }
    },
    setup() {
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
  