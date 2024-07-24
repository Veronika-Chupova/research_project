import Clear from './Clear'
import {v4 as uuidv4} from 'uuid'


function InputField ({name, value, focused, setFocus, aggregator, setStyle }) {
    const labels = {
        pass1: 'New Password',
        pass2: 'Confirm Password'
    }

    function handleFocusOn (e) {
        e.preventDefault()
        if (focused != e.target.name) {
            if (!focused) {setStyle('')}
            setFocus (e.target.name)
        }
    }

    return <>
    <label className='block text-md font-light'>{labels[name]}</label>
    <div className='flex block border-solid border-violet-200 border-2 rounded mb-5 mx-auto text-md'>
        <input 
            className = 'flex-auto min-full min-h-8 focus:outline-none pl-2' 
            onFocus={handleFocusOn}
            value={value} 
            name={name} 
            readOnly>
        </input>
        <Clear key={uuidv4()} name={name} aggregator={aggregator}/>
    </div>
    </>
}

export default InputField

// ring-offset-0 ring ring-violet-500