import Image from "next/image";
import Link from "next/link";

const blogs = {
    "solo-travel": {
        title: "Why Solo Travel Can Be the Most Empowering Experience of Your Life",
        images: ["/newBlog1.jpg", "/soloBlog1.jpg", "/soloBlog2.jpg"],
        content: `
If you’re here, it’s probably because deep down, you’re ready to take that leap. You’ve been dreaming of that solo adventure, craving new experiences, freedom, and growth, but maybe you're still looking for that little push or someone to reassure you that you’ve got this.

Ready? Let's do this together! 🌍✨

Independence and Growth:
Solo travel is one of the best ways to discover how independent and strong you truly are. When you’re out there on your own, every decision, from what to eat to how to explore a new city is entirely up to you.
It’s not about being forced to figure things out. It’s about realizing that you can.

Building Confidence & Breaking Limiting Beliefs:
Solo travel gives you confidence like nothing else. For me, it was about breaking free from all the limiting beliefs I had carried for so long. I used to think people would judge me if I went out alone. I found a confidence in myself I never thought existed. Now I feel strong, confident, outgoing, and empowered. Something I never imagined I could feel about myself before my first solo trip.
“Confidence isn’t about being fearless. it’s about taking that first step, even when you’re scared.”

Connection & Human Interaction:
One of the biggest myths about solo travel is that you’ll feel lonely. But in my experience, it’s often the complete opposite. When you travel alone, something inside you opens up. You become more approachable, more curious, more present. And that energy? People feel it.

Overcoming Challenges & Loneliness:
Of course, solo travel isn’t always easy.
There will be moments when things go wrong. A missed flight, a language barrier, or that unexpected wave of omesickness. These are the parts that don’t get talked about as much, but they’re part of the journey too. And the key is learning how to face those moments with grace and a little patience. Solo travel doesn’t mean everything will be  perfect. But it does give you space to grow through the challenges. To listen to yourself more deeply. To comfort yourself. To become your own safe place. And every time you make it through one of those low moments, you come out stronger. You build emotional resilience. You learn that you can handle things and that joy always finds its way back in.

Joys of Freedom:
There’s a kind of freedom you only truly understand once you’ve traveled solo. It’s not just about being alone. It’s about doing exactly what you want, when you want, a loving that feeling.

Lessons Learned:
Waiting around for the right moment or the right company can mean missing out on experiences that might change you forever. Through all the places I’ve explored, the people I’ve met, and the quiet moments I’ve spent with myself, solo travel has taught me that I am so much stronger, braver, and more capable than I ever gave myself credit for.

A Message to the Girl Who’s Waiting for a Sign:
I truly believe that everyone should experience solo travel at least once in her life. Not just to see the world, but to discover who you really are when no one else is around to tell her who to be. And trust me, we all think we know, but if you never traveled solo. I can assure you, you don´t know yet.

If you’ve been waiting for the perfect time, or for someone to join you…
If you’ve been thinking about it but keep holding yourself back…
If you've been hoping for a little push or a sign to finally go for it.
This is it.
You’re ready.
Even if you're scared.
Even if you’re still doubting yourself.
Even if the only thing you know is that you want more.
Take the leap.
Because on the other side of that fear… is the strongest, most alive version of you.
And I promise, she’s worth meeting. 💖
        `,
    },
    "solo-trip": {
        title: "How To Plan The Ultimate Solo Trip - Without Getting Overwhelmed",
        images: ["/newBlog2.jpg", "/newBlog1.jpg", "/newBlog7.jpg"],
        content: `
Planning a solo trip starts with knowing your comfort zone and gradually stepping beyond it.
Make a checklist, research your destination, and always keep safety first.
        `,
    },
    "solo-destinations": {
        title: "10 Destinations - Perfect For Solo Travelers",
        images: ["/newBlog3.jpg", "/newBlog4.jpg", "/newBlog8.webp"],
        content: `
Discover the top destinations for solo travelers, from beaches to cities.
Each location offers unique experiences and opportunities for adventure.
        `,
    },
    "solo-barcelona": {
        title: "Barcelona - 3 Day Itinerary",
        images: ["/newBlog4.jpg", "/newBlog3.jpg", "/newBlog1.jpg"],
        content: `
Explore Barcelona in 3 days, from Gaudí architecture to local tapas.
Experience the vibrant culture and charm of this Spanish city.
        `,
    },
    "solo-london": {
        title: "London and the Countryside - A 6-Day Itinerary",
        images: ["/newBlog5.jpg", "/newBlog3.jpg", "/newBlog4.jpg"],
        content: `
Explore London’s charm — from iconic landmarks to hidden cafes — and then escape
into the peaceful countryside for a perfect blend of city and calm.
        `,
    },
    "solo-split": {
        title: "Split - Where History, Food, And Coastal Charm Meet",
        images: ["/newBlog6.jpg", "/newBlog7.jpg", "/newBlog8.webp"],
        content: `
Split is a perfect mix of history, stunning coastal views, and delicious local cuisine.
Wander the streets and soak in the Mediterranean vibe.
        `,
    },
    "solo-croatia": {
        title: "Croatia - A Country Worth Every Mile",
        images: ["/newBlog7.jpg", "/newBlog8.webp", "/newBlog2.jpg"],
        content: `
Croatia is a paradise for travelers who crave nature, beaches, and ancient architecture.
From Dubrovnik to Split, every stop offers something breathtaking.
        `,
    },
    "solo-friends": {
        title: "How To Make Friends? - Without Staying In Hostels",
        images: ["/newBlog8.webp", "/newBlog3.jpg", "/newBlog4.jpg"],
        content: `
Making friends while traveling solo is easier than you think.
Tips and tricks for socializing, joining activities, and meeting like-minded travelers.
        `,
    },
};

