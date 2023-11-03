interface myButtonProps {
  text: string;
}
const Button: React.FC<myButtonProps> = (arg) => {
  return (
    <>
      <button className="button">{arg.text}</button>
    </>
  );
};
export default Button;
