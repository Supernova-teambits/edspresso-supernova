
const Header = () => {
  const backgroundColor = '#373a47';
  const color = '#ffffff';
  return (
      <div style = {{ backgroundColor: backgroundColor, color: color}}>
        <img src="logo" alt="Logo" />
        <h2>Edspresso</h2>
      </div>
    );
};

export default Header;
