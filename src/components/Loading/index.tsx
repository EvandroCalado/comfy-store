export const Loading = () => {
  return (
    <div
      className="flex h-screen items-center justify-center"
      data-testid="loading"
    >
      <span className="loading loading-ring loading-lg text-primary"></span>
    </div>
  );
};
