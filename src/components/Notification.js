const Notification = ({message}) => {
    if(message === null){
        return null
    }

    return(
        <p className="message">{message}</p>
    )
}

export default Notification