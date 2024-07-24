import {useState, useRef, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import InputField from './InputField'
import NumLine from './NumLine'
import setNumboard from './numboard'
import { v4 as uuidv4 } from 'uuid'

import l_arrow from './assets/left-arrow.png'
 
function Pin () {
    const [pass_value, setPass] = useState ({
        pass1: '',
        pass2: ''
    })
    const [focused, setFocus] = useState ()
    const [keyboardStyle, setStyle] = useState ('hidden')
    const keyboard = useRef (setNumboard())
    const navigate = useNavigate()

    // function handleSubmission (e) { //working!
    //     e.preventDefault()
    //     const result = pass_value.pass1
    //     const ready_status = (pass_value.pass1 === pass_value.pass2 && pass_value.pass1.length == 4)

    //     const form_data = new FormData(e.target)
    //     const entries = Object.fromEntries(form_data)
    //     const data = Object.values(entries)

    //     if (ready_status) {
    //         fetch('http://localhost:3500/submission', {
    //             method: 'POST',
    //             headers: {"Content-type" : "application/json"},
    //             body: JSON.stringify({pwd: result}),
    //             credentials: 'include'
    //         })
    //     } else {
    //         console.log ('Check your PIN!')
    //     }
    // }
    function handleMove (e) { //optimize
        const {name} = e.target
        const ready_status = (pass_value.pass1 === pass_value.pass2 && pass_value.pass1.length == 4)

        if (name=='prev') {

            navigate('/passcheck')
        }
        if (name=='next' && ready_status) {

            navigate('/complete')
        }
    }

    return <div className='text-center font-baseline font-normal'>
    <div className='inline-block text-left mt-10 w-10/12'>
    <h3 className='text-2xl text-violet-500 mb-10'>Create a new 4-digit PIN code</h3>
        <form>
            {Object.entries(pass_value).map( element => 
                <InputField 
                    key={uuidv4()} 
                    name={element[0]} 
                    value={element[1]} 
                    focused={focused} 
                    setFocus={setFocus}
                    aggregator = {setPass}
                    setStyle = {setStyle}
                />
            )}
            <div className='flex justify-between mt-10 text-white font-black mb-20'>
                <button className = 'min-w-28 h-8 bg-violet-600 rounded' type='button' name='prev' onClick={handleMove}>
                        <img className='h-3/4 w-auto inline mr-3 pointer-events-none' src={l_arrow}/>
                        <p className='inline text-md font-semibold pointer-events-none'>Prev</p>
                </button>
                <button className = 'min-w-28 h-8 bg-violet-600 rounded' type='button' name='next' onClick={handleMove}>
                    <p className='inline text-md font-semibold pointer-events-none'>Submit</p>
                </button>
            </div>
            <div className='flex flex-row gap-2 justify-center'>
                <p className='text-2xl text-violet-200'>•</p>
                <p className='text-2xl text-violet-400'>•</p>
            </div>
        </form>
    </div>
    <div className={keyboardStyle.concat(' ','sticky w-full bottom-0 px-0.5 pt-4 pb-4 z-10 bg-ios-kb-background text-center flex flex-col gap-3')}>
        {keyboard.current.map((line, index) => 
            <NumLine
                key={uuidv4()}
                line={line}
                active_field = {focused} 
                aggregator = {setPass}

                last = {keyboard.current.length - 1 === index}
            />
        )}
    </div>
    </div>   
 }

export default Pin