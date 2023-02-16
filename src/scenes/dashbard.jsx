// import Sidebar from "../global/sidebar"
// import Topbar from "../global/Topbar"
import styles from "./dashboard.module.css"
import Sidebar from "./sidebar"
import Topbar from "./Topbar"


const Dashboard = () => {
    return(
        <div className={styles.app}>
            <div className={styles.sidebar}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                <Topbar />
            </div>
            {/* <Routes>
                <Route path="/" element= {<Topbar />} />
            </Routes> */}
        </div>

    )
}

export default Dashboard