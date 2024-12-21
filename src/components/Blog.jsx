import React from "react";

const blogs = [
  {
    title: "Revamping Traditional Interiors",
    excerpt:
      "In this blog, we'll explore some creative ideas for revamping traditional interiors to infuse them with new life and contemporary flair.",
  },
  {
    title: "Elevate Workplace Well-being: Incorporating Wellness into Office Design",
    excerpt:
      "In this blog, we'll explore how to incorporate wellness into office design to promote a healthier, more productive, and happier workforce.",
  },
  {
    title: "Top 10 Interior Design Trends for 2024",
    excerpt:
      "This blog will guide you through the top 10 interior design trends for 2024. From sustainable living to bold colors, these trends are sure to inspire your next home improvement project.",
  },
  {
    title: "Shaping Tomorrow's Workspaces: The Future of Office Design",
    excerpt:
      "In this blog, we'll explore the key factors influencing the future of office design, from design elements to emerging trends and innovative practices.",
  },
];

export default function Blog() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1617103996702-96ff29b1c467"
            alt="Interior Design Inspiration"
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Interior Design Blog Ideas
          </h2>
          <div className="space-y-8">
            {blogs.map((blog, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600">{blog.excerpt}</p>
                <hr className="my-4 border-t border-gray-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
