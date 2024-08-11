interface BenefitCardProps {
    title: string;
    description: string;
}

export const BenefitCard = ({ title, description }: BenefitCardProps) => (
    <div className="grid gap-1">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
    </div>
);