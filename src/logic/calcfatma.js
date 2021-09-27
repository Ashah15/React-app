import React , {usestate} from "react";
import ReactDOM from "react-dom";
import "./styles.css";
function App() {
    const [data , setData] = useState(--):
    const calcBtns =[];
    [9,8,7,6,5,4,3,2,1,0,","%"] forEach(ITEM =>) {
        calcBtns push(
            <button onclick={e=>{
                setData(data . e.target.value)
            })
            value={item}
            key= {item}>
            {item}
            </button>
          
          );
    });
      return(
          <div className="Wrapper">
          <div className="show-input">{data}</div>
          <div className="modifiers subgrid">
            <button onClick={()   => setData(data.substr(0. data. lenghth - 1))}>
              clear 
            </button>
            <button onclick={() => setData("")}>
            AC
            </button>
          </div>

          <div className="operations subgrid">
             <button onclick={e => setData (data - e.target.value)} value="+">
             -
             </button>
             <button onclick={e => setData (data - e.target.value)} value="+">
             +
             </button>
             <button onclick={e => setData (data - e.target.value)} value="/">
              /
            </button>
            </button>
             <button onclick={e => setData (data - e.target.value)} value="/">
              /
              <button onclick={e =>{
              try 
                setData(
                  <string(eval(data)).lenth > 3 &&
                  string(eval(data)).includes("-")
                  ? string(eval(data).toFixed(4))
                  : string(eval(data))
                )
                }
                catch(err) {
                  console.log(err)
                }
                value="="
              }}>
              >
                =
            </button>
          </div>
          <div> 
  );