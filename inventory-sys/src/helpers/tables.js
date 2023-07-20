// Tablas con las caracteristicas que debe de tener cada una
const equipos = [
    {
        name: 'Tipo',
        selector: row => row.tipo,
        sortable: true,
    },
    {
        name: 'Activo Computadora',
        selector: row => row.activoComp,
        sortable: true,

    },
    {
        name: 'Activo Monitor',
        selector: row => row.activoMon,
        sortable: true,

    },
    {
        name: 'Departamento',
        selector: row => row.departamento,
        sortable: true,
    },
    {
        name: 'Area',
        selector: row => row.area,
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
        name: 'Area',
        selector: row => row.area,
        sortable: true,
    },
    {
        name:'IP',
        selector:row=>row.ip,
        sortable:true,
    }
];

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
        name: 'Area',
        selector: row => row.area,
        sortable: true,
    },
]

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
        name: 'Area',
        selector: row => row.area,
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
        name: 'Area',
        selector: row => row.area,
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
        name: 'Area',
        selector: row => row.area,
        sortable: true,
    },
]

let columns = [equipos, computadoras, monitores, impresoras, accessPoint, general]

export { columns }


