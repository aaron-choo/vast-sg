<template>
    <div>
        <AppHeader />
        <nuxt />
        <AppCursor scaleElement="logo" dotColor="#222222" borderColor="#222222"/>
    </div>
</template>

<script>
import AppHeader from '../components/AppHeader';
import AppCursor from '../components/AppCursor';

export default {
    components: {
        AppHeader,
        AppCursor
    }
}
</script>

<style>
html {
  font-family: "Labil Grotesk", sans-serif;
  font-variant-ligatures: none;
  font-feature-settings: "ss01" 0, "ss03" 1, "ss04" 1, "ss05" 1, "ss07" 0, "zero" 1;
}
em {
    font-family: "Tropiline", serif;
    font-style: normal;
}
</style>
