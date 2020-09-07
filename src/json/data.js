const data = [
    {
        id: 1,
        nombre: 'Bebidas frías',
        imagen: '/images/categorias/bebida-fria.svg',
        slug: 'bebidas-frias',
        platos: [
            {
                id: 1,
                nombre: 'Jugo',
                imagen: '/images/productos/jugo.jpg',
                precios: [
                    {
                        id: 1,
                        precio: 0.6,
                        nombre: 'pequeña',
                    },
                    {
                        id: 1,
                        precio: 2,
                        nombre: 'mediana',
                    },
                    {
                        id: 1,
                        precio: 3.25,
                        nombre: 'grande',
                    },
                ]
            },
            {
                id: 2,
                nombre: 'Gaseosa',
                imagen: '/images/productos/gaseosa.jpg',
                precios: [
                    {
                        id: 4,
                        precio: 0.7,
                        nombre: 'unidad',
                    },
                ]
            },
            {
                id: 3,
                nombre: 'Bebida fria dos',
                imagen: '/images/productos/gaseosa.jpg',
                precios: [
                    {
                        id: 4,
                        precio: 0.7,
                        nombre: 'unidad',
                    },
                ]
            },
        ]
    },
    {
        id: 2,
        nombre: 'A la carta',
        imagen: '/images/categorias/carta.png',
        slug: 'carta',
        platos: [
            {
                id: 4,
                nombre: 'Crema de verduras',
                imagen: '/images/productos/crema.jpg',
                precios: [
                    {
                        id: 4,
                        precio: 0.7,
                        nombre: 'unidad',
                    },
                ]
            },
            {
                id: 5,
                nombre: 'Plato dos',
                imagen: '/images/productos/crema.jpg',
                precios: [
                    {
                        id: 1,
                        precio: 0.6,
                        nombre: 'pequeña',
                    },
                    {
                        id: 1,
                        precio: 2,
                        nombre: 'mediana',
                    },
                    {
                        id: 1,
                        precio: 3.25,
                        nombre: 'grande',
                    },
                ]
            },
            {
                id: 6,
                nombre: 'Plato tres',
                imagen: '/images/productos/crema.jpg',
                precios: [
                    {
                        id: 4,
                        precio: 0.7,
                        nombre: 'unidad',
                    },
                ]
            },
        ]
    },
    {
        id: 3,
        nombre: 'Bebidas Calientes',
        imagen: '/images/categorias/bebida-caliente.png',
        slug: 'bebidas-calientes',
        platos: [
            {
                id: 7,
                nombre: 'Café',
                imagen: '/images/productos/cafe.jpg',
                precios: [
                    {
                        id: 1,
                        precio: 0.6,
                        nombre: 'pequeña',
                    },
                    {
                        id: 1,
                        precio: 2,
                        nombre: 'mediana',
                    },
                    {
                        id: 1,
                        precio: 3.25,
                        nombre: 'grande',
                    },
                ]
            },
            {
                id: 8,
                nombre: 'Bebida dos',
                imagen: '/images/productos/cafe.jpg',
                id_categoria: 3,
                precios: [
                    {
                        id: 1,
                        precio: 0.6,
                        nombre: 'pequeña',
                    },
                    {
                        id: 1,
                        precio: 2,
                        nombre: 'mediana',
                    },
                    {
                        id: 1,
                        precio: 3.25,
                        nombre: 'grande',
                    },
                ]
            },
            {
                id: 9,
                nombre: 'Bebida tres',
                imagen: '/images/productos/cafe.jpg',
                precios: [
                    {
                        id: 4,
                        precio: 0.7,
                        nombre: 'unidad',
                    },
                ]
            },
        ]
    },
    {
        id: 4,
        nombre: 'Comida rápida',
        imagen: '/images/categorias/rapida.png',
        slug: 'comida-rapida',
        platos: [
            {
                id: 10,
                nombre: 'Pizza',
                imagen: '/images/productos/pizza.jpg',
                precios: [
                    {
                        id: 4,
                        precio: 0.7,
                        nombre: 'unidad',
                    },
                ]
            },
            {
                id: 11,
                nombre: 'Comida rápida dos',
                imagen: '/images/productos/pizza.jpg',
                precios: [
                    {
                        id: 4,
                        precio: 0.7,
                        nombre: 'unidad',
                    },
                ]
            },
            {
                id: 12,
                nombre: 'Comida rápida tres',
                imagen: '/images/productos/pizza.jpg',
                id_categoria: 4,
                precios: [
                    {
                        id: 1,
                        precio: 0.6,
                        nombre: 'pequeña',
                    },
                    {
                        id: 1,
                        precio: 2,
                        nombre: 'mediana',
                    },
                    {
                        id: 1,
                        precio: 3.25,
                        nombre: 'grande',
                    },
                ]
            },
        ]
    },
    {
        id: 5,
        nombre: 'Postres',
        imagen: '/images/categorias/postre.png',
        slug: 'postres',
        platos: [
            {
                id: 13,
                nombre: 'Tiramisú',
                imagen: '/images/productos/tiramisu.jpg',
                precios: [
                    {
                        id: 4,
                        precio: 0.7,
                        nombre: 'unidad',
                    },
                ]
            },
            {
                id: 14,
                nombre: 'Postre dos',
                imagen: '/images/productos/tiramisu.jpg',
                precios: [
                    {
                        id: 4,
                        precio: 0.7,
                        nombre: 'unidad',
                    },
                ]
            },
            {
                id: 15,
                nombre: 'Postre tres',
                imagen: '/images/productos/tiramisu.jpg',
                precios: [
                    {
                        id: 4,
                        precio: 0.7,
                        nombre: 'unidad',
                    },
                ]
            },
        ]
    },
    {
        id: 6,
        nombre: 'Categoria 6',
        imagen: '/images/categorias/carta.png',
        slug: 'cat-6',
        platos: []
    },
    {
        id: 7,
        nombre: 'Categoria 7',
        imagen: '/images/categorias/bebida-caliente.png',
        slug: 'cat-7',
        platos: []
    },
]

export default data;