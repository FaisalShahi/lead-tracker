import { useState } from "react";
import AuthTabs from "./AuthTabs";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const AuthPanel = () => {
  const [tab, setTab] = useState<"login" | "signup">("login");

  return (
    <div className="rounded-[32px] bg-white/90 backdrop-blur-xl border border-white/60 shadow-2xl shadow-blue-900/10 p-6 lg:p-10 h-full flex items-center">
      <div className="mx-auto w-full max-w-xl">
        <AuthTabs tab={tab} setTab={setTab} />

        {tab === "login" ? (
          <>
            <h2 className="text-4xl font-semibold text-slate-900 mt-10">
              Leadvora Welcomes You
            </h2>

            <p className="text-slate-500 mt-2 mb-8">
              Your leads are waiting for you.
            </p>

            <LoginForm />
          </>
        ) : (
          <>
            <h2 className="text-4xl font-semibold text-slate-900 mt-10">
              Create your workspace
            </h2>

            <p className="text-slate-500 mt-2 mb-8">
              Start converting every enquiry into revenue.
            </p>

            <SignupForm goToLogin={() => setTab("login")} />
          </>
        )}
      </div>
    </div>
  );
};

export default AuthPanel;
