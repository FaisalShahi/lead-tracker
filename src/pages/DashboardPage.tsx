import { useNavigate } from "react-router-dom";
const DashboardPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-slate-500">Good day 👋</p>
            {/* <h1 className="text-3xl font-bold text-slate-900">
              Welcome back, Faisal
            </h1> */}
          </div>

          <button
            onClick={() => navigate("/dashboard/add-lead")}
            className="bg-blue-600 text-white px-5 py-3 rounded-2xl font-semibold shadow-lg shadow-blue-200 transition hover:scale-[1.02]"
          >
            Add Lead
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-5 mb-8">
          {[
            ["Total Leads", "128"],
            ["New Today", "14"],
            ["Follow-ups", "9"],
            ["Won Deals", "21"],
          ].map(([title, count]) => (
            <div
              key={title}
              className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100"
            >
              <p className="text-slate-500 text-sm">{title}</p>
              <h3 className="text-3xl font-bold mt-2 text-slate-900">
                {count}
              </h3>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Leads */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Recent Leads</h2>

            <div className="space-y-4">
              {[
                ["Aman Sharma", "Interested", "Today"],
                ["Rohit Verma", "Follow-up", "Tomorrow"],
                ["Nisha Khan", "Won", "Today"],
              ].map(([name, status, time]) => (
                <div
                  key={name}
                  className="flex items-center justify-between border-b pb-3"
                >
                  <div>
                    <h4 className="font-semibold text-slate-900">{name}</h4>
                    <p className="text-sm text-slate-500">{status}</p>
                  </div>

                  <span className="text-sm text-slate-400">{time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Followups */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Today’s Follow-ups</h2>

            <div className="space-y-4">
              {["Call Rakesh", "Send Quote", "Check Payment"].map((task) => (
                <div
                  key={task}
                  className="p-4 rounded-2xl bg-blue-50 text-blue-700 font-medium"
                >
                  {task}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
