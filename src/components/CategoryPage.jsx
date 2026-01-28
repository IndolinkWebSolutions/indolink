import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CategoryPage() {
  const { slug } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`/api/categories/${slug}/`)
      .then(res => res.json())
      .then(data => setData(data));
  }, [slug]);

  if (!data) return <p>Loading...</p>;

  return (
    <section className="px-4 md:px-10 py-6 bg-white">
      <h1 className="text-xl font-semibold mb-6">
        {data.category}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.subcategories.map((sub, index) => (
          <div key={index} className="border p-4 rounded hover:shadow">
            <div className="flex gap-4">
              <img
                src={sub.image}
                alt={sub.title}
                className="w-24 h-24 object-cover border"
              />
              <div>
                <h3 className="font-semibold text-sm mb-2">
                  {sub.title}
                </h3>
                <ul className="text-sm text-blue-600 space-y-1">
                  {sub.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p className="text-sm mt-2 text-gray-600">
                  View All →
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
