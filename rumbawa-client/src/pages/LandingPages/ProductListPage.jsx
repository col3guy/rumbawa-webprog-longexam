import Button from '../../components/Button.jsx';
import ProductList from '../../components/ProductList.jsx';
import products from '../../assets/product-content.js';

const ProductListPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#1A1953] text-white space-y-12 py-10">

      {/* HEADER */}
      <section className="px-4 sm:px-6 lg:px-8">

        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-300">
          Products
        </p>

        <h1 className="max-w-xl text-3xl font-bold leading-tight sm:text-4xl">
          A collection of everyday campus essentials made simple.
        </h1>

        <p className="mt-5 max-w-lg text-sm leading-7 text-zinc-200 sm:text-base">
          Find useful items for studying, commuting, and daily student life—all organized in a clean grid.
        </p>

        <div className="mt-8">
          <Button to="/">Back Home</Button>
        </div>

      </section>

      {/* PRODUCTS */}
      <section className="mx-4 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md px-4 py-12 sm:px-6 lg:px-8">

        <div className="mb-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-300">
            Featured Products
          </p>

          <h2 className="mt-2 text-2xl font-semibold">
            Product card grid
          </h2>
        </div>

        <ProductList products={products} />

      </section>

    </div>
  );
};

export default ProductListPage;