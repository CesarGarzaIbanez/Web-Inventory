// Columnas de PC/Laptop

// https://stackoverflow.com/questions/69369969/react-datatable-customization
const pc = [
    {
        name: 'Tipo',
        selector: row => row.tipo,
        sortable: true,
    },
    {
        name: 'PC',
        selector: row => row.pc,
        sortable: true,

    },
    {
        name: 'Monitor',
        selector: row => row.monitor,
        sortable: true,

    },
    {
        name: 'Departamento',
        selector: row => row.departamento,
        sortable: true,
    },
    {
        name: 'Lugar',
        selector: row => row.lugar,
        sortable: true,
    },
];

const computadoras = [
    {
        name: 'Tipo',
        selector: row => row.tipo,
        sortable: true,
    },
    {
        name: 'Marca',
        selector: row => row.marca,
        sortable: true,

    },
    {
        name: 'Modelo',
        selector: row => row.modelo,
        sortable: true,

    },
    {
        name: 'CPU',
        selector: row => row.cpu,
        sortable: true,
    },
    {
        name: 'RAM',
        selector: row => row.ram,
        sortable: true,
    },
    {
        name: 'Almacenamiento',
        selector: row => row.almacenamiento,
        sortable: true,
    },
    {
        name: 'Disco',
        selector: row => row.disco,
        sortable: true,
    },
    {
        name: 'Serie',
        selector: row => row.serie,
        sortable: true,
    },
    {
        name: 'Activo',
        selector: row => row.activo,
        sortable: true,
    },
    {
        name: 'Departamento',
        selector: row => row.departamento,
        sortable: true,
    },
    {
        name: 'Lugar',
        selector: row => row.lugar,
        sortable: true,
    },
];
// Datos genericos
let data = [
    {
        tipo: 'PC',
        pc: 'Dell',
        monitor: 'Asus',
        marca: 'HP',
        modelo: 'x213',
        tinta: 'CMYK',
        c: '2012-04-21T18:25:43-05:00',
        m: '2012-04-21T18:25:43-05:00',
        y: '2012-04-21T18:25:43-05:00',
        k: '2012-04-21T18:25:43-05:00',
        cmyk: '2012-04-21T18:25:43-05:00',
        teclado: '312sad',
        mouse: '33ss',
        cpu: 'Intel i7',
        caracteristicas: 'Es una cosa super padre, y con 30gb de todo',
        puerto: '33223',
        ram: '12',
        almacenamiento: '1 tb',
        disco: 'HDD',
        serie: '2131221',
        activo: '12312321',
        departamento: 'DTI',
        lugar: 'Oficina',
    },
    {
        tipo: 'PC',
        pc: 'Dell',
        monitor: 'Asus',
        marca: 'HP',
        modelo: 'x213',
        tinta: 'CMYK',
        c: '2012-04-21T18:25:43-05:00',
        m: '2012-04-21T18:25:43-05:00',
        y: '2012-04-21T18:25:43-05:00',
        k: '2012-04-21T18:25:43-05:00',
        cmyk: '2012-04-21T18:25:43-05:00',
        teclado: '312sad',
        mouse: '33ss',
        cpu: 'Intel i7',
        caracteristicas: 'Es una cosa super padre, y con 30gb de todo',
        puerto: '33223',
        ram: '12',
        almacenamiento: '1 tb',
        disco: 'HDD',
        serie: '2131221',
        activo: '12312321',
        departamento: 'DTI',
        lugar: 'Oficina',
    },
    {
        tipo: 'PC',
        pc: 'Dell',
        monitor: 'Asus',
        marca: 'HP',
        modelo: 'x213',
        tinta: 'CMYK',
        c: '2012-04-21T18:25:43-05:00',
        m: '2012-04-21T18:25:43-05:00',
        y: '2012-04-21T18:25:43-05:00',
        k: '2012-04-21T18:25:43-05:00',
        cmyk: '2012-04-21T18:25:43-05:00',
        teclado: '312sad',
        mouse: '33ss',
        cpu: 'Intel i7',
        caracteristicas: 'Es una cosa super padre, y con 30gb de todo',
        puerto: '33223',
        ram: '12',
        almacenamiento: '1 tb',
        disco: 'HDD',
        serie: '2131221',
        activo: '12312321',
        departamento: 'DTI',
        lugar: 'Oficina',
    },
    {
        tipo: 'PC',
        pc: 'Dell',
        monitor: 'Asus',
        marca: 'HP',
        modelo: 'x213',
        tinta: 'CMYK',
        c: '2012-04-21T18:25:43-05:00',
        m: '2012-04-21T18:25:43-05:00',
        y: '2012-04-21T18:25:43-05:00',
        k: '2012-04-21T18:25:43-05:00',
        cmyk: '2012-04-21T18:25:43-05:00',
        teclado: '312sad',
        mouse: '33ss',
        cpu: 'Intel i7',
        caracteristicas: 'Es una cosa super padre, y con 30gb de todo',
        puerto: '33223',
        ram: '12',
        almacenamiento: '1 tb',
        disco: 'HDD',
        serie: '2131221',
        activo: '12312321',
        departamento: 'DTI',
        lugar: 'Oficina',
    },
    {
        tipo: 'PC',
        pc: 'Dell',
        monitor: 'Asus',
        marca: 'HP',
        modelo: 'x213',
        tinta: 'CMYK',
        c: '2012-04-21T18:25:43-05:00',
        m: '2012-04-21T18:25:43-05:00',
        y: '2012-04-21T18:25:43-05:00',
        k: '2012-04-21T18:25:43-05:00',
        cmyk: '2012-04-21T18:25:43-05:00',
        teclado: '312sad',
        mouse: '33ss',
        cpu: 'Intel i7',
        caracteristicas: 'Es una cosa super padre, y con 30gb de todo',
        puerto: '33223',
        ram: '12',
        almacenamiento: '1 tb',
        disco: 'HDD',
        serie: '2131221',
        activo: '12312321',
        departamento: 'Cubiculos',
        lugar: 'Cub 1',
    },
    {
        tipo: 'PC',
        pc: 'HP',
        monitor: 'LANIX',
        marca: 'HP',
        modelo: 'x213',
        tinta: 'CMYK',
        c: '2012-04-21T18:25:43-05:00',
        m: '2012-04-21T18:25:43-05:00',
        y: '2012-04-21T18:25:43-05:00',
        k: '2012-04-21T18:25:43-05:00',
        cmyk: '2012-04-21T18:25:43-05:00',
        teclado: '312sad',
        mouse: '33ss',
        cpu: 'Intel i7',
        caracteristicas: 'Es una cosa super padre, y con 30gb de todo',
        puerto: '33223',
        ram: '12',
        almacenamiento: '1 tb',
        disco: 'HDD',
        serie: '2131221',
        activo: '12312321',
        departamento: 'Cubiculos',
        lugar: 'Cub 2',
    },
    {
        tipo: 'PC',
        pc: 'HP',
        monitor: 'LANIX',
        marca: 'HP',
        modelo: 'x213',
        tinta: 'CMYK',
        c: '2012-04-21T18:25:43-05:00',
        m: '2012-04-21T18:25:43-05:00',
        y: '2012-04-21T18:25:43-05:00',
        k: '2012-04-21T18:25:43-05:00',
        cmyk: '2012-04-21T18:25:43-05:00',
        teclado: '312sad',
        mouse: '33ss',
        cpu: 'Intel i7',
        caracteristicas: 'Es una cosa super padre, y con 30gb de todo',
        puerto: '33223',
        ram: '12',
        almacenamiento: '1 tb',
        disco: 'HDD',
        serie: '2131221',
        activo: '12312321',
        departamento: 'Cubiculos',
        lugar: 'Cub 2',
    }, {
        tipo: 'PC',
        pc: 'HP',
        monitor: 'LANIX',
        marca: 'HP',
        modelo: 'x213',
        tinta: 'CMYK',
        c: '2012-04-21T18:25:43-05:00',
        m: '2012-04-21T18:25:43-05:00',
        y: '2012-04-21T18:25:43-05:00',
        k: '2012-04-21T18:25:43-05:00',
        cmyk: '2012-04-21T18:25:43-05:00',
        teclado: '312sad',
        mouse: '33ss',
        cpu: 'Intel i7',
        caracteristicas: 'Es una cosa super padre, y con 30gb de todo',
        puerto: '33223',
        ram: '12',
        almacenamiento: '1 tb',
        disco: 'HDD',
        serie: '2131221',
        activo: '12312321',
        departamento: 'Cubiculos',
        lugar: 'Cub 2',
    }, {
        tipo: 'PC',
        pc: 'HP',
        monitor: 'LANIX',
        marca: 'HP',
        modelo: 'x213',
        tinta: 'CMYK',
        c: '2012-04-21T18:25:43-05:00',
        m: '2012-04-21T18:25:43-05:00',
        y: '2012-04-21T18:25:43-05:00',
        k: '2012-04-21T18:25:43-05:00',
        cmyk: '2012-04-21T18:25:43-05:00',
        teclado: '312sad',
        mouse: '33ss',
        cpu: 'Intel i7',
        caracteristicas: 'Es una cosa super padre, y con 30gb de todo',
        puerto: '33223',
        ram: '12',
        almacenamiento: '1 tb',
        disco: 'HDD',
        serie: '2131221',
        activo: '12312321',
        departamento: 'Cubiculos',
        lugar: 'Cub 2',
    }, {
        tipo: 'PC',
        pc: 'HP',
        monitor: 'LANIX',
        marca: 'HP',
        modelo: 'x213',
        tinta: 'CMYK',
        c: '2012-04-21T18:25:43-05:00',
        m: '2012-04-21T18:25:43-05:00',
        y: '2012-04-21T18:25:43-05:00',
        k: '2012-04-21T18:25:43-05:00',
        cmyk: '2012-04-21T18:25:43-05:00',
        teclado: '312sad',
        mouse: '33ss',
        cpu: 'Intel i7',
        caracteristicas: 'Es una cosa super padre, y con 30gb de todo',
        puerto: '33223',
        ram: '12',
        almacenamiento: '1 tb',
        disco: 'HDD',
        serie: '2131221',
        activo: '12312321',
        departamento: 'Cubiculos',
        lugar: 'Cub 2',
    }, {
        tipo: 'PC',
        pc: 'HP',
        monitor: 'LANIX',
        marca: 'HP',
        modelo: 'x213',
        tinta: 'CMYK',
        c: '2012-04-21T18:25:43-05:00',
        m: '2012-04-21T18:25:43-05:00',
        y: '2012-04-21T18:25:43-05:00',
        k: '2012-04-21T18:25:43-05:00',
        cmyk: '2012-04-21T18:25:43-05:00',
        teclado: '312sad',
        mouse: '33ss',
        cpu: 'Intel i7',
        caracteristicas: 'Es una cosa super padre, y con 30gb de todo',
        puerto: '33223',
        ram: '12',
        almacenamiento: '1 tb',
        disco: 'HDD',
        serie: '2131221',
        activo: '12312321',
        departamento: 'Cubiculos',
        lugar: 'Cub 2',
    }, {
        tipo: 'PC',
        pc: 'HP',
        monitor: 'HP',
        marca: 'HP',
        modelo: 'x213',
        tinta: 'CMYK',
        c: '2012-04-21T18:25:43-05:00',
        m: '2012-04-21T18:25:43-05:00',
        y: '2012-04-21T18:25:43-05:00',
        k: '2012-04-21T18:25:43-05:00',
        cmyk: '2012-04-21T18:25:43-05:00',
        teclado: '312sad',
        mouse: '33ss',
        cpu: 'Intel i7',
        caracteristicas: 'Es una cosa super padre, y con 30gb de todo',
        puerto: '33223',
        ram: '12',
        almacenamiento: '1 tb',
        disco: 'HDD',
        serie: '2131221',
        activo: '12312321',
        departamento: 'Cubiculos',
        lugar: 'Cub 2',
    },

]
// Columnas de objetos generales
const general = [
    {
        name: 'Tipo',
        selector: row => row.tipo,
        sortable: true,
    },
    {
        name: 'Marca',
        selector: row => row.marca,
        sortable: true,
    },
    {
        name: 'Modelo',
        selector: row => row.modelo,
        sortable: true,
    },
    {
        name: 'Características',
        selector: row => row.caracteristicas,
        sortable: true,
    },
    {
        name: 'Serie',
        selector: row => row.serie,
        sortable: true,
    },
    {
        name: 'Activo',
        selector: row => row.activo,
        sortable: true,
    },
    {
        name: 'Departamento',
        selector: row => row.departamento,
        sortable: true,
    },
    {
        name: 'Lugar',
        selector: row => row.lugar,
        sortable: true,
    },
]

// Columnas Monitor

const monitores = [
    {
        name: 'Tipo',
        selector: row => row.tipo,
        sortable: true,
    },
    {
        name: 'Marca',
        selector: row => row.marca,
        sortable: true,
    },
    {
        name: 'Modelo',
        selector: row => row.modelo,
        sortable: true,
    },
    {
        name: 'Teclado',
        selector: row => row.teclado,
        sortable: true,
    },
    {
        name: 'Mouse',
        selector: row => row.mouse,
        sortable: true,
    },
    {
        name: 'Caracteristicas',
        selector: row => row.caracteristicas,
        sortable: true,
    },
    {
        name: 'Serie',
        selector: row => row.serie,
        sortable: true,
    },
    {
        name: 'Activo',
        selector: row => row.activo,
        sortable: true,
    },
    {
        name: 'Departamento',
        selector: row => row.departamento,
        sortable: true,
    },
    {
        name: 'Lugar',
        selector: row => row.lugar,
        sortable: true,
    },
]

const accessPoint = [
    {
        name: 'Tipo',
        selector: row => row.tipo,
        sortable: true,
    },
    {
        name: 'Marca',
        selector: row => row.marca,
        sortable: true,
    },
    {
        name: 'Modelo',
        selector: row => row.modelo,
        sortable: true,
    },
    {
        name: 'Puerto',
        selector: row => row.puerto,
        sortable: true,
    },
    {
        name: 'Serie',
        selector: row => row.serie,
        sortable: true,
    },
    {
        name: 'Activo',
        selector: row => row.activo,
        sortable: true,
    },
    {
        name: 'Departamento',
        selector: row => row.departamento,
        sortable: true,
    },
    {
        name: 'Lugar',
        selector: row => row.lugar,
        sortable: true,
    },
]

