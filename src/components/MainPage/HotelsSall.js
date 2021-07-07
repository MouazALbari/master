import React ,{useState} from 'react'
import InfiniteCarousel from 'react-leaf-carousel';
import HotelCard from './HotelCard';
import hotels from '../../hotels.json'
function HotelsSall() {
    const [hotelsSall,setHotels] =useState([...hotels])
    return (
        <div className='hotelSallSection'>
            <header>   best offers : </header>
            <InfiniteCarousel
              breakpoints={[
            
                {
                  breakpoint: 767.98,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 991.98,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  },
                },
              ]}
            slidesToShow={3}

         

            >
                {
                    hotelsSall.map(hotel=> <HotelCard hotel={hotel}/>)
                }
            </InfiniteCarousel>
        </div>
    )
}

export default HotelsSall
