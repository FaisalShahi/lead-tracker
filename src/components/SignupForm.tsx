import InputField from "./InputField";

type Props = {
  goToLogin: () => void;
};

const SignupForm = ({ goToLogin }: Props) => {
  const handleSubmit = () => {
    // Later API signup call here

    goToLogin();
  };

  return (
    <div className="space-y-4">
      <InputField placeholder="Full Name" />
      <InputField placeholder="Business Name" />
      <InputField placeholder="Mobile Number" />
      <InputField placeholder="Email Address" />
      <InputField placeholder="Password" type="password" />
      <InputField placeholder="Confirm Password" type="password" />

      <label className="flex items-start gap-2 text-sm text-slate-500">
        <input type="checkbox" className="mt-1" />I agree to Terms & Conditions
      </label>

      <button
        onClick={handleSubmit}
        className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 py-3 font-semibold text-white shadow-lg shadow-blue-200 transition hover:scale-[1.01]"
      >
        Start Tracking Leads
      </button>
    </div>
  );
};

export default SignupForm;
