<template>
    <div class="main">
        <NavCmp />
        <main>
            <div class="container">
                <h2>About Us</h2>
                <p>At EduGaming, we believe that learning should be fun and engaging. Our platform offers a range of
                    educational games designed to help children and teens develop their skills in a fun and interactive
                    way. Whether you are looking to improve your math skills or learn more about science, our games are
                    designed to make learning enjoyable and effective.</p>

                <p>Our team consists of educators, game designers, and developers who are passionate about education and
                    technology. We work together to create games that are not only educational but also entertaining,
                    ensuring that students are motivated and engaged in their learning journey.</p>

                <p>Join us today and discover a new way to learn with EduGaming!</p>
            </div>
        </main>
        <FooterCmp />
    </div>
</template>

<script setup>
import NavCmp from "@/components/NavCmp.vue";
import FooterCmp from "@/components/FooterCmp.vue";
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
