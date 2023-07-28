<template>
    <div class="text-center">
        <v-dialog
        v-model="dialog"
        width="auto"
        >
        <template v-slot:activator="{ props }">
            <v-btn
            color="green"
            variant="outlined"
            v-bind="props"
            block
            rounded>Convert</v-btn>
        </template>

        <v-card
        width="80%">
            <v-card-text>
                Please make sure you have sent worldcoins to the address provided before proceeding.
            </v-card-text>
            <v-card-actions>
                <v-spacer/>
                <v-btn variant="outlined" color="error" @click="dialog = false">Not yet</v-btn>
                <v-btn variant="text" color="success" to="/confirm">I have sent</v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    const dialog = ref(false);
</script>