import { BedDouble, Map, Home, Plane } from 'lucide-react';

const StatCard = ({ icon, value, label }) => (
    <div className="flex items-center gap-4 p-4 bg-white rounded shadow-sm">
        <div className="bg-fourth p-3 rounded-full text-second">
            {icon}
        </div>
        <div>
            <p className="text-base font-bold text-first">{value}</p>
            <p className="text-sm text-dark">{label}</p>
        </div>
    </div>
);

const TourOverviewBar = ({ duration, visitingLocations, inclusions }) => {
    // API response me accommodation aur transports ki sankhya nahi hai, isliye static value use ki hai.
    // Aap chahein to API response me ye fields add kar sakte hain.
    const accommodationCount = inclusions?.accommodation.length || 5;
    const transportsCount = inclusions?.transportation.length || 5;

    return (
        <section className="container mx-auto px-4 -mt-12 relative z-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard icon={<BedDouble />} value={`${duration.nights} Nights`} label="Duration" />
                <StatCard icon={<Map />} value={`${visitingLocations.length} Destinations`} label="Visiting" />
                <StatCard icon={<Home />} value={accommodationCount} label="Accommodation" />
                <StatCard icon={<Plane />} value={transportsCount} label="Transports" />
            </div>
        </section>
    );
};

export default TourOverviewBar;