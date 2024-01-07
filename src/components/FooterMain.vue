<template>
    <div className="footer">
                <p className="text-footer" >
                    <img class="icons-footer" src="../assets/images/github.svg" alt="github" />
                    <a className="text-footer" href="https://github.com/gabriel04alves">
                        /gabriel04alves
                    </a>
                </p>
                <p className="text-footer">
                    <img class="icons-footer" src="../assets/images/linkedin.svg" alt="linkedin" />
                    <a className="text-footer" href="https://linkedin.com/in/gabriel04alves">
                        /gabriel04alves
                    </a>
                </p>
            </div>
</template>

<script>
    export default {
        name: 'HeaderMain'
    }
</script>

<style>
    .footer {
        display: flex;
        position: fixed;
        bottom: 0;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 3%;
        width: 100%;
        height: 7vh;
        background-color: #002F40;
        border-top: 0.5vh solid;
        border-image: linear-gradient(60deg, #F0F757, #A31621) 1 1;
    }
    .text-footer {
        color: #F8F8F8;
        text-decoration: none;
        display: flex;
        align-items: center;
        font-size: 1.5vh;
        font-weight: 200;
    }
    .icons-footer {
        align-self: center;
        /* width: 2vh; */
    }
</style>