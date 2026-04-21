const LeftShowcase = () => {
    return (
      <div className="hidden lg:flex flex-col justify-between rounded-[32px] bg-gradient-to-br from-slate-50 via-blue-50 to-blue-100 p-10 relative overflow-hidden h-full">
        <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl"></div>
  
        <h2 className="relative z-10 text-3xl font-bold text-blue-600">
          Leadvora
        </h2>
  
        <div className="relative z-10">
          <h1 className="text-6xl font-semibold leading-tight text-slate-900">
            Close More Leads.
            <br />
            Miss <span className="text-blue-600">Nothing.</span>
          </h1>
  
          <p className="mt-6 max-w-lg text-lg text-slate-600">
            Track customers, follow-ups and deals in one powerful workspace.
          </p>
        </div>
  
        <div className="relative z-10 grid grid-cols-2 gap-5">
          <div className="col-span-2 rounded-3xl bg-white p-6 shadow-xl">
            <p className="text-sm text-slate-500">Lead Pipeline</p>
            <div className="grid grid-cols-4 gap-3 mt-4">
              {["New", "Call", "Won", "Lost"].map((item, i) => (
                <div key={i} className="rounded-2xl bg-slate-50 p-3">
                  <p className="text-xs text-slate-500">{item}</p>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    {12 + i * 4}
                  </h3>
                </div>
              ))}
            </div>
          </div>
  
          <div className="rounded-3xl bg-white p-6 shadow-xl">
            <p className="text-sm text-slate-500">Follow-ups</p>
            <h3 className="text-5xl font-bold mt-2 text-slate-900">8</h3>
          </div>
  
          <div className="rounded-3xl bg-white p-6 shadow-xl">
            <p className="text-sm text-slate-500">Conversion</p>
            <div className="h-3 rounded-full bg-slate-100 mt-4">
              <div className="h-3 w-3/4 rounded-full bg-blue-600"></div>
            </div>
            <p className="mt-3 text-sm text-slate-500">74% this month</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default LeftShowcase;