const impresoras = [
    {
        name: 'Tipo',
        selector: row => row.tipo,
        sortable: true,
    },
    {
        name: 'Marca',
        selector: row => row.marca,
        sortable: true,
    },
    {
        name: 'Modelo',
        selector: row => row.modelo,
        sortable: true,
    },
    {
        name: 'Tinta',
        selector: row => row.tinta,
        sortable: true,
    },
    {
        name: 'C',
        selector: row => row.c,
        sortable: true,
    },
    {
        name: 'M',
        selector: row => row.m,
        sortable: true,
    },
    {
        name: 'Y',
        selector: row => row.y,
        sortable: true,
    },
    {
        name: 'K',
        selector: row => row.k,
        sortable: true,
    },
    {
        name: 'CMYK',
        selector: row => row.cmyk,
        sortable: true,
    },
    {
        name: 'Serie',
        selector: row => row.serie,
        sortable: true,
    },
    {
        name: 'Activo',
        selector: row => row.activo,
        sortable: true,
    },
    {
        name: 'Departamento',
        selector: row => row.departamento,
        sortable: true,
    },
    {
        name: 'Lugar',
        selector: row => row.lugar,
        sortable: true,
    },
]


let columns = [pc, computadoras, monitores, impresoras, accessPoint, general]

export { columns, data }


