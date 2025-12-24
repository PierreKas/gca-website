import React, { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import testmonyVideo from "../assets/testimony/testimony-video2.mp4";
import olivia from "../assets/testimony/econ1.jpeg";
const ImpactStories = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const stories = [
    {
      name: "Namusoke Olivia",
      age: "XX",
      story:
        "I'm so grateful to GCA for empowering me economically. Before getting involved with GCA, I was ever stressed with home needs and my children were sickly and malnourished due to poor feeding.But ever since I joined GCA women groups, I'm empowered in vegetable growing which boosted my income generating activities well and facilitated my family with balanced diet and my children are now healthy.\nThanks to GCA for the work your doing among the women and families.",
      image: olivia,
      impact: "Economic Empowerment",
      location: "Jinja, Uganda",
    },
  ];

  const testimonials = [
    {
      name: "Pastor John Semakula",
      role: "Community Leader",
      text: "Game Connect Africa has transformed our community. We've seen children come off the streets, families strengthened, and hope restored. Their holistic approach really works.",
      rating: 5,
    },
    {
      name: "Margaret Nabwire",
      role: "Parent",
      text: "My son was struggling in school and in life. GCA's programs gave him purpose and skills. Now he's excelling and helping others. I'm forever grateful.",
      rating: 5,
    },
    {
      name: "Teacher Alice Namatovu",
      role: "Primary School Teacher",
      text: "The Peace Clubs have changed our school culture. Students are more confident, respectful, and engaged. GCA's approach to education through play really works.",
      rating: 5,
    },
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section className="py-20 bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4A82D]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#607838]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#607838]/10 text-[#607838] rounded-full text-sm font-semibold mb-4">
            Real Stories, Real Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#607838] mb-6">
            Lives We've Transformed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everyone has a story. Here are just a few of the lives we've touched
            through our programs.
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-[#607838] to-[#F4A82D] mx-auto mt-6"></div>
        </div>
        {/* Featured Story Carousel */}

        <div className="mb-20 relative">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100">
            <div className="grid lg:grid-cols-2">
              {/* Image Side */}
              <div className="relative h-96 lg:h-auto">
                <img
                  src={stories[currentStory].image}
                  alt={stories[currentStory].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#607838]/80 to-transparent"></div>

                {/* Overlay Info */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-block bg-[#F4A82D] px-4 py-2 rounded-full text-sm font-semibold mb-2">
                    {stories[currentStory].impact}
                  </div>
                  <h3 className="text-3xl font-bold mb-1">
                    {stories[currentStory].name}
                  </h3>
                  <p className="text-sm opacity-90">
                    {/* Age {stories[currentStory].age} •{" "} */}
                    {stories[currentStory].location}
                  </p>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <Quote className="w-12 h-12 text-[#F4A82D] mb-6" />
                <p className="text-xl text-gray-700 leading-relaxed mb-8 italic">
                  "{stories[currentStory].story}"
                </p>

                {/* Story Navigation */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {stories.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentStory(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          currentStory === index
                            ? "w-8 bg-[#F4A82D]"
                            : "w-2 bg-gray-300 hover:bg-[#607838]"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={prevStory}
                      className="w-6 h-6 bg-gray-100 hover:bg-[#607838] hover:text-white rounded-full flex items-center justify-center transition-colors duration-300"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextStory}
                      className="w-6 h-6 bg-gray-100 hover:bg-[#607838] hover:text-white rounded-full flex items-center justify-center transition-colors duration-300"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Video Testimonial */}
        <div className="bg-linear-to-r from-[#607838]/10 to-[#F4A82D]/10 rounded-3xl p-8 md:p-12 border-2 border-[#607838]/10">
          <h3 className="text-3xl font-bold text-[#607838] text-center mb-8">
            Watch Their Journey
          </h3>
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <video
              controls
              // poster="https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?w=1200&q=80"
              className="w-full aspect-video"
            >
              <source src={testmonyVideo} type="video/mp4" />
            </video>
          </div>
        </div>
        {/* CTA */}
        <div className="mt-16 text-center bg-linear-to-r from-[#607838] to-[#4a5e2d] rounded-2xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F4A82D]/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Help Us Write More Success Stories
            </h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Every contribution brings hope and transforms lives. Be part of
              someone's success story today.
            </p>
            <button className="bg-[#F4A82D] hover:bg-[#F4A82D]/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Make a Difference Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;
