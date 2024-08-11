export const CallToActionSection = () => (
    <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2 sm:grid-cols-1">
                <div className="space-y-4">
                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Escalabilidad</div>
                    <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                        Crece sin problemas
                    </h2>
                    <a
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                    Comienza Ahora
                </a>
            </div>
            <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Seguridad</div>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                    Nuestra infraestructura totalmente administrada está diseñada para escalar dinámicamente con tu tráfico.
                </p>
            </div>
        </div>
    </div>
</section>
);