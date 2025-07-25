import { useState } from "react";
import { Popover } from "@headlessui/react";
import { ChevronDown, Eye, Edit, Activity, Trash2 } from "lucide-react"; // Import necessary icons

export default function MeetingTable() {
  const [selected, setSelected] = useState([]);
  const unique = (key) => [...new Set(meetings.map((m) => m[key]))];


  const meetings = [
    {
      id: 1,
      date: "01 May, 2025 at 2pm",
      status: "Completed",
      type: "Online",
      buyer: "Mango Private Limited",
      brand: "Mango",
      dept: "Design",
      title: "Costing Discussion with Zara",
      meetingDate: "01 May, 2025",
      participent:"Shubham lowanshi,Abhisek janoriya,vaibhav rasia", // Changed to show multiple participants
    },{
    id: 2,
    date: "03 May, 2025 at 11am",
    status: "Upcoming",
    type: "Offline",
    buyer: "H&M Textiles",
    brand: "H&M",
    dept: "Marketing",
    title: "New Campaign Strategy",
    meetingDate: "03 May, 2025",
    participent:"Jane Smith ,raj mala,shiva ser",

  },
  {
    id: 3,
    date: "05 May, 2025 at 4pm",
    status: "Draft",
    type: "Online",
    buyer: "Zara International",
    brand: "Zara",
    dept: "Finance",
    title: "Budget Review Meeting",
    meetingDate: "05 May, 2025",
    participent:"Alice Johnson ,ram das,ver shing",

  },
  {
    id: 4,
    date: "07 May, 2025 at 10am",
    status: "Upcoming",
    type: "Offline",
    buyer: "Uniqlo Japan",
    brand: "Uniqlo",
    dept: "Production",
    title: "Fabric Quality Inspection",
    meetingDate: "07 May, 2025",
    participent:"Bob Williams ,rahul raj,rathor",

  },
  {
    id: 5,
    date: "10 May, 2025 at 3pm",
    status: "Overdue",
    type: "Online",
    buyer: "Levi's India",
    brand: "Levi's",
    dept: "Operations",
    title: "Delay in Shipment Discussion",
    meetingDate: "10 May, 2025",
    participent:"Charlie Brown ,bhumi shree",

  },
  {
    id: 6,
    date: "12 May, 2025 at 1pm",
    status: "Completed",
    type: "Offline",
    buyer: "Puma Sports",
    brand: "Puma",
    dept: "Design",
    title: "Product Launch Brainstorm",
    meetingDate: "12 May, 2025",
    participent:"David Green,radhe shyam",

  }

    // Add more items here...
  ];

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (selected.length === meetings.length) {
      setSelected([]);
    } else {
      setSelected(meetings.map((m) => m.id));
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-400 text-white";
      case "Upcoming":
        return "bg-yellow-500 text-white";
      case "Overdue":
        return "bg-red-500 text-white";
      case "Draft": // Added for completeness based on the image
        return "bg-gray-400 text-white";
      case "Archived": // Added for completeness based on the image
        return "bg-gray-600 text-white";
      case "In Progress": // Added for completeness based on the image
        return "bg-blue-500 text-white";
      case "Ongoing": // Added for completeness based on the image
        return "bg-purple-500 text-white";
      case "re-scheduled": // Added for completeness based on the image
        return "bg-orange-400 text-white";
      case "follow-up": // Added for completeness based on the image
        return "bg-blue-400 text-white";
      default:
        return "bg-gray-400 text-white";
    }
  };

  return (
    <>
<div className="w-full max-w-[1280px] mx-auto rounded-lg shadow border border-gray-200 bg-white">
<div className="flex ml-4 gap-2 mt-4 mb-4 flex-wrap">
      <div className="relative  max-w-md">
      {/* Search Icon inside input */}
      <svg
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35m1.75-4.4a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>

      <input
        type="text"
        placeholder="Search"
        className=" pl-10 bg-gray-100 pr-4 py-2  border-gray-300 rounded-md shadow-sm text-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
      />
    </div>
  
<select className="bg-gray-100 px-4 py-2 rounded-md text-sm text-gray-500 ">
<option>Buyer name</option>
{unique("buyer").map((buyer, i)=>(
    <option key={i}>{buyer}</option>
))}
</select>
<select className="bg-gray-100 px-4 py-2 rounded-md text-sm text-gray-500 ">
<option>Brand</option>
  {unique("brand").map((brand, i)=>(
    <option key={i}>{brand}</option>
  ))}
</select>
<select className="px-4 py-2 rounded-md text-sm text-gray-500 bg-gray-100">
<option>Department</option>
  {unique("dept").map((dept, i)=>(
    <option key={i}>{dept}</option>
  ))}
</select>


      <Popover className="relative">
  <Popover.Button className="bg-gray-100 px-4 py-2 rounded-md text-sm text-gray-500 flex items-center gap-1">
    More Filters
    <ChevronDown className="w-4 h-4" />
  </Popover.Button>

  <Popover.Panel className="absolute z-10 mt-2 w-40 p-3 bg-white rounded-md shadow-md space-y-2"> 
    {/* Status */}
    <div>
      <select className="w-full bg-gray-100 px-2 py-1 rounded text-sm text-gray-700"> 
        <option>Status</option>
        {unique("status").map((status, i) => (
          <option key={i}>{status}</option>
        ))}
      </select>
    </div>

    <div>
      <select className="w-full bg-gray-100 px-2 py-1 rounded text-sm text-gray-700">
        <option>Meeting Date</option>
        {unique("meetingDate").map((date, i) => (
          <option key={i}>{date}</option>
        ))}
      </select>
    </div>

    <div>
      <select className="w-full bg-gray-100 px-2 py-1 rounded text-sm text-gray-700"> 
        <option>Participants</option>
        {unique("participent").map((p, i) => (
          <option key={i}>{p}</option>
        ))}
      </select>
    </div>

    <div>
      <select className="w-full bg-gray-100 px-2 py-1 rounded text-sm text-gray-700"> 
        <option>Meeting Type</option>
        {unique("type").map((t, i) => (
          <option key={i}>{t}</option>
        ))}
      </select>
    </div>
  </Popover.Panel>
</Popover>
    </div>


<table className="w-full table-auto divide-y divide-gray-200 text-sm">
      <thead className="bg-gray-50 text-gray-700 text-left">
        <tr>
          <th className="px-4 py-3">
            <input
              type="checkbox"
              checked={selected.length === meetings.length}
              onChange={toggleAll}
              className="accent-blue-500 w-4 h-4"
            />
          </th>
          <th className="px-4 py-3 font-semibold">Date & Time</th>
          <th className="px-4 py-3 font-semibold">Status</th>
          <th className="px-4 py-3 font-semibold">Type</th>
          <th className="px-4 py-3 font-semibold">Buyer Name</th>
          <th className="px-4 py-3 font-semibold">Brand</th>
          <th className="px-4 py-3 font-semibold">Dept.</th>
          <th className="px-4 py-3 font-semibold">Title</th>
          <th className="px-4 py-3 font-semibold">Meeting Date</th>
          <th className="px-4 py-3 font-semibold">Participants</th>
          <th className="px-4 py-3 font-semibold text-right">Action</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {meetings.map((m) => (
          <tr key={m.id} className="hover:bg-gray-50">
            <td className="px-4  py-2">
              <input
                type="checkbox"
                checked={selected.includes(m.id)}
                onChange={() => toggleSelect(m.id)}
                className="accent-blue-500   w-4 h-4"
              />
            </td>
            <td className="px-4 py-2">{m.date}</td>
            <td className="px-4 py-2">
              <span
                className={`text-xs px-2 py-1 rounded-lg font-medium ${getStatusColor(
                  m.status
                )}`}
              >
                {m.status}
              </span>
            </td>
            <td className=" text-xs px-2 py-1 rounded-lg font-medium">{m.type}</td>
            <td className="px-4 py-2 font-bold underline">{m.buyer}</td>
            <td className="px-4 py-2 font-bold underline">{m.brand}</td>
            <td className="px-4 py-2 font-bold underline">{m.dept}</td>
            <td className="px-4 py-2 font-bold underline cursor-pointer">
              {m.title}
            </td>
            <td className="px-4 py-2 ">{m.meetingDate}</td>
<td className="px-4 py-2 relative group cursor-pointer">
  {(() => {
    const participants = m.participent.split(',').map(p => p.trim());
    const first = participants[0];
    const restCount = participants.length - 1;

    return (
      <div className="flex items-center space-x-2">
        {/* Initial Circle */}
        <div className="rounded-full h-7 w-10 flex items-center justify-center bg-green-500 text-white text-xs font-semibold">
          {first.charAt(0).toUpperCase()}
        </div>

        {/* Name + Count */}
        <div className="flex flex-col">
        <span>{first}{restCount > 0 && ` +${restCount}`}</span>

                            <span className="text-[10px] text-gray-400">Buyer, Sales</span>
        </div>


        {/* Tooltip on Hover */}
        {restCount > 0 && (
          <div className="absolute z-50 top-8 left-0 w-52 bg-white border border-gray-300 rounded-md shadow-md p-3 text-xs text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <div className="space-y-2">
              {participants.map((name, index) => (
                <div key={index} className="flex items-start space-x-2">
                  {/* Circle */}
                  <div className="rounded-full h-6 w-6 flex items-center justify-center bg-green-500 text-white text-xs font-semibold mt-1">
                    {name.charAt(0).toUpperCase()}
                  </div>

                  {/* Name & Role */}
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{name}</span>
                    <span className="text-[10px] text-gray-400">Buyer, Sales</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  })()}
</td>


            <td className="px-4 py-2 text-right">
              <Popover className="relative">
                <Popover.Button className="font-bold cursor-pointer w-10 border-hidden hover:text-gray-800">
                  ⋮
                </Popover.Button>

                <Popover.Panel className="absolute z-10 right-0 mt-2 w-40 p-1 bg-white rounded-md shadow-lg">
                  <div className="py-1">
                    <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Eye className="w-4 h-4" />
                      View
                    </a>
                    <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Edit className="w-4 h-4" />
                      Edit
                    </a>
                    <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Activity className="w-4 h-4" />
                      Activity Log
                    </a>
                    <a href="#" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </a>
                  </div>
                </Popover.Panel>
              </Popover>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>


    </>

  );
}