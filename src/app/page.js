import "./page.css";
import Sidebar from "@/components/sidebar/Sidebar";
import UserDetails from "@/components/userDetails/UserDetails";

export default function Home() {
  return (
    <main className="home-page">
      <Sidebar />
      <div className="main-content">
        <UserDetails />
      </div>
    </main>
  );
}
