import VisualisationSpace from "../components/DashBoard/VisualisationSpace";
import SideNav from "../layout/SideNav";

export default function DashBoard() {
  return (
    <section className="flex px-10 gap-14">
      <SideNav />
      <VisualisationSpace />
    </section>
  );
}
