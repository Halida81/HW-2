import './FooterText.css'
import FormatDate from './FormatDate';
const FooterText = (props) =>{
    return (
        <div className='Footer'>
            <div className="Comment-text">{props.text}</div>
            <FormatDate date= {props.date}/>
        </div>
    )
}

export default FooterText; 