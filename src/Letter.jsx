
function Letter ({ content, upper_case, aggregator, active_field, size }) {
    const output = (upper_case && (typeof content === 'string')) ? content.toUpperCase() : content
    const width = 'w-[' + String(Math.round(size)) +']'
    // const style = size ?
    //     width + ' inline-block rounded-[6px] h-11 border border-b-zinc-300 bg-white focus:outline-none' :
    //     'flex-1 inline-block rounded-[6px] h-11 border border-b-zinc-300 bg-white focus:outline-none'
    const style = size ? {'width': size+'px'} : {'flex': 1}

    console.log(style)

    function handleClick() {
        if (active_field) {
            aggregator (prev => {
                const current_value = prev[active_field]
                let new_value
                
                if (size) { //optimize
                    new_value = {...prev, [active_field]: current_value + output}
                } else {
                    new_value = {...prev, [active_field]: (current_value.length == 4) ? current_value : current_value + output}
                }
                return new_value
            })
        }
    }

    return <button style={style} className={`inline-block rounded-[7px] h-11 border border-b-zinc-300 bg-white focus:outline-none`} onClick={handleClick}>
        {output}
    </button>
    // return <button className={style} onClick={handleClick}>
    //     {output}
    // </button>
}

export default Letter