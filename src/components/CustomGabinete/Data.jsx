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
    url: 'https://google.com/',
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
    url: 'https://google.com/',
    foto:
      'https://www.latercera.com/resizer/Vv1K-fX89GGsQBnpBIu0EZgMxGE=/arc-anglerfish-arc2-prod-copesa/public/IOKNAYXYFBBRFLAHR5J7N7XXTM.jpg',
  },
  {
    nombre: 'Maya Fernández',
    cargo: 'Ministerio de Defensa',
    edad: '50',
    partido: 'Partido Socialista',
    profesion: 'Bióloga y Médica Veterinaria',
    nivelAcademico: '',
    colegio: '',
    universidad: 'Universidad de Chile',
    biografia:
      'Maya Fernández es militante del Partido Socialista. Tiene dos títulos profesionales: es bióloga y veterinaria. Es nieta del expresidente Salvador Allende y sobrina de la senadora Isabel Allende. Vivió en el exilio en Cuba desde 1973 hasta 1990. Ha sido diputada por dos periodos y concejala de Ñuñoa. Presidió la Cámara en 2018.',
    url: 'https://google.com/',
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
    url: 'https://google.com/',
    foto:
      'https://www.latercera.com/resizer/phrzmeeonTjGzyalWcyn8di4XgY=/arc-anglerfish-arc2-prod-copesa/public/N7A2FRFGDJFOTJ566AKEJYW3TM.jpg',
  },
  {
    nombre: 'Giorgio Jackson',
    cargo: 'Ministerio Secretaría General de la Presidencia',
    edad: '34',
    partido: 'Revolución Democrática',
    profesion: 'Ingeniero civil industrial',
    nivelAcademico: '',
    colegio: 'Colegio Alemán Thomas Morus, Providencia',
    universidad: 'Pontificia Universidad Católica',
    biografia:
      'Giorgio Jackson (34) es ingeniero de la Universidad Católica y ha sido diputado durante dos periodos parlamentarios. Es militante de Revolución Democrática y en 2011 fue presidente de la FEUC y vocero de la Confech.',
    url: 'https://google.com/',
    foto:
      'https://www.latercera.com/resizer/30cvnqApLZnKdFlizqRm51X31rY=/arc-anglerfish-arc2-prod-copesa/public/RG3DS7BUFBGRZJTFTH62S6T2QM.jpg',
  },
  {
    nombre: 'Camila Vallejo',
    cargo: 'Ministerio Secretaría General de Gobierno',
    edad: '33',
    partido: 'Partido Comunista',
    profesion: 'Geógrafa',
    nivelAcademico: '',
    colegio: 'Colegio Raimapu, La Florida',
    universidad: 'Universidad de Chile',
    biografia:
      'Camila Vallejo (33) es geógrafa de la Universidad de Chile. Ha sido diputada durante dos periodos parlamentarios. Es militante del Partido Comunista y en 2011 fue presidenta de la Fech. Ese año además fue vocera de la Confech. En 2012 asumió como vicepresidenta de la Fech, el mismo año en que Boric le tocó presidir la mesa de esa federación estudiantil.',
    url: 'https://google.com/',
    foto:
      'https://www.latercera.com/resizer/PudXU9xGFrIGEdc-9npt6rc4cZQ=/arc-anglerfish-arc2-prod-copesa/public/BXELLX642JAAHAJQB4CA2QZWTU.jpg',
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
    url: 'https://google.com/',
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
    colegio: '',
    universidad: 'Universidad de Chile',
    biografia:
      'La médica de 64 años tiene una destacada trayectoria en el mundo de la salud. Fue subsecretaria de Salud Pública, directora de Fonasa, del ISP y también asesora externa de la OMS y de la OPS. Uno de sus últimos cargos fue como directora de Innovación Médica y Transformación Digital de la Red Salud UC-Christus. Desde marzo tendrá que cambiar el rubro y dedicarse a temas como pobreza, infancia y también la política indígena del futuro gobierno.',
    url: 'https://google.com/',
    foto:
      'https://www.latercera.com/resizer/_BfUmYK30PWicQ0l2N82TL91NA4=/arc-anglerfish-arc2-prod-copesa/public/EXVWQQ7XZBGO5JT6NJNTF4X4QE.jpg',
  },
  {
    nombre: 'Valentina Quiroga',
    cargo: 'Ministerio de Educación',
    edad: '39',
    partido: '',
    profesion: 'Ingeniera Civil',
    nivelAcademico: '',
    colegio: '',
    universidad: '',
    biografia: '',
    url: '',
    foto:
      'https://www.latercera.com/resizer/jD2mvxI8hHL08x3IptefxkkhMPU=/arc-anglerfish-arc2-prod-copesa/public/TQQ3MZW3ORA6TFNYSSLWULMJ5U.jpg',
  },
  {
    nombre: 'Marcela Ríos',
    cargo: 'Ministerio de Justicia',
    edad: '',
    partido: 'Independiente',
    profesion: 'Socióloga',
    nivelAcademico: '',
    colegio: '',
    universidad: 'Universidad de York (Canadá)',
    biografia: '',
    url: '',
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
    url: 'https://google.com/',
    foto:
      'https://www.latercera.com/resizer/QsQssiLPolNLx2UB2skYRMhzxVA=/arc-anglerfish-arc2-prod-copesa/public/DYJANE6P4ZETLD47HBGETS542I.jpg',
  },
  {
    nombre: 'Juan Carlos García',
    cargo: 'Ministerio de Obras Públicas',
    edad: '',
    partido: 'Partido Liberal',
    profesion: 'Arquitecto',
    nivelAcademico: '',
    colegio: '',
    universidad: 'Pontificia Universidad Católica de Valparaíso',
    biografia: '',
    url: '',
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
    colegio: '',
    universidad: 'Universidad de Chile',
    biografia:
      'María Begoña Yarza es médica pediatra de la Universidad de Chile. Tiene un diplomado en gerencia pública en la Universidad Adolfo Ibáñez. También hizo un magíster en Salud Pública en la Universidad Pompeu Fabra. En ese mismo plantel universitario cursó estudios de doctorado en Salud. Fue directora del Hospital Exequiel González Cortés.',
    url: 'https://google.com/',
    foto:
      'https://www.latercera.com/resizer/UZaFsYqgD6CYZ0Ad0aZla_UcKqk=/arc-anglerfish-arc2-prod-copesa/public/AFPIJXXCNJCN3H26WOIWICM4BI.jpg',
  },
  {
    nombre: 'Carlos Montes',
    cargo: 'Ministerio de Vivienda y Urbanismo',
    edad: '75',
    partido: 'Partido Socialista',
    profesion: 'Egresado de Ingeniería Comercial',
    nivelAcademico: '',
    colegio: "Saint George's College",
    universidad: 'Pontificia Universidad Católica',
    biografia:
      'Carlos Montes (75) es senador por la Región Metropolitana. Tiene una larga carrera política que incluye además seis periodos parlamentarios consecutivos como diputado. Es egresado de Ingeniería Comercial de la Universidad Católica y fue presidente del Senado en 2018.',
    url: 'https://google.com/',
    foto:
      'https://www.latercera.com/resizer/6NH7yDdiMiLjySCEJLRIgJ3YNa0=/arc-anglerfish-arc2-prod-copesa/public/AEZON37O3NDPRJNNFZ6PBOVVHE.jpg',
  },

  {
    nombre: 'Marcela Hernando',
    cargo: 'Ministerio de Minería',
    edad: '',
    partido: 'Partido Radical',
    profesion: 'Médica',
    nivelAcademico: '',
    colegio: 'Liceo María Auxiliadora, Santiago',
    universidad: 'Universidad de Chile',
    biografia:
      'La médica Marcela Hernando (61) es militante del Partido Radical. Durante dos periodos parlamentarios ha sido diputada por la región de Antofagasta. Entre los años 2008 y 2012 fue alcaldesa de la comuna de Antofagasta y también fue intendenta por esta misma región durante el primer gobierno de la expresidente Michelle Bachelet. Toda su carrera ha estado ligada a cargos públicos en el mundo de la salud. Desde marzo deberá asumir un nuevo desafío, pero esta vez a cargo del ministerio de Minería.',
    url: '',
    foto:
      'https://www.latercera.com/resizer/AMo3WxNh9i_mXb4LPnPD6r3BiAM=/arc-anglerfish-arc2-prod-copesa/public/YZ7TCVOM3NCM7DAZ2GLY6MYPW4.jpg',
  },
  {
    nombre: 'Juan Carlos Muñoz',
    cargo: 'Ministerio de Transportes y Telecomunicaciones',
    edad: '',
    partido: 'Independiente',
    profesion: 'Ingeniero Civil',
    nivelAcademico: '',
    colegio: '',
    universidad: 'Pontificia Universidad Católica de Valparaíso',
    biografia: '',
    url: '',
    foto:
      'https://www.latercera.com/resizer/dpN3Duo192xdObjpUer6YyEC_VM=/arc-anglerfish-arc2-prod-copesa/public/LXJU2P4SVVD4TKLOYTDDMMSMCI.jpg',
  },
  {
    nombre: 'Javiera Toro',
    cargo: 'Ministerio de Bienes Nacionales',
    edad: '34',
    partido: 'Comunes',
    profesion: 'Abogada',
    nivelAcademico: '',
    colegio: 'Colegio la Girouette, Las Condes',
    universidad: 'Universidad de Chile',
    biografia:
      'Javiera Toro es abogada de la Universidad de Chile. Fue presidenta de Comunes y es directora de la Fundación Nodo XXI. Ha trabajado como abogada en estudios privados.',
    url: 'https://google.com/',
    foto:
      'https://www.latercera.com/resizer/A1GGYZSMY2_lh2hsz4TaCarLMIM=/arc-anglerfish-arc2-prod-copesa/public/IVB4HZGVDVARHBKZZIAKHNDN7Q.jpg',
  },
  {
    nombre: 'Claudio Huepe',
    cargo: 'Ministerio de Energía',
    edad: '55',
    partido: 'Independiente',
    profesion: 'Ingeniero comercial',
    nivelAcademico: '',
    colegio: '',
    universidad: 'Pontificia Universidad Católica',
    biografia:
      'Claudio Huepe (55) es Ingeniero Comercial y magíster en Economía de la Pontificia Universidad Católica. También tiene un máster en Economía de los Recursos Naturales y del Medio Ambiente de University College en Londres. Es el coordinador del Centro de Energía y Desarrollo Sustentable de la UDP. Fue jefe de Estudios en la Comisión Nacional de Energía y director de la División de Política y Prospectiva del Ministerio de Energía. Integró el equipo económico de Boric.',
    url: 'https://google.com/',
    foto:
      'https://www.latercera.com/resizer/z6TvEq-qv6H23UP0lNfTIYpGRHY=/arc-anglerfish-arc2-prod-copesa/public/BKJNRYIOEFHO3GKOUTTP4JZ2V4.jpg',
  },

  {
    nombre: 'Julieta Brodsky',
    cargo: 'Ministerio de las Culturas, las Artes y el Patrimonio',
    edad: '38',
    partido: 'Revolución Democrática',
    profesion: 'Antropóloga social y cultural',
    nivelAcademico: 'Magíster en Antropología Urbana',
    colegio: 'Colegio Altamira, Peñalolén',
    universidad: 'Universidad de Granada (España)',
    biografia:
      'Julieta Brodsky es antropóloga social y cultural de la Universidad de Granada (España) y egresada del magíster en Antropología Urbana de la Universidad Academia de Humanismo Cristiano. Su carrera ha estado ligada al mundo de la cultura. Actualmente es directora de Investigación del Observatorio de Políticas Culturales y socia de la Asociación Cultural Tramados.',
    url: 'https://google.com/',
    foto:
      'https://www.latercera.com/resizer/02SWctNXl8sPXwKAGIYmAb8fuu8=/arc-anglerfish-arc2-prod-copesa/public/S32G3MTLZVCVZJWQMKZFO55IQQ.jpg',
  },
  {
    nombre: 'Jean Beausejour',
    cargo: 'Ministerio de Deporte',
    edad: '',
    partido: '',
    profesion: '',
    nivelAcademico: '',
    colegio: '',
    universidad: '',
    biografia: '',
    url: '',
    foto: '',
  },
  {
    nombre: 'Antonia Orellana',
    cargo: 'Ministerio de la Mujer y la Equidad de Género',
    edad: '32',
    partido: 'Convergencia Social',
    profesion: 'Periodista',
    nivelAcademico: '',
    colegio: 'Liceo Tajamar, Providencia',
    universidad: 'Universidad de Chile',
    biografia: '',
    url: 'https://google.com/',
    foto:
      'https://www.latercera.com/resizer/qCpumzvtpNewAOgJCbSZQD5bFxc=/arc-anglerfish-arc2-prod-copesa/public/MBBUL3SAJBAKFDA7HVNLATIB5E.jpg',
  },
]

export default fichas
