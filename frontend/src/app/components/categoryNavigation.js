export function CategoryNavigation({
  category,
  index,
  navHandler,
  categoryState,
}) {
  return (
    <>
      <button
        className={`bg-muted  p-2 sm:px-3 sm:py-2 rounded-lg hover:bg-primary duration-500 
            ${
              categoryState === index ? "bg-primary" : "bg-muted"
            } flex items-center`}
        onClick={navHandler}
      >
        <span className="text-secondary-foreground text-[8px] sm:text-sm whitespace-nowrap">
          {category.name}
        </span>
      </button>
    </>
  );
}
