import React, { useRef } from "react";

function MarkSheet(){
    let firstInputRef =useRef();
    let lastInputRef =useRef();
    let telInputRef =useRef();
    let engInputRef =useRef();
    let hinInputRef =useRef();
    let mathInputRef =useRef();
    let sciInputRef =useRef();
    let socInputRef =useRef();
    let resultParaRef =useRef();
    let telSpanRef = useRef();
    let engSpanRef = useRef();
    let hinSpanRef = useRef();
    let mathSpanRef = useRef();
    let sceSpanRef = useRef();
    let socSpanRef = useRef();
    return(
        <div>
            <form>
                <div>
                <label>FirstName</label>
                <input ref={firstInputRef}></input>
                <span></span>
                </div>
                <div>
                    <label>LastName</label>
                    <input ref={lastInputRef}></input>
                    <span></span>
                </div>
                <div>
                    <label>TeluguMarks</label>
                    <input ref={telInputRef} onFocus={()=>{
                        telInputRef.current.style.backgroundColor ='red';
                    }}onChange={()=>{
                        telSpanRef.current.innerHTML=telInputRef.current.value>=35? "Pass":"Fail";
                        telSpanRef.current.style.backgroundColor = telInputRef.current.value>=35? "green":"red";
                    }}></input>
                    <span ref={telSpanRef} ></span>
                </div>
                <div>
                    <label>EnglishMarks</label>
                    <input ref={engInputRef} onFocus={()=>{
                        engInputRef.current.style.backgroundColor ='yellow'
                    }} onChange={()=>{
                        engSpanRef.current.innerHTML= engInputRef.current.value>=35? "Pass":"Fail";
                        engSpanRef.current.style.backgroundColor= engInputRef.current.value>=35? "green":"red";
                    }}onBlur={()=>{
                        engSpanRef.current.style.backgrounndColor="";
                    }}></input>
                    <span ref={engSpanRef}></span>
                </div>
                <div>
                    <label>Hindhi</label>
                    <input ref={hinInputRef}onFocus={()=>{
                        hinInputRef.current.style.backgroundColor="gray";
                    }}onChange={()=>{
                        hinSpanRef.current.innerHTML=hinInputRef.current.value>=35? "Pass":"Fail";
                        hinSpanRef.current.style.backgroundColor = hinInputRef.current.value>=35? "green":"red";
                    }}></input>
                    <span ref={hinSpanRef} ></span>
                </div>
                <div>
                    <label>Maths</label>
                    <input ref={mathInputRef} onFocus={()=>{
                        mathInputRef.current.style.backgroundColor='purple';
                    }} onChange={()=>{
                        mathSpanRef.current.innerHTML=mathInputRef.current.value>=35? "Pass":"Fail";
                        mathSpanRef.current.style.backgroundColor=mathInputRef.current.value>=35? "green":"red";
                    }}></input>
                    <span ref={mathSpanRef}></span>
                </div>
                <div>
                    <label>Sceience</label>
                    <input ref={sciInputRef} onFocus={()=>{
                        sciInputRef.current.style.backgroundColor="deeppink";
                    }}onChange={()=>{
                        sceSpanRef.current.innerHTML=sciInputRef.current.value>=35? "Pass":"Fail";
                        sceSpanRef.current.style.backgroundColor=sciInputRef.current.value>=35? "green":"red";
                    }}></input>
                    <span ref={sceSpanRef}></span>

                </div>
                <div>
                    <label>Social</label>
                    <input ref={socInputRef}onFocus={()=>{
                        socInputRef.current.style.backgroundColor='lightgreen'
                    }} onChange={()=>{
                        socSpanRef.current.innerHTML=socInputRef.current.value>=35? "Pass":"Fail";
                        socSpanRef.current.style.backgroundColor=socInputRef.current.value>=35? "green":"red"
                    }}></input>
                    <span ref={socSpanRef}></span>
                </div>
                <div>
                    <button type="button"onClick={()=>{
                     
                     let firstName = firstInputRef.current.value;
                     let lastName = lastInputRef.current.value;
                     let telMarks=Number(telInputRef.current.value);
                    let engMarks =Number( engInputRef.current.value);
                    let hinMarks = Number(hinInputRef.current.value);
                    let mathMarks = Number(mathInputRef.current.value);
                    let sciMarks = Number(sciInputRef.current.value);
                    let socMarks =Number (socInputRef.current.value);
                    let total = telMarks + engMarks + hinMarks + mathMarks + sciMarks + socMarks;
                      
                    let perc=(total/600)*100;
                    
                    
                    resultParaRef.current.innerHTML=` ${firstName} ${lastName} got marks ${total} in percentage ${perc.toFixed(2)}`
                    
                    }}
                    >click here for result</button>
                </div>
                <div>
                    <p ref={resultParaRef}></p>
                </div>
            </form>
        </div>
    )
}
export default MarkSheet