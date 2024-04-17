


export default function Filter(props){
    let filterData = props.filterData ; 
    let category = props.category ; 
    let setCategory = props.setCategory ; 

    function filterHandler(title){

        setCategory(title)
        
    }
    return(
        <div className="w-11/12 flex flex-wrap max-m-max space-x-4 mx-auto py-4 justify-center">
            {
                filterData.map((data)=>{
                   return(
                    <button key={data.id} 
                    onClick={()=>filterHandler(data.title)}
                    className="border border-black bg-gray-500 text-white px-5 rounded-md"
                    >
                    {data.title}
                </button>
                   )
                })
            }
        </div>
    )
}