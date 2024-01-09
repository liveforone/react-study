import React, {useState, useRef} from "react";

function InputSample() {
    const [inputs, setInputs] = useState({
        name : '',
        nickname : ''
    });

    const { name, nickname } = inputs; //값 추출

    //event를 파라미터로 받음
    //e.target으로 dom을 가져오고, value로 dom의 값을 가져옴
    const onChange = (e) => {
        //각 name의 value를 가져올 수 있음 -> name, nickname을 모두 가져올 수 있음
        const {value, name}  = e.target;
        setInputs({
            ...inputs, //기존 inputs 객체 복사
            [name] : value //name 키값을 value로 변경
        });
    };

    const nameInput = useRef();

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });
        //이름 input에 포커스잡기
        nameInput.current.focus();
    };

    return (
        <>
            <h1>input 예제</h1>
            <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
                <button onClick={onReset}>초기화</button>
                <div>
                    <b>값: </b>
                    {name} ({nickname})
                </div>
            </div>
        </>
    );
}

export default InputSample;