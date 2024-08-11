import { SectionTitle } from '../ui/SectionTitle';
import { ClientLogo } from '../ui/ClientLogo';

export const ClientsSection = () => (
    <section className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
            <SectionTitle
                tag="Clientes Satisfechos"
                title="Confían en nuestro roadmap"
                description="Nuestros clientes han experimentado un aumento en la eficiencia y la calidad de sus proyectos de desarrollo de software."
            />
            <div className="divide-y rounded-lg border md:grid md:grid-cols-3 md:divide-x">
                {[1, 2, 3].map((index) => (
                    <ClientLogo key={index} />
                ))}
            </div>
        </div>
    </section>
);