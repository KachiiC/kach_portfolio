import GalleryComponent from "Components/SiteComponents/GalleryComponent";


const imageArray = [
        
    {
        title: "First",
        image:"https://via.placeholder.com/300x200/000000/FFFFFF/?text=First"
    },
    {
        title: "Second",
        image:"https://via.placeholder.com/300x200/000000/FFFFFF/?text=Second"
    },
    {
        title: "Third",
        image:"https://via.placeholder.com/300x200/000000/FFFFFF/?text=Third"
    },
    {
        title: "Forth",
        image:"https://via.placeholder.com/300x200/000000/FFFFFF/?text=Forth"
    }
]

const About = () => {

    return (
        <>
            <h1>About</h1>
            <GalleryComponent data={imageArray}/>
        </>
    );
}


export default About