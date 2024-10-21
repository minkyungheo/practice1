export default function Hello1(){
    function showName(name){
        console.log(name);
    }
    function showAge(age){
        console.log(age);
    }
    function showText(e){
        console.log(e);
    }

    return(
        <div>
            <h1>Hello</h1>
            <button onClick={showName("Mike")}>Show name</button>
            <button onClick={showAge(11)}>Show age</button>
            <input type="text" onChange={(e) =>{
                const text = e.target.value;
                showText(text);
            }}></input>
            <div>
            <input type="text" onChange={(e) => {
                const txt = e.target.value;
                showText(txt);
            }}></input>
            </div>
        </div>
    );
}

