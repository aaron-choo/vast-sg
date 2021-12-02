<template>
<div class="chat-window-wrapper fixed top-0 left-0 h-full p-8">
    <div class="chat-window relative rounded-lg h-full w-full overflow-auto">
        <div class="title-bar w-full border-b flex justify-start items-center sticky top-0 z-10 rounded-t-lg">
            <p class="close-button w-3 h-3 rounded-full m-2"></p>
            <p class="inactive-button w-3 h-3 rounded-full mr-2"></p>
            <p class="inactive-button w-3 h-3 rounded-full"></p>
        </div>
        <div class="chat-content overflow-x-hidden">
            <div class="chat-header p-4 text-2xl">
                <p>👋 Hello there!</p>
                <p>What can we do for you?</p>
            </div>
            
            <div class="intro-content w-full p-4">
                <p class="from message">I wish to start a project</p>
                <p class="from message">Are there any job openings?</p>
                <p class="from message">How else can I contact you?</p>
                <div class="flex items-center">
                    <div class="rounded-full h-12 w-12 bg-white my-4 mr-2 relative">
                        <div class="status-icon rounded-full h-3 w-3 absolute right-0 bottom-0 bg-green-500"></div>
                    </div>
                    <div>
                        <p class="name text-sm">Aaron</p>
                        <p class="time text-sm">3:06 AM</p>
                    </div>
                </div>
                
                <p class="to message">Thank you for reaching out!</p>
                <p class="to message">Let’s see what kind of awesome projects we can help you with.</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'ChatWidget'
}
</script>
<style scoped>
.chat-window-wrapper {
    width: 400px;
    display: none;
}
.chat-window, .title-bar {
    background: #1e1e1e;
    color: #fff;
}
.chat-window {
    box-shadow: 0 16px 48px rgba(0,0,0,.15);
}
.title-bar {
    border-color: #343434;
}
.close-button {
    background: #ff5c5c;
    border: 1px solid #e33e41;
}
.inactive-button {
    border: 1px solid #4c4c4c;
    background: #4c4b4c;
}
.status-icon {
    border: 3px solid #1e1e1e;
}
.message {
    display: block;
    width: 80%;
    padding: 10px;
    background: var(--bg);
    columns: var(--color);
    margin-bottom: .5rem;
    border-radius: .5rem;
}
.message.from {
    margin-left: auto;
}
</style>