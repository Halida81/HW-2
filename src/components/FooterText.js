import './FooterText.css'

const FooterText = (props) =>{
    return (
        <div className='Footer'>
            <div className="Comment-text">{props.text}</div>
             {props.date.toLocaleString()}
        </div>
    )
}

export default FooterText; 