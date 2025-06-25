export default function Testimonials() {
    const reviews = [
      { name: "Alice", feedback: "Amazing work, delivered on time and exceeded expectations." },
      { name: "Bob", feedback: "Highly professional and great communication." }
    ];
  
    return (
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Testimonials</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {reviews.map((r) => (
              <div key={r.name} className="p-6 border rounded-lg shadow-sm">
                <p className="italic text-gray-700 mb-4">"{r.feedback}"</p>
                <h4 className="font-semibold">{r.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  