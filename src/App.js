import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading,setLoading] = useState(true) ; 
  const [category ,setCategory] = useState(filterData[0].title)

  async function fetchData() {
    setLoading(true)
    try {
      const res = await fetch(apiUrl);
      const output =await res.json();
      setCourses(output.data);
      
      toast.success("makkhan chal raha he");
    } catch (error) {
      toast.error("somethinng went wrong");
    }
    setLoading(false)
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="">
      <div>
        <Navbar />
      </div>
      <div className="bg-violet-400">
      <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory} />
      </div>
      <div>
      {loading ? (<Spinner/>) : ( <Cards courses ={courses} category={category}/>)}
      </div>
      </div>
    </div>
  );
}

export default App;
