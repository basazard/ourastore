import { Button } from "@nextui-org/react";

export const categoryType = {
  JOKI: "Joki",
  TOP_UP: "Top Up",
  PULSA: "Pulsa dan Data",
  VOUCHER: "Voucher",
  TAGIHAN: "Tagihan",
};

export function CategoryForm() {
  return (
    <>
      <div>
        <span className="text-4xl font-bold text-primary">Category Form</span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <span>Fill your category here</span>
          <input
            className="p-2 rounded-lg text-sm bg-muted font-extralight 
                text-secondary-foreground border-2 border-transparent focus:border-primary focus:outline-none"
            type="text"
            placeholder="Category name"
            name="name"
          ></input>
        </div>
        <div className="flex flex-col gap-2">
          <span>Pick category type</span>
          <select
            className="w-full p-2 rounded-lg text-sm bg-muted border-2 
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
      <div>
        <Button
          type="submit"
          radius="sm"
          className="bg-primary text-secondary-foreground"
        >
          Add Category
        </Button>
      </div>
    </>
  );
}
