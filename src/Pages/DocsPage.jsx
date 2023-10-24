import React from "react";
import { CodeBlock, CopyBlock, dracula, shadesOfPurple } from "react-code-blocks";
import Navbar from "./Navbar";
import fork from "../components/assets/fork.png";
import pr from "../components/assets/pr.png";

export default function DocsPage() {
  return (
    <div
      style={{
        background:
          'linear-gradient(31.67deg, rgba(3, 14, 21, 0.96) -2.58%, #05121B 70.47%)',
      }}
    >
      <Navbar />
      <div className="py-20 px-40 gap-10 flex flex-col text-[#FFFFFF] items-center">
        <div className="text-3xl">
          Steps to setup the project locally:
        </div>
        <div className="text-lg md:text-xl flex flex-col gap-10">
          <div className="text-lg md:text-xl">
            <span className='text-[#6F4FF2] font-bold'>Step 1:</span> Create a fork of the repository.
            <img src={fork} alt='fork' className="mx-auto mt-6 d-block"/>
          </div>
          <div className="text-lg md:text-xl">
            <span className='text-[#6F4FF2] font-bold'>Step 2:</span> Clone the forked repository to create a local copy on your machine. 
            <CopyBlock 
              text={`git clone https://github.com/<your username>/SnapGrid.git`} 
              showLineNumbers={false} 
              language='bash'
              codeBlock 
              theme={shadesOfPurple}
            />
          </div>
          <div className="text-lg md:text-xl">
            <span className='text-[#6F4FF2] font-bold'>Step 3:</span> Navigate to the project directory.
            <CopyBlock 
              text={`cd SnapGrid`} 
              showLineNumbers={false} 
              language='bash'
              codeBlock 
              theme={shadesOfPurple}
            />
          </div>
          <div className="text-lg md:text-xl">
            <span className='text-[#6F4FF2] font-bold'>Step 4:</span> Add an upstream reference to the remote repository.
            <CopyBlock 
              text={`git remote add origin https://github.com/<your username>/SnapGrid.git`} 
              showLineNumbers={false} 
              language='bash'
              codeBlock 
              theme={shadesOfPurple}
            />
          </div>
          <div className="text-lg md:text-xl">
            <span className='text-[#6F4FF2] font-bold'>Step 5:</span> Pull the latest changes from the upstream repository to your keep your local copy up-to-date. 
            <CopyBlock 
              text={`git pull origin main`} 
              showLineNumbers={false} 
              language='bash'
              codeBlock 
              theme={shadesOfPurple}
            />
          </div>
          <div className="text-lg md:text-xl">
            <span className='text-[#6F4FF2] font-bold'>Step 6:</span> Install the dependencies using npm install. 
            <CopyBlock 
              text={`npm install`} 
              showLineNumbers={false} 
              language='bash'
              codeBlock 
              theme={shadesOfPurple}
            />
          </div>
          <div className="text-lg md:text-xl">
            <span className='text-[#6F4FF2] font-bold'>Step 7:</span> Create a .env file in the project root directory and add your Unsplash API access key: 
            <CopyBlock 
              text={`echo "REACT_APP_UNSPLASH_API_KEY=your-unsplash-api-key" > .env`} 
              showLineNumbers={false} 
              language='bash'
              codeBlock 
              theme={shadesOfPurple}
            />
            Make sure to replace "your-unsplash-api-key" with your actual API access key obtained from the Unsplash Developer Dashboard.
          </div>
          <div className="text-lg md:text-xl">
            <span className='text-[#6F4FF2] font-bold'>Step 7:</span> Start the local server using npm start.
            <CopyBlock 
              text={`npm start`} 
              showLineNumbers={false}
              language='bash' 
              codeBlock 
              theme={shadesOfPurple}
            />
          </div>
          <div className="text-lg md:text-xl">
            <span className='text-[#6F4FF2] font-bold'>Step 8:</span> Create a new branch and start working on the issue.
            <CopyBlock 
              text={`git branch -b <branch name>
git checkout <branch name>`} 
              showLineNumbers={false}
              language='bash' 
              codeBlock 
              theme={shadesOfPurple}
            />
          </div>
          <div className="text-lg md:text-xl">
            <span className='text-[#6F4FF2] font-bold'>Step 9:</span> Stage the changes on the new branch. 
            <CopyBlock 
              text={`git add <files to stage>`} 
              showLineNumbers={false} 
              language='bash'
              codeBlock 
              theme={shadesOfPurple}
            />
          </div>
          <div className="text-lg md:text-xl">
            <span className='text-[#6F4FF2] font-bold'>Step 10:</span> Commit the changes on the new branch. 
            <CopyBlock 
              text={`git commit -m "<commit message>"`} 
              showLineNumbers={false} 
              language='bash'
              codeBlock 
              theme={shadesOfPurple}
            />
          </div>
          <div className="text-lg md:text-xl">
            <span className='text-[#6F4FF2] font-bold'>Step 11:</span> Push the changes to remote repository. 
            <CopyBlock
              text={`git push origin <branch name>`} 
              showLineNumbers={false} 
              language='bash'
              codeBlock 
              theme={shadesOfPurple}
            />
          </div>
          <div className="text-lg md:text-xl">
            <span className='text-[#6F4FF2] font-bold'>Step 12:</span> Create a pull request by clicking on Compare & pull request button. 
            <img src={pr} alt='fork' className="mx-auto mt-6 d-block"/>
          </div>
          <div className="text-lg md:text-xl">
            <span className='text-[#6F4FF2] font-bold'>Step 13:</span> Wait for your changes to be merged. 
          </div>
        </div>
        <div className="text-3xl">
          Congratulations, you have successfully contributed to the project! 🎉
        </div>
      </div>
    </div>
  );
}