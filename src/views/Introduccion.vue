<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-5
      .col-md.mb-4.mb-md-0
        p La información suministrada tiene la intención de brindar herramientas para que los gerentes, directores, mandos medios e incluso miembros de juntas directivas de las empresas, puedan hacer un buen diagnóstico de su situación actual como organización y así se preparen para que adopten el sistema de mejoramiento continuo como alma y nervio de sus empresas.
        p En la conformación de este programa, se tomaron en cuenta los conceptos de varios autores con pleno conocimiento sobre el mejoramiento continuo, quienes han sido citados y referenciados para cumplir con los fines educativos que se han planteado desde el inicio del mismo. Se espera que el documento sea útil para todos, más allá de quienes han sido mencionados como objetivo inicial. 

      .col-6.col-md-4
        img(src="@/assets/curso/intro-01.svg")
        

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
