// import Topbar from "./scenes/global/Topbar";
// import Sidebar from "./scenes/global/sidebar";
import { Link } from "react-router-dom";
// import Dashboard from "./scenes/dashboard/dashbard";
// import Hero from "./scenes/hero/hero";





const App = () => {
  return (


    <div>
      <Link to="/dashboard">Dashboard</Link>
      Heyy
    </div>
    // <div className="app">
    //   <div className="sidebar">
    //     <Sidebar />
    //   </div>
    //   <div className="content">
    //     <Topbar />
    //   </div>
    //   {/* <Routes>
    //     <Route path="/" element= {<Topbar />} />
    //   </Routes> */}
    // </div>

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Hero />}>
    //       <Route index element={<Topbar />} />
    //       <Route path="dashboard" element={<Dashboard />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Hero />}>
    //       <Route index element={<Topbar />} />
    //       <Route path="dashboard" element={<Dashboard />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
