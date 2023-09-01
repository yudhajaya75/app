import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Banner from '../../components/banner/banner'
import Search from '../../components/searchbanner/search'
import Wishlish from '../../components/wishlist/card'
import Tour from '../../components/tour/tour'
import Category from '../../components/category/category'
import Tour2 from '../../components/tour/tour2'
import Desc from '../../components/desc/desc'
import Details from '../../components/details/details'

function Home() {
    return (
        <>
            <div className='mx-auto max-w-[1800px] relative'>
                <Navbar />
                <Banner />
                <Search />
                <Wishlish />
                <Tour />
                <Category />
                <Tour2 />
                <Desc />
                <Details />
            </div>
        </>
    )
}

export default Home