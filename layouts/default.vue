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