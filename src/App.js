import { useState, useEffect } from 'react'
import personService from './services/persons'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Notification from './components/Notification'
import Footer from './components/Footer'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    personService
      .getPersons()
      .then(personsNumbers => {
        setPersons(personsNumbers)
      })
  }, [])

  const addPerson = event => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    const names = persons.map(person => person.name.toLowerCase())
    let numbers = persons.map(number => number.number)

    if(names.includes(newName.toLowerCase())){
      const confirmed = window.confirm(`${newName} is already on phonebook, do you want to replace it with new number?`)
      if(confirmed){
        const changedName = persons.find(p => p.name === personObject.name)
        const changedId = changedName.id

        personService
          .changePerson(changedId, personObject)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== changedId? person : returnedPerson))
        })  
      }
      setNewName('')
      setNewNumber('')
      return
    }else if(numbers.includes(newNumber)){
      const confirmed = window.confirm(`${newNumber} is already on phonebook, do you want to replace it with new name?`)
      if(confirmed){
        const changedName = persons.find(p => p.number === personObject.number)
        const changedId = changedName.id

        personService
          .changePerson(changedId, personObject)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== changedId? person : returnedPerson))
        })
      }
      setNewName('')
      setNewNumber('')
      return
    }else if(newName !== '' && newNumber !== ''){
      personService
        .putPersons(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          setMessage(`${newName} Added to the Phonebook!`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })

    }


  }

  const handleSearch = event => {
    event.preventDefault()
    setSearch(event.target.value)
  }

  const personsToShow = search
    ? persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
    : persons


  const handleNumberChange = (event) => {
    event.preventDefault()
    setNewNumber(event.target.value)
  }
  const handleNameChange = (event) => {
    event.preventDefault()
    setNewName(event.target.value)
  } 

  const handleDelete = (name, id) => {
    if(window.confirm(`Delete ${name}?`)){
      personService
      .deletePerson(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })
    }
  }

  return (
    <div className='relative bg-gradient-to-tl from-indigo-500 via-violet-500 to-fuchsia-500 min-h-screen flex justify-center' >
      <div className='lg:grow-0 lg:shrink-0 lg:basis-1/3 lg:border lg:border-solid lg:border-white p-6'>
        <h1 className='font-bold text-2xl text-center my-6 lg:text-3xl lg:pb-4'>Phonebook</h1>
        <div className='w-full'>
          <div className='space-y-5 lg:space-y-6'>
            <Filter type={"search"} value={search} onChange={handleSearch} />
            <h2 className='font-semibold lg:text-lg'>Add A New Number</h2> 
            <PersonForm onSubmit={addPerson} value={newName} onChange={handleNameChange} value2={newNumber} onChange2={handleNumberChange}/>
            <Notification message={message}/>
            <h2 className='font-semibold lg:text-lg'>Numbers :</h2>
            <div className='pb-12'>
              {personsToShow.map(person => 
                <Person key={person.name} person={person}  delete={() =>{handleDelete(person.name, person.id)}} />
              )}
            </div>
            <Footer info={'Ana Chkhaidze'} />

          </div>
        </div>
      </div>
    </div>
  )
}

export default App