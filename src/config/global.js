export default {
  global: {
    componenteFormativo: 'Entorno, diagnóstico y conocimiento de empresa',
    descripcionCurso:
      'El éxito de una empresa depende en buena parte de como esta se relacione con su entorno, el contexto, diagnóstico y conocimiento de los factores internos y externos que le permitan ayudar a la toma de decisiones estratégicas y su operación. Se establece un análisis dependiendo del sector a analizar como factores económicos, socioculturales, tecnológicos, medioambientales y del sector que la empresa espera desarrollar.',
    imagenBannerPrincipal: require('@/assets/curso/principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo.jpg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Contexto organizacional de la empresa',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Análisis de contexto',
            hash: 't1-1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Herramientas para el análisis del contexto',
            hash: 't1-2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Diagnóstico y características de la empresa',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de diagnóstico organizacional',
            hash: 't2-1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Modelo de diagnóstico organizacional',
            hash: 't2-2',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'EEE. (2016). Análisis del contexto organizacional. ',
      link:
        'https://www.escuelaeuropeaexcelencia.com/2016/09/analisis-del-contexto-la-organizacion/',
    },
    {
      referencia:
        'Betancourt., D. (2019). 7S de Mckinsey. Qué es y cómo se emplea. ',
      link: 'https://www.ingenioempresa.com/7s-de-mckinsey/',
    },
    {
      referencia:
        'Dynamic. (2021). La Cadena de Valor de Michael Porter. Análisis de las actividades de la empresa.  ',
      link: 'https://www.dynamicgc.es/cadena-de-valor-porter/',
    },
    {
      referencia:
        'Garrido, I. (2017). El Modelo Mintzberg, una organización estructurada en la empresa. ',
      link:
        'https://empresas.infoempleo.com/hrtrends/modelo-mintzberg-una-organizacion-estructurada-la-empresa',
    },
    {
      referencia:
        'Gerente, D. (2011). Teoría de Tichy (Administración del Cambio Estratégico). ',
      link:
        'http://doctorgerente.blogspot.com/2011/05/teoria-de-tichy-administracion-del.html',
    },
    {
      referencia:
        'Mirnaethel1 (2015). Diagnóstico organizacional. [presentación de diapositivas]. ',
      link:
        'https://es.slideshare.net/mirnaethel1/modulo3-diagnostico-organizacional',
    },
    {
      referencia:
        'PAD-Escuela de Dirección. (2021). Aprende cómo hacer un diagnóstico organizacional altamente efectivo. ',
      link:
        'https://blog.pad.edu/como-realizar-un-diagnostico-completo-de-tu-organizacion',
    },
    {
      referencia:
        'Reflexiona y Aprende. (2019). El Modelo de Seis-Cajas de Marvin Weisbord (Modelo de Weisbord). ',
      link:
        'http://www.reflectlearn.org/es/discover/el-modelo-de-seis-cajas-de-marvin-weisbord-modelo-de-weisbord',
    },
  ],
  glosario: [
    {
      termino: 'Cadena de valor',
      significado:
        'Herramienta para medir, analizar y contextualizar la situación actual de una empresa y las actividades que aportan valor a la misma.',
    },
    {
      termino: 'Diagnóstico funcional',
      significado:
        'Actividad realizada al inicio del proceso de cambio a mejoramiento continuo, para examinar cómo se encuentra la empresa y donde focalizar esfuerzos para lograrlo.',
    },
    {
      termino: 'Pirognóstico',
      terminoHtml: '<em>Pirognóstico</em>',
      significado:
        'ensayo sin componentes reactivos, quiere decir, reconocimiento de los componentes, mediante la aplicación adecuada del fuego.',
    },
    {
      termino: 'FODA',
      significado:
        'Son las iniciales de Fortalezas, Oportunidades, Debilidades y Amenazas que se aplican en una empresa.',
    },
    {
      termino: 'Logística interna',
      significado:
        'Son todas las acciones que están relacionadas con la gestión de stocks o inventarios, desde su recepción hasta su participación en el proceso productivo.',
    },
    {
      termino: 'Modelo de las 7S',
      significado:
        'Adopta su nombre por las siete dimensiones sobre las que basa su efectividad y está enfocado en analizar y mejorar la efectividad en las organizaciones.',
    },
    {
      termino: 'Modelo organizacional de Mintzberg',
      terminoHtml: 'Modelo organizacional de <em>Mintzberg</em>',
      significado:
        'Modelo empresarial de descripción de estructuras y organización de las empresas, formulado y planteado por Henry Mintzberg para con ello ser una guía o faro de cómo comprenderlas, clasificarlas y diseñar las nuevas estructuras de las empresas.',
    },
  ],
  complementario: [
    {
      texto: 'Excelencia, (2016). Análisis del contexto de la organización.',
      tipo: 'Página web',
      link:
        'https://www.escuelaeuropeaexcelencia.com/2016/09/analisis-del-contexto-la-organizacion/',
    },
    {
      texto:
        'Mirnaethel1 (2015). Diagnóstico organizacional. [presentación de diapositivas].',
      tipo: 'Página web',
      link:
        'https://es.slideshare.net/mirnaethel1/modulo3-diagnostico-organizacional',
    },
    {
      texto:
        'Sergenet, M. (2017 octubre). La gestión de procesos como mejora continua [Web log post]. ',
      tipo: 'Blog',
      link:
        'https://www.datadec.es/blog/gestion-de-procesos-como-mejora-continua',
    },
    {
      texto:
        'Isotools excellence, (2020 enero 8). Método <em>just in time</em>, la filosofía de la reducción en las organizaciones. Calidad y excelencia. ',
      tipo: 'Página web',
      link:
        'https://www.isotools.org/2020/01/08/metodo-just-in-time-la-filosofia-de-la-reduccion-en-las-organizaciones/',
    },
    {
      texto: 'Dynamic, (2020). La cadena de valor de Michael Porter. ',
      tipo: 'Página web',
      link: 'https://www.dynamicgc.es/cadena-de-valor-porter/',
    },
    {
      texto:
        'Mejía y Miranda (2015). Implementación de la técnica de las 5S como metodología parta el mejoramiento continuo. ',
      tipo: 'Pdf',
      link:
        'http://repositorio.ulvr.edu.ec/bitstream/44000/732/1/T-ULVR-0906.pdf',
    },
    {
      texto:
        'ISOTools Excelence. (2020 enero 8). Método <em>just in time</em>, la filosofía de la reducción en las organizaciones. ',
      tipo: 'Blog',
      link:
        'https://www.isotools.org/2020/01/08/metodo-just-in-time-la-filosofia-de-la-reduccion-en-las-organizaciones/',
    },
    {
      texto:
        'Bizneo HR Software. (2021). El método Kaizen: mejora continuamente tu empresa. [Web log post]. ',
      tipo: 'Blog',
      link: 'https://www.bizneo.com/blog/metodo-kaizen/',
    },
    {
      texto: 'Guerrero, Vladimir. (2017). ¿Qué es six sigma? ',
      tipo: 'Página web',
      link: 'http://leansolutions.co/que-es-six-sigma/',
    },
    {
      texto:
        'Byspel, (2018,07,25). Técnicas de análisis de requerimientos, ¿cuáles son? y ¿para qué sirven?',
      tipo: 'Blog',
      link:
        'https://byspel.com/tecnicas-de-analisis-de-requerimientos-cuales-son/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'José Luis Rangel Ayala',
        cargo: 'Experto temático',
        centro:
          'Centro de la Industria, la Empresa y los Servicios. CIES Regional Norte de Santander',
      },
      {
        nombre: 'Gloria Lida Alzate Suárez',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Evaluadora instruccional',
        centro: 'Regional Distrito Capital- Centro de gestión industrial.',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Carlos Julián Ramirez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
