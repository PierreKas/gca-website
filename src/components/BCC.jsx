import React from "react";
import hearderPicture from "../assets/program-pictures/f-serv1.jpg";

const BCC = () => {
  return (
    <div className="mt-64 relative">
      {/* Header Section */}
      <img
        src={hearderPicture}
        className="absolute inset-0 w-full h-72 object-cover z-10"
        alt="header"
      />
      <div className="absolute inset-0 bg-black h-72 opacity-50 z-20"></div>
      <div className="absolute top-28 left-0 right-0 flex flex-col z-30 px-4">
        <h1 className="uppercase text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide bg-gradient-to-r from-white to-zinc-100 text-transparent font-bold bg-clip-text">
          Discipleship
        </h1>
        <p className="mt-2.5 text-xl text-white text-center max-w-3xl mx-auto">
          Building a family of consecrated disciples who live for Christ and
          make Him known to this generation.
        </p>
      </div>

      {/* Content Section */}
      <div className="relative z-30 bg-white py-16 px-6 sm:px-12 lg:px-24">
        {/* Burden */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 border-l-4 border-yellow-400 pl-3">
            BCC Burden
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
            <li>
              The absence of elaborate and shared Christian information, creates
              confusion and even collision, with churches doing the same thing
              at the same time and without effective or efficient results in the
              body of Christ.
            </li>
            <li>
              Absence of simple and practical biblical teachings to prepare the
              follower of Christ for a victorious life and a fruitful ministry
              in the Lord’s church.
            </li>
            <li>
              Absence of a church family church and instead we have an
              association for the advancement of the earthly well-being of its
              members, hence the multiple conflicts of earthly interests that
              weaken the Church of the Lord Jesus Christ.
            </li>
            <li>
              Absence or weak prayer life replaced by other activities deemed
              more useful.
            </li>
          </ul>
        </section>

        {/* Mission */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 border-l-4 border-blue-500 pl-3">
            BCC Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The mission of BCC is to help a person as a whole, meaning both in
            the physical and the moral aspect, each according to its demands, to
            fulfill the Supreme Order of Jesus Christ in harmony with the other
            members of the body of Christ:
          </p>
          <blockquote className="italic text-gray-600 border-l-4 border-gray-300 pl-4 mt-4">
            Go and make disciples of all nations, baptizing them in the name of
            the Father and the Son and the Holy Spirit. Teach them to obey all
            the commands I (Jesus Christ) have given you…{" "}
            <span className="font-semibold">Matthew 28:19-20</span>.
          </blockquote>
        </section>

        {/* Vision */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 border-l-4 border-green-500 pl-3">
            BCC Vision
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The vision of BCC is to raise a great army of life-giving disciples,
            fully consecrated to the Lord Jesus Christ, coming from different
            backgrounds and with different history interconnected by the spirit
            of family; restored, trained and sent, determined to make Jesus
            Christ known as the King of this generation.
          </p>
        </section>

        {/* Video */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-red-500 pl-3 inline-block">
            Watch More
          </h2>
          <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
            <iframe
              className="w-full h-96 rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/bj_1S68m4l8"
              title="BCC Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BCC;
