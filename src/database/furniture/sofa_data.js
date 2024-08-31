import casacomfort from '../../assets/images/furniture/sofa/casacomfort.jpg'
import casaliving_rolando from '../../assets/images/furniture/sofa/casaliving_rolando.jpg'
import solimo from '../../assets/images/furniture/sofa/solimo.jpg'

const sofas = [
    {
        id : 1,
        brand : "Casacomfort",
        sofaDimension : "1.37D x 2.01W x 0.84H Meters",
        type : "Sectional",
        color : "Light-Dark Grey",
        seatingCapacity : 4.00,
        style : "Modern",
        shape : "L-Shape",
        frameMaterial : "Wood",
        price : 17268.00,
        image : casacomfort
    },

    {
        id : 2,
        brand : "Casaliving ",
        sofaDimension : "0.84D x 2W x 1.55H Meters",
        type : "Sectional",
        color : "Blue Grey",
        seatingCapacity : 4.00,
        style : "Italian",
        shape : "L-Shape",
        frameMaterial : "Wood",
        price : 15999.00,
        image : casaliving_rolando
    },

    {
        id : 3,
        brand : "Solimo",
        sofaDimension : "81.3D x 142.2W x 71.1H Centimeters",
        type : "Sectional",
        color : "Blue",
        seatingCapacity : 2.00,
        style : "Track",
        shape : "Rectangular",
        frameMaterial : "Wood",
        price : 22869.00,
        image : solimo
    },
]

export default sofas;