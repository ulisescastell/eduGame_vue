<template>
    <div class="main">
        <NavCmp />
        <main>
            <h1>Welcome to EduGaming!</h1>
            <p>At EduGaming, we believe that learning can be fun and interactive. Explore our collection of educational
                games that will challenge your mind and help you grow in knowledge. Whether you're improving your math
                skills or diving into science, our games are designed to be engaging for all ages.</p>
        </main>
        <FooterCmp />
    </div>
</template>

<script setup>
import NavCmp from "@/components/NavCmp.vue";
import FooterCmp from "@/components/FooterCmp.vue";
</script>

<script>

</script>

<style scoped>
main {
    margin: 10px;
}

.main {
    display: grid;
    min-height: 100dvh;
    grid-template-rows: auto 1fr auto;
}
</style>
