import { SectionTitle } from '../ui/SectionTitle';
import { FeatureCard } from '../ui/FeatureCard';

const features = [
    {
        title: 'Visualización Interactiva',
        description: 'Explore nuestro roadmap de desarrollo de software de forma interactiva y visual.'
    },
    {
        title: 'Seguimiento de Progreso',
        description: 'Mantenga un registro claro del avance de su proyecto en cada etapa del desarrollo.'
    },
    {
        title: 'Colaboración en Equipo',
        description: 'Facilite la comunicación y colaboración entre los miembros del equipo en cada fase.'
    },
    {
        title: 'Gestión de Recursos',
        description: 'Optimice la asignación de recursos en cada etapa del proceso de desarrollo.'
    },
    {
        title: 'Integración de Herramientas',
        description: 'Conecte sus herramientas favoritas para un flujo de trabajo sin interrupciones.'
    },
];

export const FeaturesSection = () => (
    <section className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
            <SectionTitle
                tag="Características Únicas"
                title="Potencia tu desarrollo con nuestras funcionalidades"
                description="Descubre cómo nuestras características especializadas pueden mejorar tu proceso de desarrollo de software."
            />
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </div>
        </div>
    </section>
);