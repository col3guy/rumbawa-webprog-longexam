import Button from '../../components/Button';
import logo from '../../assets/img/nu-campus.webp';

import toteBagImg from '../../assets/img/nu-totebag.jpg';
import idLaceImg from '../../assets/img/id-lace.webp';
import capImg from '../../assets/img/baseball-cap.webp';
import shirtImg from '../../assets/img/champion-shirt.jpg';

const AboutPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#1A1953] text-white space-y-12 py-10">

      {/* HERO */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          <div className="h-80 w-full overflow-hidden rounded-3xl border border-white/20 bg-white/10">
            <img
              src={logo}
              alt="BulldogEx"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-300">
              About Store
            </p>

            <h1 className="max-w-xl text-3xl font-bold leading-tight sm:text-4xl">
              An online merch store for campus essentials and branded items.
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-7 text-zinc-200 sm:text-base">
              BulldogEx Shop offers simple, practical products with a smooth shopping experience—everything you need, in one place.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/" variant="primary">Back Home</Button>
              <Button to="/products">Open Products</Button>
            </div>
          </div>

        </div>
      </section>

      {/* OVERVIEW (WHITE GRID) */}
      <section className="mx-4 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md px-4 py-12 sm:px-6 lg:px-8">

        <div className="mb-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-300">
            Store Overview
          </p>
          <h2 className="mt-2 text-2xl font-semibold">
            Quick store blocks
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {[
            ["08", "Items"],
            ["05", "Categories"],
            ["10", "Pickup Slots"],
            ["99+", "Orders"],
          ].map(([num, label]) => (
            <div
              key={label}
              className="rounded-3xl bg-white p-6 text-zinc-900"
            >
              <p className="text-2xl font-bold">{num}</p>
              <p className="mt-2 text-[11px] uppercase text-zinc-500">{label}</p>
            </div>
          ))}

        </div>
      </section>

      {/* FLOW (WHITE GRID) */}
      <section className="mx-4 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md px-4 py-12 sm:px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-300">
              Store Flow
            </p>

            <h2 className="mt-2 text-2xl font-semibold">
              How shopping works
            </h2>

            <div className="mt-8 space-y-6">

              {[
                ["Browse Products", "Explore campus essentials by category."],
                ["Check Details", "View price, stock, and product info."],
                ["Order & Pickup", "Simple ordering with scheduled pickup."],
              ].map(([title, desc]) => (
                <article
                  key={title}
                  className="rounded-3xl bg-white p-6 text-zinc-900"
                >
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-3 text-sm text-zinc-600">{desc}</p>
                </article>
              ))}

            </div>
          </div>

          {/* RIGHT (CATEGORY GRID - KEEP ORIGINAL STYLE) */}
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6">

            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-300">
              Category Grid
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">

              {[toteBagImg, idLaceImg, capImg, shirtImg].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="aspect-square w-full rounded-2xl object-cover"
                />
              ))}

            </div>

            <Button to="/products" className="mt-6">
              View Products
            </Button>

          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutPage;