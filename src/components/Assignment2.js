import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Assignment2 = () => {
    const navigate = useNavigate()

    const result = () => {
        const str = document.getElementById("str").value
        const check = document.getElementById("check").value
        if (!str || !check) {
            console.log('enter')
            return false
        }
        for (let i = 0; i < str.length; i++) {
            if (str[i] === check) {
                document.getElementById('sentence').innerHTML = "sentence : " + str
                document.getElementById('letter').innerHTML = 'letter : ' + check
                document.getElementById('show').innerHTML = 'result : ' + str.slice(i + 1)
                document.getElementById('str').value = ''
                document.getElementById('check').value = ''
                break
            }
            document.getElementById('sentence').innerHTML = ''
            document.getElementById('letter').innerHTML = ''
            document.getElementById('show').innerHTML = 'The letter does not exist in the sentence'
        }
    }
    return (
        <div style={{ padding: '2rem', }}>
            <button onClick={() => navigate(-1)}> back to page</button>
            <div style={{ padding: '2rem', display: 'flex', gap: '1rem', flexDirection: 'column', width: '30%' }}>
                <input type="text" id="str" name="str" placeholder="enter sentence" />
                <input type="text" id="check" name="check" placeholder="enter letter" />
                <button onClick={result}>submit</button>
                <p id="sentence"></p>
                <p id="letter"></p>
                <p id="show"></p>
            </div>
        </div>
    )
}

export default Assignment2
