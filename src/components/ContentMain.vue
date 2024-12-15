<template>
    <section d="app" class="app-qrcode">
        <div class="input-container">
            <p>Digite o conteúdo do seu <b> QRCode: </b></p>
            <input type="text" size="25" placeholder="Digite aqui o seu texto..." :value="text" @input="onData">
        </div>
        <div class="image-container" v-if="!text">
            <img class="qrcode" :src="newQRCode" alt="qrcode" @click="downloadQRCode">
            <p class="text-img">Clique sobre a imagem para baixar.</p>
        </div>
        <div class="image-container" v-if="text">
            <img class="qrcode" :src="newQRCode" alt="qrcode" @click="downloadQRCode">
            <p class="text-img">Clique sobre a imagem para baixar.</p>
        </div>
    </section>
</template>

<script>
import { createQRCode, downloadQRCode } from '../utils/qrcodeManager.js';

export default {
    name: 'ContentMain',
    data() {
        return {
            text: '',
        };
    },
    computed: {
        newQRCode() {
            return createQRCode(this.text);
        },
    },
    methods: {
        onData(event) {
            this.text = event.target.value;
        },
        downloadQRCode() {
            downloadQRCode(this.newQRCode);
        },
    },
}
</script>

<style>
.app-qrcode {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 4vh 3vh;
    gap: 3vh;

    font-family: 'DM Sans', Arial, Helvetica, sans-serif;
    color: #F8F8F8;
}

.input-container {
    display: flex;
    align-items: center;
    flex-direction: column;

    font-size: 1.5rem;
    font-weight: 400;
}

input {
    width: 100%;
    padding: 2vh;

    font-size: 2vh;

    border-radius: 10px;
    border: none;
    outline: none;

    background-color: transparent;
    color: #d6d6d6;
}

.qrcode {
    border: solid 0.2em #F8F8F8;
    cursor: pointer;
}

.text-img {
    font-size: 1.1rem;
    font-weight: 300;
    font-style: italic;
    text-align: center;
}

.image-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1vh;
}

@media screen and (max-width: 1024px) {
    .qrcode {
        width: 250px;
    }
}
</style>
