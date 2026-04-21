type Props = {
    tab: "login" | "signup";
    setTab: (value: "login" | "signup") => void;
  };
  
  const AuthTabs = ({ tab, setTab }: Props) => {
    return (
      <div className="grid grid-cols-2 rounded-2xl bg-slate-100 p-1">
        <button
          onClick={() => setTab("signup")}
          className={`rounded-2xl py-3 font-semibold transition ${
            tab === "signup"
              ? "bg-white shadow text-blue-600"
              : "text-slate-500"
          }`}
        >
          Sign Up
        </button>
        <button
          onClick={() => setTab("login")}
          className={`rounded-2xl py-3 font-semibold transition ${
            tab === "login"
              ? "bg-white shadow text-blue-600"
              : "text-slate-500"
          }`}
        >
          Login
        </button>
      </div>
    );
  };
  
  export default AuthTabs;