const fichas = [
  {
    nombre: 'Izkia Siches',
    cargo: 'Ministerio del Interior y Seguridad Pública',
    edad: '35',
    partido: 'Independiente',
    profesion: 'Médica',
    nivelAcademico: 'Magíster en Salud Pública',
    colegio: "Instituto de Humanidades Bernardo O'Higgins, Maipú",
    universidad: 'Universidad de Chile',
    biografia:
      'Izkia Siches es médica de la Universidad de Chile. Hizo su especialidad de Medicina Interna con una beca estatal del Minsal en el Hospital San Juan de Dios. Fue presidenta del Colegio Médico, pero renunció a su cargo para asumir como jefa de campaña de Boric. Cuando era estudiante universitaria, militó en las Juventudes Comunistas. Actualmente es independiente.',
    url:
      'https://www.latercera.com/politica/noticia/quien-es-izkia-siches-la-nueva-ministra-del-interior-y-seguridad-publica-de-gabriel-boric/JNNYB3XYQJCAPDOZVZWJUKSCCI/',
    foto:
      'https://www.latercera.com/resizer/ABn60NR3Pq11YA4S3-kADBgTbLg=/arc-anglerfish-arc2-prod-copesa/public/G5ZF7KPCQBBRXDDWI3NA3AF4FQ.jpg',
  },
  {
    nombre: 'Antonia Urrejola',
    cargo: 'Ministerio de Relaciones Exteriores',
    edad: '53',
    partido: 'Independiente cercana al Partido Socialista',
    profesion: 'Abogada',
    nivelAcademico:
      'Postítulo en Derechos Humanos y Procesos de Democratización',
    colegio: "Saint George's College, Vitacura",
    universidad: 'Universidad de Chile',
    biografia:
      'Antonia Urrejola (53) es cercana al Partido Socialista, abogada de la Universidad de Chile y ha estado vinculada a los derechos humanos. Urrejola ha tenido un largo historial como asesora de diversos gobiernos, tanto de la Concertación como de la Nueva Mayoría. Fue asesora de Mideplan durante la administración del expresidente Frei, luego asesora del Ministerio del Interior en el mandato de Lagos. También fue asesora del exsecretario general de la OEA José Miguel Insulza. Además fue asesora en derechos humanos durante el segundo gobierno de Bachelet. En el último tiempo fue comisionada y expresidenta de la CIDH.',
    url:
      'https://www.latercera.com/politica/noticia/quien-es-antonia-urrejola-la-nueva-ministra-de-relaciones-exteriores-de-gabriel-boric/PON6JSXZKNFUFLWMU75WRBOHSE/',
    foto:
      'https://www.latercera.com/resizer/Vv1K-fX89GGsQBnpBIu0EZgMxGE=/arc-anglerfish-arc2-prod-copesa/public/IOKNAYXYFBBRFLAHR5J7N7XXTM.jpg',
  },
  {
    nombre: 'Maya Fernández',
    cargo: 'Ministerio de Defensa',
    edad: '50',
    partido: 'Partido Socialista',
    profesion: 'Bióloga y Médica Veterinaria',
    nivelAcademico: 'Universitario',
    colegio: 'Escuela Primaria Solidaridad con Chile (Cuba)',
    universidad: 'Universidad de Chile',
    biografia:
      'Maya Fernández es militante del Partido Socialista. Tiene dos títulos profesionales: es bióloga y veterinaria. Es nieta del expresidente Salvador Allende y sobrina de la senadora Isabel Allende. Vivió en el exilio en Cuba desde 1973 hasta 1990. Ha sido diputada por dos periodos y concejala de Ñuñoa. Presidió la Cámara en 2018.',
    url:
      'https://www.latercera.com/politica/noticia/quien-es-maya-fernandez-la-nueva-ministra-de-defensa-de-gabriel-boric/XD4G4O2QRZF2DPV5C4ZKGESX6M/',
    foto:
      'https://www.latercera.com/resizer/Dzldq_2ie99P4Bl7jEHQrsSmtuQ=/arc-anglerfish-arc2-prod-copesa/public/DYCRMNPXEZD5JL7LOC4NIFJEX4.jpg',
  },
  {
    nombre: 'Mario Marcel',
    cargo: 'Ministerio de Hacienda',
    edad: '62',
    partido: 'Exmilitante del Partido Socialista',
    profesion: 'Ingeniero Comercial',
    nivelAcademico: 'M. Phil. en Economía',
    colegio: 'Instituto Nacional, Santiago',
    universidad: 'Universidad de Chile',
    biografia:
      'El Presidente electo optó por el actual presidente del Banco Central para dirigir la sede ministerial de Teatinos 120. El economista es consejero del instituto emisor desde 2015 y preside el organismo desde 2016. De hecho el Presidente Sebastián Piñera el año pasado optó por renovarle el cargo por otros cinco años. Es exmilitante del Partido Socialista y su nombre ha estado presente en cargos macroeconómicos en casi todos los gobiernos desde el retorno a la democracia. En el último tiempo fue un férreo opositor a los retiros anticipados de los fondos previsionales, lo que lo llevó a enfrentarse a parlamentarios del Frente Amplio y del Partido Comunista.',
    url:
      'https://www.latercera.com/politica/noticia/quien-es-mario-marcel-el-nuevo-ministro-de-hacienda-de-gabriel-boric/K6M7AIMLXZHSJLKUH2PDYBJO5A/',
    foto:
      'https://www.latercera.com/resizer/phrzmeeonTjGzyalWcyn8di4XgY=/arc-anglerfish-arc2-prod-copesa/public/N7A2FRFGDJFOTJ566AKEJYW3TM.jpg',
  },
  {
    nombre: 'Giorgio Jackson',
    cargo: 'Ministerio Secretaría General de la Presidencia',
    edad: '34',
    partido: 'Revolución Democrática',
    profesion: 'Ingeniero civil industrial',
    nivelAcademico: 'Universitario',
    colegio: 'Colegio Alemán Thomas Morus, Providencia',
    universidad: 'Pontificia Universidad Católica',
    biografia:
      'Giorgio Jackson (34) es ingeniero de la Universidad Católica y ha sido diputado durante dos periodos parlamentarios. Es militante de Revolución Democrática y en 2011 fue presidente de la FEUC y vocero de la Confech.',
    url:
      'https://www.latercera.com/politica/noticia/quien-es-giorgio-jackson-el-nuevo-ministro-segpres-de-gabriel-boric/Q2ZDGISANZD53PBAY4CILHEZOM/',
    foto:
      'https://www.latercera.com/resizer/30cvnqApLZnKdFlizqRm51X31rY=/arc-anglerfish-arc2-prod-copesa/public/RG3DS7BUFBGRZJTFTH62S6T2QM.jpg',
  },
  {
    nombre: 'Camila Vallejo',
    cargo: 'Ministerio Secretaría General de Gobierno',
    edad: '33',
    partido: 'Partido Comunista',
    profesion: 'Geógrafa',
    nivelAcademico: 'Universitario',
    colegio: 'Colegio Raimapu, La Florida',
    universidad: 'Universidad de Chile',
    biografia:
      'Camila Vallejo (33) es geógrafa de la Universidad de Chile. Ha sido diputada durante dos periodos parlamentarios. Es militante del Partido Comunista y en 2011 fue presidenta de la Fech. Ese año además fue vocera de la Confech. En 2012 asumió como vicepresidenta de la Fech, el mismo año en que Boric le tocó presidir la mesa de esa federación estudiantil.',
    url:
      'https://www.latercera.com/politica/noticia/quien-es-camila-vallejo-la-nueva-ministra-vocera-de-gobierno-de-gabriel-boric/TMTFGJBKWRFDFK5PLYY54KPB4E/',
    foto:
      'https://www.latercera.com/resizer/mEaRt_UcXRKNoAruICq11pnNL5s=/arc-anglerfish-arc2-prod-copesa/public/UWF3ATODWZGA5O4ZDAZ2YMAIFE.jpg',
  },
  {
    nombre: 'Nicolás Grau',
    cargo: 'Ministerio de Economía, Fomento y Turismo',
    edad: '38',
    partido: 'Convergencia Social',
    profesion: 'Ingeniero Comercial',
    nivelAcademico: 'Magister y Ph.D. en Economía',
    colegio: 'Colegio Raimapu, La Florida',
    universidad: 'Universidad de Chile',
    biografia:
      'Nicolás Grau (38) es economista y milita en Convergencia Social. Tiene un doctorado en Economía de la Universidad de Pennsylvania. Es profesor del Departamento de Economía de la Universidad de Chile y ha sido investigador adjunto en el Centro de Estudios de Conflicto y Cohesión Social. Fue presidente de la FECH en 2006.',
    url:
      'https://www.latercera.com/politica/noticia/quien-es-nicolas-grau-el-nuevo-ministro-de-economia-de-gabriel-boric/LELPOC6FHZDZ3DELICVPNOSTYA/',
    foto:
      'https://www.latercera.com/resizer/MxOu1KCrF42WQCUW31nnaJrxqJA=/arc-anglerfish-arc2-prod-copesa/public/U56EBTBEO5FALCLMLFL4ETHCRY.jpg',
  },
  {
    nombre: 'Jeanette Vega',
    cargo: 'Ministerio de Desarrollo Social y Familia',
    edad: '64',
    partido: 'Ex PPD',
    profesion: 'Médica',
    nivelAcademico: 'Doctorado en Salud Pública',
    colegio: 'Liceo 7',
    universidad: 'Universidad de Chile',
    biografia:
      'La médica de 64 años tiene una destacada trayectoria en el mundo de la salud. Fue subsecretaria de Salud Pública, directora de Fonasa, del ISP y también asesora externa de la OMS y de la OPS. Uno de sus últimos cargos fue como directora de Innovación Médica y Transformación Digital de la Red Salud UC-Christus. Desde marzo tendrá que cambiar el rubro y dedicarse a temas como pobreza, infancia y también la política indígena del futuro gobierno.',
    url:
      'https://www.latercera.com/politica/noticia/quien-es-jeanette-vega-la-nueva-ministra-de-desarrollo-social-y-familia-de-gabriel-boric/A33KU4RDENGNTL7O2EGUUOSKRY/',
    foto:
      'https://www.latercera.com/resizer/_BfUmYK30PWicQ0l2N82TL91NA4=/arc-anglerfish-arc2-prod-copesa/public/EXVWQQ7XZBGO5JT6NJNTF4X4QE.jpg',
  },
  {
    nombre: 'Marco Antonio Ávila',
    cargo: 'Ministerio de Educación',
    edad: '44',
    partido: 'Revolución Democrática',
    profesion: 'Profesor',
    nivelAcademico: 'Magister en Educación',
    colegio: 'Liceo Andrés Bello, San Miguel',
    universidad: 'Universidad Católica Cardenal Raúl Silva Henríquez',
    biografia:
      'Marco Antonio Ávila (44) es profesor y jefe de Proyectos en la Fundación Chile, donde se dedica a las materias educativas, especialmente en contextos de vulnerabilidad. Sus áreas de interés son el desarrollo profesional docente y mejoramiento educativo. Trabajó en el Mineduc en el segundo gobierno de Bachelet, como coordinador nacional de Enseñanza Media.',
    url:
      'https://www.latercera.com/politica/noticia/quien-es-marco-antonio-avila-el-nuevo-ministro-de-educacion-de-gabriel-boric/SSFS3TEOJJH4VMDVM2DKX337KA/',
    foto:
      'https://www.latercera.com/resizer/eSLuuJYIEUewi1bdNacvPrsOA7g=/arc-anglerfish-arc2-prod-copesa/public/TS7ZTCY4KJAARDPO2UKN37EFII.jpg',
  },
  {
    nombre: 'Marcela Ríos',
    cargo: 'Ministerio de Justicia',
    edad: '55',
    partido: 'Convergencia Social',
    profesion: 'Socióloga',
    nivelAcademico: 'Doctora en Filosofía',
    colegio: '-',
    universidad: 'Universidad de York (Canadá)',
    biografia:
      'Marcela Ríos (55) es socióloga y la mayor parte de su carrera la ha hecho desde el Programa de las Naciones Unidas para el Desarrollo. Desde ahí se ha dedicado con fuerza a impulsar temas de desigualdad, justicia y sobre todo de género. Es académica y tiene estudios de posgrado en la Facultad Latinoamericana de Ciencias Sociales y un doctorado en filosofía en la Universidad de Wisconsin-Madison.',
    url:
      'https://www.latercera.com/politica/noticia/quien-es-marcela-rios-la-nueva-ministra-de-justicia-de-gabriel-boric/QOMVUIBOGZECHMURKA3HDJKYSE/',
    foto:
      'https://www.latercera.com/resizer/twoq9fkLGUcuTlPtkGkkcedP_G8=/arc-anglerfish-arc2-prod-copesa/public/QLUTHRPTSZC45EAYC7YJWS46NI.jpg',
  },
  {
    nombre: 'Jeannette Jara',
    cargo: 'Ministerio de Trabajo y Previsión Social',
    edad: '47',
    partido: 'Partido Comunista',
    profesion: 'Abogada',
    nivelAcademico: 'Magíster en Administración Pública',
    colegio: 'Liceo Isaura Dinator de Guzmán, Santiago',
    universidad: 'Universidad Central',
    biografia:
      'Jeannete Jara es abogada de la Universidad Central. Tiene estudios en derecho tributario y también de magíster en Gerencia Pública. Fue subsecretaria de Previsión Social durante el segundo gobierno de la expresidenta Bachelet. Es administradora municipal en la comuna de Santiago.',
    url:
      'https://www.latercera.com/politica/noticia/quien-es-jeannette-jara-la-nueva-ministra-de-trabajo-de-gabriel-boric/66DNYJQMDRAZXDAT5LAW5QQB4E/',
    foto:
      'https://www.latercera.com/resizer/QsQssiLPolNLx2UB2skYRMhzxVA=/arc-anglerfish-arc2-prod-copesa/public/DYJANE6P4ZETLD47HBGETS542I.jpg',
  },
  {
    nombre: 'Juan Carlos García',
    cargo: 'Ministerio de Obras Públicas',
    edad: '51',
    partido: 'Partido Liberal',
    profesion: 'Arquitecto',
    nivelAcademico: 'Magíster en Gestión Urbana',
    colegio: "Saint George's College, Vitacura",
    universidad: 'Pontificia Universidad Católica de Valparaíso',
    biografia:
      'Juan Carlos García (51) es arquitecto de la Universidad Católica de Valparaíso. Participó en el Servicio País en la Región de Aysén, desde donde impulsó iniciativas reconocidas a nivel nacional. Se formó como urbanista en Francia y fue candidato a gobernador.',
    url:
      'https://www.latercera.com/politica/noticia/quien-es-juan-carlos-garcia-el-nuevo-ministro-de-obras-publicas-de-gabriel-boric/C2CVB2CU7JF6JB4O7TOZ4UROGU/',
    foto:
      'https://www.latercera.com/resizer/z7c5LGQg9faRqbCkcqLnxxoCaTQ=/arc-anglerfish-arc2-prod-copesa/public/IJGIPPB4KVC3HHEZIJ3BHOYGXI.jpg',
  },
  {
    nombre: 'María Begoña Yarza',
    cargo: 'Ministerio de Salud',
    edad: '57',
    partido: 'Independiente',
    profesion: 'Médica',
    nivelAcademico: 'Magister en salud Pública',
    colegio: 'Escuela Secundaria Básica Alamar (Cuba)',
    universidad: 'Universidad de Chile',
    biografia:
      'María Begoña Yarza es médica pediatra de la Universidad de Chile. Tiene un diplomado en gerencia pública en la Universidad Adolfo Ibáñez. También hizo un magíster en Salud Pública en la Universidad Pompeu Fabra. En ese mismo plantel universitario cursó estudios de doctorado en Salud. Fue directora del Hospital Exequiel González Cortés.',
    url:
      'https://www.latercera.com/politica/noticia/quien-es-maria-begona-yarza-la-nueva-ministra-de-salud-de-gabriel-boric/65ZJVEGTXVBZHDEYBSYIOYLCDA/',
    foto:
      'https://www.latercera.com/resizer/UZaFsYqgD6CYZ0Ad0aZla_UcKqk=/arc-anglerfish-arc2-prod-copesa/public/AFPIJXXCNJCN3H26WOIWICM4BI.jpg',
  },
  {
    nombre: 'Carlos Montes',
    cargo: 'Ministerio de Vivienda y Urbanismo',
    edad: '75',
    partido: 'Partido Socialista',
    profesion: 'Egresado de Ingeniería Comercial',
    nivelAcademico: 'Universitario',
    colegio: "Saint George's College",
    universidad: 'Pontificia Universidad Católica',
    biografia:
      'Carlos Montes (75) es senador por la Región Metropolitana. Tiene una larga carrera política que incluye además seis periodos parlamentarios consecutivos como diputado. Es egresado de Ingeniería Comercial de la Universidad Católica y fue presidente del Senado en 2018.',
    url:
      'https://www.latercera.com/politica/noticia/quien-es-carlos-montes-el-nuevo-ministro-de-vivienda-y-urbanismo-de-gabriel-boric/4PTPGY7FTJGS5DOL2O2RETXSCU/',
    foto:
      'https://www.latercera.com/resizer/6NH7yDdiMiLjySCEJLRIgJ3YNa0=/arc-anglerfish-arc2-prod-copesa/public/AEZON37O3NDPRJNNFZ6PBOVVHE.jpg',
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
      'Esteban Valenzuela (57) es militante del Frente Regionalista Verde Social. Es periodista, cientista político e historiador. Ha sido asesor sindical y director de Convergencias Regionalistas de Estudios Aplicados del Sur (Creasur).',
    url:
      'https://www.latercera.com/politica/noticia/quien-es-esteban-valenzuela-el-nuevo-ministro-de-agricultura-de-gabriel-boric/KYI4ASZGJBFTZE3FYEAPZ6XUDY/',
    foto:
      'https://www.latercera.com/resizer/87TEDgNnZmGUooQtXWV7_8XWnh0=/arc-anglerfish-arc2-prod-copesa/public/WBTNPAJQIRA2BFQTQMEQYF2NLQ.jpg',
  },
  {
    nombre: 'Marcela Hernando',
    cargo: 'Ministerio de Minería',
    edad: '61',
    partido: 'Partido Radical',
    profesion: 'Médica',
    nivelAcademico: 'Magíster en Salud Pública',
    colegio: 'Liceo María Auxiliadora, Santiago',
    universidad: 'Universidad de Chile',
    biografia:
      'La médica Marcela Hernando (61) es militante del Partido Radical. Durante dos periodos parlamentarios ha sido diputada por la región de Antofagasta. Entre los años 2008 y 2012 fue alcaldesa de la comuna de Antofagasta y también fue intendenta por esta misma región durante el primer gobierno de la expresidente Michelle Bachelet. Toda su carrera ha estado ligada a cargos públicos en el mundo de la salud. Desde marzo deberá asumir un nuevo desafío, pero esta vez a cargo del ministerio de Minería.',
    url:
      'https://www.latercera.com/politica/noticia/quien-es-marcela-hernando-la-nueva-ministra-de-mineria-de-gabriel-boric/L6BLSQMDOZE7NNOYK6BYNVZ7II/',
    foto:
      'https://www.latercera.com/resizer/AMo3WxNh9i_mXb4LPnPD6r3BiAM=/arc-anglerfish-arc2-prod-copesa/public/YZ7TCVOM3NCM7DAZ2GLY6MYPW4.jpg',
  },
  {
    nombre: 'Juan Carlos Muñoz',
    cargo: 'Ministerio de Transportes y Telecomunicaciones',
    edad: '51',
    partido: 'Independiente',
    profesion: 'Ingeniero Civil',
    nivelAcademico: 'Doctor en Ingeniería Civil y Ambiental',
    colegio: 'Craighouse School',
    universidad: 'Pontificia Universidad Católica',
    biografia:
      'Juan Carlos Muñoz (51) es ingeniero civil de la Universidad Católica. Toda su carrera la ha dedicado a los temas de transportes, desde el mundo público y también desde la academia. Entre 2003 y 2004 fue asesor del Ministro de Transportes y Telecomunicaciones para el plan Transantiago. En 2008 también fue miembro del comité de expertos creado por esa misma cartera para mejorar el proyecto Transantiago. Estuvo en el directorio del Metro regional de Valparaíso. También ejerció como director de Metro y asesor de la Dirección de Transporte Público Metropolitano',
    url:
      'https://www.latercera.com/politica/noticia/quien-es-juan-carlos-munoz-el-nuevo-ministro-de-ministerio-de-transportes-y-telecomunicaciones-de-gabriel-boric/3Y33LNMB6FBINDY65GBMFIUSHU/',
    foto:
      'https://www.latercera.com/resizer/dpN3Duo192xdObjpUer6YyEC_VM=/arc-anglerfish-arc2-prod-copesa/public/LXJU2P4SVVD4TKLOYTDDMMSMCI.jpg',
  },
  {
    nombre: 'Javiera Toro',
    cargo: 'Ministerio de Bienes Nacionales',
    edad: '34',
    partido: 'Comunes',
    profesion: 'Abogada',
    nivelAcademico: 'Universitario',
    colegio: 'Colegio la Girouette, Las Condes',
    universidad: 'Universidad de Chile',
    biografia:
      'Javiera Toro es abogada de la Universidad de Chile. Fue presidenta de Comunes y es directora de la Fundación Nodo XXI. Ha trabajado como abogada en estudios privados.',
    url:
      'https://www.latercera.com/politica/noticia/quien-es-javiera-toro-la-nueva-ministra-de-bienes-nacionales-de-gabriel-boric/XVCLPN6EJ5ACLIE5QZY3ICRDMU/',
    foto:
      'https://www.latercera.com/resizer/A1GGYZSMY2_lh2hsz4TaCarLMIM=/arc-anglerfish-arc2-prod-copesa/public/IVB4HZGVDVARHBKZZIAKHNDN7Q.jpg',
  },
  {
    nombre: 'Claudio Huepe',
    cargo: 'Ministerio de Energía',
    edad: '55',
    partido: 'Convergencia Social',
    profesion: 'Ingeniero comercial',
    nivelAcademico:
      'Magíster en Economía y máster en Economía de los Recursos Naturales y del Medio Ambiente',
    colegio: '-',
    universidad: 'Pontificia Universidad Católica',
    biografia:
      'Claudio Huepe (55) es Ingeniero Comercial y magíster en Economía de la Pontificia Universidad Católica. También tiene un máster en Economía de los Recursos Naturales y del Medio Ambiente de University College en Londres. Es el coordinador del Centro de Energía y Desarrollo Sustentable de la UDP. Fue jefe de Estudios en la Comisión Nacional de Energía y director de la División de Política y Prospectiva del Ministerio de Energía. Integró el equipo económico de Boric.',
    url:
      'https://www.latercera.com/politica/noticia/quien-es-claudio-huepe-el-nuevo-ministro-de-energia-de-gabriel-boric/YTRJEJCHFBHGZPXJMJ7HH2HRMU/',
    foto:
      'https://www.latercera.com/resizer/z6TvEq-qv6H23UP0lNfTIYpGRHY=/arc-anglerfish-arc2-prod-copesa/public/BKJNRYIOEFHO3GKOUTTP4JZ2V4.jpg',
  },
  {
    nombre: 'Maisa Rojas',
    cargo: 'Ministerio de Medio Ambiente',
    edad: '49',
    partido: 'Independiente',
    profesion: 'Licenciatura en Física',
    nivelAcademico: 'Doctorado en Física de la Atmósfera',
    colegio: 'Colegio Instituto Santa María',
    universidad: 'Universidad de Chile',
    biografia:
      'Maisa Rojas (49) es una reconocida climatóloga chilena. Es independiente. También es académica de la Universidad de Chile y Directora del Centro de Ciencia del Clima y la Resiliencia. Estudió física en la Universidad de Chile y un doctorado en física atmosférica en la Universidad de Oxford. Fue una de las autoras del informe del Panel Intergubernamental de Cambio Climático (IPCC). También se desempeñó como coordinadora del comité científico asesor para la COP25.',
    url:
      'https://www.latercera.com/politica/noticia/quien-es-maisa-rojas-la-nueva-ministra-de-medio-ambiente-de-gabriel-boric/WABEL2PBEFA2ZPTZYFDFKAU6PY/',
    foto:
      'https://www.latercera.com/resizer/Kcm_ooxNhoZ1RYv3veB-pbAKkkY=/arc-anglerfish-arc2-prod-copesa/public/ILBYZQBH5JGPRCRIBCDXX5CVX4.jpg',
  },
  {
    nombre: 'Julieta Brodsky',
    cargo: 'Ministerio de las Culturas, las Artes y el Patrimonio',
    edad: '38',
    partido: 'Convergencia Social',
    profesion: 'Antropóloga social y cultural',
    nivelAcademico: 'Magíster en Antropología Urbana',
    colegio: 'Colegio Altamira, Peñalolén',
    universidad: 'Universidad de Granada (España)',
    biografia:
      'Julieta Brodsky es antropóloga social y cultural de la Universidad de Granada (España) y egresada del magíster en Antropología Urbana de la Universidad Academia de Humanismo Cristiano. Su carrera ha estado ligada al mundo de la cultura. Actualmente es directora de Investigación del Observatorio de Políticas Culturales y socia de la Asociación Cultural Tramados.',
    url:
      'https://www.latercera.com/politica/noticia/quien-es-julieta-brodsky-la-nueva-ministra-de-las-culturas-las-artes-y-el-patrimonio-de-gabriel-boric/4E342HUIMNA5RDFL6U4HKEYIQM/',
    foto:
      'https://www.latercera.com/resizer/02SWctNXl8sPXwKAGIYmAb8fuu8=/arc-anglerfish-arc2-prod-copesa/public/S32G3MTLZVCVZJWQMKZFO55IQQ.jpg',
  },
  {
    nombre: 'Alexandra Benado',
    cargo: 'Ministerio de Deporte',
    edad: '45',
    partido: 'Independiente',
    profesion: 'Profesor',
    nivelAcademico: 'Universitario',
    colegio: 'Colegio Rubén Darío, La Reina',
    universidad: 'Universidad Metropolitana de Ciencias de la Educación',
    biografia:
      'Alexandra Benado (45) nació en Suecia, es futbolista y también ha sido directora técnica. Es activista LGTBI. Desde ahí ha luchado por los derechos filiativos de sus hijos mellizos. Denunció al Estado ante la Corte Interamericana de derechos humanos para que parejas homoparentales, como ella, tuvieran reconocimiento jurídico. Además es coordinadora ejecutiva en Londres 38.',
    url:
      'https://www.latercera.com/politica/noticia/quien-es-alexandra-benado-la-nueva-ministra-del-deporte-de-gabriel-boric/NI2VSDQRSVDOJPD3XPTE4CSDHA/',
    foto:
      'https://www.latercera.com/resizer/5jLjOTJtjiliAHobdb8jc4U8X-o=/arc-anglerfish-arc2-prod-copesa/public/CYAPEQ35XBFUJN55HJMMS5X5PY.jpg',
  },
  {
    nombre: 'Antonia Orellana',
    cargo: 'Ministerio de la Mujer y la Equidad de Género',
    edad: '32',
    partido: 'Convergencia Social',
    profesion: 'Periodista',
    nivelAcademico: 'Universitario',
    colegio: 'Liceo Tajamar, Providencia',
    universidad: 'Universidad de Chile',
    biografia:
      'Antonia Orellana (32) es periodista y militante de Convergencia Social. Su carrera ha estado siempre enfocada en temas de género. Forma parte de la Red Chilena Contra la Violencia hacia las Mujeres. Fue candidata a convencional por el distrito 10, pero no logró su escaño. Es parte del círculo más íntimo de Boric.',
    url:
      'https://www.latercera.com/politica/noticia/quien-es-antonia-orellana-la-nueva-ministra-de-de-la-mujer-y-la-equidad-de-genero-de-gabriel-boric/YJTVWXNJXJDX7J4AVFIABM4ASE/',
    foto:
      'https://www.latercera.com/resizer/qCpumzvtpNewAOgJCbSZQD5bFxc=/arc-anglerfish-arc2-prod-copesa/public/MBBUL3SAJBAKFDA7HVNLATIB5E.jpg',
  },
  {
    nombre: 'Flavio Salazar',
    cargo: 'Ministerio de Ciencia, Tecnología, Conocimiento e Innovación',
    edad: '56',
    partido: 'Partido Comunista',
    profesion: 'Biólogo',
    nivelAcademico: 'Doctor en Inmunología',
    colegio: 'Liceo Juan Bosco',
    universidad: 'Universidad de Uppsala (Suecia)',
    biografia:
      'Flavio Salazar (56) es biólogo y vicerrector de Investigación y Desarrollo de la Universidad de Chile. Obtuvo un doctorado en inmunología en Suecia en 1998 y a su regreso al país se integró al Programa Disciplinario de Inmunología del Instituto de Ciencias Biomédicas. Su mayor interés se ha centrado en varios aspectos de la inmunología antitumoral y tiene una vasta experiencia académica.',
    url:
      'https://www.latercera.com/politica/noticia/quien-es-flavio-salazar-el-nuevo-ministro-de-ciencia-de-gabriel-boric/QOKGOJZBNZHXFEKJDGVC5RN4EA/',
    foto:
      'https://www.latercera.com/resizer/ALB8nbnHdNCO_fc5eSaBh1dxMWs=/arc-anglerfish-arc2-prod-copesa/public/CTBW5NZEFVCS7DJRQJ662T4OKA.jpg',
  },
]

export default fichas
