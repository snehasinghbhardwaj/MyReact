const Shimmer = () => {
  // return Array(10).fill(<div className="shimmer-box"></div>);
  return (
    <div className="resturant-list">
      {Array(20)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-box"></div>
        ))}
    </div>
  );
};

export default Shimmer;
