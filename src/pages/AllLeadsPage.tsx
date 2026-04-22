import { useNavigate } from "react-router-dom";

const leads = [
  {
    id: 1,
    name: "Aman Sharma",
    phone: "9876543210",
    status: "Interested",
    source: "WhatsApp",
    priority: "High",
    followup: "Today",
  },
  {
    id: 2,
    name: "Rohit Verma",
    phone: "9123456780",
    status: "Follow-up",
    source: "Call",
    priority: "Medium",
    followup: "Tomorrow",
  },
  {
    id: 3,
    name: "Nisha Khan",
    phone: "9988776655",
    status: "Won",
    source: "Instagram",
    priority: "High",
    followup: "Completed",
  },
  {
    id: 4,
    name: "Faizan Ali",
    phone: "9012345678",
    status: "New",
    source: "Referral",
    priority: "Low",
    followup: "Today",
  },
];

const badgeColor = (status: string) => {
  if (status === "Won") return "bg-green-100 text-green-700";
  if (status === "Interested") return "bg-blue-100 text-blue-700";
  if (status === "Follow-up") return "bg-orange-100 text-orange-700";
  return "bg-slate-100 text-slate-700";
};

const AllLeadsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 p-4 lg:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <div>
            <p className="text-slate-500">Lead Management</p>
            <h1 className="text-4xl font-bold text-slate-900">All Leads</h1>
          </div>

          <button
            onClick={() => navigate("/dashboard/add-lead")}
            className="px-5 py-3 rounded-2xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-200"
          >
            + Add Lead
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-3xl p-4 shadow-sm mb-6 flex flex-col lg:flex-row gap-3">
          <input
            placeholder="Search name or phone..."
            className="flex-1 rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-4 focus:ring-blue-100"
          />

          <select className="rounded-2xl border border-slate-200 px-4 py-3">
            <option>All Status</option>
            <option>New</option>
            <option>Interested</option>
            <option>Follow-up</option>
            <option>Won</option>
            <option>Lost</option>
          </select>

          <select className="rounded-2xl border border-slate-200 px-4 py-3">
            <option>All Sources</option>
            <option>WhatsApp</option>
            <option>Call</option>
            <option>Instagram</option>
            <option>Referral</option>
          </select>
        </div>

        {/* Table / Cards */}
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
          <div className="hidden md:grid grid-cols-6 px-6 py-4 border-b text-sm font-semibold text-slate-500">
            <div>Name</div>
            <div>Status</div>
            <div>Source</div>
            <div>Priority</div>
            <div>Follow-up</div>
            <div>Action</div>
          </div>

          {leads.map((lead) => (
            <div
              key={lead.id}
              className="grid md:grid-cols-6 gap-3 px-6 py-5 border-b last:border-b-0 items-center"
            >
              <div>
                <h3 className="font-semibold text-slate-900">{lead.name}</h3>
                <p className="text-sm text-slate-500">{lead.phone}</p>
              </div>

              <div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${badgeColor(
                    lead.status,
                  )}`}
                >
                  {lead.status}
                </span>
              </div>

              <div className="text-slate-600">{lead.source}</div>

              <div className="text-slate-600">{lead.priority}</div>

              <div className="text-slate-600">{lead.followup}</div>

              <div>
                <button
                  onClick={() => navigate(`/leads/${lead.id}`)}
                  className="text-blue-600 font-semibold hover:text-blue-700"
                >
                  View →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllLeadsPage;
