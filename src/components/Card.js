

export default function Card(props){
    let course = props.course

    let desc =` ${course.description.substring(0,120)}.....`
    return (
        <div className="bg-slate-700 w-[300px] rounded-md overflow-hidden text-white m-[30px]">
            <div className="">
            <img src={course.image.url}/>
        </div>
        <div>
            <h1 className="text-[1.3rem] font-semibold mx-3">
                {course.title}
            </h1>
            <p className="mx-3 my-2">{desc}</p>
        </div>
        </div>
    )
}