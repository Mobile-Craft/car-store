
export type CarType = {
    id: number;
    title: string;
    text: string;
    imageUrl: any;
    color: string;
};

export const CARS: CarType[] = [
    {
        id: 1,
        title: "Porsche 911",
        text: "El Porsche 911 es un ícono de la ingeniería automotriz alemana, famoso por su rendimiento en pista y su versatilidad en carretera, equipado con un motor bóxer turboalimentado y un diseño clásico y atemporal.",
        // imageUrl: require('@/assets/images/porche.png'),
        imageUrl: 'https://static.vecteezy.com/system/resources/previews/019/612/690/non_2x/sport-car-isolated-on-transparent-background-3d-rendering-illustration-free-png.png',
        color: "#131313",
    },
    {
        id: 2,
        title: "McLaren 720S",
        text: "El McLaren 720S es un superdeportivo británico conocido por su impresionante rendimiento, con un motor V8 biturbo que produce 720 caballos de fuerza, y un diseño que combina elegancia y funcionalidad aerodinámica.",
        // imageUrl: require('@/assets/images/macClaren.png'),
        imageUrl: 'https://static.vecteezy.com/system/resources/previews/019/069/012/non_2x/sport-car-isolated-on-transparent-background-3d-rendering-illustration-free-png.png',
        color: "#7D0001",
    },
    {
        id: 3,
        title: "SF90 Spider",
        text: "El Ferrari SF90 Spider es un superdeportivo híbrido descapotable con un motor V8 biturbo y tres motores eléctricos, capaz de alcanzar velocidades impresionantes con un diseño elegante y aerodinámico.",
        // imageUrl: require('@/assets/images/SF90.avif'),
        imageUrl: 'https://static.vecteezy.com/system/resources/previews/019/056/283/non_2x/sport-car-isolated-on-transparent-background-3d-rendering-illustration-png.png',
        color: "#373647",
    },
    // {
    //     id: 4,
    //     title: "Lamborghini Urus",
    //     text: "El Lamborghini Urus es un SUV de lujo que combina la potencia de un superdeportivo con la practicidad de un vehículo familiar, equipado con un motor V8 biturbo y un diseño agresivo y moderno.",
    //     // imageUrl: require('@/assets/images/urus.png'),
    //     imageUrl: 'https://i.pinimg.com/originals/2d/9c/1c/2d9c1c3a52504860a6c2bc82f8e96e8e.png',
    //     color: "#facf6a",
    // },
];
