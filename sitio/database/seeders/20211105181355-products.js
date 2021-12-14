'use strict';

const products = [
  {
    id: 1,
    name: "Mochila Strom",
    price: 159,
    description: "La mochila más vendida del mundo, diseñada por esquiadores y adoptada por todos.",
    categoryId: 1,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    id: 2,
    name: "Rodillo de nieve",
    price: 269,
    categoryId: 1,
    description: "La primera bolsa para esquís y tablas de snowboard con protección contra costillas, compresible y ajustable en longitud del mundo.",
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    id: 3,
    name: "Sudadera Tech",
    price: 139,
    categoryId: 2,
    description: "Nos encantan las sudaderas con capucha en Topo Designs. Nuestra sudadera con capucha Tech Fleece cuenta con un impresionante vellón unido de poliéster / spandex que absorbe la humedad. Suave y cálido por dentro, protector por fuera.",
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    id: 4,
    name: "Polar subalpino",
    categoryId: 2,
    description: "Un vellón clásico, mejorado con sherpa supersuave. Los refuerzos en el pecho, la espalda y los codos garantizan que esta pieza siga siendo un elemento básico para el clima fresco durante los próximos años, mientras que dos bolsillos externos en el pecho, bolsillos para las manos con cremallera y bolsillos internos ocultos significan mucho espacio para el equipo imprescindible (o bocadillos).",
    price: 200,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    id: 5,
    name: "Bolsa de embalaje",
    price: 24,
    categoryId: 3,
    description: "Nuestra versión de cubos de embalaje, nuestras bolsas de embalaje modulares están diseñadas para encajar perfectamente en nuestras bolsas de viaje y nuestro rodillo de bolsas de viaje para una experiencia de embalaje que ahorra tiempo y espacio. Optimizar su equipaje nunca ha sido tan fácil.",
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    id: 6,
    name: "Gorro alcolchado",
    price: 39,
    categoryId: 3,
    description: "Su nuevo accesorio para climas fríos, el Puffer Cap le brinda calidez con aislamiento, cobertura ajustable para los oídos y un estilo fresco de montaña.",
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    id: 7,
    name: "Dual pants",
    categoryId: 2,
    price: 129,
    description: "Diseñados para funcionar el doble de tiempo, nuestros pantalones dobles son una prenda de trabajo confiable que se ve lo suficientemente bien para el uso diario. Lona elástica cómoda y resistente con un ajuste recto que se usa como un viejo favorito y los refuerzos en las rodillas y el asiento duplican la durabilidad.",
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    id: 8,
    name: "Dirt shorts",
    categoryId: 2,
    price: 69,
    description: "Con un ajuste relajado, detalles clásicos y bolsillos de parche en las costuras laterales y en la parte posterior, los Dirt Shorts se convertirán rápidamente en uno de tus shorts favoritos. El lavado teñido en prenda suaviza tanto el color como la tela, haciéndola sentir como un viejo favorito desde su primer uso.",
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    id: 9,
    name: "Nylon camp hat",
    categoryId: 3,
    price: 32,
    description: "La gorra de campamento perfecta, ligera y plegable. Una gorra de 5 paneles 100% nailon con cierre de hebilla de cincha ajustable.",
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    id: 10,
    name: "Web belt",
    categoryId: 3,
    price: 39,
    description: "Nuestro Web Belt es lo suficientemente fácil para usarlo todos los días, pero lo suficientemente resistente como para durar más que la mayor parte de su guardarropa y lucir bien haciéndolo. El cinturón de 1.5\" está hecho de una cinta de nailon muy duradera con una hebilla de aluminio sólido.",
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    id: 11,
    name: "Cinch tote",
    categoryId: 1,
    price: 59,
    description: "Nuestro Cinch Tote tiene un cuerpo de nailon 1000D duradero completamente forrado con tela de nailon y cuatro bolsillos externos profundos para evitar que los artículos pequeños se pierdan en el fondo de su mochila. Una correa extraíble le permite llevar el mochila al hombro o quitárselo cuando no lo necesite.",
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    id: 12,
    name: "Y-pack",
    categoryId: 1,
    price: 79,
    description: "Con una solapa ancha y un solo cierre, el Y-Pack fusiona el estilo clásico y la funcionalidad moderna. La capucha ancha con cremallera proporciona un amplio espacio de almacenamiento, mientras que un cierre de cordón interior, una funda para computadora portátil y bolsillos laterales para botellas de agua hacen que guardar y organizar el equipo sea rápido y fácil.",
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    id: 13,
    name: "Rover pack leather",
    categoryId: 1,
    price: 150,
    description: "La durabilidad inspirada en la montaña se combina con el estilo urbano en el Rover Pack Heritage",
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    id: 14,
    name: "Mountain duffel - 40L ",
    categoryId: 1,
    price: 120,
    description: "Con una base y lados acolchados, el Mountain Duffel lo mantiene a usted (y a su equipo) protegido. Los múltiples bolsillos internos y externos mantienen los artículos más pequeños organizados, mientras que el gran compartimento principal puede llevar cualquier cosa, desde botas de esquí hasta  equipos adicionales.",
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    id: 15,
    name: "Commuter briefcase heritage canvas",
    categoryId: 1,
    price: 250,
    description: "Fabricado en los EE. UU. Con materiales de primera calidad, nuestro maletín Commuter Briefcase Heritage Canvas es el camaleón de las mochilas. Úselo como un maletín clásico o desempaque las correas y el hombro de la mochila para viajar fácilmente.",
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    id: 16,
    name: "Bike bag",
    categoryId: 1,
    price: 49,
    description: "Nuestra bolsa para bicicletas proporciona un lugar para guardar todo, desde herramientas y tubos hasta una capa adicional o un refrigerio. Lo suficientemente versátil como para sujetarlo a las barras delanteras de la mayoría de las bicicletas, nuestro Bike Bag tiene correas en cadena para sujetar fácilmente una luz de bicicleta.",
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    id: 17,
    name: "Classic duffel mini",
    categoryId: 1,
    price: 49,
    description: "Nuestro Classic Duffel Mini es exactamente eso: un estilo clásico en un paquete pequeño. Sencillo por fuera y forrado con un paño de nailon recubierto por dentro.",
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    id: 18,
    name: "Campera sherpa",
    categoryId: 2,
    price: 99,
    description: "Nuestra campera corta de sherpa es una campera 2 en 1 completamente reversible y es una campera bomber de estilo mínimo creada pensando en la versatilidad y la durabilidad.",
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    id: 19,
    name: "Camiseta Dirt",
    categoryId: 2,
    price: 98,
    description: "Con un corte recto, detalles clásicos y un solo bolsillo, la camiseta Dirt se convertirá rápidamente en una de tus prendas favoritas. El lavado teñido en prenda suaviza tanto el color como la tela, haciéndola sentir como un viejo favorito desde la primera vez que se usa.",
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    id: 20,
    name: "Campera Mountain Shirt - Hombre",
    categoryId: 2,
    price: 159,
    description: "Confeccionada con hilo de algodón 100% orgánico, pespuntes superpuestos y un ajuste sobrecamisa más largo, la campera Mountain Shirt es una prenda de capas funcional y cómoda. Con patrones llamativos a cuadros, esta pieza destaca en climas más fríos.",
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    id: 21,
    name: "Mini mochila de hombro",
    categoryId: 1,
    price: 19,
    description: "El mini mochila de hombro es el mochila perfecto para llevar por encima del hombro para los artículos y accesorios diarios que necesita mientras está fuera de casa.",
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    id: 22,
    name: "Pantalones Boulder",
    categoryId: 2,
    price: 89,
    description: "Nuestros pantalones Boulder son cómodos, informales y están diseñados para manejar el aire libre. Con un dobladillo ajustable, un bolsillo trasero con cremallera y un acabado repelente al agua duradero, los pantalones Boulder se mantendrán en cualquier entorno.",
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    id: 23,
    name: "Rover Pack Mini",
    categoryId: 1,
    price: 79,
    description: "En una gama de colores tan atrevidos y versátiles como sus intereses, el Rover Pack Mini tiene un tamaño compacto pero ofrece un gran impacto. Toda la funcionalidad y versatilidad de nuestro icónico Rover Pack se reduce a una mochila brillante y llamativo que tiene el tamaño perfecto para hacer recados en la ciudad o en el camino.",
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    id: 24,
    name: "Correa para cámara",
    categoryId: 3,
    price: 14,
    description: "Nuestra correa para cámara inspirada en la cuerda de escalada Colorado: rediseñada y lista para cualquier sesión. Patrones de diamantes personalizados en una cuerda de nailon resistente de 10 mm, con hebillas SR de fijación rápida para que pueda cambiar colores o dispositivos en segundos.",
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    id: 25,
    name: "Medias Mountain",
    categoryId: 3,
    price: 22,
    description: "Diseñados para actividades atléticas pero igualmente cómodos para usar en la casa, los medias Mountain son un imprescindible versátil.",
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    id: 26,
    name: "Pantalones Dirt",
    categoryId: 2,
    price: 98,
    description: "Con un corte recto, detalles clásicos y bolsillos de parche en las costuras laterales y en la parte posterior, los pantalones Dirt se convertirán rápidamente en uno de tus pantalones favoritos. El lavado teñido en prenda suaviza tanto el color como la tela, haciéndola sentir como un viejo favorito desde la primera vez que se usa.",
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    id: 27,
    name: "Camiseta de punto",
    categoryId: 2,
    price: 59,
    description: "Nuestras camisetas de punto súper cómodas y ultra suaves tienen una construcción de punto de doble cara y se usan como un básico de algodón. El exterior de algodón y poliéster y el interior de malla ayudan a que esta camisa se seque rápidamente después de actividades de alta intensidad o un clima inesperado. Utilice la banda de embalaje PackFast ™ para guardarlo fácilmente durante el embalaje y el viaje.",
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    id: 28,
    name: "Campera Mountain Shirt - Mujer",
    categoryId: 2,
    price: 159,
    description: "Confeccionada con hilo de algodón pesado 100% orgánico, pespuntes superpuestos y un ajuste sobrecamisa más largo, la campera Mountain Shirt es una de las prendas funcionales favoritas. Acentuada con colores llamativos y patrones de cuadros personalizados, esta pieza destaca en climas más fríos.",
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    id: 29,
    name: "Mini Quick Pack",
    categoryId: 1,
    price: 29,
    description: "Nuestro Mini Quick Pack se puede colgar del hombro o llevar alrededor de la cintura, estilo riñonera. Un lazo de sujeción de luz para bicicleta externo y un bolsillo interno de organización son prácticos para el uso diario, y el bolsillo externo con cremallera tiene un clip para llaves interno para tenerlos a mano (y no perderlos).",
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    id: 30,
    name: "Global Travel Bag",
    categoryId: 1,
    price: 229,
    description: "Su compañero de viaje ideal con una sola bolsa. Nuestra mochila de mano Global Travel Bag, fabricado con materiales reciclados, ofrece opciones de transporte de 3 vías, mucha organización interna, bolsillos laterales expandibles para botellas de agua y una funda externa para computadora portátil para un fácil acceso. El tamaño es perfecto para una semana de viaje.",
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    id: 31,
    name: "Rover Pack Classic",
    categoryId: 1,
    price: 49,
    description: "Con su estilo atemporal y construcción duradera, la Rover Pack Classic es nuestra silueta de mochila más icónica. Diseñado para la versatilidad en la ciudad o en el comienzo del sendero, este paquete de nailon duradero se mantendrá en cualquier entorno y se destacará en todos ellos.",
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    id: 32,
    name: "Accessory Bags Canvas",
    categoryId: 3,
    price: 15,
    description: "Organice todo, desde bolígrafos hasta cables de carga en nuestras bolsas de accesorios. Estas duraderas bolsas vienen en tres tamaños de fácil transporte para optimizar su transporte diario.",
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    id: 33,
    name: "Clip para llaves",
    categoryId: 3,
    price: 15,
    description: "Mantenga las llaves a mano y visibles con el clip para llaves. Este robusto accesorio combinado de aluminio y nailon se encuentra fácilmente en un bolsillo, se sujeta a una correa de mochila o se sujeta al cinturón para mayor comodidad.",
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    id: 34,
    name: "Gorra Mountain",
    categoryId: 3,
    price: 32,
    description: "Tu nueva gorra favorito que luce como un viejo amigo. Suave, sutil y el complemento perfecto para la comodidad informal.",
    createdAt: new Date,
    updatedAt: new Date
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', products, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};