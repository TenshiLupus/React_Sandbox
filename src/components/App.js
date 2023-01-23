import React, {Component} from 'react'
import {useState} from 'react'
import Hello from './Hello';
import '../style.css';

import i1 from '../assets/i1.jpg';
import i2 from '../assets/i2.png';
import i3 from '../assets/i3.png';
import i4 from '../assets/i4.png';
import i5 from '../assets/i5.jpg';
import i6 from '../assets/i6.jpg';
import i7 from '../assets/i7.jpg';

//Top level tags are necessary if we want to return multiple adjacent tags at once, else we have to use fragments.
//Upper case for React components
//jsx expression : Syntax expression of javascripst that produces react elements
//hooks allows functional components to access lifecycle methods (happen between initialization/creation )

//state hook used to create a local state in functional component
//Effect hook, used to perform side effects on functional component after it has rendered into the DOM
//Semantic elelemtns have a specific purpose or role
//Implicit returns are done with () and not with {} as if you were declaring a normal function

//State hook: ? 
//props != component

const images = [i1,i2,i3,i4,i5,i6,i7]

//Alrenatively we can pass the prop directly to the component
const Loading = ({calculatedwidth}) => (
    <aside>
        <div className="loading-bar">
            <label htmlFor="images-loaded" >Loading all images</label>
            <progress 
            id="images-loaded" 
            max="100" 
            value={calculatedwidth}></progress>
        </div>
    </aside>
);

const App = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [numLoaded, setNumLoaded] = useState(0);

    const handleClick = () =>{
        const length = images.length - 1;

        //Scoped function that updates the variable with the value it is returning
        setCurrentImage((currentImage) => {
            if(currentImage < length){
                return currentImage + 1;
            }else{
                return 0;
            }
        })
    }

    const handleChange = (e) => {
        console.log(e.target.value)
    }

    const handleImageLoad = () => {
        setNumLoaded((numLoaded) => numLoaded + 1);
    }

    //Syntax declaration is defined first before the jsx is returned as html elements and rendered to the screen
    return (
        <section> 
        <header>
            <h1>Zesty</h1>
            <h2>A photography project <br/> by Ella Fieldling</h2>
            
        </header>

        <figure>
            {numLoaded < images.length && <Loading calculatedwidth={(numLoaded / images.length) * 100}/>}
            

            <figcaption>{currentImage + 1} / {images.length}</figcaption>
            {images.map((imageUrl,index) => (
                <img 
                alt=""
                key={imageUrl} 
                src={imageUrl} 
                onClick={handleClick} 
                onLoad={handleImageLoad}
                //style={{opacity: currentImage === index ? 1 : 0}}
                className={currentImage === index ? "display" : "hide"}
                />
            ))}

        </figure>

    </section>
    
    
    );
};

export default App
