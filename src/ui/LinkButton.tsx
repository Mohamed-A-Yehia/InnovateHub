interface LinkButtonProps {
  children: string;
}

function LinkButton({ children }: LinkButtonProps) {
  return (
    <button className="bg-secondary cursor-pointer rounded-2xl p-3 tracking-wider">
      {children}
    </button>
  );
}

export default LinkButton;
