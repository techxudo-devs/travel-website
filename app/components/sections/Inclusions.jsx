import { CheckCircle2, XCircle } from "lucide-react";

const InclusionsList = ({ title, items, icon: Icon, color }) => (
    <div>
        <h4 className="text-lg font-bold text-first mb-3">{title}</h4>
        <ul className="space-y-2">
            {items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                    <Icon className={`w-5 h-5 mt-1 flex-shrink-0 ${color}`} />
                    <span className="text-dark">{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

const Inclusions = ({ inclusions, exclusions }) => {
    return (
        <section className="bg-fourth py-16">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
                {/* Included Section */}
                <div>
                    <h3 className="text-3xl font-bold text-second mb-6">Included</h3>
                    <div className="space-y-8">
                        <InclusionsList title="Accommodation" items={inclusions.accommodation} icon={CheckCircle2} color="text-green-600" />
                        <InclusionsList title="Transportation" items={inclusions.transportation} icon={CheckCircle2} color="text-green-600" />
                        <InclusionsList title="Meals & Experiences" items={inclusions.mealsAndExperiences} icon={CheckCircle2} color="text-green-600" />
                        <InclusionsList title="Guided Tours" items={inclusions.guidedTours} icon={CheckCircle2} color="text-green-600" />
                    </div>
                </div>

                {/* Not Included Section */}
                <div>
                    <h3 className="text-3xl font-bold text-dark mb-6">Not Included</h3>
                    <InclusionsList items={exclusions} icon={XCircle} color="text-red-500" />
                </div>
            </div>
        </section>
    );
};

export default Inclusions;