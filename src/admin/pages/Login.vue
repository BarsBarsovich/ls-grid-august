<template>
  <div class="login__container">
    <form class="form">
      <input type="text">
      <input type="password">
      <button>Отправить</button>
    </form>
  </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style lang="postcss">
  .form {
    display: flex;
    flex-direction: column;

    & input {
      margin-top: 10px;
    }

    & button {
      margin-top: 10px;
    }
  }

  .login__container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  html, body {
    height: 100vh;
  }

  .maincontent {
    height: 100%;
  }
</style>
