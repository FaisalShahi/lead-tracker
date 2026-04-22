import { useNavigate } from "react-router-dom";

const LeadDetailPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 p-4 lg:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <div>
            <button
              onClick={() => navigate("/dashboard")}
              className="text-blue-600 font-medium mb-3"
            >
              ← Back to Dashboard
            </button>

            <h1 className="text-4xl font-bold text-slate-900">Aman Sharma</h1>

            <p className="text-slate-500 mt-2">Interested Lead • Added today</p>
          </div>

          <div className="flex gap-3">
            <button className="px-5 py-3 rounded-2xl bg-green-500 text-white font-semibold">
              WhatsApp
            </button>

            <button className="px-5 py-3 rounded-2xl bg-blue-600 text-white font-semibold">
              Call
            </button>

            <button className="px-5 py-3 rounded-2xl bg-white border font-semibold">
              Edit
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left */}
          <div className="lg:col-span-2 space-y-6">
            {/* Lead Info */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-5">Lead Information</h2>

              <div className="grid md:grid-cols-2 gap-5 text-sm">
                <div>
                  <p className="text-slate-400">Phone</p>
                  <p className="font-semibold mt-1">+91 9876543210</p>
                </div>

                <div>
                  <p className="text-slate-400">Source</p>
                  <p className="font-semibold mt-1">WhatsApp</p>
                </div>

                <div>
                  <p className="text-slate-400">Status</p>
                  <p className="font-semibold mt-1 text-blue-600">Interested</p>
                </div>

                <div>
                  <p className="text-slate-400">Priority</p>
                  <p className="font-semibold mt-1 text-orange-500">High</p>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Requirement</h2>

              <p className="text-slate-600 leading-7">
                Needs a modern business website with enquiry form, WhatsApp
                integration and SEO-ready pages.
              </p>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Activity Timeline</h2>

              <div className="space-y-4">
                {[
                  "Lead created today",
                  "Follow-up scheduled for tomorrow",
                  "Initial conversation completed",
                ].map((item) => (
                  <div
                    key={item}
                    className="border-l-2 border-blue-500 pl-4 text-slate-600"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            {/* Followup */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h2 className="text-lg font-bold mb-4">Next Follow-up</h2>

              <p className="text-2xl font-bold text-slate-900">Tomorrow</p>

              <p className="text-slate-500 mt-1">11:00 AM</p>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-3xl p-6 shadow-sm space-y-3">
              <button className="w-full py-3 rounded-2xl bg-blue-600 text-white font-semibold">
                Mark Won
              </button>

              <button className="w-full py-3 rounded-2xl bg-rose-500 text-white font-semibold">
                Mark Lost
              </button>

              <button className="w-full py-3 rounded-2xl border font-semibold">
                Add Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadDetailPage;
