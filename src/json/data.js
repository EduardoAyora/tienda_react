export const data = [
    {
        id: 1,
        nombre: 'Bebidas frías',
        imagen: '/images/categorias/carta.png',
        slug: 'bebidas-frias',
        platos: [
            {
                id: 1,
                nombre: 'Jugo',
                imagen: '/images/productos/jugo.jpg',
                precios: [
                    {
                        id: 1,
                        precio: 0.7,
                        nombre: 'pequeña',
                        id_producto: 1,
                    },
                    {
                        id: 1,
                        precio: 2,
                        nombre: 'mediana',
                        id_producto: 1,
                    },
                    {
                        id: 1,
                        precio: 3.25,
                        nombre: 'grande',
                        id_producto: 1,
                    },
                ]
            },
            {
                id: 2,
                nombre: 'Gaseosa',
                imagen: '/images/productos/gaseosa.jpg',
                precios: []
            },
            {
                id: 3,
                nombre: 'Gaseosa',
                imagen: '/images/productos/gaseosa.jpg',
                precios: []
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
                imagen: '/images/categoria.jpeg',
                precios: []
            },
            {
                id: 5,
                nombre: 'Crema de verduras',
                imagen: '/images/categoria.jpeg',
                precios: []
            },
            {
                id: 6,
                nombre: 'Crema de verduras',
                imagen: '/images/categoria.jpeg',
                precios: []
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
                imagen: '/images/categoria.jpeg',
                precios: []
            },
            {
                id: 8,
                nombre: 'Café',
                imagen: '/images/categoria.jpeg',
                id_categoria: 3,
                precios: []
            },
            {
                id: 9,
                nombre: 'Café',
                imagen: '/images/categoria.jpeg',
                precios: []
            },
        ]
    },
    {
        id: 4,
        nombre: 'Comida rápida',
        imagen: '/images/categorias/carta.png',
        slug: 'comida-rapida',
        platos: [
            {
                id: 10,
                nombre: 'Pizza',
                imagen: '/images/categoria.jpeg',
                precios: []
            },
            {
                id: 11,
                nombre: 'Pizza',
                imagen: '/images/categoria.jpeg',
                precios: []
            },
            {
                id: 12,
                nombre: 'Pizza',
                imagen: '/images/categoria.jpeg',
                id_categoria: 4,
                precios: []
            },
        ]
    },
    {
        id: 5,
        nombre: 'Postres',
        imagen: '/images/categorias/bebida-caliente.png',
        slug: 'postres',
        platos: [
            {
                id: 13,
                nombre: 'Tiramisú',
                imagen: '/images/categoria.jpeg',
                precios: []
            },
            {
                id: 14,
                nombre: 'Tiramisú',
                imagen: '/images/categoria.jpeg',
                precios: []
            },
            {
                id: 15,
                nombre: 'Tiramisú',
                imagen: '/images/categoria.jpeg',
                precios: []
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