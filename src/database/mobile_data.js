import apple_iphone_15_pro_max from "../assets/images/mobile/apple_iphone_15_pro_max.jpg" 
import samsung_galaxy_s23_ultra_5g from "../assets/images/mobile/samsung_galaxy_s23_ultra_5g.jpg"
import vivo_x100_pro_5g from "../assets/images/mobile/vivo_x100_pro_5g.jpg"

const mobiles = [
    {
        id:1,
        model: "iPhone 15 Pro Max",
        brand: "Apple",
        price: 156900.00,
        specification: {
            camera:{
                primary: "48 MP + 12 MP + 12 MP Triple",
                front: "12 MP"
            },
            internalStorage: "256 GB Non Expandable",
            ram: "8 GB"
        },
        image: apple_iphone_15_pro_max
    },

    {
        id:2,
        model: "Galaxy S23 Ultra 5G",
        brand: "Samsung",
        price: 104999.00,
        specification: {
            camera:{
                primary: "200 MP + 12 MP + 10 MP + 10 MP Quad",
                front: "12 MP"
            },
            internalStorage: "256 GB Non Expandable",
            ram: "12 GB"
        },
        image: samsung_galaxy_s23_ultra_5g
    },

    {
        id:3,
        model: "X100 Pro 5G",
        brand: "Vivo",
        price: 89999.00,
        specification: {
            camera:{
                primary: "50 MP + 50 MP + 50 MP Triple",
                front: "32 MP"
            },
            internalStorage: "512 GB Non Expandable",
            ram: "16 GB"
        },
        image: vivo_x100_pro_5g
    }
        
]

export default mobiles;