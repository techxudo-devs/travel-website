import Image from "next/image";
import Link from "next/link";
import { blogs } from "../blogsData.js"

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
                <h1 className="text-6xl text-center font-bold text-[#a08180] mb-8">{blog.title}</h1>

                {/* Top 3 images gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                    {blog.images.map((img, idx) => (
                        <div
                            key={idx}
                            className="group relative overflow-hidden rounded-3xl aspect-square bg-gradient-to-br from-gray-100 to-gray-50"
                        >
                            <Image
                                src={img}
                                alt={`${blog.title} ${idx + 1}`}
                                width={400}
                                height={100}
                                className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    ))}
                </div>

                {/* Full-width content */}
                <div
                    className="prose prose-invert prose-lg max-w-none text-[#d0b4b3]/90 leading-relaxed mb-16"
                    dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, "<br />") }}
                ></div>

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
