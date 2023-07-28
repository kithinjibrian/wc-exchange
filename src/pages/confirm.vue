<template>
    <v-sheet
    class="mx-auto mt-10"
    width="95%">
        <v-card
        flat>
            <v-card-title>Payment Verification</v-card-title>
            <v-card-subtitle>Once payment is verified, we will deposit your fiat currency.</v-card-subtitle>
            <v-card-text align="center">
                <v-progress-circular
                color="primary"
                model-value="20"
                indeterminate
                :size="128"
                :width="9"
                >
                    Verifying...
                </v-progress-circular>
            </v-card-text>
            <v-divider/>
            <v-card-actions>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                            v-model="referral"
                            label="referral link"
                            variant="outlined"
                            :append-inner-icon="icon_copy"
                            @click:append-inner="copy"
                            readonly></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <p><span style="color:red">*</span> Refer your friends and earn $5.</p>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-actions>
        </v-card>
    </v-sheet>
</template>

<script setup>
import {ref, onMounted} from "vue";
import { useLinkStore } from '../store/link.js'

let store = useLinkStore();
store.setLink()
let referral = store.link
let icon_copy = ref("mdi-content-copy");

const copy = () => {
    navigator.clipboard.writeText(referral);
    icon_copy.value = "mdi-check"
    setTimeout(()=>{
        icon_copy.value = "mdi-content-copy"
    },500);
}
</script>