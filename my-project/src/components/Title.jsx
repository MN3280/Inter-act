const Title = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
          fontSize: "30px",
          fontWeight: "bold",
          marginTop: "5px",
        }}
      >
        Marketing Dashboard
      </div>
      <div style={{ marginTop: "10px" }}>
        <span
          style={{
            color: "#888",
            fontSize: "14px",
            fontWeight: "medium",
            marginRight: "5px",
          }}
        >
          Home /
        </span>
        <span
          style={{
            color: "#0BB885",
            fontSize: "14px",
            fontWeight: "medium",
          }}
        >
          Dashboard
        </span>
      </div>
    </>
  );
};

export default Title;
