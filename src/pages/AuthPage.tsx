import LeftShowcase from "../components/LeftShowcase";
import AuthPanel from "../components/AuthPanel";

const AuthPage = () => {
  return (
    <div className="min-h-screen lg:h-screen lg:overflow-hidden bg-gradient-to-br from-blue-500 via-blue-400 to-indigo-500 flex items-center justify-center p-4 lg:p-6">
      {" "}
      <div className="w-full max-w-7xl h-full max-h-[920px] grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LeftShowcase />
        <AuthPanel />
      </div>
    </div>
  );
};

export default AuthPage;
