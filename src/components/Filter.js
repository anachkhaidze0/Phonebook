const Filter = (props) => {
    return(
        <div className="font-medium ">
            Search <input 
            className="rounded-full w-2/3 mx-2 px-2 py-1 font-normal text-sm focus:outline-none lg:w-2/5 lg:py-1.5"
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            />
        </div>
    )
}

export default Filter