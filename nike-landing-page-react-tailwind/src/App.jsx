import Nav from "./components/Nav";
import {
  Hero,
  PopularProducts,
  SpecialOffer,
  Subscribe,
  SuperQuality,
  CustomerReviews,
  Footer,
  Services,
} from "./sections";

export default function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <div className="section bg-black padding-x padding-t pb-8">
        <Footer />
      </div>
    </main>
  );
}
