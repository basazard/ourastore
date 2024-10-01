import { categoryType } from "./categoryForm";

export function EditCategoryForm({ value1 }) {
  return (
    <div className="flex flex-col gap-2 text-secondary-foreground">
      <div>
        <input
          className="w-full p-2 rounded-lg text-sm bg-muted font-extralight border-2 border-transparent focus:border-primary focus:outline-none"
          type="text"
          placeholder="Category name"
          name="name"
          defaultValue={value1}
        ></input>
      </div>
      <div>
        <select
          className="w-full p-2 rounded-lg text-sm font-extralight bg-muted border-2 
              border-transparent focus:border-primary focus:outline-none"
          name="catType"
          required
        >
          {Object.entries(categoryType).map(([key, value], index) => (
            <>
              <option value={key} key={index}>
                {value}
              </option>
            </>
          ))}
        </select>
      </div>
    </div>
  );
}
