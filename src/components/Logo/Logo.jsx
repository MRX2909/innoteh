const Logo = ({ size }) => {
  return (
    <div className="flex flex-row items-center align-items-center">
      <img src="logo.svg" alt="Sanly Binýat" width={size} draggable="false" />
      <span>Sanly Binýat</span>
    </div>
  );
};

export default Logo;
