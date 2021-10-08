import PintLogo from "./PintLogo/PintLogo";
import AddWindow from "./Window/AddWindow";
import ChangeWindow from "./Window/ChangeWindow"
import "./Section.css";
import { useState, useReducer } from "react";
const initialState = [
    {color: "#dd9803", svg:`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.5776 28.8688H26.894V24.9558H24.5776V28.8688ZM34.1667 4.50174C34.9086 4.50174 35.5796 4.84375 36.0646 5.39462C36.5496 5.9453 36.8509 6.70731 36.8509 7.5498C36.8509 8.3898 36.5496 9.1519 36.0646 9.70516C35.5796 10.2559 34.9086 10.5979 34.1667 10.5979C33.4248 10.5979 32.756 10.2559 32.2688 9.70516C31.9366 9.32544 31.6909 8.8476 31.5691 8.31182C31.0597 8.51046 30.5703 9.00605 30.1318 9.72779C29.4628 10.8243 28.9291 12.4112 28.608 14.2974C28.566 14.5589 28.3866 14.7802 28.1407 14.833C27.8241 14.901 27.5162 14.6671 27.4564 14.3049C27.1353 12.4163 26.5994 10.8268 25.9306 9.72779C25.3482 8.77201 24.6816 8.21369 23.9928 8.21369C23.304 8.21369 22.6374 8.77201 22.055 9.72779C21.3862 10.8243 20.8524 12.4112 20.5313 14.2974C20.4893 14.5589 20.3099 14.7802 20.0641 14.833C19.7474 14.901 19.4396 14.6671 19.3798 14.3049C19.0588 12.4163 18.5227 10.8268 17.854 9.72779C17.2716 8.77201 16.6027 8.21369 15.9162 8.21369C15.2274 8.21369 14.5608 8.77201 13.9784 9.72779C13.3095 10.8268 12.7737 12.4163 12.4526 14.3049C12.3905 14.6671 12.0849 14.901 11.7683 14.833C11.4516 14.7651 11.2434 14.4156 11.3032 14.056C11.6553 11.9887 12.2554 10.2232 13.0173 8.97331C13.8211 7.65289 14.8155 6.88334 15.9161 6.88334C17.0167 6.88334 18.0111 7.65289 18.8151 8.97331C19.2535 9.69256 19.6389 10.5854 19.9533 11.6089C20.27 10.5854 20.6553 9.69256 21.0938 8.97331C21.8977 7.65289 22.8921 6.88334 23.9928 6.88334C25.0935 6.88334 26.0878 7.65289 26.8916 8.97331C27.3302 9.69256 27.7155 10.5854 28.0299 11.6089C28.3466 10.5854 28.7319 9.69256 29.1705 8.97331C29.8415 7.86928 30.6477 7.15251 31.5356 6.94615C31.642 6.34516 31.9033 5.80938 32.2687 5.39462C32.756 4.84375 33.4248 4.50174 34.1667 4.50174ZM35.2363 6.33513C34.9617 6.02586 34.5852 5.83218 34.1667 5.83218C33.7504 5.83218 33.3717 6.02586 33.0971 6.33513C32.8248 6.64699 32.6564 7.07453 32.6564 7.5498C32.6564 8.02259 32.8247 8.4527 33.0971 8.76455C33.3718 9.07383 33.7504 9.26511 34.1667 9.26511C34.5852 9.26511 34.9618 9.07392 35.2363 8.76455C35.5087 8.45261 35.6793 8.02259 35.6793 7.5498C35.6793 7.07453 35.5088 6.6469 35.2363 6.33513ZM13.8722 26.0295C13.8722 25.6598 14.1357 25.3631 14.4591 25.3631C14.7824 25.3631 15.0459 25.6598 15.0459 26.0295V35.3372C15.0459 35.7044 14.7824 36.0037 14.4591 36.0037C14.1357 36.0037 13.8722 35.7044 13.8722 35.3372V26.0295ZM10.6633 26.2735C10.9313 26.4771 11.0021 26.8896 10.8205 27.1939C10.6412 27.4983 10.2758 27.5787 10.0078 27.375C9.71992 27.1536 9.40539 26.9802 9.0732 26.8644C8.75211 26.7539 8.40664 26.6934 8.04336 26.6934C7.07344 26.6934 6.19641 27.1411 5.55859 27.8629C4.92305 28.5847 4.53109 29.5806 4.53109 30.6821C4.53109 31.7836 4.92313 32.782 5.55859 33.5039C6.19641 34.2257 7.07344 34.6733 8.04336 34.6733C8.95141 34.6733 9.66226 34.276 10.154 33.6322C10.5969 33.0462 10.8737 32.2515 10.9645 31.3487H9.13078C8.80523 31.3487 8.54383 31.0518 8.54383 30.6822C8.54383 30.315 8.80523 30.0182 9.13078 30.0182H11.5823C11.9057 30.0182 12.1692 30.3151 12.1692 30.6822C12.1692 32.171 11.7751 33.5266 11.0377 34.4998C10.329 35.4329 9.31688 36.0037 8.04344 36.0037C6.75016 36.0037 5.57867 35.4076 4.73047 34.4445C3.88453 33.4813 3.35961 32.1534 3.35961 30.6822C3.35961 29.2134 3.88453 27.883 4.73047 26.9223C5.57875 25.9592 6.75023 25.3632 8.04344 25.3632C8.51516 25.3632 8.97586 25.4435 9.41211 25.597C9.86602 25.7529 10.2869 25.9843 10.6633 26.2735ZM20.6334 25.3631C20.9567 25.3631 21.2202 25.6598 21.2202 26.0295C21.2202 26.3968 20.9567 26.6934 20.6334 26.6934H17.9227V29.8949H20.372C20.6954 29.8949 20.959 30.1941 20.959 30.5614C20.959 30.9286 20.6954 31.2278 20.372 31.2278H17.9227V35.2694C17.9227 35.6366 17.6592 35.9358 17.3359 35.9358C17.0125 35.9358 16.749 35.6366 16.749 35.2694V26.0295C16.749 25.6598 17.0125 25.3631 17.3359 25.3631H20.6334ZM1.17148 29.1756C1.17148 29.5429 0.910156 29.8421 0.586875 29.8421C0.263594 29.8421 0 29.5429 0 29.1756V25.4763C0 24.3471 0.4075 23.3184 1.06297 22.574C1.71852 21.8295 2.62422 21.3669 3.61867 21.3669H7.98586V12.8664C7.98586 12.4992 8.24719 12.2024 8.57047 12.2024C8.89383 12.2024 9.15734 12.4993 9.15734 12.8664V18.676H38.8285V12.8664C38.8285 12.4992 39.092 12.2024 39.4154 12.2024C39.7388 12.2024 40 12.4993 40 12.8664V19.3424V21.5807C40 22.5086 39.6656 23.3537 39.1274 23.9648C38.5893 24.576 37.8452 24.9558 37.028 24.9558H28.0655V28.8688H29.7862C30.3001 28.8688 30.7651 29.1053 31.1017 29.4876C31.4384 29.8699 31.6466 30.3979 31.6466 30.9789C31.6466 31.56 31.4384 32.088 31.1017 32.4703C30.7651 32.8526 30.3001 33.0915 29.7862 33.0915H24.5775V35.8906C24.5775 37.0198 24.1722 38.0483 23.5167 38.7927C22.8612 39.5372 21.9555 40 20.9589 40H3.61867C2.62422 40 1.71852 39.5372 1.06297 38.7927C0.4075 38.0483 0 37.0197 0 35.8905V32.1911C0 31.8239 0.263594 31.5245 0.586875 31.5245C0.910234 31.5245 1.17148 31.8239 1.17148 32.1911V35.8905C1.17148 36.6525 1.44836 37.3466 1.89125 37.852C2.33633 38.355 2.94758 38.6694 3.61867 38.6694H20.9589C21.6321 38.6694 22.2433 38.355 22.6863 37.852C23.1313 37.3466 23.406 36.6524 23.406 35.8905C23.406 32.4174 23.406 28.9467 23.406 25.4762C23.406 24.7393 23.1469 24.0376 22.6863 23.5145C22.2433 23.009 21.6321 22.6972 20.9589 22.6972H3.61867C2.94758 22.6972 2.33633 23.009 1.89125 23.5145C1.44836 24.0176 1.17148 24.7142 1.17148 25.4762V29.1756ZM9.15734 21.3668H20.959C21.9555 21.3668 22.8613 21.8295 23.5168 22.5739C23.787 22.8807 24.0152 23.2353 24.1879 23.6251H37.0281C37.522 23.6251 37.9715 23.3962 38.2992 23.0242C38.627 22.652 38.8285 22.1414 38.8285 21.5806V20.0088H9.15734V21.3668ZM30.2713 30.4281C30.1473 30.2872 29.9768 30.1992 29.7863 30.1992H24.5776V31.7611H29.7863C29.9768 31.7611 30.1473 31.6731 30.2713 31.5297C30.3976 31.3888 30.4751 31.1926 30.4751 30.9788C30.4751 30.7651 30.3976 30.5689 30.2713 30.4281ZM9.15734 9.85359C9.15734 10.2208 8.89383 10.5174 8.57047 10.5174C8.24711 10.5174 7.98586 10.2207 7.98586 9.85359V3.37766C7.98586 2.44716 8.31805 1.60468 8.85836 0.990913C9.39656 0.37981 10.1407 0 10.9579 0H37.028C37.8452 0 38.5893 0.37981 39.1274 0.990913C39.6656 1.60459 40 2.44707 40 3.37766V9.85359C40 10.2208 39.7387 10.5174 39.4154 10.5174C39.0921 10.5174 38.8285 10.2207 38.8285 9.85359V3.37766C38.8285 2.81428 38.627 2.30379 38.2992 1.93152C37.9715 1.56183 37.522 1.33053 37.0281 1.33053H10.9579C10.4641 1.33053 10.0123 1.56183 9.68664 1.93152C9.35891 2.3037 9.15742 2.81428 9.15742 3.37766V9.85359H9.15734Z" fill="#E2E47A"/>
    </svg>
    `, text:"Joker"}
];
const reducer = (state, actione) => {
    switch(actione.type){
        case "add": {
            localStorage.setItem('state', JSON.stringify([
                ...state,
                {
                    color: actione.payload.color,
                    svg: actione.payload.svg, 
                    text: actione.payload.text
                }
            ]));
            return JSON.parse(localStorage.getItem('state'));
        }
        case "remove":{
            const array = state.length !== 1 ? state.filter((el, i) => i !== actione.index):state;
            localStorage.setItem('state', JSON.stringify(array));
            return JSON.parse(localStorage.getItem('state'));
        }
        case "change_text": {
            state[actione.payload.index].text = actione.payload.text;
            localStorage.setItem('state', JSON.stringify([...state]));
            return JSON.parse(localStorage.getItem('state'));
        }
        case "change_color": {
            state[actione.payload.index].color = actione.payload.color;
            localStorage.setItem('state', JSON.stringify([...state]));
            return JSON.parse(localStorage.getItem('state'));
        }
        case "change_image": {
            state[actione.payload.index].svg = actione.payload.svg;
            localStorage.setItem('state', JSON.stringify([...state]));
            return JSON.parse(localStorage.getItem('state'));
        }
    }
}

const Section = () => {
    const [opened, setOpened] = useState(false);
    const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('state')) || initialState);
    const openAddWindow = index => setOpened(index);
    return (
        <section>
            <div className="section-continer">
                <div>
                    <h2>Процессы</h2>
                    <PintLogo openAddWindow={openAddWindow} state={state}/>
                </div>
                {   
                    opened === '+' ? <AddWindow 
                                        openAddWindow={openAddWindow} 
                                        dispatch={dispatch} 
                                        state={state}
                                     /> : <></>
                }
                {
                    typeof opened === "number" ? <ChangeWindow 
                                                    openAddWindow={openAddWindow} 
                                                    dispatch={dispatch} 
                                                    index={opened} 
                                                    state={state}
                                                 /> : <></>
                }
            </div>
        </section>
    );
};
export default Section;