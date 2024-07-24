import empty from './assets/clear.png'

function Clear ({name, aggregator}) {
    function handleClick () {
        aggregator(prev => {
            return {...prev, [name]: ''}
        })
    }
    return <button 
                className = 'inline rounded border-solid border-slate-400 w-8 h-full bg-white focus:outline-none' 
                onClick={handleClick} 
                type='button'><img className='h-full' src={empty} />
            </button>
}

export default Clear