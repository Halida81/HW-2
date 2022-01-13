
import './App.css';
import Comment from './components/Comment'
import Card from './ui/Card'

const comment = {
  date: new Date(),
  text: 'Learn React is awesome!',
  author: {
    name: 'Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
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
