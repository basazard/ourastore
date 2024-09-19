export default function PromoCode() {
  return (
    <div className="text-secondary-foreground bg-card rounded-md">
      <div className="flex flex-row gap-4 items-center">
        <div className="flex flex-row items-center justify-center h-10 w-10 rounded-tl-md bg-primary">
          <span>5</span>
        </div>
        <div>
          <span className="text-sm">Kode Promo</span>
        </div>
      </div>
      <div className="bg-muted rounded-b-md p-4">
        <span>test</span>
      </div>
    </div>
  );
}
