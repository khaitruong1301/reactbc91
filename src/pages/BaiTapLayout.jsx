import React from 'react'
import HeaderBTLayout from '../components/HeaderBTLayout'
import Album from '../components/Album'
import AlbumContent from '../components/AlbumContent'
import AlbumFooter from '../components/AlbumFooter'

const BaiTapLayout = () => {
    return (
        <div>
            <HeaderBTLayout />
            <Album />
            <AlbumContent />
            <AlbumFooter />
        </div>
    )
}

export default BaiTapLayout