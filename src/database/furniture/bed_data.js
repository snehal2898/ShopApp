import single_bed from '../../assets/images/furniture/bed/single_bed.jpg'
import double_bed from '../../assets/images/furniture/bed/double_bed.jpg'
import queen_bed from '../../assets/images/furniture/bed/queen_bed.jpg'
import king_bed from '../../assets/images/furniture/bed/king_bed.jpg'
import diwan_bed from '../../assets/images/furniture/bed/diwan_bed.jpg'

const beds =[
    {
        id : 1,
        bedType : "Single",
        lengthInches : 75,
        widthInches : 30,
        price : 9999.00,
        finishType : "Laminated",
        color : "Wooden Brown",
        image : single_bed
    },

    {
        id : 2,
        bedType : "Double",
        lengthInches : 75,
        widthInches : 48,
        price : 13600.00,
        finishType : "Laminated",
        color : "Wood Texture",
        image : double_bed
    },

    {
        id : 3,
        bedType : "Queen",
        lengthInches : 78,
        widthInches : 66,
        price : 16900.00,
        finishType : "Laminated",
        color : "Silver",
        image : queen_bed
    },

    {
        id : 4,
        bedType : "King",
        lengthInches : 78,
        widthInches : 72,
        price : 32999.00,
        finishType : "Laminated",
        color : "Golden",
        image : king_bed

    },

    {
        id : 5,
        bedType : "Diwan",
        lengthInches : 70,
        widthInches : 30,
        price : 6799.00,
        finishType : "Laminated",
        color : "Brown",
        image : diwan_bed
    }
]

export default beds;