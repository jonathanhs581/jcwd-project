interface ExperienceCardProps {
    role: string
    company: string
    period: string
    description: string
}

export default function ExperienceCard({ role, company, period, description }: ExperienceCardProps) {
    return (
        <div className="experience-card">
            <h3 className="experience-title">{role}</h3>
            <p className="experience-company">
                {company} | {period}
            </p>
            <p className="experience-desc">{description}</p>
        </div>
    )
}
