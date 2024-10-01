export function EditServiceForm({ value1, value2, categories }) {
  return (
    <div className="flex flex-col gap-2">
      <input
        className="p-2 rounded-lg text-sm bg-muted font-extralight text-secondary-foreground border-2 border-transparent focus:border-primary focus:outline-none"
        type="text"
        placeholder="Service name"
        name="newServiceName"
        defaultValue={value1}
      ></input>
      <input
        className="p-2 rounded-lg text-sm bg-muted font-extralight text-secondary-foreground border-2 border-transparent focus:border-primary focus:outline-none"
        type="text"
        placeholder="Service order"
        name="newServiceOwner"
        defaultValue={value2}
      ></input>
      <select
        className="w-full p-2 rounded-lg text-sm bg-muted border-2 
              border-transparent focus:border-primary focus:outline-none
              text-secondary-foreground"
        name="newCatgId"
        required
      >
        {categories.map((category, index) => (
          <>
            <option value={category.id} key={index}>
              {category.name}
            </option>
          </>
        ))}
      </select>
    </div>
  );
}
