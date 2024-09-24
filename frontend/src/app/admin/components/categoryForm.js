import { Button } from "@nextui-org/react";

export function CategoryForm() {
  return (
    <>
      <div>
        <span className="text-4xl font-bold text-primary">Category Form</span>
      </div>
      <div className="flex flex-col gap-2">
        <span>Fill your category here</span>
        <input
          className="w-1/3 p-2 rounded-lg text-sm bg-muted font-extralight 
                text-secondary-foreground border-2 border-transparent focus:border-primary focus:outline-none"
          type="text"
          placeholder="Category name"
          name="name"
        ></input>
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
