const Logo = ({ size }) => {
  return (
    <div className="flex flex-row items-center align-items-center">
      <img src="logo_ak.png" alt="Sanly Binýat" width={size} draggable="false" />
      <span>InnoTeh</span>
    </div>
  );
};

export default Logo;
