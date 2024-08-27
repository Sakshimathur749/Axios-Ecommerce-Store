import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact'>
            <h1>Contact</h1>
            <div class="text-1">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="text-2">
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                <input type="email" class="form-control" id="floatingInput" placeholder="Email" />
            </div>
            <div class="text-3">
                <input type="text" class="form-control" id="inputAddress" placeholder="Enter Subject"/>
            </div>
            <div class="button">
                <button type="submit" >Send</button>
            </div>
        </div>
    )
}

export default Contact


