import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();

  const stats = [
    {
      title: "Total Leads",
      value: "128",
      sub: "+12 this week",
      action: () => navigate("/leads"),
      highlight: true,
    },
    {
      title: "New Today",
      value: "14",
      sub: "Fresh enquiries",
    },
    {
      title: "Follow-ups",
      value: "9",
      sub: "Due today",
    },
    {
      title: "Won Deals",
      value: "21",
      sub: "This month",
    },
  ];

  const recentLeads = [
    { id: 1, name: "Aman Sharma", status: "Interested", time: "Today" },
    { id: 2, name: "Rohit Verma", status: "Follow-up", time: "Tomorrow" },
    { id: 3, name: "Nisha Khan", status: "Won", time: "Today" },
    { id: 4, name: "Faizan Ali", status: "New", time: "Today" },
  ];

  const followups = [
    "Call Rakesh",
    "Send Quote",
    "Check Payment",
    "Share Proposal",
  ];

  const getStatusColor = (status: string) => {
    if (status === "Won") return "bg-green-100 text-green-700";
    if (status === "Interested") return "bg-blue-100 text-blue-700";
    if (status === "Follow-up") return "bg-orange-100 text-orange-700";
    return "bg-slate-100 text-slate-700";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 p-4 lg:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Top Header */}
        <div className="rounded-[32px] bg-white border border-slate-100 shadow-sm px-6 py-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <p className="text-sm text-slate-500">Good day 👋</p>
            <h1 className="text-3xl font-bold text-slate-900 mt-1">
              Welcome back, Faisal
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              You have 9 follow-ups waiting today.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => navigate("/leads")}
              className="px-5 py-3 rounded-2xl border border-slate-200 font-semibold text-slate-700 hover:bg-slate-50 transition"
            >
              All Leads
            </button>

            <button
              onClick={() => navigate("/dashboard/add-lead")}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow-lg shadow-blue-200 hover:scale-[1.02] transition"
            >
              + Add Lead
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {stats.map((item) => (
            <div
              key={item.title}
              onClick={item.action}
              className={`rounded-3xl p-6 border transition ${
                item.highlight
                  ? "bg-blue-600 text-white shadow-xl shadow-blue-200 cursor-pointer hover:-translate-y-1"
                  : "bg-white border-slate-100 shadow-sm"
              }`}
            >
              <p
                className={`text-sm ${
                  item.highlight ? "text-blue-100" : "text-slate-500"
                }`}
              >
                {item.title}
              </p>

              <h3 className="text-4xl font-bold mt-3">{item.value}</h3>

              <p
                className={`text-sm mt-2 ${
                  item.highlight ? "text-blue-100" : "text-slate-500"
                }`}
              >
                {item.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Main Layout */}
        <div className="grid xl:grid-cols-3 gap-6">
          {/* Recent Leads */}
          <div className="xl:col-span-2 bg-white rounded-[32px] border border-slate-100 shadow-sm p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Recent Leads
                </h2>
                <p className="text-sm text-slate-500">
                  Latest customer activity
                </p>
              </div>

              <button
                onClick={() => navigate("/leads")}
                className="text-blue-600 font-semibold hover:text-blue-700"
              >
                View All →
              </button>
            </div>

            <div className="space-y-3">
              {recentLeads.map((lead) => (
                <div
                  key={lead.id}
                  onClick={() => navigate(`/leads/${lead.id}`)}
                  className="rounded-2xl border border-slate-100 px-4 py-4 flex items-center justify-between hover:shadow-sm hover:bg-slate-50 transition cursor-pointer"
                >
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {lead.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                          lead.status,
                        )}`}
                      >
                        {lead.status}
                      </span>

                      <span className="text-xs text-slate-400">
                        {lead.time}
                      </span>
                    </div>
                  </div>

                  <span className="text-slate-400 text-lg">→</span>
                </div>
              ))}
            </div>
          </div>

          {/* Follow-up Panel */}
          <div className="space-y-6">
            <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-1">
                Today’s Follow-ups
              </h2>

              <p className="text-sm text-slate-500 mb-5">
                Stay on top of conversions
              </p>

              <div className="space-y-3">
                {followups.map((task) => (
                  <div
                    key={task}
                    className="p-4 rounded-2xl bg-blue-50 text-blue-700 font-medium"
                  >
                    {task}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-[32px] p-6 text-white shadow-xl shadow-blue-200">
              <p className="text-blue-100 text-sm">Conversion Rate</p>
              <h3 className="text-4xl font-bold mt-2">74%</h3>
              <p className="mt-3 text-sm text-blue-100">
                Strong performance this month.
              </p>

              <div className="h-2 bg-white/20 rounded-full mt-5">
                <div className="h-2 w-3/4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
