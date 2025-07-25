// import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import FilterBar from "../components/FilterBar";
import MeetingTable from "../components/MeetingTable";

export default function BuyerMeeting() {
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <div className="flex-1">
        <Topbar />
        <FilterBar />
        <div className="p-4">
          <MeetingTable />
        </div>
      </div>
    </div>
  );
}
