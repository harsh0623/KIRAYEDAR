import './App.css';


function App() {
  return (
    <>
      <div className='col-2'>
        <nav
          className="navbar bg-primary"
          style={{ width: "100%", height: "100vh", position: "relative" }}
        >
          <div className="container-fluid">
            <img
              src="https://st.depositphotos.com/2808409/3926/v/380/depositphotos_39264255-stock-illustration-flat-house-icon-background.jpg?forcejpeg=true"
              style={{
                width: "70px",
                position: "absolute",
                top: "32px",
                left: "70px"
              }}
            />
            <span
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "25px",
                position: "absolute",
                top: "100px",
                left: "30px"
              }}
            >
              KIRAYAEDAR
            </span>
          </div>
        </nav>
      </div>
    </>
  )
};

export default App;
