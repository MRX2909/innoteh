const Logo = ({ size }) => {
  return (
    <div className="flex flex-row items-center">
      <img src="logo.svg" alt="Sanly Binýat" width={size} />
      <span>Sanly Binýat</span>
    </div>
  );
};

export default Logo;
