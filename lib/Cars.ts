
export type CarType = {
    id: number;
    title: string;
    text: string;
    imageUrl: any;
    color: string;
    rotate?: boolean;
    potencia: string;
    aceleracion: string;
    motor: {
        title: string;
        text: string;
    }[];
    type: {
        title: string;
        text: string;
    }[];
};

export const CARS: CarType[] = [
    {
        id: 1,
        title: "Ferrari Monza SP1 ",
        text: "Nuevo concepto, denominado ‘Icona’, que conecta con el pasado a través del hilo conductor de los vehículos más evocadores de la propia historia.",
        imageUrl: 'https://cdn.ferrari.com/cms/network/media/img/resize/649ecb27e4a85f0089b49319-ferrari-models-menu-2023-cards-monza-sp1?width=1040&height=585',
        color: "#AB2326",
        potencia: "810",
        aceleracion: "2,9s",
        motor: [
            { title: 'VTEC', text: 'Gasoil' },
            { title: 'VT', text: 'Gas' },
            { title: '1.0', text: 'Gasoil' }
        ],
        type: [
            { title: 'PREMIUM', text: 'Desing Pack' },
            { title: 'SPORT', text: 'Premium Pack' }
        ]
    },
    {
        id: 2,
        title: "SF90 XX Spider",
        text: "El SF90 XX Spider, la primera versión especial Ferrari inspirada en el Programa XX.. para lograr una de nuestras mejores...",
        imageUrl: 'https://cdn.ferrari.com/cms/network/media/img/resize/64a6d22d867a7e002308a92b-ferrari-models-menu-2023-cards-sf90-xx-spider?width=1040&height=585',
        color: "#253C75",
        potencia: "1030",
        aceleracion: "2,9s",
        motor: [
            { title: 'VTEC', text: 'Gasoil' },
            { title: 'VT', text: 'Gas' },
            { title: '1.0', text: 'Gasoil' }
        ],
        type: [
            { title: 'PREMIUM', text: 'Desing Pack' },
            { title: 'SPORT', text: 'Premium Pack' }
        ]
    },
    {
        id: 3,
        title: "812 Competizione A",
        text: "A spectacular limited-series with Targa top, is an homage to the Prancing Horse’s glorious open-top tradition.",
        imageUrl: 'https://cdn.ferrari.com/cms/network/media/img/resize/649ec942f6396100889d6e17-ferrari-models-menu-2023-cards-812-competizione-a?&width=1040&height=585',
        color: "#e9cc3b",
        potencia: "830",
        aceleracion: "2,0s",
        motor: [
            { title: 'VTEC', text: 'Gasoil' },
            { title: 'VT', text: 'Gas' },
            { title: '1.0', text: 'Gasoil' }
        ],
        type: [
            { title: 'PREMIUM', text: 'Desing Pack' },
            { title: 'SPORT', text: 'Premium Pack' }
        ]
    },
    {
        id: 4,
        title: "SF90 Spider",
        text: "El Ferrari SF90 Spider es un superdeportivo híbrido descapotable con un motor V8 biturbo y tres motores eléctricos, capaz de alcanzar velocidades impresionantes con un diseño elegante y aerodinámico.",
        imageUrl: 'https://cdn.ferrari.com/cms/network/media/img/resize/66342fbd2130a100213cce39-ferrari-12cilindri-superheader-menu?width=1040&height=585',
        color: "#848583",
        potencia: "810",
        aceleracion: "2,9s",
        motor: [
            { title: 'VTEC', text: 'Gasoil' },
            { title: 'VT', text: 'Gas' },
            { title: '1.0', text: 'Gasoil' }
        ],
        type: [
            { title: 'PREMIUM', text: 'Desing Pack' },
            { title: 'SPORT', text: 'Premium Pack' }
        ]
    },
];
