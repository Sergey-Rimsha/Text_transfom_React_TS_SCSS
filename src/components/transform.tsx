import React, { useState } from "react";
import style from "./tansform.module.scss"


const Transform = () => {

    let [state, addState] = useState('');

    let [date, addDate] = useState([]);

    // let sentence: string = `Hello, my name is`;
    // let stateDate = {state};

    let inputDate = (text: string) => {

        let strArr: any = [];
        let firstIndex: number = 0;
        let strNewArr = [];

        for (let i = 0; i < text.length; i++) {
            if (text[i] === ',') {                
                strNewArr.push(text.slice(firstIndex, i));
                firstIndex = i + 1;
            } else if (text[i].charCodeAt(0) === 10) {
                strNewArr.push(text.slice(firstIndex, i));
                firstIndex = i + 1;
                strArr.push(strNewArr);
                strNewArr = [];
            }
            
        }
        addDate(strArr)
        console.log(strArr[1])
    }

    return (
        <div>
            <header>
                <div className={style.log} >log --"конвертер данных"</div>
                <div>
                    <button onClick={() => inputDate(state)}>Конвертировать</button>
                </div>
            </header>
            <div className={style.date} >
                <div>
                    <h3>inputDate</h3>
                    <textarea onChange={(e) => addState(e.target.value)} />

                </div>
                <div>
                    <h3>outDate</h3>
                    <textarea value={date}/>
                </div>
            </div>
        </div>
    )
}

export default Transform;

