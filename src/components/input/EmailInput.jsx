export default function EmailInput({
    label,
    placeholder,
    required,
    errorMsg,
    name,
    value,
    onChange,
    onBlur,
}) {
    return (
        <div>
            <label className="text-white block mb-1">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                type="email"
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                className={`w-full px-4 py-2 rounded-lg bg-white/10 border ${errorMsg ? "border-red-500" : "border-white/20"
                    } focus:outline-none focus:ring-2 focus:ring-[#3327ae] text-white`}
            />
            {errorMsg && <p className="text-red-400 text-sm mt-1">{errorMsg}</p>}
        </div>
    );
}
