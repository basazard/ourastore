"use client";
import { useParams } from "next/navigation";
import AdminNavbar from "../../components/navbar";
import { useEffect, useState } from "react";
import { fetchData, formRequest } from "@/app/utils/fetchData";
import { Button } from "@nextui-org/react";
import { RichTextEditor } from "../../components/richTextEditor";

export default function AdminServiceDetail() {
  const [service, setService] = useState(null);
  const [instructionContent, setInstructionContent] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetchService(id);
  }, []);

  async function fetchService(serviceId) {
    try {
      const service = await fetchData(`services/service/${serviceId}`);
      setService(service.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function editInstruction(e, serviceId) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const form_object = {};
    formData.forEach((value, key) => {
      form_object[key] = value;
    });
    form_object["instruction"] = form_object["instruction"].replaceAll(
      "<p></p>",
      "<br>"
    );
    try {
      await formRequest(
        `services/service/instruction/${serviceId}`,
        form_object,
        () => fetchService(id),
        "PUT"
      );
    } catch (err) {
      console.log(err);
    }
  }

  if (!service) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <AdminNavbar>
        <div className="flex flex-col gap-4 text-secondary-foreground">
          <span className="text-primary text-4xl font-bold">
            {service.name} - {service.owner}
          </span>
          <span className="text-2xl font-bold">Instruction</span>
          <div dangerouslySetInnerHTML={{ __html: service.instruction }} />
          <form
            onSubmit={(e) => editInstruction(e, service.id)}
            className="flex flex-col gap-4 items-start"
          >
            <span className="text-2xl font-bold">
              Edit Your Instruction here
            </span>
            <RichTextEditor onContentChange={setInstructionContent} />
            <textarea
              name="instruction"
              value={instructionContent}
              hidden
              readOnly
            />
            <Button
              type="submit"
              radius="sm"
              size="md"
              className="bg-primary text-secondary-foreground"
            >
              Edit
            </Button>
          </form>
        </div>
      </AdminNavbar>
    </>
  );
}
