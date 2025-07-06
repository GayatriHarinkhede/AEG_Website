import React from 'react';
import { Award, Trophy, Star, Medal } from 'lucide-react';

const ConferenceAward = () => {
  const awards = [
    {
      title: "Best Paper Award",
      description: "Recognizing outstanding research contributions and innovative ideas",
      categories: [
        {
          name: "Saroj Mohale",
          prize: "Best Paper in Digital Innovation and Strategy",
          details: "Vocational Education in Higher Secondary Schools: A Review of Factors Influencing Student Interest and Attitudes"
        },
        {
          name: "Abhishek Gupta",
          prize: "Best Paper in AI and Computational Intelligence",
          details: "Secure & Rapid Data Sharing in Mobile Cloud Computing - Modeling and Matlab Simulation"
        },
        {
          name: "Mritunjay piplaha, Ankit pal  ",
          prize: "Best Paper in Sustainable Energy Technologies",
          details: "Grid Connected Renewable Energy System"
        },
        {
          name: "Kumar Sanu",
          prize: "Best Paper in System Design and Simulation",
          details: "Comparative Analysis of Sustainable Materials in Road Construction: A Review"
        },
        {
          name: "Shreya Gawand, Chinmay Mulay,Dr. Monalisa Hati",
          prize: "Best Paper in Bioengineering and AI Healthcare",
          details: "Fuzzy Logic for Personalized Healthcare Decision Support Systems"
        }
      ],
      icon: Trophy
    },
    {
      title: "Overall Best  Award",
      description: "Celebrating emerging talent in the field",
      categories: [
        {
          name: "AYOUSHI SHRIVASTAVA",
          prize: "Best Novelty in Research",
          details: "Performance assessment of external source-driven binary vapor cycles with ammonia-water and trans-critical CO2. The impact of reheating and pressure variations."
        },
        {
          name: "RADHESHYAM AHIRWAR",
          prize: "Best Visual Presentation Award",
          details: "Natural farming: A sustainable approach cultivating a better future."
        },
        {
          name: "PRATI DUBEY",
          prize: "Best Student Paper Award",
          details: "Automated suspicious activity detection in video surveillance using deep learning: A review."
        },
        {
          name: "SANGEET DONGRE, AMIT VISHWAKARMA ",
          prize: "Young Researcher Achievement Award",
          details: "Development and performance analysis of pyramid-shaped novel solar water heater."
        },
        {
          name: "Alisha Hashmi,Mr.Nishant Shrivastava ",
          prize: "Best Presenter Award",
          details: "Leveraging Management Frameworks and Academia-Industry Collaboration for Enhanced Efficiency and Productivity in Startups."
        }
      ],
      icon: Star
    },
    {
      title: "Distinguished Contribution",
      description: "Honoring long-term impact and service to the community",
      categories: [
        {
          name: "Sharad Sharma ",
          prize: "Co-Chair of AIC Reathm ",
          details: "Recognizing sustained contributions and leadership in the Conference"
        },
        {
          name: "Vandana Sharma",
          prize: "Co-Conrdinator of AIC Reathm",
          details: "For exceptional service to the research community"
        },
        {
          name: "Yamini Singhal",
          prize: " Management  of AIC Reathm",
          details: "For exceptional service to the research community"
        }
      ],
      icon: Medal
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Awards & Recognition
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating excellence and innovation in our research community through our prestigious awards program.
          </p>
          <h2 className='text-pink-950 font-bold from-neutral-900 mt-7 text-2xl'>AIC REATHM 2025 </h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((award) => (
            <div key={award.title} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <award.icon className="h-6 w-6 text-blue-600" />
                  <h2 className="text-xl font-bold text-gray-900">{award.title}</h2>
                </div>
                <p className="text-gray-600">
                  {award.description}
                </p>
              </div>
              <div className="space-y-4">
                {award.categories.map((category) => (
                  <div key={category.name} className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-lg">{category.name}</h3>
                    <p className="text-blue-600 font-medium">{category.prize}</p>
                    <p className="text-gray-600 text-sm mt-1">{category.details}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Award Submission Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Eligibility Criteria</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Must be registered conference attendee</li>
                <li>• Original work not previously published</li>
                <li>• Submission must follow conference format</li>
                <li>• All authors must agree to submission</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Important Dates</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Submission Deadline: September 15, 2025</li>
                <li>• Notification: October 1, 2025</li>
                <li>• Award Ceremony: During Conference Gala</li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ConferenceAward;