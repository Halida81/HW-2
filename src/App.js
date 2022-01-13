
import './App.css';
import Comment from './components/Comment'
import Card from './ui/Card'
import Home from './components/imgs/пташка.jpg'

const comment = {
  date: new Date(),
  text: 'Learn React is awesome!',
  author: {
    name: 'Пташка',
    avatarUrl: Home,
  },
};


function App() {

  
  return (
    <Card>
      <Comment author={comment.author} date={comment.date} text={comment.text}/>
    </Card>
  );
}

export default App;
