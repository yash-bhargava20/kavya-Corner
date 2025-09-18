import React from "react";

const Work = () => {
  return (
    <>
      <div className="p-6 md:p-8">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
            </div>
            <div className="timeline-start mb-10">
              <time className="font-mono italic">2017 – Present</time>
              <div className="text-lg font-semibold">Founder & President</div>
              <p>Kavya Corner Foundation (NGO)</p>
            </div>
            <hr />
          </li>

          <li>
            <hr />
            <div className="timeline-middle">
              <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2020 – Present</time>
              <div className="text-lg font-semibold">Director & CEO</div>
              <p>Crisp Value Pvt. Ltd. (Indoor Air Quality Solutions)</p>
            </div>
            <hr />
          </li>

          <li>
            <hr />
            <div className="timeline-middle">
              <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
            </div>
            <div className="timeline-start mb-10">
              <time className="font-mono italic">2010 – 2012</time>
              <div className="text-lg font-semibold">Assistant Professor</div>
              <p>Manav Rachna University & MMU Mullana</p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">Apr 2022 – Feb 2024</time>
              <div className="text-lg font-semibold">Former Co-Convenor</div>
              <p>Sanskar Bharti, Gautam Budh Nagar</p>
            </div>
            <hr />
          </li>

          <li>
            <hr />
            <div className="timeline-middle">
              <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
            </div>
            <div className="timeline-start mb-10">
              <time className="font-mono italic">2020 – 2024</time>
              <div className="text-lg font-semibold">District Convenor</div>
              <p>Beti Bachao, Beti Padhao (BJP)</p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">Feb 2025-Present</time>
              <div className="text-lg font-semibold">Cultural-Advisor</div>
              <p>Shaheed Smriti Chetna Sansthan</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Work;
