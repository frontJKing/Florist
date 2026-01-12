import "@/styles/animations.css";

export default function WhyUs() {
  return (
    <section className=" bg-emerald-950 ">
      <div className="container mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-white  text-center mb-12">
          Dlaczego my?
        </h2>
        <div className="grid grid-cols-1  md:grid-cols-3 gap-8">
          <div className="text-center text-white">
            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-3xl mb-4">
              💑
            </div>
            <h3 className="text-xl font-extrabold">Osobiste podejście</h3>
            <p className="mt-3 ">
              Każdy ślub to inna historia. Poznajemy waszą wizję i ją
              realizujemy.
            </p>
          </div>
          <div className="text-center text-white">
            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-3xl mb-4">
              🌹
            </div>
            <h3 className="text-xl font-extrabold">Premium kwiaty</h3>
            <p className="mt-3 text-white">
              Świeżość i jakość na najwyższym poziomie. Współpraca z hodowcami i
              importem.
            </p>
          </div>
          <div className="text-center text-white">
            <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-3xl mb-4">
              ✨
            </div>
            <h3 className="text-xl font-extrabold">Każdy detal liczy</h3>
            <p className="mt-3 ">
              Od pomiaru stołów po ostatni kwiat — profesjonalizm w każdym
              aspekcie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
