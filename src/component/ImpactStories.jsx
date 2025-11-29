// import React from "react";

// const ImpactStories = () => {
//   return <div>ImpactStories</div>;
// };

// export default ImpactStories;
import React, { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const ImpactStories = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const stories = [
    {
      name: "Sarah Nakato",
      age: 14,
      story:
        "I was living on the streets for two years. Game Connect Africa found me and brought me to their program. Now I'm back in school, I play football every day, and I have dreams of becoming a teacher. They didn't just give me shelter; they gave me hope.",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80",
      impact: "Back in School",
      location: "Jinja, Uganda",
    },
    {
      name: "David Mukasa",
      age: 16,
      story:
        "Through GCA's sports program, I discovered my talent for football. They helped me join a youth team and now I'm training to be a professional player. I also help coach younger kids in my community. Sports changed my life.",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&q=80",
      impact: "Future Athlete",
      location: "Kamuli, Uganda",
    },
    {
      name: "Grace Namugga",
      age: 12,
      story:
        "Before GCA came to our school, I was shy and scared to speak. The Peace Club taught me about my rights and gave me confidence. Now I'm a leader in my class and I help other girls feel safe and supported.",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80",
      impact: "Student Leader",
      location: "Iganga, Uganda",
    },
    {
      name: "James Waiswa",
      age: 11,
      story:
        "I used to miss school a lot because I was sick. GCA's health program helped me get treatment for malaria and taught my family about hygiene. Now I'm healthy, I never miss school, and I'm top of my class!",
      image:
        "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?w=400&q=80",
      impact: "Healthy & Thriving",
      location: "Mayuge, Uganda",
    },
  ];

  const testimonials = [
    {
      name: "Pastor John Ssemakula",
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
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            Real Stories, Real Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Lives We've Transformed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every child has a story. Here are just a few of the lives we've
            touched through our programs
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-6"></div>
        </div>

        {/* Featured Story Carousel */}
        <div className="mb-20 relative">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Image Side */}
              <div className="relative h-96 lg:h-auto">
                <img
                  src={stories[currentStory].image}
                  alt={stories[currentStory].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Overlay Info */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-block bg-green-500 px-4 py-2 rounded-full text-sm font-semibold mb-2">
                    {stories[currentStory].impact}
                  </div>
                  <h3 className="text-3xl font-bold mb-1">
                    {stories[currentStory].name}
                  </h3>
                  <p className="text-sm opacity-90">
                    Age {stories[currentStory].age} •{" "}
                    {stories[currentStory].location}
                  </p>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <Quote className="w-12 h-12 text-green-500 mb-6" />
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
                            ? "w-8 bg-green-500"
                            : "w-2 bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={prevStory}
                      className="w-10 h-10 bg-gray-100 hover:bg-green-500 hover:text-white rounded-full flex items-center justify-center transition-colors duration-300"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextStory}
                      className="w-10 h-10 bg-gray-100 hover:bg-green-500 hover:text-white rounded-full flex items-center justify-center transition-colors duration-300"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-5xl font-bold mb-2">500+</div>
            <div className="text-lg opacity-90">Children Rescued</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-5xl font-bold mb-2">85%</div>
            <div className="text-lg opacity-90">Back in School</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-5xl font-bold mb-2">1000+</div>
            <div className="text-lg opacity-90">Families Supported</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-5xl font-bold mb-2">50+</div>
            <div className="text-lg opacity-90">Communities Reached</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Community Leaders Say
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t pt-4">
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Testimonial */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Watch Their Journey
          </h3>
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <video
              controls
              poster="https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?w=1200&q=80"
              className="w-full aspect-video"
            >
              <source
                src="https://cdn.pixabay.com/video/2022/08/17/128344-741937788_large.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Help Us Write More Success Stories
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Every contribution brings hope and transforms lives. Be part of
            someone's success story today.
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            Make a Difference Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;
