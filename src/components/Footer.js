const Footer = ({info}) => {
    return(
        <footer className="absolute bottom-0 translate-x-1/4 lg:translate-x-1/2">
            <p className="relative text-xs">©2022 Coded by {info}</p>
        </footer>
    )
}

export default Footer