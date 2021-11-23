<template>
    <div>
        <AppHeader @close-menu="menuOpen = false"/>
        <nuxt />
        <AppCursor/>
        <AppFooter/>
    </div>
</template>

<script>
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import AppCursor from '../components/AppCursor';

export default {
    components: {
        AppHeader,
        AppFooter,
        AppCursor
    }
}
</script>