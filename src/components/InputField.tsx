type Props = {
    placeholder: string;
    type?: string;
  };
  
  const InputField = ({ placeholder, type = "text" }: Props) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />
    );
  };
  
  export default InputField;