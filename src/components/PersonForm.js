const Input = (props) => {
    return(
        <div>
            {props.text} <input 
            className="rounded-full w-2/3 mx-2 px-2 py-1 font-normal text-sm focus:outline-none lg:w-2/5 lg:py-1.5"
            type={props.type}
            value={props.value}
            onChange={props.onChange} 
            min={props.step}
            placeholder={props.placeholder}
            pattern={props.pattern}
            />
        </div>
    )
}

const PersonForm = (props) => {
    return(
        <form onSubmit={props.onSubmit} className="flex">
            <div className="space-y-3 grow-0 shrink-0 basis-full">
                <Input text={"Name"} type={"text"} value={props.value} placeholder={"Name"} onChange={props.onChange} />
                <Input text={"Number "} type={"tel"} placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={props.value2} onChange={props.onChange2} />
                <div>
                    <button className="transition ease-linear duration-300 bg-blue-500 hover:bg-indigo-500 px-7 py-2 my-3 text-sm rounded-md" type="submit" onClick={props.changeName}>Add</button>
                </div>
            </div>
      </form>
    )
}

export default PersonForm