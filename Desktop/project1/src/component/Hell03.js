import { useState } from "react"; //React의 useState 훅을 불러옴
import UserName from "./UserName";


export default function Hell03({age}){ //age를 props로 받아오는 Hello3 컴포넌트 정의
    const[name,setName] = useState("Mike");
    const[age1, setAge1] = useState(age); //age1 상태 변수를 props로 받은 age 값으로 초기화, 상태 변경을 위한 setAge1 함수 선언
    const msg = age> 19? "성인 입니다" : "미성년자 입니다";
    return(
        <div>
            <h2>
            {name}({age1})  
            </h2>
            <button onClick={()=>{
                setAge1(age1+1);
            }}>나이 증가 </button>
            <button onClick={()=>{
                setAge1(age1-1);
            }}>나이 감소</button>
            <h2 id="name">
                {name}({age}) : {msg}
            </h2>
            <UserName name={name}/>
            <button onClick={()=>{
                setName(name ==="Mike" ?  "Jane" : "Mike");
            }}>
                change
            </button>
        </div>
    );
}