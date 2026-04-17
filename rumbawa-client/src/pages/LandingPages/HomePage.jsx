import Button from '../../components/Button';
import banner from '../../assets/img/nu_bulldogex_banner.jpg';

import essentialsImg from '../../assets/img/baseball-cap.webp';
import suppliesImg from '../../assets/img/id-lace.webp';
import apparelImg from '../../assets/img/nu-totebag.jpg';

const HomePage = () => {
    return (
        <div className="min-h-screen w-full bg-[#1A1953] text-white">

            {/* HERO */}
            <section className="relative min-h-[28rem] overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
                <img
                    src={banner}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />

                <div className="relative z-10 flex min-h-[22rem] items-start justify-end text-right">
                    <div className="max-w-xl">
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-300">
                            Campus Marketplace
                        </p>

                        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
                            Welcome to BulldogEx Shop
                        </h1>

                        <p className="mt-4 text-sm leading-7 text-zinc-200">
                            Explore campus uniforms, student essentials, and school merch in one quick storefront.
                        </p>

                        <div className="mt-6 flex flex-wrap justify-end gap-3">
                            <Button to="/products">Shop Now</Button>
                            <Button to="/about" variant="primary">About Store</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <div className="space-y-10 px-4 py-10 sm:px-6 lg:px-8">

                {/* OVERVIEW */}
                <section className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md p-6">

                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-300">
                        Store Overview
                    </p>

                    <h2 className="mt-2 text-2xl font-semibold">
                        Quick shopping blocks
                    </h2>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                        {[
                            ["08", "Products"],
                            ["05", "Categories"],
                            ["99+", "Orders"],
                            ["10", "Pickup Slots"],
                        ].map(([num, label]) => (
                            <div
                                key={label}
                                className="rounded-3xl border border-white/10 bg-white p-5 text-zinc-900"
                            >
                                <p className="text-2xl font-bold">{num}</p>
                                <p className="mt-2 text-[11px] uppercase text-zinc-500">{label}</p>
                            </div>
                        ))}

                    </div>
                </section>

                {/* PRODUCTS */}
                <section className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md p-6">

                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-300">
                        Shop Sections
                    </p>

                    <h2 className="mt-2 text-2xl font-semibold">
                        Simple store cards
                    </h2>

                    <div className="mt-8 grid gap-6 md:grid-cols-3">

                        <article className="rounded-3xl border border-white/10 bg-white p-4 text-zinc-900">
                            <img src={essentialsImg} className="h-40 w-full rounded-2xl object-cover" />
                            <h3 className="mt-4 text-lg font-semibold">NU Cap</h3>
                            <p className="mt-2 text-sm text-zinc-600">
                                Everyday campus cap with clean NU branding.
                            </p>
                        </article>

                        <article className="rounded-3xl border border-white/10 bg-white p-4 text-zinc-900">
                            <img src={suppliesImg} className="h-40 w-full rounded-2xl object-cover" />
                            <h3 className="mt-4 text-lg font-semibold">NU ID Lace</h3>
                            <p className="mt-2 text-sm text-zinc-600">
                                Durable ID lace for daily student use.
                            </p>
                        </article>

                        <article className="rounded-3xl border border-white/10 bg-white p-4 text-zinc-900">
                            <img src={apparelImg} className="h-40 w-full rounded-2xl object-cover" />
                            <h3 className="mt-4 text-lg font-semibold">NU Tote Bag</h3>
                            <p className="mt-2 text-sm text-zinc-600">
                                Spacious tote for books and essentials.
                            </p>
                        </article>

                    </div>
                </section>

            </div>
        </div>
    );
};

export default HomePage;