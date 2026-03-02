// src/pages/HomeFastPick.tsx
import React from "react";

const HomeFastPick: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col">
            {/* Top bar */}
            <header className="flex items-center justify-between px-4 py-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-lime-400 text-slate-950 font-bold">
            B
          </span>
                    <div className="flex flex-col leading-tight">
                        <span className="text-sm font-semibold">Bikes.es</span>
                        <span className="text-[10px] text-slate-400">Bicicletas, e‑bikes, accesorios</span>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        aria-label="Search"
                        className="h-9 w-9 flex items-center justify-center rounded-full bg-slate-900 border border-slate-700"
                    >
                        <span className="i-mdi-magnify text-lg" />
                    </button>
                    <button
                        type="button"
                        aria-label="Cart"
                        className="relative h-9 w-9 flex items-center justify-center rounded-full bg-slate-900 border border-slate-700"
                    >
                        <span className="i-mdi-cart-outline text-lg" />
                        <span className="absolute -top-1 -right-1 h-4 min-w-[16px] rounded-full bg-lime-400 text-[10px] text-slate-950 flex items-center justify-center">
              2
            </span>
                    </button>
                    <button
                        type="button"
                        aria-label="Menu"
                        className="h-9 w-9 flex items-center justify-center rounded-full bg-slate-900 border border-slate-700"
                    >
                        <span className="i-mdi-menu text-xl" />
                    </button>
                </div>
            </header>

            {/* Hero */}
            <main className="flex-1 px-4 pt-4 pb-6">
                <section className="mb-5">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-lime-400 mb-1">
                        Envío a toda España
                    </p>
                    <h1 className="text-2xl font-semibold mb-2">
                        Велосипеды и e‑bikes с доставкой <br /> по всей Испании
                    </h1>
                    <p className="text-sm text-slate-400 mb-4">
                        Подберите городской, горный или электро‑велосипед под ваш стиль
                        езды за пару кликов.
                    </p>

                    <div className="flex gap-2">
                        <button
                            type="button"
                            className="flex-1 h-11 rounded-full bg-lime-400 text-slate-950 text-sm font-semibold"
                        >
                            Купить велосипед
                        </button>
                        <button
                            type="button"
                            className="h-11 px-4 rounded-full border border-slate-700 text-sm"
                        >
                            Аксессуары
                        </button>
                    </div>
                </section>

                {/* Quick filters */}
                <section className="mb-5">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-sm font-semibold">Быстрый подбор</h2>
                        <button className="text-[11px] text-slate-400 underline">
                            Все фильтры
                        </button>
                    </div>
                    <div className="flex gap-2 overflow-x-auto no-scrollbar">
                        {[
                            "Электровелосипеды",
                            "Городские",
                            "Горные",
                            "Детские",
                            "Треккинговые",
                        ].map((tag) => (
                            <button
                                key={tag}
                                className="whitespace-nowrap px-3 py-2 rounded-full bg-slate-900 border border-slate-700 text-[12px]"
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Popular models */}
                <section className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-sm font-semibold">Популярные модели</h2>
                        <button className="text-[11px] text-slate-400 underline">
                            Смотреть все
                        </button>
                    </div>

                    <div className="space-y-3">
                        {[
                            {
                                name: "KROSS Trans Hybrid 5.0",
                                tag: "электро",
                                price: "2 499 €",
                            },
                            {
                                name: "KROSS City Urban 2.0",
                                tag: "городской",
                                price: "749 €",
                            },
                            {
                                name: "KROSS Level 6.0",
                                tag: "горный",
                                price: "1 199 €",
                            },
                        ].map((bike) => (
                            <article
                                key={bike.name}
                                className="flex gap-3 p-3 rounded-2xl bg-slate-900 border border-slate-800"
                            >
                                <div className="h-20 w-24 rounded-xl bg-slate-800 flex items-center justify-center text-[11px] text-slate-500">
                                    Фото
                                </div>
                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="inline-flex items-center gap-2 mb-1">
                      <span className="text-[11px] uppercase tracking-[0.15em] text-slate-400">
                        KROSS
                      </span>
                                            <span className="text-[10px] px-2 py-[2px] rounded-full bg-slate-800 text-lime-300">
                        {bike.tag}
                      </span>
                                        </div>
                                        <h3 className="text-[13px] font-medium leading-snug">
                                            {bike.name}
                                        </h3>
                                    </div>
                                    <div className="flex items-end justify-between mt-2">
                                        <div className="flex flex-col">
                                            <span className="text-xs text-slate-400">от</span>
                                            <span className="text-base font-semibold">
                        {bike.price}
                      </span>
                                        </div>
                                        <button
                                            type="button"
                                            className="h-9 px-4 rounded-full bg-lime-400 text-slate-950 text-xs font-semibold"
                                        >
                                            В корзину
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Trust badges */}
                <section className="mt-3">
                    <div className="grid grid-cols-3 gap-2 text-[10px] text-slate-400">
                        <div>
              <span className="block font-semibold text-xs text-white">
                2–4 дня
              </span>
                            <span>Доставка по всей Испании</span>
                        </div>
                        <div>
              <span className="block font-semibold text-xs text-white">
                Visa
              </span>
                            <span>Безопасная онлайн‑оплата</span>
                        </div>
                        <div>
              <span className="block font-semibold text-xs text-white">
                Сервис
              </span>
                            <span>Проверенные бренды и сборка</span>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HomeFastPick;
