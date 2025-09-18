import React from "react";

function Education() {
  return (
    <div className="p-6 md:p-8">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
          </div>
          <div className="timeline-start mb-10">
            <time className="font-mono italic">2024</time>
            <div className="text-lg font-semibold">Doctorate of Honour</div>
            <p>Socrates Social Research University</p>
          </div>
          <hr />
        </li>

        <li>
          <hr />
          <div className="timeline-middle">
            <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2013 – 2018</time>
            <div className="text-lg font-semibold">
              Ph.D. (Medical Microbiology)
            </div>
            <p>Santosh Medical College, Ghaziabad</p>
          </div>
          <hr />
        </li>

        <li>
          <hr />
          <div className="timeline-middle">
            <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
          </div>
          <div className="timeline-start mb-10">
            <time className="font-mono italic">2009 – 2012</time>
            <div className="text-lg font-semibold">
              M.Sc. (Medical Microbiology)
            </div>
            <p>Mullana Medical College, Ambala</p>
          </div>
          <hr />
        </li>

        <li>
          <hr />
          <div className="timeline-middle">
            <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2003 – 2007</time>
            <div className="text-lg font-semibold">
              B.Sc. (Medical Microbiology)
            </div>
            <p>Doon (PG) Paramedical College, Dehradun</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Education;
