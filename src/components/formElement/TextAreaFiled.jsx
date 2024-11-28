const TextAreaFiled = ({
  label,
  name,
  rows = 3,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="w-full mb-2">
      <label htmlFor={name} className="text-[15px] font-[400] text-gray-500">
        {label}
      </label>
      <div className="relative w-full">
        <textarea
          name={name}
          id={name}
          onChange={(e) => onChange(e.target.value, name)}
          placeholder={placeholder}
          rows={rows}
          className="peer border-[#e5eaf2] border rounded-md outline-none px-3 py-2 w-full mt-1 focus:border-[#3B9DF8] transition-colors duration-300"
          value={value}
        ></textarea>
      </div>
    </div>
  );
};

export default TextAreaFiled;
