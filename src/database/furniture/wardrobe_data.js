import solimo_wardrobe from '../../assets/images/furniture/wardrobe/solimo_wardrobe.jpg'
import solimo_vega from '../../assets/images/furniture/wardrobe/solimo_vega.jpg'
import home_wardrobe from '../../assets/images/furniture/wardrobe/home_wardrobe.jpg'

const wardrobes = [
    {
        id : 1,
        brand : "Solimo",
        color : "Wenge",
        dimension : "45D x 112.5W x 183H Centimeters",
        weightLimit : "40 Kilograms",
        style : "Without Mirror",
        numberOfDoors : 3,
        shape : "Rectangular",
        price : 12499.00,
        image : solimo_wardrobe
    },

    {
        id : 2,
        brand : "Solimo Vega",
        color : "Espresso",
        dimension : "48.3D x 81.3W x 177.8H Centimeters",
        weightLimit : "25 Kilograms",
        style : "Full Mirror",
        numberOfDoors : 2,
        shape : "Rectangular",
        price : 10499.00,
        image : solimo_vega
    },

    {
        id : 3,
        brand : "@home",
        color : "Brown",
        dimension : "10D x 10W x 10H Millimeters",
        weightLimit : "95 Kilograms",
        style : "Milford without Mirror",
        numberOfDoors : 4,
        shape : "Rectangular",
        price : 24485.00,
        image : home_wardrobe
    }
]

export default wardrobes;