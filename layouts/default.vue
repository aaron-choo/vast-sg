<template>
    <div>
        <AppHeader @close-menu="menuOpen = false"/>
        <nuxt />
        <AppCursor/>
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