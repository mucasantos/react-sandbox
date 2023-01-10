import { useRef } from "react"

function UserRefExample1() {
  const inputRef = useRef()
  const paramsRef = useRef()

  const onSubmit = e => {
    e.preventDefault()
    console.log(inputRef)
    inputRef.current.value = "Você clicou!!"
    inputRef.current.style.backgroundColor = 'red'
    paramsRef.current.innerText = "GoodBye!"

  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name </label>
        <input type="text" ref = {inputRef} id='name' className='form-control mb-2'/> 
        <button type="submit" className='btn btn-primary'>
          Submit
        </button>
        <p onClick={() => inputRef.current.focus()} ref={paramsRef}>Hello</p>

      </form>
    </div>
  )
}

export default UserRefExample1