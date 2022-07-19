const Person = (props) => {
    return(
      <div className="flex justify-between border-b p-2">
        <div className="text-sm lg:text-md">
            <p className="font-medium">{props.person.name}</p>
            <p className="text-zinc-800">{props.person.number}</p>
        </div>
        <div className="flex items-center">
          <button className="text-xs h-2/3 bg-gradient-to-br from-orange-500 to-fuchsia-500 hover:bg-gradient-to-bl hover:from-orange-500 hover:to-fuchsia-500  rounded-full px-2 lg:text-sm lg:h-3/4 lg:px-3" onClick={props.delete}>Delete</button>
        </div>
      </div>
      )
  }

export default Person