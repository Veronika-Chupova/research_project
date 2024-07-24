import {useState, useRef, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import CheckPoint from './CheckPoint'
import InputField from './InputField'
import KeyLine from './KeyLine'
import SpaceLine from './SpaceLine'
import setKeyboard from './keyboard'
import getSize from './get_size'
import { v4 as uuidv4 } from 'uuid'

import r_arrow from './assets/right-arrow.png'
import l_arrow from './assets/left-arrow.png'
 
function Pwd () {
    const [pass_value, setPass] = useState ({
        pass1: '',
        pass2: ''
    })
    const [focused, setFocus] = useState ()
    const [upper_case, setCase] = useState (false)
    const [view, setView] = useState ('letters')
    const [keyboardStyle, setStyle] = useState ('hidden')
    const keyboard = useRef (setKeyboard())
    const navigate = useNavigate()

    useEffect(()=>{
        if (upper_case) {
            setCase(false)
        }
    },[pass_value, view])

    const pass_criteria = [
        {title: 'At least 8 characters',
        control: pass_value.pass1.length > 7},
        {title: 'Both upper and lower case letters',
        control: (/[A-Z]/).test(pass_value.pass1) && (/[a-z]/).test(pass_value.pass1)},
        {title: 'At least 1 number',
        control: /\d/.test(pass_value.pass1)},
        {title: 'Passwords match',
        control: (pass_value.pass1 === pass_value.pass2) && (pass_value.pass1 != '')}
    ]
    const letter_size = getSize(window.screen.availWidth, 2, 6)
    const focus_style = 'border-solid border-violet-600 rounded border-2'

    // function handleFocus (e) {
    //     e.preventDefault()
    //     if (focused != e.target) {
    //         setFocus (e.target)
    //     }
    // }
    // function handleSubmission (e) { //working!
    //     e.preventDefault()
    //     const result = pass_value.pass1
    //     const ready_status = pass_criteria.reduce((acc, element) => {
    //         return (acc && element.control)
    //     }, true)
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
    //         console.log ('Check your password!')
    //     }
    // }
    function handleMove (e) { //optimize
        const {name} = e.target
        const ready_status = pass_criteria.reduce((acc, element) => {
            return (acc && element.control)
        },true)

        if (name=='prev') {
            navigate('/')
        } else if (name=='next' && ready_status) {
            navigate('/pincheck')
        } else { }
    }

    return <div className='text-center font-baseline font-normal'>
    <div className='inline-block text-left mt-10 w-10/12'>
    <h3 className='text-2xl text-violet-500 mb-10'>Create a new password</h3>
        <form>
            <h5 className='text-sm font-light mb-2'>Your password must satisfy the criteria</h5>
            <div className='flex flex-col gap-1 mb-10'>
                {pass_criteria.map(element => <CheckPoint key={uuidv4()} title = {element.title} value = {element.control} status={element.control}/>)}
            </div>
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
                    <p className='inline text-md font-semibold pointer-events-none'>Next</p>
                    <img className='h-3/4 w-auto inline ml-3 pointer-events-none' src={r_arrow}/>
                </button>
            </div>
            <div className='flex flex-row gap-2 justify-center'>
                <p className='text-2xl text-violet-400'>•</p>
                <p className='text-2xl text-violet-200'>•</p>
            </div>
        </form>
    </div>
    <div className={keyboardStyle.concat(' ','sticky w-full bottom-0 px-0.5 pt-4 pb-4 z-10 bg-ios-kb-background text-center flex flex-col gap-3')}>
        {keyboard.current[view].map((line, index) => 
            <KeyLine 
                key={uuidv4()}
                line={line}
                upper_case = {upper_case}
                active_field = {focused} 
                aggregator = {setPass}
                toggler = {setCase}
                size = {letter_size}
                last = {keyboard.current[view].length - 1 === index}
            />
        )}
        <SpaceLine 
            key={uuidv4()}
            aggregator = {setPass} 
            active_field = {focused} 
            view={view} 
            setView={setView}
            size = {letter_size}
        />
    </div>
    </div>   
 }

export default Pwd

    // function inputFocus (e) {
    //     if (focused != e.target) {
    //         e.target.setAttribute('class', e.target.className.concat(' ', focus_style))
    //         if (focused) {
    //             focused.setAttribute ('class', focused.className.replace(focus_style,'').trim())
    //         }
    //         setFocus (e.target)
    //     }
    // }

        {/* <div className = 'min-w-40 min-h-10 block bg-red-200' onClick = {inputFocus} name='pass1'>
        {pass_value.pass1}
    </div>
    <div className = 'min-w-40 min-h-10 block bg-green-200' onClick = {inputFocus} name='pass2'> 
        <p>{pass_value.pass2}</p>
    </div> */}