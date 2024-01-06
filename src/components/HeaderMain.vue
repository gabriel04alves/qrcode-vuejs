<template>
    <div class="header">
        <img class="logo-header" src="../assets/images/qrcode-logo.svg" alt="qrcode">
        <p class="text-header">QR-code generator</p>
    </div>
</template>

<script>
    export default {
        name: 'HeaderMain'
    }
</script>

<style>
    .header {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2.5%;
        width: 100%;
        height: 7vh;
        background-color: #002F40;
        border-bottom: 0.5vh solid;
        border-image: linear-gradient(60deg, #A31621, #00A878) 1 1;
    }
    .text-header {
        font-size: 2.2vh;
        color: #F8F8F8;
    }
    .logo-header {
        width: 3.5vh;
    }


</style>