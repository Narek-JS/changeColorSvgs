import file from "../../../icons/file.png";
import { useState } from "react";
import styled from "styled-components";
import "./AddWindow.css";

const ErrorDiv = styled.div`
    ${props => props.error ? "none": "block"};
    opacity: ${props => props.error ? "0": "0.4"};
`;
const OnAddWindow = styled.div`border: ${props => props.error ? "0px solid red": "1px solid red"};`;

const AddWindow = (props) => {
    const { openAddWindow, dispatch, state } = props;
    const [classes, setClasses] = useState('');
    const [image, setImage] = useState('');
    const [color, setColor] = useState(false);
    const [lgogText, setLogoText] = useState('');
    const [error, setError] = useState(true);
    const [errorText, setErrorText] = useState('');
    const getColor = event => setColor(event.target.value);

    const chooseImage = (event) => {
        const file = event.target.files[0]; 
        const reader = new FileReader();
        reader.onload = (readerEvent) => {
            setImage(readerEvent.target.result); 
            setClasses('photoDiv1');
        }
        reader.readAsBinaryString(file);
    };
    
    const addLogoText = event => setLogoText(event.target.value)
    const onSubmit = (event) => {
        event.preventDefault();
        if(lgogText && image && color && state.length <= 6) {
            dispatch({
                type: "add",
                payload:{
                    text:lgogText,
                    svg:image,
                    color:color
                }
            });
            openAddWindow();
            setClasses('');
        } else if(state.length >= 8){
            setError(() => false);
            setErrorText("meky jnjeq nor avelacreq");
            setTimeout(() => setError(() => true), 4500);
        } else {
            setError(() => false);
            setErrorText("sorry fill in the blanks");
            setTimeout(() => setError(() => true), 4500);
        }
        setLogoText('');
    }
    return (
        <OnAddWindow error={error} className="OnAddWindow">
            <h1 className="closeX" onClick={openAddWindow}>X</h1>
            <div className={`photoDiv ${classes}`}>
                <div className={classes + "a"}>
                    <img src={file}/>
                    <input type="file"
                           name="file" 
                           placeholder="Upload na Image" 
                           onChange={chooseImage}
                           text="Upload na Image"
                    ></input>
                </div>
            </div>
            <div className="chooseColor">
                <p>название</p>
                <input type="color" value={color} onChange={getColor}/>
            </div>
            <div className="inputNameAndButton">
                <form onSubmit={onSubmit} autocomplete="on">
                    <input onChange={addLogoText} value={lgogText} id="fname"></input>

                    <div className="buttonDiv">
                        <button>добавить</button>
                    </div>
                </form>
            </div>
            <ErrorDiv error={error} className="ErrorDiv">
                <h2>Error:<br/><br/> {errorText ? errorText : ""} </h2>
            </ErrorDiv>
        </OnAddWindow>
    );
};
export default AddWindow;
