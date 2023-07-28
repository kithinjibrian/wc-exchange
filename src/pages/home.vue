<template>
    <v-sheet
    class="mx-auto mt-10"
    width="80%">
        <v-card
        flat>
            <v-card-title><v-icon color="blue">mdi-check-decagram</v-icon> Official Worldcoin exchange.</v-card-title>
            <v-card-subtitle class="mb-5">Convert worldcoins to cash instantly.</v-card-subtitle>
            <v-card-actions>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                            v-model="wcaddress"
                            label="Worldcoin address"
                            variant="outlined"
                            :append-inner-icon="icon_copy"
                            @click:append-inner="copy"
                            readonly></v-text-field>
                            <p><span style="color:red">*</span> Send your worldcoins to the above address.</p>
                        </v-col>
                        <v-col cols="12">
                            <v-btn-toggle 
                            v-model="paymentmethod"
                            color="deep-purple-accent-3"
                            group>
                            <v-btn value="mpesa">
                                Mpesa
                            </v-btn>

                            <v-btn value="paypal">
                                Paypal
                            </v-btn>
                            </v-btn-toggle>
                        </v-col>
                        <v-col cols="12">
                            <mpesa v-if="paymentmethod == 'mpesa'"></mpesa>
                            <paypal v-if="paymentmethod == 'paypal'"></paypal>
                        </v-col>
                        <v-divider/>
                        <v-col cols="12">
                            <confirm-dialog/>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-actions>
        </v-card>
    </v-sheet>
</template>

<script setup>
import {ref} from "vue";
import mpesa from "../components/mpesa.vue";
import paypal from "../components/paypal.vue";
import ConfirmDialog from "../components/ConfirmDialog.vue";

const paymentmethod = ref("mpesa");
const wcaddress = ref("0x4df2d2b8f3257c8bec6bd3f1e519f4d4879ea46f");
let icon_copy = ref("mdi-content-copy");

const copy = () => {
    navigator.clipboard.writeText(wcaddress);
    icon_copy.value = "mdi-check"
    setTimeout(()=>{
        icon_copy.value = "mdi-content-copy"
    },500);
}
</script>