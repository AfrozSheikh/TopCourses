import Card from "./Card"


export default function Cards(props){
    const courses = props.courses ;
    let category = props.category ; 
   
    function getCourses (){
        if(category==="All"){
            let allCourses = [] ;
            Object.values(courses).forEach(array=>{
                array.forEach(courseData=>{
                    allCourses.push(courseData)
                })
            })
            return allCourses ; 
        }

        else{
            return courses[category]
        }

       
    }

    
    return (<div className="w-11/12 m-auto flex justify-center items-center flex-wrap border border-black ">
     {  getCourses().map((course)=>
     (
        <Card key={course.id} course ={course}/>
     ))} 
    </div>)
}