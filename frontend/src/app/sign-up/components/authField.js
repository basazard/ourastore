export function AuthInput({ label, formName, type }) {
  return (
    <>
      <span className="text-xs">{label}</span>
      <input
        className="mt-1 rounded-md p-2 text-xs w-full bg-input placeholder:text-secondary-foreground
                  text-secondary-foreground border-2 border-transparent focus:border-primary focus:outline-none"
        placeholder={label}
        required
        name={formName}
        type={type}
      ></input>
    </>
  );
}

export function AuthDarkInput({ label, formName, type }) {
  return (
    <>
      <span className="text-xs">{label}</span>
      <input
        className="mt-1 rounded-md p-2 text-xs bg-secondary placeholder:text-secondary-foreground
                    text-secondary-foreground border-2 border-transparent focus:border-primary focus:outline-none"
        placeholder="Nomor whatsapp"
        required
        type={type}
        name={formName}
      ></input>
    </>
  );
}
