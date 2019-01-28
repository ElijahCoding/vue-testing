<template>
    <div>
        <a
            href="#"
            @click.prevent="revealed = true"
            v-if="!revealed"
            >
            Click here
        </a>

        <div v-if="revealed">
            {{ text }}
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                revealed: false
            }
        },

        props: {
            text: {
                text: {
                    required: true,
                    type: String
                }
            }
        }
    }
</script>
