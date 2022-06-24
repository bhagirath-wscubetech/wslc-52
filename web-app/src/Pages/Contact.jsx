function Home() {
  const imageStyle = {
    width: "100%"
  }
  return (
    <>
      <h1 className="text-center">Contact Us</h1>
      <div className="container mt-2">
        <div className="row">
          <div className="col-4">
            <img src="https://picsum.photos/200/300?random=1" alt="" style={imageStyle} />
          </div>
          <div className="col-4">
            <img src="https://picsum.photos/200/300?random=2" alt="" style={imageStyle} />
          </div>
          <div className="col-4">
            <img src="https://picsum.photos/200/300?random=3" alt="" style={imageStyle} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;