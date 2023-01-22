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

const images = [i1,i2,i3,i4,i5,i6,i7]


const App = () => {
    const [currentImage, setCurrentImage] = useState(0)

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

    return (
    <div className="App"> 
        <div className="title ">
            <h1>Zesty</h1>
            <h2>A photography project <br/> by Ella Fieldling</h2>
            
            <button onClick={null}>Click here</button>

            <input type="text" name="example" autoComplete="off" onChange={handleChange} />
        </div>

        <div className="image-container">
            <img alt="" src={images[currentImage]} onClick={handleClick}/>
        </div>

    </div>
    
    
    );
};

export default App
