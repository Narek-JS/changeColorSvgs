import file from "../../../icons/file.png";
import { useState } from "react";
import styled from "styled-components";
import "./ChangeWindow.css";

const OnChangeWindow = styled.div`border: ${props => props.error ? "0px solid red": "1px solid red"};`;
const ErrorDiv = styled.div`
    ${props => props.error ? "none": "block"};
    opacity: ${props => props.error ? "0": "0.4"};
`;

const ChangeWindow = (props) => {
    const { openAddWindow, dispatch, index, state } = props;
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
    const addLogoText = event => setLogoText(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if ( lgogText ){
            dispatch({ type:"change_text",payload:{index:index,text:lgogText} });
            openAddWindow();
            setLogoText('');
            setClasses('');
        }
        if ( color ){
            dispatch({ type:"change_color", payload:{index:index,color:color} });
            openAddWindow();
            setLogoText('');
            setClasses('');
        }
        if ( image ){
            console.log(image)
            dispatch({type:"change_image",payload:{index:index,svg:image} });
            openAddWindow();
            setLogoText('');
            setClasses('');
        } 
        if( !lgogText && !color && !image ){
            setError(() => false);
            setErrorText('popoxutyun katarvac che');
            setTimeout(() => setError(() => true), 4500);
        }
    };
    const onDelete = () => {
        if(state.length > 1){
            dispatch({ type: "remove", index: index });
            openAddWindow()
        }else {
            setError(() => false);
            setErrorText('cheq karox jnjel amboxjy');
            setTimeout(() => setError(() => true), 4500);
        }
    };
    return (
        <OnChangeWindow error={error} className="OnChangeWindow">
            <h1 className="closeX" onClick={openAddWindow}>X</h1>
            <div className={`photoDiv ${classes}`}>
                <div className={classes + "a"}>
                    <img src={file}/>
                    <input type="file"
                           name="file" 
                           placeholder="Upload na Image" 
                           onChange={chooseImage}
                    ></input>
                </div>
            </div>
            <div className="chooseColor">
                <p>название</p>
                <input type="color" value={color} onChange={getColor}/>
            </div>
            <div className="inputNameAndButton">
                <form onSubmit={onSubmit} autocomplete="on">
                    <input onChange={addLogoText} value={lgogText} id="fname"/>
                </form>
                <div className="buttonsDiv">
                    <button className="buttonDelete" onClick={onDelete}>Delete</button>
                    <button onClick={onSubmit}>добавить</button>
                </div>
            </div>
            <ErrorDiv error={error} className="ErrorDiv">
                <h2>Error:<br/><br/> {errorText ? errorText : ""} </h2>
            </ErrorDiv>
        </OnChangeWindow>
    )
}
export default ChangeWindow;