<template>
<div class="main">
    <h4 class="text-xl text-center">{{ message }}</h4>
    <div id="q-app" style="border: #333333 solid;">
        <p>{{ info }}</p>
        <div class="q-pa-md q-gutter-sm">
            <q-btn label="Click me" color="primary" @click="persistent = true"></q-btn>

            <q-dialog v-model="persistent" persistent transition-show="scale" transition-hide="scale">
                <q-card class="bg-teal text-white" style="width: 300px">
                    <q-card-section>
                        <div class="text-h6">Persistent</div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        Click/Tap on the backdrop.
                    </q-card-section>

                    <q-card-actions align="right" class="bg-white text-teal">
                        <q-btn flat label="OK" v-close-popup></q-btn>
                    </q-card-actions>
                </q-card>
            </q-dialog>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        data() {
            return {
                message: "Dockerized Laravel Application with Vue.js",
                info: "This is a component from Quasar library",
                lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
        }
    }
</script>
