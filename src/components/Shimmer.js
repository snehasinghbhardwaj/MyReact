const Shimmer = () => {
  // return Array(10).fill(<div className="shimmer-box"></div>);
  return (
    <div className="resturant-list">
      {Array(10)
        .fill("")
        .map((e) => (
          <div className="shimmer-box"></div>
        ))}
    </div>
  );
};

export default Shimmer;
