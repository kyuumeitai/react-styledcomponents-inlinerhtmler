const fichas = [
  {
    nombre: 'Carolina Tohá',
    cargo: 'Ministerio del Interior y Seguridad Pública',
    edad: '58',
    partido: 'PPD',
    profesion: 'Cientista política',
    nivelAcademico: 'Doctora en Ciencias Políticas',
    colegio: 'Colegio Francisco de Miranda',
    universidad: 'Università degli Studi di Milano',
    biografia:
      'Carolina Tohá es cientista política. Fue Diputada entre 2002 y 2009 para luego asumir como ministra de la Segpres durante el gobierno de Michelle Bachelet. Posteriormente se desempeñó como alcaldesa de Santiago durante el periodo 2012-2016. ',
    url: 'https://www.latercera.com/politica/noticia/carolina-toha-el-revival-de-una-figura-historica-de-la-ex-concertacion/4Q3ONGCPWVG33ADLHEG6LD5TF4/',
    foto: 'https://www.latercera.com/resizer/uBgdMmIpR8dJssFQsD3OCK_BVv4=/0x300/filters:quality(75)/arc-anglerfish-arc2-prod-copesa/public/FC5BJCUFOBAWDMPK4NNNJHQ4MY.jpg',
  },
  {
    nombre: 'Alberto van Klaveren',
    cargo: 'Ministerio de Relaciones Exteriores',
    edad: '74',
    partido: 'Independiente (cercano al PPD)',
    profesion: 'Abogado',
    nivelAcademico: 'Doctor en ciencias políticas',
    colegio: '',
    universidad: 'Universidad de Chile',
    biografia:
      'De trayectoria en el mundo diplomático, el abogado Alberto van Klaveren ejerció como subsecretario de Relaciones Exteriores durante el primer gobierno de Michelle Bachelet y como embajador de Chile en Bélgica durante la administración de Ricardo Lagos. También fue agente de Chile ante la Corte Internacional de Justicia por la demanda peruana. ',
    url: 'https://www.latercera.com/politica/noticia/quien-es-alberto-van-klaveren-ministro-de-relaciones-exteriores-de-gabriel-boric/62FZT27PZFFC5JQPIHO4UKBZ3U/',
    foto: 'https://www.latercera.com/resizer/EY3BKZsbvv27yhnJYwSsfcrnnD4=/0x300/filters:quality(75)/arc-anglerfish-arc2-prod-copesa/public/ZDDZRVMS3VAWXPHQPVBHLLZSWA.jpg',
  },
  {
    nombre: 'Maya Fernández',
    cargo: 'Ministerio de Defensa',
    edad: '51',
    partido: 'Partido Socialista',
    profesion: 'Bióloga y Médica Veterinaria',
    nivelAcademico: 'Universitario',
    colegio: 'Escuela Primaria Solidaridad con Chile (Cuba)',
    universidad: 'Universidad de Chile',
    biografia:
      'Maya Fernández es militante del Partido Socialista. Tiene dos títulos profesionales: es bióloga y veterinaria. Es nieta del expresidente Salvador Allende y sobrina de la senadora Isabel Allende. Vivió en el exilio en Cuba desde 1973 hasta 1990. Ha sido diputada por dos periodos y concejala de Ñuñoa. Presidió la Cámara en 2018.',
    url: 'https://www.latercera.com/politica/noticia/quien-es-maya-fernandez-la-nueva-ministra-de-defensa-de-gabriel-boric/XD4G4O2QRZF2DPV5C4ZKGESX6M/',
    foto: 'https://www.latercera.com/resizer/R-kX9CxagoTs5Wnpe7Rn6cupyFg=/0x300/filters:quality(75)/arc-anglerfish-arc2-prod-copesa/public/NBFAKGAJS5GOHC6XNEV2CUHMZU.jpg',
  },
  {
    nombre: 'Mario Marcel',
    cargo: 'Ministerio de Hacienda',
    edad: '63',
    partido: 'Exmilitante del Partido Socialista',
    profesion: 'Ingeniero Comercial',
    nivelAcademico: 'M. Phil. en Economía',
    colegio: 'Instituto Nacional, Santiago',
    universidad: 'Universidad de Chile',
    biografia:
      'El Presidente electo optó por el actual presidente del Banco Central para dirigir la sede ministerial de Teatinos 120. El economista es consejero del instituto emisor desde 2015 y preside el organismo desde 2016. De hecho el Presidente Sebastián Piñera el año pasado optó por renovarle el cargo por otros cinco años. Es exmilitante del Partido Socialista y su nombre ha estado presente en cargos macroeconómicos en casi todos los gobiernos desde el retorno a la democracia. En el último tiempo fue un férreo opositor a los retiros anticipados de los fondos previsionales, lo que lo llevó a enfrentarse a parlamentarios del Frente Amplio y del Partido Comunista.',
    url: 'https://www.latercera.com/politica/noticia/quien-es-mario-marcel-el-nuevo-ministro-de-hacienda-de-gabriel-boric/K6M7AIMLXZHSJLKUH2PDYBJO5A/',
    foto: 'https://www.latercera.com/resizer/5qucg8ezlediT4k7KWPM2-xKkMU=/0x300/filters:quality(75)/arc-anglerfish-arc2-prod-copesa/public/NB5RDMTATBGXDBYRGH7BBEBKJY.jpg',
  },
  {
    nombre: 'Álvaro Elizalde ',
    cargo: 'Ministerio Secretaría General de la Presidencia',
    edad: '53',
    partido: 'Partido Socialista',
    profesion: 'Abogado',
    nivelAcademico: '',
    colegio: 'Instituto de Humanidades Luis Campino de Santiago',
    universidad: 'Universidad de Chile',
    biografia:
      'Es abogado de la Universidad de Chile. Fue vocero durante el segundo gobierno de Michelle Bachelet. Antes de asumir se desempeñaba como senador.',
    url: 'https://www.latercera.com/politica/noticia/del-senado-al-gabinete-alvaro-elizalde-asume-en-la-segpres-en-reemplazo-de-ana-lya-uriarte/WC5NDK2YGVFYLKFNET64Y54IWA/',
    foto: 'https://www.latercera.com/resizer/TMHsI1MtG4VCPbeehp12ZKrdmZc=/0x300/filters:quality(75)/arc-anglerfish-arc2-prod-copesa/public/VZCLJZOT2ZG2RKEHBUS66TBJ5M.jpg',
  },
  {
    nombre: 'Camila Vallejo',
    cargo: 'Ministerio Secretaría General de Gobierno',
    edad: '35',
    partido: 'Partido Comunista',
    profesion: 'Geógrafa',
    nivelAcademico: 'Universitario',
    colegio: 'Colegio Raimapu, La Florida',
    universidad: 'Universidad de Chile',
    biografia:
      'Camila Vallejo es geógrafa de la Universidad de Chile. Ha sido diputada durante dos periodos parlamentarios. Es militante del Partido Comunista y en 2011 fue presidenta de la Fech. Ese año además fue vocera de la Confech. En 2012 asumió como vicepresidenta de la Fech, el mismo año en que Boric le tocó presidir la mesa de esa federación estudiantil.',
    url: 'https://www.latercera.com/politica/noticia/quien-es-camila-vallejo-la-nueva-ministra-vocera-de-gobierno-de-gabriel-boric/TMTFGJBKWRFDFK5PLYY54KPB4E/',
    foto: 'https://www.latercera.com/resizer/qo29MXVzKULQvPS8l4yU43ZJgxo=/0x300/filters:quality(75)/arc-anglerfish-arc2-prod-copesa/public/6RA2ODUTENDR3EBJKAOFZO7YL4.jpg',
  },
  {
    nombre: 'Nicolás Grau',
    cargo: 'Ministerio de Economía, Fomento y Turismo',
    edad: '40',
    partido: 'Convergencia Social',
    profesion: 'Ingeniero Comercial',
    nivelAcademico: 'Magister y Ph.D. en Economía',
    colegio: 'Colegio Raimapu, La Florida',
    universidad: 'Universidad de Chile',
    biografia:
      'Nicolás Grau es economista y milita en Convergencia Social. Tiene un doctorado en Economía de la Universidad de Pennsylvania. Es profesor del Departamento de Economía de la Universidad de Chile y ha sido investigador adjunto en el Centro de Estudios de Conflicto y Cohesión Social. Fue presidente de la FECH en 2006.',
    url: 'https://www.latercera.com/politica/noticia/quien-es-nicolas-grau-el-nuevo-ministro-de-economia-de-gabriel-boric/LELPOC6FHZDZ3DELICVPNOSTYA/',
    foto: 'https://www.latercera.com/resizer/OotEq3kjQAmozGUT0pdkgIEv-VQ=/0x300/filters:quality(75)/arc-anglerfish-arc2-prod-copesa/public/OPP5N3SKVVEM7KRKIIIU3YYIA4.jpg',
  },
  {
    nombre: 'Javiera Toro',
    cargo: 'Ministerio de Desarrollo Social y Familia',
    edad: '35',
    partido: 'Comunes',
    profesion: 'Abogada',
    nivelAcademico: 'Universitario',
    colegio: 'Colegio la Girouette, Las Condes',
    universidad: 'Universidad de Chile',
    biografia:
      'Javiera Toro es abogada de la Universidad de Chile. Fue presidenta de Comunes y es directora de la Fundación Nodo XXI. Ha trabajado como abogada en estudios privados.',
    url: '',
    foto: 'https://www.latercera.com/resizer/skmi57ieLoDu6MVqqVoBYpb2zn0=/0x300/filters:quality(75)/arc-anglerfish-arc2-prod-copesa/public/OMLEPHKHJNFMFNRRFKSHKRWMMQ.jpg',
  },
  {
    nombre: 'Nicolás Cataldo',
    cargo: 'Ministerio de Educación',
    edad: '39',
    partido: 'Partido Comunista',
    profesion: 'Profesor de Historia y Ciencias Sociales',
    nivelAcademico: '',
    colegio: 'Liceo Eduardo de la Barra',
    universidad: 'Universidad de Valparaíso',
    biografia:
      'Estudió pedagogía en la Universidad de Valparaíso, trabajó como asesor técnico del Departamento de Educación y Perfeccionamiento del Colegio de Profesores y fue parte del equipo editorial de la Revista Docencia.Fue subsecretario de Educación entre marzo y septiembre de 2022. ',
    url: 'https://www.latercera.com/la-tercera-pm/noticia/pc-amarra-su-destino-al-gobierno-y-un-comunista-asume-por-primera-vez-jefatura-de-ministerio-e-educacion/UDEDXDMBANGN5PEDPR3MOKCXJM/',
    foto: 'https://www.latercera.com/resizer/Dp6t-0w7XctRQ09HP0xbJWyFnMA=/0x300/filters:quality(75)/arc-anglerfish-arc2-prod-copesa/public/35KYO5RIVRHJLPBGKUY3CY6PNE.jpg',
  },
  {
    nombre: 'Luis Cordero',
    cargo: 'Ministerio de Justicia',
    edad: '50',
    partido: 'Independiente',
    profesion: 'Abogado',
    nivelAcademico: 'Magíster en Derecho y doctor en Derecho',
    colegio: 'Liceo Cervantes',
    universidad: 'Universidad de la República',
    biografia:
      'Luis Cordero es abogado de la Universidad de la República y académico de Derecho Administrativo de la Facultad de Derecho de la Universidad de Chile. También se desempeñó investigador senior del Centro de Regulación y Competencia (RegCom) de esa misma casa de estudios. Como administrativista Cordero fue durante muchos años un litigante de varias causas en tribunales ambientales, pero también en tribunales ordinarios. Antes de entrar al gobierno fue socio del estudio de abogados FerradaNehme. Se dedicó por años a estudiar la jurisprudencia de la Tercera Sala de la Corte Suprema e incluso, en su momento, fue sondeado como posible carta para ser nombrado contralor.',
    url: 'https://www.latercera.com/politica/noticia/quien-es-luis-cordero-vega-el-nuevo-ministro-de-justicia/KXXLS5IS7FF2BH5BI6QQM3QSBM/',
    foto: 'https://www.latercera.com/resizer/3d1E4lF2A7js0OHPSFWIRVv-NJw=/arc-anglerfish-arc2-prod-copesa/public/XBR7X32FKRG65MJF63TTMFTDQI.jpg',
  },
  {
    nombre: 'Jeannette Jara',
    cargo: 'Ministerio de Trabajo y Previsión Social',
    edad: '49',
    partido: 'Partido Comunista',
    profesion: 'Abogada',
    nivelAcademico: 'Magíster en Administración Pública',
    colegio: 'Liceo Isaura Dinator de Guzmán, Santiago',
    universidad: 'Universidad Central',
    biografia:
      'Jeannete Jara es abogada de la Universidad Central. Tiene estudios en derecho tributario y también de magíster en Gerencia Pública. Fue subsecretaria de Previsión Social durante el segundo gobierno de la expresidenta Bachelet. Es administradora municipal en la comuna de Santiago.',
    url: 'https://www.latercera.com/politica/noticia/quien-es-jeannette-jara-la-nueva-ministra-de-trabajo-de-gabriel-boric/66DNYJQMDRAZXDAT5LAW5QQB4E/',
    foto: 'https://www.latercera.com/resizer/5-1FQEGQB6P3WsvbS8OPSslsoGo=/0x300/filters:quality(75)/arc-anglerfish-arc2-prod-copesa/public/Y4WD77CJ2VB4LOI7675GNC3HO4.jpg',
  },
  {
    nombre: 'Jessica López Saffie',
    cargo: 'Ministerio de Obras Públicas',
    edad: '66',
    partido: 'Partido Socialista',
    profesion: 'Economista',
    nivelAcademico: '',
    colegio: 'Liceo Nº1 Javiera Carrera',
    universidad: 'Universidad de Chile',
    biografia:
      'Jessica López es ingeniera comercial con mención en Economía de la Universidad de Chile. Su trayectoria ha estado vinculada al Banco Estado, institución con la que ha estado ligada por más de 30 años en cargos como la contraloría, vicepresidencia y la gerencia general ejecutiva. En abril de 2022 fue nombrada en el máximo cargo de Banco Estado por el Presidente Gabriel Boric, transformándose así en la primera mujer en asumir la presidencia. Es militante del PS y a lo largo de su carrera ha trabajado como directora de distintas empresas.',
    url: 'https://www.latercera.com/pulso/noticia/jessica-lopez-una-historica-ejecutiva-que-hizo-carrera-en-bancoestado-asume-en-el-mop/DY2AEXRG3FHQFECFEVCRGVUYOQ/',
    foto: 'https://www.latercera.com/resizer/HsJWLMkZbAVhXKuFITHpDinyGE8=/0x300/filters:quality(75)/arc-anglerfish-arc2-prod-copesa/public/4H7OTCM5HVEYLPC45OHKRI6QHA.jpg',
  },
  {
    nombre: 'Ximena Aguilera',
    cargo: 'Ministerio de Salud',
    edad: '58',
    partido: '',
    profesion: 'Médica ',
    nivelAcademico: 'Magíster en Salud Pública',
    colegio: '',
    universidad: 'Universidad de Chile',
    biografia:
      'Ximena Aguilera es médico cirujana de la Universidad de Chile. Antes de asumir como Ministra se desempeñó como directora del Centro de Epidemiología y Políticas de Salud de la Facultad de Medicina de la Universidad del Desarrollo (UDD). Entre los años 1999 y 2005 fue fue jefa nacional de Epidemiología en el Ministerio de Salud y jefa de la división de Planificación Sanitaria. Además, durante la pandemia formó parte del Consejo Asesor Externo.',
    url: 'https://www.latercera.com/nacional/noticia/quien-es-la-nueva-ministra-de-salud-ximena-aguilera-presidio-la-comision-de-respuesta-pandemica-y-en-la-ops-lucho-contra-la-influenza-h1n1/VMU3LVMWGNHIPHGFSHYXOCXAIU/',
    foto: 'https://www.latercera.com/resizer/K-9vcjd_Z9SwxqpKgssDoKVy3FI=/0x300/filters:quality(75)/arc-anglerfish-arc2-prod-copesa/public/OFJ6QPU43ND47PJ5BRA73PAOPU.jpg',
  },
  {
    nombre: 'Carlos Montes',
    cargo: 'Ministerio de Vivienda y Urbanismo',
    edad: '77',
    partido: 'Partido Socialista',
    profesion: 'Egresado de Ingeniería Comercial',
    nivelAcademico: 'Universitario',
    colegio: "Saint George's College",
    universidad: 'Pontificia Universidad Católica',
    biografia:
      'Carlos Montes es senador por la Región Metropolitana. Tiene una larga carrera política que incluye además seis periodos parlamentarios consecutivos como diputado. Es egresado de Ingeniería Comercial de la Universidad Católica y fue presidente del Senado en 2018.',
    url: 'https://www.latercera.com/politica/noticia/quien-es-carlos-montes-el-nuevo-ministro-de-vivienda-y-urbanismo-de-gabriel-boric/4PTPGY7FTJGS5DOL2O2RETXSCU/',
    foto: 'https://www.latercera.com/resizer/RwtFx-PduuqWw19xYzjHJbwjyxM=/0x300/filters:quality(75)/arc-anglerfish-arc2-prod-copesa/public/4RC5OGT5BNDWPGBELQCZLVLL7I.jpg',
  },
  {
    nombre: 'Esteban Valenzuela',
    cargo: 'Ministerio de Agricultura',
    edad: '57',
    partido: 'Federación Regionalista Verde Social',
    profesion: 'Periodista',
    nivelAcademico: 'Magíster en Desarrollo y Gestión Pública',
    colegio: "Instituto O'Higgins, Rancagua",
    universidad: 'Pontificia Universidad Católica',
    biografia:
      'Esteban Valenzuela es militante del Frente Regionalista Verde Social. Es periodista, cientista político e historiador. Ha sido asesor sindical y director de Convergencias Regionalistas de Estudios Aplicados del Sur (Creasur).',
    url: 'https://www.latercera.com/politica/noticia/quien-es-esteban-valenzuela-el-nuevo-ministro-de-agricultura-de-gabriel-boric/KYI4ASZGJBFTZE3FYEAPZ6XUDY/',
    foto: 'https://www.latercera.com/resizer/lQ0jxEHJ5t3yAqqZIDNOKdZumYE=/0x300/filters:quality(75)/arc-anglerfish-arc2-prod-copesa/public/BIAIDIIXGVCRBDUC6QQS7ZE77I.jpg',
  },
  {
    nombre: 'Aurora Williams',
    cargo: 'Ministerio de Minería',
    edad: '61',
    partido: 'Partido Radical',
    profesion: 'Ingeniera Comercial',
    nivelAcademico: 'Magíster en Dirección y Administración de Empresa',
    colegio: '',
    universidad: 'Universidad Católica del Norte',
    biografia:
      'Es ingeniera comercial de la Universidad Católica del Norte, diplomada en Ingeniería Industrial de la Universidad de Antofagasta y tiene dos máster en Dirección y Administración de Empresas. Fue seremi de Obras Públicas durante el primer gobierno de Bachelet y ocupó el cargo de presidenta del directorio de la estatal Empresa Nacional de Minería (ENAMI) y de la Comisión Chilena del Cobre.',
    url: 'https://www.latercera.com/politica/noticia/aurora-williams-retorna-al-ministerio-de-mineria-reemplazara-a-marcela-hernando/XM64TGF5IBF75I4PR66BYW3KR4/',
    foto: 'https://www.latercera.com/resizer/C5w7d0uTY6XPspGM77Tlg1t-aF8=/0x300/filters:quality(75)/arc-anglerfish-arc2-prod-copesa/public/ALHOWQ6Z5NF25OPYRRLKARODLY.jpg',
  },
  {
    nombre: 'Juan Carlos Muñoz',
    cargo: 'Ministerio de Transportes y Telecomunicaciones',
    edad: '53',
    partido: 'Independiente',
    profesion: 'Ingeniero Civil',
    nivelAcademico: 'Doctor en Ingeniería Civil y Ambiental',
    colegio: 'Craighouse School',
    universidad: 'Pontificia Universidad Católica',
    biografia:
      'Juan Carlos Muñoz es ingeniero civil de la Universidad Católica. Toda su carrera la ha dedicado a los temas de transportes, desde el mundo público y también desde la academia. Entre 2003 y 2004 fue asesor del Ministro de Transportes y Telecomunicaciones para el plan Transantiago. En 2008 también fue miembro del comité de expertos creado por esa misma cartera para mejorar el proyecto Transantiago. Estuvo en el directorio del Metro regional de Valparaíso. También ejerció como director de Metro y asesor de la Dirección de Transporte Público Metropolitano',
    url: 'https://www.latercera.com/politica/noticia/quien-es-juan-carlos-munoz-el-nuevo-ministro-de-ministerio-de-transportes-y-telecomunicaciones-de-gabriel-boric/3Y33LNMB6FBINDY65GBMFIUSHU/',
    foto: 'https://www.latercera.com/resizer/We0B10QcSGI-HxQ_3N0tgAXFxNY=/0x300/filters:quality(75)/arc-anglerfish-arc2-prod-copesa/public/MTOFCJDV2FCSLMTUGN3Q4P7XGA.jpg',
  },
  {
    nombre: 'Marcela Sandoval',
    cargo: 'Ministerio de Bienes Nacionales',
    edad: '49',
    partido: 'Revolución Democrática',
    profesion: 'Periodista',
    nivelAcademico: 'Magíster en Literatura Hispanoamericana',
    colegio: 'Colegio Sagrado Corazón de Rancagua',
    universidad: 'Universidad de Santiago',
    biografia:
      'Es periodista de la Universidad de Santiago de Chile (USACH) y Magíster en Literatura Hispanoamericana por la misma casa de estudios. Fue dirigenta del Colegio de Periodistas e integrante de la Red de periodistas feministas. Asimismo, es militante de Revolución Democrática, ocupando distintos cargos como dirigenta nacional y vicepresidenta. Entre 2015 y 2016, fue secretaria general de RD.',
    url: 'https://www.latercera.com/politica/noticia/cambio-de-gabinete-marcela-sandoval-rd-asumira-como-ministra-de-bienes-nacionales/2AHJPJ4LKVFNDOPIO5WSJANDKY/',
    foto: 'https://www.latercera.com/resizer/TZjLVCSBOZ-SjXfEPZG_peO-wv4=/0x300/filters:quality(75)/arc-anglerfish-arc2-prod-copesa/public/J3F52ST6VJBVPCB3CA4NE5J34M.jpg',
  },
  {
    nombre: 'Diego Pardow',
    cargo: 'Ministerio de Energía',
    edad: '43',
    partido: 'Convergencia Social',
    profesion: 'Abogado',
    nivelAcademico: 'Magister y Doctor en Derecho',
    colegio: "Colegio Granville's College",
    universidad: 'Universidad de Chile',
    biografia:
      'Diego Pardow es abogado de la Universidad de Chile. Además tiene un magíster y un doctorado en Derecho en la Universidad de California, Berkeley. Su carrera ha sido principalmente académica, siendo profesor de la Facultad de Derecho de la Universidad de Chile. A su vez es director ejecutivo de Espacio Público, cargo que tiene suspendido. Es cercano a Convergencia Social y un asesor cercano de Boric. Durante su campaña fue vocero de la candidatura y además ejerció como uno de los coordinadores programáticos.',
    url: 'https://www.latercera.com/pulso/noticia/asesor-del-segundo-piso-diego-pardow-es-el-nuevo-ministro-de-energia/P7A5HRABDRHHLPDFTTE4Q42EN4/',
    foto: 'https://www.latercera.com/resizer/0f7hLsrvhaNM-iNRDAjZuFOkOtc=/0x300/filters:quality(75)/arc-anglerfish-arc2-prod-copesa/public/5GGKXSWQMRHD3OVDTR4NJFDJNA.jpg',
  },
  {
    nombre: 'Maisa Rojas',
    cargo: 'Ministerio de Medio Ambiente',
    edad: '51',
    partido: '',
    profesion: 'Licenciatura en Física',
    nivelAcademico: 'Doctorado en Física de la Atmósfera',
    colegio: 'Colegio Instituto Santa María',
    universidad: 'Universidad de Chile',
    biografia:
      'Maisa Rojas es una reconocida climatóloga chilena. Es independiente. También es académica de la Universidad de Chile y Directora del Centro de Ciencia del Clima y la Resiliencia. Estudió física en la Universidad de Chile y un doctorado en física atmosférica en la Universidad de Oxford. Fue una de las autoras del informe del Panel Intergubernamental de Cambio Climático (IPCC). También se desempeñó como coordinadora del comité científico asesor para la COP25.',
    url: 'https://www.latercera.com/politica/noticia/quien-es-maisa-rojas-la-nueva-ministra-de-medio-ambiente-de-gabriel-boric/WABEL2PBEFA2ZPTZYFDFKAU6PY/',
    foto: 'https://www.latercera.com/resizer/sNT08c4guG8FMBsRS2uenlBj3VQ=/0x300/filters:quality(75)/arc-anglerfish-arc2-prod-copesa/public/5XPGSF2DIRA5VKBEYPQNKSOJXM.jpg',
  },
  {
    nombre: 'Carolina Arredondo',
    cargo: 'Ministerio de las Culturas, las Artes y el Patrimonio',
    edad: '37',
    partido: 'Independiente',
    profesion: 'Actriz ',
    nivelAcademico: '',
    colegio: 'Colegio particular San Francisco de Asis, La Florida',
    universidad: 'Universidad Mayor',
    biografia:
      'Es actriz, parte de una familia dedicada al rubro de la actuación que incluye a sus padres Claudio Arredondo y Carolina Marzán. Ha participado en series como Los Venegas, Vigías del Sur, y en teleseries como Yo soy Lorenzo, Floribella y Martín Rivas. ',
    url: 'https://www.latercera.com/culto/2023/08/16/carolina-arredondo-la-actriz-de-los-venegas-que-debera-revitalizar-el-golpeado-ministerio-de-las-culturas/',
    foto: 'https://www.latercera.com/resizer/kqaC4SWoize1oNb3Rp5FGayrLfQ=/0x300/filters:quality(75)/arc-anglerfish-arc2-prod-copesa/public/WDN64QFHOBAQXOLNBM43REDG2M.jpg',
  },
  {
    nombre: 'Jaime Pizarro',
    cargo: 'Ministerio de Deporte',
    edad: '59',
    partido: 'Independiente (cercano al PPD)',
    profesion: 'Director técnico de fútbol',
    nivelAcademico: '-',
    colegio: '',
    universidad: '-',
    biografia:
      'Jaime Pizarro es un exfutbolista y actual director técnico deportivo. Jugó en clubes como Colo Colo, la Universidad Católica y en planteles de Argentina, Ecuador y México. Es cercano al PPD, partido que lo ha impulsado en distintas candidaturas parlamentarias y se desempeñó como subsecretario del Deporte durante el primer gobierno de Michelle Bachelet, puesto que ocupó por dos años.',
    url: 'https://www.latercera.com/politica/noticia/quien-es-jaime-pizarro-ministro-del-deporte-de-gabriel-boric/CFOHRP2DUBF67KPENPQFGOUXRQ/',
    foto: 'https://www.latercera.com/resizer/sLaZce0O-O6bdmI40mgsDqIqT7g=/0x300/filters:quality(75)/arc-anglerfish-arc2-prod-copesa/public/63XC7LPYXFFTFNSEMEK6P5NLI4.jpg',
  },
  {
    nombre: 'Antonia Orellana',
    cargo: 'Ministerio de la Mujer y la Equidad de Género',
    edad: '33',
    partido: 'Convergencia Social',
    profesion: 'Periodista',
    nivelAcademico: 'Universitario',
    colegio: 'Liceo Tajamar, Providencia',
    universidad: 'Universidad de Chile',
    biografia:
      'Antonia Orellana es periodista y militante de Convergencia Social. Su carrera ha estado siempre enfocada en temas de género. Forma parte de la Red Chilena Contra la Violencia hacia las Mujeres. Fue candidata a convencional por el distrito 10, pero no logró su escaño. Es parte del círculo más íntimo de Boric.',
    url: 'https://www.latercera.com/politica/noticia/quien-es-antonia-orellana-la-nueva-ministra-de-de-la-mujer-y-la-equidad-de-genero-de-gabriel-boric/YJTVWXNJXJDX7J4AVFIABM4ASE/',
    foto: 'https://www.latercera.com/resizer/CthA2q0oNq_Yvdy67pWdiKmERHo=/0x300/filters:quality(75)/arc-anglerfish-arc2-prod-copesa/public/6LKW7GK7TBCQLHBDZBUVLPY7JE.jpg',
  },
  {
    nombre: 'Aisén Etcheverry',
    cargo: 'Ministerio de Ciencia, Tecnología, Conocimiento e Innovación',
    edad: '42',
    partido: 'Independiente',
    profesion: 'Abogada',
    nivelAcademico: 'Master of Law ',
    colegio: 'Alianza Francesa',
    universidad: 'Universidad de Chile',
    biografia:
      'Aisén Etcheverry es abogada y magister de la Universidad de San Francisco.  Estuvo a cargo desde 2021 en la Agencia Nacional de Investigación y Desarrollo, ANID (ex Conicyt).',
    url: 'https://www.latercera.com/politica/noticia/quien-es-aisen-etcheverry-ministra-ciencia-tecnologia-conocimiento-e-innovacion-de-gabriel-boric/S6V6SZESARCV7ELCWAG4RPLPJA/',
    foto: 'https://www.latercera.com/resizer/XVyHWrp7p3SoojdGLEVW3VIuk5A=/0x300/filters:quality(75)/arc-anglerfish-arc2-prod-copesa/public/FL5TACCPNRBWVA3TICLHKBR2YY.jpg',
  },
]

export default fichas
