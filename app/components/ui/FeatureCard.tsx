interface FeatureCardProps {
    title: string;
    description: string;
}

export const FeatureCard = ({ title, description }: FeatureCardProps) => (
    <div className="grid gap-1">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
    </div>
);