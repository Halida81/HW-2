import './Comment.css';
import UserInfo from "./UserInfo";
import FooterText from './FooterText'


function Comment (props){
    return(
        <div className="Comment">
            <UserInfo author = {props.author}/>
            <FooterText text={props.text} date={props.date}/>
            
        </div>

    )
}

export default Comment;