import React from 'react'
import './Login.css'

export default function Login() {
    return (
        <div >
            <h3 className="form_title">Login</h3>
            <form action="POST" className="form_container">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" />
                <div className="form_buttons">
                    <button>Submit</button>
                    <button>Cancel</button>
                </div>
            </form>
        </div>
    )
}
