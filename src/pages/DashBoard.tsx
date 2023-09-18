import SideNav from "../components/DashBoard/SideNav";
import VisualisationSpace from "../components/DashBoard/VisualisationSpace";

export default function DashBoard() {
  return (
    <section className="flex px-10 gap-14">
      <SideNav />
      <VisualisationSpace />
    </section>
  );
}
