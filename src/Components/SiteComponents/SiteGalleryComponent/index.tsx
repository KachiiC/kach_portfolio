import { useState } from "react"
// CSS
import './GalleryComponent.css'
// PROPS
import { GalleryProps } from "Props/ComponentProps"
// COMPONENTS
import GalleryImage from "./components/GalleryImage"
import RowImage from "./components/RowImage"
import SiteModalComponent from "../SiteModalComponent"

const GalleryComponent = (props: GalleryProps) => {

    const { data, title, width } = props

    // WIDTH LOGIC
    const widthLogic = width ? width : 80

    // TITLE LOGIC
    const titleLogic = () => {
        if (title) return <h2>{title}</h2>
    }

    // IMAGE LOGIC
    const [displayedImage, setDisplayedImage] = useState(0)

    const imageRowLogic = {
        "gridTemplateColumns":`repeat(${data.length}, 1fr)`
    }

    const GalleryRows = () => {

        const displayedRows = data.map(item => {

            const clickFunction = () => setDisplayedImage(data.indexOf(item))
    
            return (
                <RowImage
                    title={item.title}
                    image={item.image}
                    click={clickFunction}
                />
            )
        })

        return (
            <div className="site-grid" 
                style={imageRowLogic}
            >
                {displayedRows}
            </div>
        )
    }

    const gallerySelectedImage = (
        <GalleryImage 
            image={data[displayedImage].image} 
            title={data[displayedImage].title}
            width={widthLogic}
            type="display"
        />
    )

    const galleryModalImage = (
        <GalleryImage 
            image={data[displayedImage].image}
            title={data[displayedImage].title}
            width={50}
        />
    )

    return (
        <>
            {titleLogic()}
            <SiteModalComponent
                type="blank"
                component={gallerySelectedImage}
                content={galleryModalImage}
            />
            <div className={`w-${widthLogic} m-auto`}>
                <GalleryRows />
            </div>
        </>
    )
}

export default GalleryComponent