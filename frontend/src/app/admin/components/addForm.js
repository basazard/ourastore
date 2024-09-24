export function AddForm({ handler, formContent: FormContent, ...props }) {
  return (
    <form onSubmit={handler} className="flex flex-col gap-4">
      <FormContent {...props} />
    </form>
  );
}
