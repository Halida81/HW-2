
import './App.css';
import Comment from './components/Comment'
import Card from './ui/Card'
import Bird from './components/imgs/пташка.jpg'
import Panda from './components/imgs/panda.jpg'
import Fish from './components/imgs/рыбка.png'


const comment = {
  date: new Date(2022, 11, '03'),
  text: 'Learn Java Script is awesome!',
  author: {
    name: 'Пташка',
    avatarUrl: Bird,
  },
};
const comment2 = {
  date: new Date(),
  text: 'Learn React is awesome! ',
  author: {
    name: 'Рыбка',
    avatarUrl: Fish,
  },
};const comment3 = {
  date: new Date(2022, '07', 19),
  text: 'Learn Redux is awesome!',
  author: {
    name: 'Панда',
    avatarUrl: Panda,
  },
};


function App() {

  
  return (
    // <Card>
    //   <Comment author={comment.author} date={comment.date} text={comment.text}/>
    //   <Comment author={comment2.author} date={comment2.date} text={comment2.text}/>
    //   <Comment author={comment3.author} date={comment3.date} text={comment3.text}/>
    // </Card>
    <>
     <Card>
      <Comment author={comment.author} date={comment.date} text={comment.text}/>
    </Card>

     <Card>
       <Comment author={comment2.author} date={comment2.date} text={comment2.text}/>
     </Card>

      <Card>
      <Comment author={comment3.author} date={comment3.date} text={comment3.text}/>
      </Card>
    
    </>
   
  );
}

export default App;
