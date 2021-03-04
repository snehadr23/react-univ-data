const Univ = (props) => {
    return (
        <div className = 'univ'>
            <p><span className = 'city'>{props.city}</span><span className = 'separator'>·</span><span className = 'state'>{props.stabbr}</span></p>
            <p className = 'univ-name'>{props.instnm}</p>
            <a className = 'univ-url' href = {props.insturl}>{props.insturl}</a>
        </div>
    )
}
export default Univ;