export default function BlogDetail({ params }) {
    const blog = blogs[params.id];

    if (!blog) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center p-10">
                <h1 className="text-4xl font-bold text-[#a08180] mb-4">Blog Not Found 😢</h1>
                <Link href="/blog" className="text-[#a08180] underline">
                    Go back to Blog
                </Link>
            </div>
        );
    }

    const allBlogs = Object.entries(blogs).filter(([id]) => id !== params.id);

    return (
        <div className="bg-black min-h-screen pt-40 pb-20 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl font-bold text-[#a08180] mb-8">{blog.title}</h1>

                {/* Top 3 images gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                    {blog.images.map((img, idx) => (
                        <Image
                            key={idx}
                            src={img}
                            alt={`${blog.title} ${idx + 1}`}
                            width={400}
                            height={400}
                            className="rounded-2xl shadow-xl object-cover w-full h-64"
                        />
                    ))}
                </div>

                {/* Full-width content */}
                <p className="text-lg leading-relaxed whitespace-pre-line mb-12 text-[#a08180]">
                    {blog.content}
                </p>

                {/* More Blogs */}
                <h2 className="text-3xl font-bold text-[#a08180] mb-6">More Blogs</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {allBlogs.map(([id, b], idx) => (
                        <Link key={idx} href={`/blog/${id}`} className="group">
                            <div className="overflow-hidden rounded-2xl shadow-xl outline-none transform hover:scale-105 transition-transform duration-300">
                                <Image
                                    src={b.images[0]} // first image as thumbnail
                                    alt={b.title}
                                    width={400}
                                    height={300}
                                    className="w-full h-64 object-cover"
                                />
                            </div>
                            <h3 className="text-xl text-[#a08180] mt-4 font-semibold group-hover:underline">
                                {b.title}
                            </h3>
                        </Link>
                    ))}
                </div>

                <Link href="/blog">
                    <button className="mt-4 border bg-[#D0B4B3] text-black border-[#b49a99] uppercase font-bold py-3 px-8 rounded-full hover:bg-[#b49a99] transition-all duration-300">
                        ← &nbsp; Back to Blogs
                    </button>
                </Link>
            </div>
        </div>
    );
}
