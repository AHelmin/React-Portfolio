import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Resume() {

  function downloadResume() {
    const resume = `Education
  Full Stack Developer Certificate, University of Minnesota, edX Boot Camps		          March 2024
  
  Skills: GitHub, JavaScript, HTML, CSS, JQuery, Bootstrap, Tailwind, Node.js, Express, React, 
  REST API, MySQL, MongoDB, ORM, MVC
  
  
  Bachelor of Arts in Chemistry, University of Minnesota, Morris		                    May 2018
  Major GPA 3.91	 
    Honors: Deans List, CRC Award for Exemplary Performance for First Year Chemistry Students
  
  Work History                                                                                                                                                 	               10/2019-08/2023
  Chemical Technician, Republic Services South Hennepin HHW
  •	Sorting household hazardous wastes by hazardous category
  •	Determining unknown waste composition
  •	Placing waste in appropriate waste grouping
  •	Following safety procedures and protocols
  •	Conducting work while practicing good customer service
  •	Loading trailers and unloading deliveries using forklift
  
  Researcher, Aerotek Scientific, LLC, Contingent worker at 3M, Maplewood, MN                07/2018-07/2019
  •	Preparing test specimens
  •	Collecting and logging data
  •	Organizing and reporting data
  •	Adhesive resin formulation
  •	Analyze resin formulation components for compatibility
  •	Color match resin formulations to specifications
  •	Determine best components to achieve desired formulation properties
  •	Work collaboratively to accomplish goals
  •	Perform additional duties as required
  
  Undergraduate Researcher, University of Minnesota, Morris, MN	                            09/2017 - 12/2017 
  Goal: To create a ferrocene-based ligand for use with a palladium catalyst
  •	Preparation of precursors
  •	Synthesis and characterization of pre-ligand
  •	Maintain a clear, concise lab notebook
  •	Good lab safety practices
  •	Able to increase yield by applying knowledge from another project
  
  Chemistry Inventory Clerk, University of Minnesota, Morris, MN	                    07/2017 - 11/2017 
  Work-study grant position
  •	Became familiar with procedures by managing and tracking chemical inventory
  •	Spearheaded process to migrate paper tracking to electronic system
  •	Resulted in more effective tracking and locating of chemicals
  
  Undergraduate Researcher, University of Minnesota, Morris, MN	                            06/2017 - 08/2017 
  Paid research position through the Howard Hughes Medical Institute grant
  Goal: Create a new donor-acceptor copolymer for use as an organic photovoltaic 
  •	Synthesis and characterization of precursors, monomers, copolymer
  •	Optimizing precursor synthesis
  •	Maintaining a lab notebook
  •	Adhering to safety protocols involving lab techniques and chemicals
  •	Primary literature searches
  •	Identifying future work for improvements in process and properties of copolymer
  •	Compiling results and preparing poster for presentation 
  •	Presented by poster at the 255th ACS national conference
  
  Undergraduate Researcher, University of Minnesota, Morris, MN	                            06/2016 - 05/2017 
  Paid research position through Louis Stokes Alliances for Minority Participation (LSAMP) grant
  Goal: Finding a metal-organic framework (MOF) that selectively adsorbs the amyloid-β peptide
  •	Synthesis and characterization of organic ligand precursors, organic ligands, and MOFs
  •	Post-synthetically modified MOFs
  •	Quantifying protein adsorption after incubation period with gel electrophoresis and fluorometry
  •	Analyzing and interpret data
  •	Compiling results and preparing poster for presentation and final lab report 
  •	Poster presented at the 253rd ACS national conference
  
  Undergraduate Researcher, University of Minnesota, Morris, MN	                           09/2015 - 12/2015 
  Goal: Discover a GC-MS method to determine the percent composition of recovered TLC eluent 
  Responsibilities:
  •	Develop calibration curve from hexanes and ethyl acetate standards
  •	Test unknown mixtures to ensure calibration curve was accurate 
  •	Worked without direct supervision
  •	With this method TLC eluent can be recycled
  
  Laborer/Equipment Operator, Riley Brothers Construction, Morris, MN	           Summers 2013, 2014, & 2015
  •	Further established strong work ethic working up to 18 hours a day in heat and humidity
  •	Develop a stronger sense of safety practices operating heavy equipment around different crews on a jobsite
  
  Drill Operator/Blaster, Wisconsin Industrial Sand, Maiden Rock, WI                                                                                2004-2009
  •	Demonstrated responsibility being accountable to federal regulations from ATF for blasting inventory count
  •	Responsible for mine during blasting operations
  •	Directed other crews to avoid equipment from running over explosives
  •	Established self-reliance working without direct supervision
  •	Developed strong work ethic working 12-hour shifts in a lightless environment
  •	Established personal safety practices being around explosives and roof collapses
  
  Slot Department Supervisor, Grand Casino Mille Lacs, Onamia, MN			            2002-2003
  •	Oversee daily operations of slot attendants
  •	Conduct interviews of potential employees
  •	Pay-out large jackpots
  •	Ensure compliance of both employees and guests
  •	Manage scheduling of employees
  •	Ensure proper coverage of the gambling floor with employees
  
  
  Publication
  Benzodithiophene homopolymers via direct (hetero)arylation polymerization
  https://link.springer.com/article/10.1007/s00289-018-2346-6 May 2018
  Direct (hetero)arylation polymerization of a monobrominated benzo[1,2-b:4,5-b]dithiophene 
  (BDT) monomer was carried out using the Herrmann Beller catalyst and two ligands, P(o-OMePh)3 
  and P(o- NMe2Ph)3, in different trials. Both ligands resulted in a respectable yield however 
  the P(o-NMe2Ph)3 resulted in almost a double MW polymer. An additional finding revealed that 
  the monobrominated and dibrobrominated BDT can be separated via simple column chromatography.
  `

    //create blob
    const blob = new Blob([resume], { type: 'text/plain' });
    const href = URL.createObjectURL(blob)

    //create a link for download
    const link = document.createElement('a');
    link.href = href;
    link.download = 'resume.txt';
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  };

  return (
    <>
      <div className=" container-fluid flex-wrap-column flex-column mt-5 ms-5 col-12">
        <h2 className="text-left mb-3">Resume</h2>
        <div>
        <h4 className="text-left mb-3">Proficiencies</h4>
        <ul>
          <li>GitHub</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>Javascript</li>
          <li>JQuery</li>
          <li>Express</li>
          <li>React</li>
          <li>MySQL</li>
          <li>MongoDB</li>
        </ul>
        </div>
        <div className="text-center">
          <button className=' btn btn-primary' onClick={downloadResume}>Download Resume</button>
        </div>
      </div>
    </>
  )
}
