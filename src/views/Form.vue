<template>
    <div>
        <b-row>
                <b-col>
                    <label for="">Marca</label>
                        <b-form-input type="text" required placeholder="Ingresa la marca del auto"
                        v-model="form.marca"></b-form-input>
                </b-col>
                <b-col>
                    <label for="">Modelo</label>
                        <b-form-input type="text" required placeholder="Modelo"
                        v-model="form.marca"></b-form-input>
                </b-col>
        </b-row>
        <b-row>
                <b-col>
                    <label for="">Año de fabricación</label>
                        <b-form-input type="text" required placeholder="Año de fabricación"
                        v-model="form.marca"></b-form-input>
                </b-col>
                <b-col>
                    <label for="">Numero de serie</label>
                        <b-form-input type="text" required placeholder="Numero de serie"
                        v-model="form.marca"></b-form-input>
                </b-col>
        </b-row>
        <br>
            <center><b-button variant="primary" type="submit" v-on:click="enviarForm">Enviar</b-button></center>
    </div>
</template>

<script>
export default {
    name: "formulario",
    data() {
        return {
            form:{
                marca: ""
            }
        }

    },
    methods:{
        enviarForm(){
            console.log("Se envia el formulario");
        }
    },

}
</script>

<style scoped></style>