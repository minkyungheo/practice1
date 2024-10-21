
import './App.css';
import Hello1 from './component/Hell01';
import Hell03 from './component/Hell03';
import Hello from './component/Hello';
import Hello2 from './component/Hello2';



function App() {
  const name="Tom";
  const naver= {name:'네이버',
    url:"https://naver.com",
  };
  return (
    <div className="App">
      {/* <h1 style={{
      color: "#f0f",
      backgroundColor: "green"
      }}>
        Hello, {name}. <p>{2+3}</p>
        
      </h1> */}
      {/* <Hello/> */}
      <Hello1/> 
      <Hello2/>
      <Hell03 age ={10}/>
    

    </div>
  );
}

export default App;
