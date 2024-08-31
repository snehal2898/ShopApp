import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ShopNavBar from './ShopNavBar';
import Home from '../components/Home';
import ElectronicsSection from '../components/electronics/ElectronicsSection';
import ClothingSection from '../components/clothing/ClothingSection';
import FurnitureSection from '../components/furniture/FurnitureSection';
import PageNotFound from '../components/PageNotFound';
import Men from '../components/clothing/Men';
import Women from '../components/clothing/Women';
import Kids from '../components/clothing/Kids';
import Sofa from '../components/furniture/Sofa';
import Wardrobe from '../components/furniture/Wardrobe';
import Bed from '../components/furniture/Bed';
import Mobile from '../components/electronics/Mobile';
import Laptop from '../components/electronics/Laptop';
import MobileList from '../components/electronics/mobiles/MobileList';
import MobileDetail from '../components/electronics/mobiles/MobileDetail';
import LaptopList from '../components/electronics/laptops/LaptopList';
import LaptopDetail from '../components/electronics/laptops/LaptopDetail';
import StateShare from '../components/state_sharing/StateShare';
import SofaList from '../components/furniture/sofas/SofaList';
import WardrobeList from '../components/furniture/wardrobes/WardrobeList';
import BedList from '../components/furniture/beds/BedList';
import BedDetail from '../components/furniture/beds/BedDetail';
import SofaDetail from '../components/furniture/sofas/SofaDetail';
import WardrobeDetail from '../components/furniture/wardrobes/WardrobeDetail';
import ContextDemo from '../components/context/ContextDemo';
import RefDemo from '../components/ref/RefDemo';
import ReducerDemo from '../components/reducer/ReducerDemo';
import EffectDemo from '../components/effect/EffectDemo';
import ShopCart from '../components/cart/ShopCart';

const ShopRouter = ()=>{
    // used to define routes

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ShopNavBar/>}>
                    {/* child route definitions */ }
                    <Route index element={<Home/>} />
                    <Route path='/electronics' element={<ElectronicsSection/>}  >

                        {/* child route definitions of electronics route */ }
                        <Route path='mobile' element={<Mobile/>} >
                            <Route path='' element={<MobileList/>} />
                                {/* :mid is a variable of route parameter  */}
                            <Route path='detail/:mid' element={<MobileDetail/>}  />
                        </Route>  

                        <Route path='laptop' element={<Laptop/>} >
                            <Route path='' element={<LaptopList/>} />
                            <Route path='detail/:mid' element={<LaptopDetail/>} />
                        </Route>
                    </Route>

                    <Route path='/clothing' element={ <ClothingSection/> }  >
                        {/* child route definitions of clothing route */ }
                        <Route path='men' element={<Men/>} />
                        <Route path='women' element={<Women/>} />
                        <Route path='kids' element={<Kids/>} />

                    </Route>
                    <Route path='/furniture' element={ <FurnitureSection/> } >
                        {/* child route definitions of furniture route */ }
                        <Route path='sofa' element={<Sofa/> }>
                            <Route path='' element={<SofaList/>} />
                            <Route path='detail/:sid' element={<SofaDetail/>} />
                        </Route>
                        <Route path='wardrobe' element={<Wardrobe/>} >
                            <Route path='' element={<WardrobeList/>} />
                            <Route path='detail/:wid' element={<WardrobeDetail/>} />
                        </Route>
                        <Route path='bed' element={<Bed/>} >
                            <Route path='' element={<BedList/>} />
                            <Route path='detail/:bid' element={<BedDetail/>} />
                        </Route>
                    </Route>

                    <Route path='/state-share' element={<StateShare/>} />
                    <Route path='/context' element={<ContextDemo/>} />
                    <Route path='/ref' element={<RefDemo/>} />
                    <Route path='/reducer' element={<ReducerDemo/>} />
                    <Route path='/effect' element={<EffectDemo/>} />

                    <Route path='/cart' element={<ShopCart/>} />

                    <Route path='*' element={<PageNotFound/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )

}

export default ShopRouter;