<template>
    <div v-cloak id="login">
        <form @submit.prevent="submitForm()">
            <img src="https://www.freelogodesign.org/img/logo-ex-7.png"/>
            <input type="text" name="email" placeholder="Email"/>
            <input v-if="isLoginForm()" type="password" name="password" placeholder="Password"/>
            <input type="hidden" name="loginForm" :value="this.form">
            <p v-on:click="swapForms()">{{ actionText }}</p>
            <button>Submit</button>
        </form>
    </div>
</template>

<script>
    export default {
        data: () => {
            return {
                form: 'login',
                actionText: 'Forgot your password?'
            }
        },
        methods: {
            swapForms() {
                if(this.form !== 'login') {
                    this.form = 'login';
                    this.actionText = 'Back to login';
                } else {
                    this.form = 'forgotPassword';
                    this.actionText = 'Forgot your password?';
                }
            },
            isLoginForm() {
                return this.form === 'login';
            },
            submitForm() {
                // If this is login do x
                // If this is forgot password do y
            }

        }
    };
</script>

<style scoped>
  input {
    display: block;
  }
  p {
    color: blue;
    cursor: pointer;
  }
</style>
