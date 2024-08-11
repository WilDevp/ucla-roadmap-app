import { SectionTitle } from '../ui/SectionTitle';
import { BenefitCard } from '../ui/BenefitCard';

const benefits = [
    { title: 'Mejora la Colaboración', description: 'Mantén a tu equipo alineado y en la misma página a lo largo del proceso de desarrollo.' },
    { title: 'Aumenta la Productividad', description: 'Enfócate en entregar valor al cliente sin distracciones.' },
    { title: 'Asegura la Calidad', description: 'Identifica y resuelve problemas a tiempo para entregar un producto de alta calidad.' },
];

export const BenefitsSection = () => (
    <section className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32">
        <div className="container flex flex-col items-center px-4 md:px-6">
            <SectionTitle
                tag="Beneficios"
                title="Optimiza tu proceso de desarrollo"
                description="Nuestro roadmap te ayuda a mantener tu equipo enfocado y productivo en cada etapa del proceso de desarrollo de software."
            />
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12 md:grid-cols-1 sm:grid-cols-1">
                <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--J8A6TDrm--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xz2zdrpw7adipj6jqrio.jpeg"
                    width={650}
                    height={365}
                    alt="Benefits"
                    className="aspect-video overflow-hidden rounded-xl object-cover w-full md:w-auto"
                />
                <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                        <BenefitCard key={index} {...benefit} />
                    ))}
                </div>
            </div>
        </div>
    </section>
);