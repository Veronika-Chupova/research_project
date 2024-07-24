import candy from './assets/candy.png'

function Finish () {
    return <div className='mt-40 text-center px-10'>
        <h3 className='text-2xl text-violet-500'>Thank you for participation in the researh!</h3>
        <img src={candy} className='inline-block w-1/4 h-auto mt-10'/>
    </div>
    
}

export default Finish