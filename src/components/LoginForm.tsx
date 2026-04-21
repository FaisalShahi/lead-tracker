import { useNavigate } from "react-router-dom";
import InputField from "./InputField";

const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="space-y-4">
      <InputField placeholder="Email or Phone" />
      <InputField placeholder="Password" type="password" />

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-slate-500">
          <input type="checkbox" />
          Remember me
        </label>

        <button className="text-blue-600 font-medium hover:text-blue-700">
          Forgot password?
        </button>
      </div>

      <button
        onClick={handleLogin}
        className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 py-3 font-semibold text-white shadow-lg shadow-blue-200 transition hover:scale-[1.01]"
      >
        Login
      </button>

      <button className="w-full rounded-2xl border border-slate-200 py-3 font-medium text-slate-700 hover:bg-slate-50 transition">
        Continue with Google
      </button>
    </div>
  );
};

export default LoginForm;
