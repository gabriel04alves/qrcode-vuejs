<template>
    <div id="app" class="app-qrcode">
        <div class="input">
            <p>	Digite o conteúdo do seu <b> QRCode: </b> </p>
           <input 
            type="text" 
            size="25" 
            placeholder="Digite o texto: " 
            :value="text"
            @input="onData"
            >

        </div>
        <div v-if="text" >
            <img class="qrcode" :src="newQRCode" alt="qrcode" @click="downloadQRCode">
            <p class="text-img">Clique sobre a imagem para baixar.</p>
        </div>
    </div>
</template>

<script>
    import QRious from "qrious"; 

    export default {
        name: 'ContentMain',
        data() {
            return {
                text: 'https://github.com/gabriel04alves',
                qrcode: new QRious({ size: 300 }),
            };
        },
        computed: {
            newQRCode() {
                return this.generateQRCode();
            },
        },
        methods: {
            onData(event) {
                this.text = event.target.value;
            },
            generateQRCode() {
                this.qrcode.value = this.text;
                return this.qrcode.toDataURL();
            },
            downloadQRCode() {
                const img = document.createElement('a');
                img.href = this.newQRCode;
                img.download = 'qrcode.png';
                img.click();
            },
        },
    }
</script>

<style>
    .app-qrcode {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 86vh;
        gap: 5%;
    }
    .input {
        display: flex;
        align-items: center;
        flex-direction: column;
        font-size: 2vh;
        font-weight: 500;
        width: 35vh;
    }
    input{
        width: 100%;
        height: 5vh;
        padding: 3%;
        font-size: 1.8vh;
        border-radius: 10px;
        border: solid 0.2em #A31621;
    }
    .qrcode{
        border: solid 0.2em #020202;
        cursor: pointer;
    }
    .text-img {
        font-size: 1.5vh;
        font-weight: 300;
        font-style: italic;
        text-align: center;
    }
</style>