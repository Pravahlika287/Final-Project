<template>
    <form>
        <span>Enter the Data:</span>
<p style="white-space: pre-line;">{{ message }}</p>
<br>
<textarea v-model="message" placeholder="add multiple lines"></textarea>
</form>
</template>