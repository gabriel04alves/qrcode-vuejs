<template>
    <footer className="footer">
        <p className="text-footer">
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
    </footer>
</template>

<script>
export default {
    name: 'HeaderMain'
}
</script>

<style>
.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;

    gap: 3vw;
    width: fill;
    padding: 1rem;
    margin: 1rem;
    border-radius: 20px;

    font-family: 'DM Sans', Arial, Helvetica, sans-serif;
}

.text-footer {
    color: #F8F8F8;
    text-decoration: none;
    display: flex;
    align-items: center;

    font-size: 1rem;
    font-weight: 200;
}
</style>