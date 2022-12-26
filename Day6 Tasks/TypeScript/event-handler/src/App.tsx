import React, { FormEvent } from 'react'

interface FormField{
    email:HTMLInputElement
    message: HTMLTextAreaElement
}

function App() {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        const target = event.target as typeof event.target & FormField; 
        
        
    }
  return (
    <form onSubmit={handleSubmit}>
        <div> 
            <label>
                Email:
                <input type="email" name="email"/>
            </label>
        </div>

        <div>
            <label>
                Message:
                <textarea name="message"></textarea>
            </label>
        </div>
    </form>
  )
}

export default App
