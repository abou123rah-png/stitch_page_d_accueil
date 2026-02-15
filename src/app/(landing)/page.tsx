import Link from 'next/link';
import { BookOpen, Zap, Target, Layers, ArrowRight, Play, Quote, ChevronRight } from 'lucide-react';

export default function HomePage() {
    return (
        <div className="home-page overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 pt-20">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

                <div className="container mx-auto px-4 relative z-10 w-full max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="space-y-8 text-center lg:text-left animate-fade-in-up">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold text-sm border border-blue-100 dark:border-blue-800">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                Programme National Sénégalais
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                                Physique <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Seconde S</span>
                                <span className="block text-2xl lg:text-3xl mt-4 font-medium text-slate-500 dark:text-slate-400">
                                    avec Mr. Doro Cissé
                                </span>
                            </h1>

                            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                Bienvenue sur l'espace numérique d'excellence du <strong>Lycée de Thiaroye</strong>.
                                Maîtrisez les concepts fondamentaux, accédez aux cours structurés et réussissez votre année avec une pédagogie innovante.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                                <Link href="/chapters" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all bg-blue-600 rounded-xl hover:bg-blue-700 hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/20 group">
                                    Commencer maintenant
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link href="#features" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-700 dark:text-slate-200 transition-all bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300">
                                    Découvrir le programme
                                </Link>
                            </div>

                            <div className="flex items-center gap-4 justify-center lg:justify-start pt-8 text-sm font-medium text-slate-500 dark:text-slate-400">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs overflow-hidden">
                                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 20}`} alt="Student" />
                                        </div>
                                    ))}
                                </div>
                                <p>Rejoignez plus de <span className="text-blue-600 dark:text-blue-400 font-bold">500+ élèves</span> connectés.</p>
                            </div>
                        </div>

                        {/* Hero Visual/Animation */}
                        <div className="relative hidden lg:block h-[600px] w-full">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl animate-pulse-slow"></div>
                            {/* Reusing existing atom animation structure but modernized */}
                            <div className="scientific-illustration w-full h-full flex items-center justify-center scale-125">
                                <div className="atom">
                                    <div className="nucleus"></div>
                                    <div className="electron e1"></div>
                                    <div className="electron e2"></div>
                                    <div className="electron e3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features / Stats Section */}
            <section id="features" className="py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { label: 'Modules Complets', value: '14+' },
                            { label: 'Exercices Corrigés', value: '500+' },
                            { label: 'Taux de Réussite', value: '98%' },
                            { label: 'Support 24/7', value: 'IA' },
                        ].map((stat, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-center hover:border-blue-200 transition-colors cursor-default">
                                <p className="text-4xl lg:text-5xl font-black text-blue-600 dark:text-blue-500 mb-2">{stat.value}</p>
                                <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Curriculum Preview */}
            <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">Programme Officiel</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            Un contenu rigoureusement aligné avec les directives du Ministère de l'Éducation Nationale pour la classe de Seconde S.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="group bg-white dark:bg-slate-950 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 text-2xl">
                                <Target />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">Mécanique</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">Étude du mouvement, des forces, du poids et de la masse. Les bases de la dynamique.</p>
                            <Link href="/chapters" className="inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all">
                                Explorer le module <ChevronRight size={16} className="ml-1" />
                            </Link>
                        </div>

                        <div className="group bg-white dark:bg-slate-950 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-6 text-2xl">
                                <Zap />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-amber-600 transition-colors">Électricité</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">Courant électrique, tension, intensité et étude des dipôles passifs et actifs.</p>
                            <Link href="/chapters" className="inline-flex items-center text-amber-600 font-semibold hover:gap-2 transition-all">
                                Explorer le module <ChevronRight size={16} className="ml-1" />
                            </Link>
                        </div>

                        <div className="group bg-white dark:bg-slate-950 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6 text-2xl">
                                <Layers />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-purple-600 transition-colors">Chimie</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">Structure de la matière, atomes, ions, molécules et réactions chimiques.</p>
                            <Link href="/chapters" className="inline-flex items-center text-purple-600 font-semibold hover:gap-2 transition-all">
                                Explorer le module <ChevronRight size={16} className="ml-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-24 bg-blue-600 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

                <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                    <Quote className="mx-auto w-16 h-16 text-white/30 mb-8" />
                    <h2 className="text-2xl md:text-4xl font-serif italic text-white leading-relaxed mb-10">
                        &ldquo; La physique n'est pas seulement une matière scolaire, c'est la clé pour comprendre l'univers. Au Lycée de Thiaroye, nous formons les scientifiques de demain. &rdquo;
                    </h2>
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white/50 mb-4 flex items-center justify-center text-2xl">👨‍🏫</div>
                        <p className="text-white font-bold text-lg">Mr. Doro Cissé</p>
                        <p className="text-blue-100">Professeur Principal, Lycée de Thiaroye</p>
                    </div>
                </div>
            </section>

            {/* CTA Box */}
            <section className="py-24 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="bg-slate-900 dark:bg-slate-900 rounded-[2rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Prêt à exceller en Sciences ?</h2>
                            <p className="text-slate-400 text-xl mb-10 max-w-2xl mx-auto">Accédez à tous les cours, exercices et devoirs corrigés dès maintenant.</p>
                            <Link href="/chapters" className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-slate-900 bg-white rounded-xl hover:bg-slate-50 transition-all hover:scale-105 shadow-xl">
                                Accéder à la plateforme
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Basic Footer */}
            <footer className="py-12 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 text-sm">
                <p>© {new Date().getFullYear()} Physique Seconde S - Lycée de Thiaroye. Tous droits réservés.</p>
                <p className="mt-2 text-slate-400">Design pédagogique par Mr. Doro Cissé.</p>
            </footer>
        </div>
    );
}
