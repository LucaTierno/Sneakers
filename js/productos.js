const productos = [
    {
        id: 1,
        nombre: "Nike Air Force 1 '07",
        precio: 120,
        descripcion: "Zapatillas de Moda para Mujer",
        categoria: {
            nombre: "Air Force",
            id: "Air Force"
        },
        imagen: "./assets/img/air-force/nike-air-force-1-'07-lv8.webp"
    },
    {
        id: 2,
        nombre: "Nike Air Force 1 '07",
        precio: 110,
        descripcion: "Zapatillas de Moda para Hombre",
        categoria: {
            nombre: "Air Force",
            id: "Air Force"
        },
        imagen: "./assets/img/air-force/nike-air-force-1-'07-lx (2).webp"
    },
    {
        id: 3,
        nombre: "Air Jordan 1 Acclimate",
        precio: 120,
        descripcion: "Zapatillas de Moda para Mujer",
        categoria: {
            nombre: "Air Jordan",
            id: "Air Jordan"
        },
        imagen: "./assets/img/air-jordan/air-jordan-1-acclimate.webp"
    },
    {
        id: 4,
        nombre: "Nike Air Max 95",
        precio: 120,
        descripcion: "Zapatillas de Moda para Hombre",
        categoria: {
            nombre: "Air Max",
            id: "Air Max"
        },
        imagen: "./assets/img/air-max/nike-air-max-95.webp"
    },
    {
        id: 5,
        nombre: "Nike Air Max 97 OG",
        precio: 120,
        descripcion: "Zapatillas de Moda para Hombre",
        categoria: {
            nombre: "Air Max",
            id: "Air Max"
        },
        imagen: "./assets/img/air-max/nike-air-max-97-og.webp"
    },
    {
        id: 6,
        nombre: "Nike Air Force 1 '07",
        precio: 120,
        descripcion: "Zapatillas de Moda para Mujer",
        categoria: {
            nombre: "Air Force",
            id: "Air Force"
        },
        imagen: "./assets/img/air-force/nike-air-force-1-'07-lx (3).webp"
    },
    {
        id: 7,
        nombre: "Air Jordan 1 Mid SE",
        precio: 120,
        descripcion: "Zapatillas de Moda para Mujer",
        categoria: {
            nombre: "Air Jordan",
            id: "Air Jordan"
        },
        imagen: "./assets/img/air-jordan/air-jordan-1-mid-se (2).webp"
    },
    {
        id: 8,
        nombre: "Air Jordan 1 Mid SE",
        precio: 120,
        descripcion: "Zapatillas de Moda para Hombre",
        categoria: {
            nombre: "Air Jordan",
            id: "Air Jordan"
        },
        imagen: "./assets/img/air-jordan/air-jordan-1-mid-se.webp"
    },
    {
        id: 9,
        nombre: "Nike Air Max 97 SE",
        precio: 120,
        descripcion: "Zapatillas de Moda para Mujer",
        categoria: {
            nombre: "Air Max",
            id: "Air Max"
        },
        imagen: "./assets/img/air-max/nike-air-max-97-se (2).webp"
    },
    {
        id: 10,
        nombre: "Air Jordan 1 Mid",
        precio: 120,
        descripcion: "Zapatillas de Moda para Hombre",
        categoria: {
            nombre: "Air Jordan",
            id: "Air Jordan"
        },
        imagen: "./assets/img/air-jordan/air-jordan-1-mid.webp"
    },
    {
        id: 11,
        nombre: "Nike Air Max 97 SE",
        precio: 120,
        descripcion: "Zapatillas de Moda para Hombre",
        categoria: {
            nombre: "Air Max",
            id: "Air Max"
        },
        imagen: "./assets/img/air-max/nike-air-max-97-se (3).webp"
    },
    {
        id: 12,
        nombre: "Nike Air Force 1 '07",
        precio: 120,
        descripcion: "Zapatillas de Moda para Hombre",
        categoria: {
            nombre: "Air Force",
            id: "Air Force"
        },
        imagen: "./assets/img/air-force/nike-air-force-1-'07-lx (4).webp"
    },
    {
        id: 13,
        nombre: "Nike Air Force 1 '07",
        precio: 120,
        descripcion: "Zapatillas de Moda para Hombre",
        categoria: {
            nombre: "Air Force",
            id: "Air Force"
        },
        imagen: "./assets/img/air-force/nike-air-force-1-'07-lx.webp"
    },
    {
        id: 14,
        nombre: "Nike Air Force 1 '07",
        precio: 120,
        descripcion: "Zapatillas de Moda para Hombre",
        categoria: {
            nombre: "Air Force",
            id: "Air Force"
        },
        imagen: "./assets/img/air-force/nike-air-force-1-'07-se.webp"
    },
    {
        id: 15,
        nombre: "Air Jordan 1 Retro High",
        precio: 120,
        descripcion: "Zapatillas de Moda para Mujer",
        categoria: {
            nombre: "Air Jordan",
            id: "Air Jordan"
        },
        imagen: "./assets/img/air-jordan/air-jordan-1-retro-high-og (2).webp"
    },
    {
        id: 16,
        nombre: "Air Jordan 1 Retro High",
        precio: 120,
        descripcion: "Zapatillas de Moda para Hombre",
        categoria: {
            nombre: "Air Jordan",
            id: "Air Jordan"
        },
        imagen: "./assets/img/air-jordan/air-jordan-1-retro-high-og.webp"
    },
    {
        id: 17,
        nombre: "Nike Air Max 97 SE",
        precio: 120,
        descripcion: "Zapatillas de Moda para Mujer",
        categoria: {
            nombre: "Air Max",
            id: "Air Max"
        },
        imagen: "./assets/img/air-max/nike-air-max-97-se (4).webp"
    },
    {
        id: 18,
        nombre: "Nike Air Max 97 SE",
        precio: 120,
        descripcion: "Zapatillas de Moda para Hombre",
        categoria: {
            nombre: "Air Max",
            id: "Air Max"
        },
        imagen: "./assets/img/air-max/nike-air-max-97-se.webp"
    },
    {
        id: 19,
        nombre: "Nike Air Max 97",
        precio: 120,
        descripcion: "Zapatillas de Moda para Hombre",
        categoria: {
            nombre: "Air Max",
            id: "Air Max"
        },
        imagen: "./assets/img/air-max/nike-air-max-97.webp"
    },
    {
        id: 20,
        nombre: "Nike Air Force 1 '07",
        precio: 120,
        descripcion: "Zapatillas de Moda para Mujer",
        categoria: {
            nombre: "Air Force",
            id: "Air Force"
        },
        imagen: "./assets/img/air-force/nike-air-force-1-'07-se.webp"
    },
    {
        id: 21,
        nombre: "Nike Air Force 1 Fontanka",
        precio: 120,
        descripcion: "Zapatillas de Moda para Mujer",
        categoria: {
            nombre: "Air Force",
            id: "Air Force"
        },
        imagen: "./assets/img/air-force/nike-air-force-1-fontanka.webp"
    },
    {
        id: 22,
        nombre: "Air Jordan 1 Zoom",
        precio: 120,
        descripcion: "Zapatillas de Moda para Mujer",
        categoria: {
            nombre: "Air Jordan",
            id: "Air Jordan"
        },
        imagen: "./assets/img/air-jordan/air-jordan-1-zoom-air-cmft.webp"
    },
    {
        id: 23,
        nombre: "Air Jordan 1 Zoom Comfort",
        precio: 120,
        descripcion: "Zapatillas de Moda para Mujer",
        categoria: {
            nombre: "Air Jordan",
            id: "Air Jordan"
        },
        imagen: "./assets/img/air-jordan/air-jordan-1-zoom-comfort-2 (2).webp"
    },
    {
        id: 24,
        nombre: "Air Jordan 1 Zoom Comfort",
        precio: 120,
        descripcion: "Zapatillas de Moda para Hombre",
        categoria: {
            nombre: "Air Jordan",
            id: "Air Jordan"
        },
        imagen: "./assets/img/air-jordan/air-jordan-1-zoom-comfort-2.webp"
    },
    {
        id: 25,
        nombre: "Nike Air Max Scorpion",
        precio: 120,
        descripcion: "Zapatillas de Moda para Hombre",
        categoria: {
            nombre: "Air Max",
            id: "Air Max"
        },
        imagen: "./assets/img/air-max/nike-air-max-scorpion.webp"
    },
    {
        id: 26,
        nombre: "Nike Air Max TW SE",
        precio: 120,
        descripcion: "Zapatillas de Moda para Hombre",
        categoria: {
            nombre: "Air Max",
            id: "Air Max"
        },
        imagen: "./assets/img/air-max/nike-air-max-tw-se.webp"
    },
    {
        id: 27,
        nombre: "Nike Air Force 1 Mid '07",
        precio: 120,
        descripcion: "Zapatillas de Moda para Hombre",
        categoria: {
            nombre: "Air Force",
            id: "Air Force"
        },
        imagen: "./assets/img/air-force/nike-air-force-1-mid-'07-lx.webp"
    },
    {
        id: 28,
        nombre: "Nike Air Force 1 Shadow",
        precio: 120,
        descripcion: "Zapatillas de Moda para Mujer",
        categoria: {
            nombre: "Air Force",
            id: "Air Force"
        },
        imagen: "./assets/img/air-force/nike-air-force-1-shadow.webp"
    },
]