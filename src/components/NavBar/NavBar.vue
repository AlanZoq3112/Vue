<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">Alan Matthew</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="formulario">Formulario</b-nav-item>
                    <b-nav-item to="pagination">Paginacion</b-nav-item>
                </b-navbar-nav>

                
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: "navbar"
}
</script>

<style scoped></style>