import Form from "../components/Auth/Form";
import SideBanner from "../components/Auth/SideBanner";
import useIsMobile from "../hooks/useIsMobile";

export default function Auth() {
  const isMobile = useIsMobile()
  return (
    <section className="flex items-start">
      {!isMobile && <SideBanner />}
      <div className="flex w-[100%] min-h-screen items-center justify-center">
        <Form />
      </div>
    </section>
  );
}
