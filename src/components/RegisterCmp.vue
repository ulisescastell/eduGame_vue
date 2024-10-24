<template>
    <div class="main">
        <NavCmp />
        <main>
            <div class="containerTotal">
                <div class="registration-container">
                    <h1>Register</h1>
                    <form action="/register" method="POST">
                        <label for="fullname">Full Name:</label>
                        <input type="text" id="fullname" name="fullname" required>

                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required>

                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" required>


                        <label for="role">Role:</label>
                        <select name="role" id="selectId">
                            <option value="student">Student</option>
                            <option value="teacher">Teacher</option>
                        </select><br><br>

                        <div id="ageContainer">
                            <label for="age">Age:</label>
                            <select id="age" name="age">
                                <option value="">Select your age</option>

                            </select>
                        </div>

                        <div style="margin-top: 0.5cm;">
                            <label for="school">School:</label>
                            <input type="text" id="school" name="school" required>
                        </div>

                        <button type="submit">Register</button>
                    </form>
                </div>
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

body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    color: #333;
    margin: 0;
    padding: 0;
    align-items: center;
}

.containerTotal {
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    justify-content: center;
    align-items: center;
}

.registration-container {
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 90%;
    max-width: 400px;
    margin-bottom: 8rem;
}


.registration-container h1 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
}


.registration-container input,
.registration-container select {
    width: 100%;
    padding: 12px;
    margin: 8px 0;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
}


.registration-container button {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 10px;
    transition: background-color 0.3s;
}

.registration-container button:hover {
    background-color: #45a049;
}

.color-blind-mode {
    margin-top: 15px;
    padding: 10px 20px;
    background-color: #333;
    color: white;
    cursor: pointer;
    border: none;
    font-size: 1em;
    width: 100%;
}

.color-blind-mode:hover {
    background-color: #555;
}


.color-blind-active {
    background-color: #EFEFEF;
    color: #000;
}

.color-blind-active .login-container {
    background-color: #dcdcdc;
}

.color-blind-active .login-container button {
    background-color: #333;
}

.color-blind-active .login-container button:hover {
    background-color: #555;
}
</style>