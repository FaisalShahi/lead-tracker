import { useNavigate } from "react-router-dom";
const AddLeadPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-50 p-4 lg:p-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={() => navigate("/dashboard")}
            className="text-blue-600 font-medium mb-3"
          >
            ← Back
          </button>

          <h1 className="text-4xl font-bold text-slate-900">Add New Lead</h1>

          <p className="text-slate-500 mt-2">Capture enquiries in seconds.</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-[32px] shadow-sm border border-slate-100 p-6 lg:p-8 space-y-8">
          {/* Basic */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Basic Information</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <input placeholder="Lead Name" className="input" />
              <input placeholder="Mobile Number" className="input" />
              <input
                placeholder="Alternate Number"
                className="input md:col-span-2"
              />
            </div>
          </div>

          {/* Source */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Lead Details</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <select className="input">
                <option>WhatsApp</option>
                <option>Call</option>
                <option>Instagram</option>
                <option>Referral</option>
              </select>

              <select className="input">
                <option>New</option>
                <option>Interested</option>
                <option>Follow-up</option>
                <option>Won</option>
                <option>Lost</option>
              </select>

              <textarea
                rows={4}
                placeholder="Requirement / Notes"
                className="input md:col-span-2"
              ></textarea>
            </div>
          </div>

          {/* Followup */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Follow-up</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <input type="date" className="input" />

              <select className="input">
                <option>Low Priority</option>
                <option>Medium Priority</option>
                <option>High Priority</option>
              </select>
            </div>
          </div>

          {/* CTA */}
          <button className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 py-4 font-semibold text-white shadow-lg shadow-blue-200 hover:scale-[1.01] transition">
            Save Lead
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddLeadPage;
