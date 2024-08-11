import { SectionTitle } from '../ui/SectionTitle';
import { RoadmapItem } from '../ui/RoadmapItem';

const roadmapItems = [
    { title: 'Análisis de Requisitos', description: 'Entender las necesidades del cliente y definir los requisitos del proyecto.' },
    { title: 'Diseño de la Arquitectura', description: 'Planificar la estructura y el flujo del sistema.' },
    { title: 'Desarrollo del Software', description: 'Implementar las funcionalidades y características del software.' },
    { title: 'Pruebas y Validación', description: 'Asegurar la calidad y el correcto funcionamiento del software.' },
    { title: 'Implementación y Despliegue', description: 'Poner el software en producción y entregarlo al cliente.' },
];

export const RoadmapSection = () => (
    <section className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
            <SectionTitle
                tag="Características Clave"
                title="Acelera tu desarrollo de software"
                description="Nuestro roadmap te guía a través de cada etapa del proceso de desarrollo, asegurando que tu equipo se mantenga enfocado y productivo."
            />
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12 md:grid-cols-1 sm:grid-cols-1">
                <div className="space-y-4">
                    {roadmapItems.map((item, index) => (
                        <RoadmapItem key={index} {...item} />
                    ))}
                </div>
                <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--J8A6TDrm--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xz2zdrpw7adipj6jqrio.jpeg"
                    width={650}
                    height={365}
                    alt="Roadmap"
                    className="aspect-video overflow-hidden rounded-xl object-cover w-full md:w-auto"
                />
            </div>
        </div>
    </section>
);