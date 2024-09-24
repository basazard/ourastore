import { Button } from "@nextui-org/react";

export function AssetForm({ fileName, handleFileChange }) {
  return (
    <>
      <div>
        <span className="text-4xl font-bold text-primary">Asset Form</span>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <span>Fill your image name</span>
            <input
              className="p-2 w-1/3 rounded-lg text-sm bg-muted font-extralight 
                text-secondary-foreground border-2 border-transparent focus:border-primary focus:outline-none"
              type="text"
              placeholder="Image name"
              name="assetName"
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <span>Upload your image</span>
            <div className="flex flex-row items-center w-1/3">
              <div className="cursor-pointer bg-muted px-3 py-2 rounded-l-lg w-1/3 hover:bg-muted/50">
                <label>
                  Choose file
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    name="image"
                    accept="image/*"
                  ></input>
                </label>
              </div>
              <div className="cursor-pointer bg-secondary p-2 rounded-r-lg w-2/3">
                <label className="text-sm font-extralight">{fileName}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Button
          className="bg-primary text-secondary-foreground"
          radius="sm"
          type="submit"
        >
          Add Image
        </Button>
      </div>
    </>
  );
}
