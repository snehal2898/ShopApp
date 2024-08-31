import dell_g15_5520 from "../assets/images/laptop/dell_g15_5520.jpg"
import asus_vivobook_15 from "../assets/images/laptop/asus_vivobook_15.jpg"
import hp_13_be2046au from "../assets/images/laptop/hp_13_be2046au.jpg"
import honor_brn_f56 from "../assets/images/laptop/honor_brn_f56.jpg"
import tecno_megabook_t1 from "../assets/images/laptop/tecno_megabook_t1.jpg"

const laptops = [
    {
        id : 1,
        model : "G15-5520",
        brand : "Dell",
        price : 119000.00,
        image : dell_g15_5520,
        specification : {
            screenSize : "15.6 Inches",
            color : "Dark Shadow Grey",
            storage : {
                hardDiskSize : "1 TB",
                ramMemory : "16 GB"
            },
            operatingSystem : "Windows 11 Home",
            cPUModel : "Core i9",
            graphicsCard : "Dedicated"
        }
    },

    {
        id : 2,
        model : "VivoBook 15",
        brand : "ASUS",
        price : 22990.00,
        image : asus_vivobook_15,
        specification : {
            screenSize : "15.6 Inches",
            color : "Transparent Silver",
            storage : {
                hardDiskSize : "512 GB",
                ramMemory : "4 GB"
            },
            operatingSystem : "Windows 11 Home",
            cPUModel : "Celeron N4020",
            graphicsCard : "Integrated"
        }
    },

    {
        id : 3,
        model : "13-be2046AU",
        brand : "HP",
        price : 77990.00,
        image : hp_13_be2046au,
        specification : {
            screenSize : "33.8 Centimetres",
            color : "Natural Silver",
            storage : {
                hardDiskSize : "1 TB",
                ramMemory : "16 GB"
            },
            operatingSystem : "Windows 11 Home",
            cPUModel : "Ryzen 7",
            graphicsCard : "Integrated"
        }
    },

    {
        id : 4,
        model : "BRN-F56",
        brand : "Honor",
        price : 48990.00,
        image : honor_brn_f56,
        specification : {
            screenSize : "16 Inches",
            color : "Space Gray",
            storage : {
                hardDiskSize : "512 GB",
                ramMemory : "16 GB"
            },
            operatingSystem : "Windows 11 Home",
            cPUModel : "Core i5-12450H",
            graphicsCard : "Intel UHD Graphics"
        }
    },

    {
        id : 5,
        model : "MEGABOOK T1",
        brand : "Tecno",
        price : 23990.00,
        image : tecno_megabook_t1,
        specification : {
            screenSize : "15.6 Inches",
            color : "Space Gray",
            storage : {
                hardDiskSize : "512 GB",
                ramMemory : "8 GB"
            },
            operatingSystem : "Windows 11 Home",
            cPUModel : "Intel Core i3",
            graphicsCard : "Integrated"
        }
    },
]

export default laptops;