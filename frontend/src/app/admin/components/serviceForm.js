"use client";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import { RichTextEditor } from "./richTextEditor";

export function ServiceForm({ categories, assets }) {
  const [instructionContent, setInstructionContent] = useState("");
  return (
    <>
      <div>
        <span className="text-4xl font-bold text-primary">Service Form</span>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <span>Fill a service name</span>
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
            <span>Fill a service owner</span>
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
            <span>Pick category</span>
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
          <div className="flex flex-col gap-2">
            <span>Pick main assets</span>
            <select
              className="w-full p-2 rounded-lg text-sm bg-muted border-2 
              border-transparent focus:border-primary focus:outline-none"
              name="imageName"
              required
            >
              {assets.map((asset, index) => (
                <>
                  <option value={asset.assetCodedName} key={index}>
                    {asset.assetName}
                  </option>
                </>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <span>Create your service instruction</span>
            <RichTextEditor onContentChange={setInstructionContent} />
            <textarea
              name="instruction"
              value={instructionContent}
              hidden
              readOnly
            />
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
