<template>
    <header class="header">
        <img class="logo-header" src="../assets/images/qrcode-logo.svg" alt="qrcode">
        <p class="text-header">QR code generator</p>
    </header>
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
        
        gap: 1rem;
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem;
        
        background-color: #002F40;
        font-family: 'DM Sans', Arial, Helvetica, sans-serif;
    }

    .text-header {
        font-size: 1.5rem;
        color: #F8F8F8;
    }

    .logo-header {
        width: 2.5rem;
    }
</style>