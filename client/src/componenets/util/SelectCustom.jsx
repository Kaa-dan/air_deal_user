const CustomMenuRenderer = ({ children, ...other }) => {
    return (
      <div style={{ ...other.styles.menu }}>
        {/* Render your icon here */}
        <i className="your-icon-class" style={{ position: 'absolute', top: '10px', right: '10px' }}></i>
        {children}
        <h1>Nithin</h1>
      </div>
    );
  };

  export default CustomMenuRenderer