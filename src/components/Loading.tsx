export function Loading(){
    return (
    <div>
        <div className="flex justify-center items-center mt-32">
            <div className="flex items-center gap-2 text-gray-500">
            <span className="h-32 w-32 block rounded-full border-[12px] border-white border-t-[#30B084] animate-spin"></span>            
            </div>            
        </div>
        <h2 className='text-white font-medium italic text-3xl mt-12'>
            Calculando sua nota...
        </h2>    
    </div>    
    )
}