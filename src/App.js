import logo from './logo.svg';
import {useState} from 'react'

function App() {
  const [todolist,setTodolist] = useState([])
  const [content,setContent] = useState('')
  console.log(content)
  return (
    <div className="App">
      <div>
      <input 
      onChange = {(e) => {setContent(e.target.value)}}
      />
      
      <button 
      onClick = {() =>{
        const newTodolist = todolist.concat([{value:content,status:false}])
        setTodolist(newTodolist)
      }}
      >添加</button>
      </div>
      <ul>
        {
          todolist.map((item,index) => <li><span style={{textDecoration: item.status ? 'line-through' : null}}>{item.value}</span>
          <button onClick = {
            () => {const newTodolist = todolist.map((k,i) =>{
              if(i===index)
              {
                k.status = !k.status
              }
              return k
            })
            setTodolist(newTodolist)
          }}

          >完成</button>
          <button onClick = {
            () =>{
              const newTodolist = [...todolist.slice(0,index),...todolist.slice(index+1)]
              setTodolist(newTodolist)
            }
          }>删除</button>
          </li>)
        }
      </ul>
    </div>
  );
}

export default App;
