export const HeroSection = () => (
    <main className="flex-1 flex items-center justify-center py-12 md:py-24 lg:py-32">
        <div className="container flex flex-col items-center px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                        Roadmap de Desarrollo de Software
                    </h1>
                    <p className="max-w-[600px] text-gray-700 md:text-xl">
                        Explora el proceso de creación de software a través de nuestro roadmap detallado.
                    </p>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="w-[2px] bg-muted-foreground/20 h-full"></div>
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-between">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-3 h-3 bg-primary rounded-full ml-4"></div>
                            ))}
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-between ml-12">
                            <div className="grid gap-4 text-sm md:grid-cols-1 md:gap-6 lg:grid-cols-1 lg:gap-8">
                                {['Análisis de Requisitos', 'Diseño de la Arquitectura', 'Desarrollo del Software', 'Pruebas y Validación', 'Implementación y Despliegue'].map((step, index) => (
                                    <div key={index} className="grid gap-1">
                                        <div className="font-medium">{step}</div>
                                        <div className="text-muted-foreground">
                                            {index === 0 && 'Entender las necesidades del cliente y definir los requisitos del proyecto.'}
                                            {index === 1 && 'Planificar la estructura y el flujo del sistema.'}
                                            {index === 2 && 'Implementar las funcionalidades y características del software.'}
                                            {index === 3 && 'Asegurar la calidad y el correcto funcionamiento del software.'}
                                            {index === 4 && 'Poner el software en producción y entregarlo al cliente.'}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
);