import { useNavigate } from "react-router-dom";

export default function FilterBar() {
const navigate=useNavigate()
  
  const Draft=()=>{
    navigate("/Draft")
  }
  const Archive=()=>{
    navigate("/Archive")
  }
  return (
    <div className="bg-white px-6 py-4 border-b">
      <div className="flex flex-wrap items-center gap-3 justify-between">
        <div className="flex gap-2 flex-wrap">
          <button className="bg-[#F4F2FF] text-[#5B3FFF] text-sm font-medium px-4 py-1.5 rounded-full flex items-center gap-1">
            All 
          </button>
          <button onClick={Draft} className="bg-[#F1F1F1] text-gray-700 text-sm font-medium px-4 py-1.5 rounded-full">
            Draft <span className="ml-1 text-gray-500"></span>
          </button>
          <button onClick={Archive} className="bg-[#F1F1F1] text-gray-700 text-sm font-medium px-4 py-1.5 rounded-full">
            Archive <span className="ml-1 text-gray-500"></span>
          </button>
        </div>

      </div>

     
    </div>
  );
}
