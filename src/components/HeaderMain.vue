<template>
    <div class="header">
        <p class="text-header">Qr-code generator</p>
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
        width: 100%;
        height: 7vh;
        background-color: #002F40;
        border-bottom: 0.5vh solid;
        border-image: linear-gradient(60deg, #A31621, #00A878) 1 1;
    }
    .text-header {
        color: #F8F8F8;
    }

</style>