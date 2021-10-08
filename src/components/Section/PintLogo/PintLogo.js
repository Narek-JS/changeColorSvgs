import "./PintLogo.css";
import styled from "styled-components";

/////// component styles ////////////
const RoundDiv = styled.div`background: ${props => props.color};`;
const P1 = styled.p`
    margin-left: ${props => props.text.length >= 10 ? "-30px" : "-15px"};
    @media screen and (max-width: 550px) { & { display:none } }
`;
const P2 = styled.p` margin-left: ${props => props.text.length >= 20 ? "-30px" : "-15px"};`;
const RowDiv = styled.div`
    width: ${props => props.rowWidth + "px"};
    background: linear-gradient(90deg, ${props => props.color1} 0%, ${props => props.color2} 100%);
    @media screen and (max-width: 670px) {
        & {
            width: ${props => (props.rowWidth - 20) + "px"};
        }
    }
    @media screen and (max-width: 550px) {
        & {
            width: ${props => (props.rowWidth - 40) + "px"};
        }
    }
`;
const SvgDiv = styled.div`
    & svg path {
        fill: ${props => props.color};
    }`;
/////// component styles ////////////

/////// Last updated logos /////////
const PintLogo = (props) => {
    const { openAddWindow, state } = props;
    let rowWidth = 130;
    if(state.length === 3 || state.length === 4) rowWidth = 110;
    if(state.length === 5 || state.length === 6) rowWidth = 100;
    if(state.length === 7) rowWidth = 90;
    const uniqId = () => "#" + Date.now().toString(36) + Math.random().toString(36).substr(2);
    
    return (
        <div className="pintLogo">
            {state.map((el, index) => {
                const text = el.text.toLowerCase();
                return (
                    <div key={uniqId()}>
                        <SvgDiv 
                            className={`justLogo justLogo${index}`}
                            onClick={() => openAddWindow(index)}
                            dangerouslySetInnerHTML={{__html:el.svg}}
                            color={el.color}
                        ></SvgDiv>
                        <RowDiv 
                            rowWidth={rowWidth}
                            color1={state[index].color}
                            color2={index !== state.length - 1 ? state[index + 1].color : state[0].color}
                            className="rowDiv"
                        >
                            <RoundDiv 
                                onClick={() => openAddWindow(index)} 
                                color={el.color}
                                className="roundColor"
                            ></RoundDiv>
                            {
                                index === state.length - 1 ? 
                                <div 
                                    className="addLogo"
                                    onClick={() => openAddWindow('+')}
                                >+</div> : <></>
                            }
                        </RowDiv>
                        <P1 className="logoUnderText" onClick={() => openAddWindow(index)} text={text} >{text.length > 10 ? text.substring(0, 10) : text}</P1>
                        {text.length > 10 ? <><br/> <P2 className="logoUnderText logoUnderText2" onClick={() => openAddWindow(index)} text={text} >{text.substring(10, 20)}</P2> </> : <></> }
                    </div>
                )
            })}
        </div>
    )
}
/////// Last updated logos /////////

export default PintLogo;