function Space ({ aggregator, active_field, size }) {

    function handleClick() {
        if (active_field) {
            aggregator (prev => {
                const new_value = {...prev, [active_field]: prev[active_field].concat(' ')}
                return new_value
            })
        }
    }

    return <button style={{'width': (size*5+24) + 'px'}} className = 'inline-block rounded-[7px] h-11 border border-b-zinc-300 w-52 bg-white focus:outline-none' onClick = {handleClick}>
        space
    </button>
}

export default Space