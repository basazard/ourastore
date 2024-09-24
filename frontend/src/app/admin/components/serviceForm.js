import { Button } from "@nextui-org/react";

export function ServiceForm({ categories }) {
  return (
    <>
      <div>
        <span className="text-4xl font-bold text-primary">Service Form</span>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col gap-2">
            <span bg>Fill a service name</span>
            <input
              type="text"
              placeholder="Service name"
              required
              className="w-full p-2 rounded-lg text-sm
                 bg-muted font-extralight text-secondary-foreground
                  border-2 border-transparent focus:border-primary focus:outline-none"
              name="serviceName"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <span bg>Fill a service owner</span>
            <input
              type="text"
              placeholder="Service owner"
              required
              className="w-full p-2 rounded-lg text-sm
                 bg-muted font-extralight text-secondary-foreground
                  border-2 border-transparent focus:border-primary focus:outline-none"
              name="serviceOwner"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <span bg>Pick category</span>
            <select
              className="w-full p-2 rounded-lg text-sm bg-muted border-2 
              border-transparent focus:border-primary focus:outline-none"
              name="catgId"
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
        </div>
      </div>
      <div className="flex flex-col items-start">
        <Button
          type="submit"
          radius="sm"
          className="bg-primary text-secondary-foreground"
        >
          Add Service
        </Button>
      </div>
    </>
  );
}
