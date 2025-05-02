"use client"
import React, { useState, useRef } from 'react';
import { 
  FaLinkedin, FaGithub, FaTwitter, FaGlobe, FaCamera,
  FaChartLine, FaDesktop, FaCog 
} from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const ProfessionalProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Statistics');
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState('/api/placeholder/200/200');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [profileData, setProfileData] = useState({
    name: 'Yash Patil',
    location: 'Bangalore, India',
    bio: 'Software engineer specializing in cloud technologies and DevOps. Passionate about building scalable and efficient software solutions. Experienced in working with cutting-edge tech stacks and driving innovation.',
    skills: ['Cloud Computing', 'Docker', 'Kubernetes', 'CI/CD', 'Python', 'Node.js', 'AWS']
  });

  const progressData = [
    { month: 'Jan', score: 7.0 },
    { month: 'Feb', score: 7.5 },
    { month: 'Mar', score: 8.0 },
    { month: 'Apr', score: 8.5 },
    { month: 'May', score: 9.0 }
  ];

  const interviewHistory = [
    {
      title: 'Senior DevOps Engineer Interview',
      company: 'Infosys Technologies',
      date: 'Apr 15, 2025',
      duration: '60 minutes',
      score: 8.9,
      feedback: 'Excellent understanding of cloud infrastructure and containerization technologies. Strong problem-solving skills.'
    },
    {
      title: 'Cloud Solutions Architect',
      company: 'Wipro Limited',
      date: 'Feb 20, 2025',
      duration: '75 minutes',
      score: 8.7,
      feedback: 'Impressive knowledge of AWS services and microservices architecture. Demonstrated ability to design scalable systems.'
    },
    {
      title: 'Backend Development Technical Screen',
      company: 'TCS Digital',
      date: 'Jan 10, 2025',
      duration: '45 minutes',
      score: 8.2,
      feedback: 'Strong coding skills in Python and Node.js. Good understanding of system design principles.'
    },
    {
      title: 'Cloud Migration Specialist Interview',
      company: 'Accenture',
      date: 'Mar 5, 2025',
      duration: '90 minutes',
      score: 8.5,
      feedback: 'Exceptional skills in container orchestration and cloud migration strategies. Showed deep technical expertise.'
    }
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleProfileEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSkillEdit = (skills: string[]) => {
    setProfileData(prev => ({
      ...prev,
      skills
    }));
  };

  return (
    <div className="min-h-screen bg-[#0E1525] text-white ">
      <input 
        type="file" 
        ref={fileInputRef}
        onChange={handleImageUpload}
        accept="image/*"
        className="hidden"
      />
      <div className="container mx-auto max-w-5xl px-4 py-8">
        {/* Profile Header */}
        <div className="bg-[#161E2E] rounded-2xl shadow-lg p-6 mb-6 mt-12">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <img 
                src={profileImage} 
                alt="Yash Aptil" 
                className="w-32 h-32 rounded-full border-4 border-[#00E5FF]/30 object-cover"
              />
              <button 
                onClick={triggerFileInput}
                className="absolute bottom-0 right-0 bg-[#00E5FF] text-[#0E1525] p-2 rounded-full"
              >
                <FaCamera size={16} />
              </button>
            </div>
            <div className="flex-1">
              {isEditing ? (
                <>
                  <input 
                    type="text" 
                    value={profileData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="text-3xl font-bold text-white bg-[#0E1525] rounded px-2 w-full mb-2"
                  />
                  <input 
                    type="text" 
                    value={profileData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="text-[#00E5FF] text-lg bg-[#0E1525] rounded px-2 w-full mb-2"
                  />
                  <textarea 
                    value={profileData.bio}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    className="text-gray-400 mt-2 bg-[#0E1525] rounded px-2 w-full h-20"
                  />
                </>
              ) : (
                <>
                  <h1 className="text-3xl font-bold text-white">{profileData.name}</h1>
                  <p className="text-[#00E5FF] text-lg">B.Tech in PORN • {profileData.location} • Joined January 2023</p>
                  <p className="text-gray-400 mt-2">{profileData.bio}</p>
                </>
              )}
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-[#00E5FF] hover:text-white"><FaLinkedin size={24} /></a>
                <a href="#" className="text-[#00E5FF] hover:text-white"><FaGithub size={24} /></a>
                <a href="#" className="text-[#00E5FF] hover:text-white"><FaTwitter size={24} /></a>
                <a href="#" className="text-[#00E5FF] hover:text-white"><FaGlobe size={24} /></a>
              </div>
            </div>
            <div>
              <button 
                onClick={handleProfileEdit} 
                className="bg-[#00E5FF]/10 text-[#00E5FF] px-4 py-2 rounded-lg hover:bg-[#00E5FF]/20"
              >
                {isEditing ? 'Save' : 'Edit Profile'}
              </button>
            </div>
          </div>
          <div className="mt-4 flex space-x-2">
            {isEditing ? (
              <div className="flex flex-wrap gap-2">
                {profileData.skills.map((skill, index) => (
                  <div key={skill} className="flex items-center bg-[#1E293B] border border-[#00E5FF]/30 rounded-full">
                    <input 
                      type="text"
                      value={skill}
                      onChange={(e) => {
                        const newSkills = [...profileData.skills];
                        newSkills[index] = e.target.value;
                        handleSkillEdit(newSkills);
                      }}
                      className="bg-transparent text-[#00E5FF] px-3 py-1 rounded-full text-sm w-full"
                    />
                    <button 
                      onClick={() => {
                        const newSkills = profileData.skills.filter((_, i) => i !== index);
                        handleSkillEdit(newSkills);
                      }}
                      className="text-red-500 px-2"
                    >
                      ×
                    </button>
                  </div>
                ))}
                <button 
                  onClick={() => handleSkillEdit([...profileData.skills, 'New Skill'])}
                  className="bg-[#1E293B] border border-[#00E5FF]/30 text-[#00E5FF] px-3 py-1 rounded-full text-sm"
                >
                  + Add Skill
                </button>
              </div>
            ) : (
              profileData.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="bg-[#1E293B] border border-[#00E5FF]/30 text-[#00E5FF] px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex mb-6 space-x-4">
          {['Statistics', 'Interview History', 'Settings'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
                activeTab === tab 
                  ? 'bg-[#00E5FF]/20 text-[#00E5FF]' 
                  : 'text-gray-400 hover:bg-[#161E2E]'
              }`}
            >
              {tab === 'Statistics' && <FaChartLine />}
              {tab === 'Interview History' && <FaDesktop />}
              {tab === 'Settings' && <FaCog />}
              <span>{tab}</span>
            </button>
          ))}
        </div>

        {/* Statistics Tab */}
        {activeTab === 'Statistics' && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#161E2E] rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-4 text-[#00E5FF]">Overview</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400">Total Interviews</p>
                  <p className="text-3xl font-bold text-white">12</p>
                </div>
                <div>
                  <p className="text-gray-400">Completed</p>
                  <p className="text-3xl font-bold text-white">9</p>
                </div>
                <div>
                  <p className="text-gray-400">Average Score</p>
                  <p className="text-3xl font-bold text-[#00E5FF]">8.5</p>
                </div>
                <div>
                  <p className="text-gray-400">Time Spent</p>
                  <p className="text-3xl font-bold text-white">24 hours</p>
                </div>
              </div>
            </div>
            <div className="bg-[#161E2E] rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-4 text-[#00E5FF]">Performance Analysis</h2>
              <div>
                <h3 className="text-gray-400 mb-2">Strong Categories</h3>
                <div className="flex space-x-2 mb-4">
                  {['Cloud Computing', 'DevOps', 'System Design'].map((category) => (
                    <span 
                      key={category} 
                      className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <h3 className="text-gray-400 mb-2">Areas for Improvement</h3>
                <div className="flex space-x-2">
                  {['Advanced Networking', 'Security Protocols'].map((area) => (
                    <span 
                      key={area} 
                      className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-[#161E2E] rounded-2xl p-6 col-span-full">
              <h2 className="text-xl font-semibold mb-4 text-[#00E5FF]">Progress Over Time</h2>
              <div className="w-full h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={progressData}>
                    <XAxis dataKey="month" stroke="#00E5FF" />
                    <YAxis stroke="#00E5FF" domain={[6, 10]} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0E1525', border: '1px solid #00E5FF' }}
                      labelStyle={{ color: '#00E5FF' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="score" 
                      stroke="#00E5FF" 
                      strokeWidth={3}
                      dot={{ stroke: '#00E5FF', strokeWidth: 2, fill: '#0E1525' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* Interview History Tab */}
        {activeTab === 'Interview History' && (
          <div className="space-y-4">
            {interviewHistory.map((interview) => (
              <div 
                key={interview.title} 
                className="bg-[#161E2E] rounded-2xl p-6 flex justify-between items-center"
              >
                <div>
                  <h3 className="text-xl font-semibold text-white">{interview.title}</h3>
                  <p className="text-gray-400">{interview.company} • {interview.date} • {interview.duration}</p>
                  <p className="text-gray-300 mt-2">{interview.feedback}</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#00E5FF]">{interview.score}/10</p>
                  <button className="mt-2 text-[#00E5FF] hover:underline">View Details</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'Settings' && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#161E2E] rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-4 text-[#00E5FF]">Account</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400">Account</p>
                  <button className="text-white hover:text-[#00E5FF]">Manage Account</button>
                </div>
                <div>
                  <p className="text-gray-400">Notifications</p>
                  <button className="text-white hover:text-[#00E5FF]">Manage Notifications</button>
                </div>
                <div>
                  <p className="text-gray-400">Privacy</p>
                  <button className="text-white hover:text-[#00E5FF]">Privacy Settings</button>
                </div>
                <div>
                  <p className="text-gray-400">Help & Support</p>
                  <button className="text-white hover:text-[#00E5FF]">Get Support</button>
                </div>
              </div>
            </div>
            <div className="bg-[#161E2E] rounded-2xl p-6">
              <h2 className="text-xl font-semibold mb-4 text-[#00E5FF]">Account Settings</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-gray-400 block mb-2">Interview Preferences</label>
                  <select className="w-full bg-[#0E1525] text-white rounded-lg px-4 py-2">
                    <option>45 minutes</option>
                    <option>60 minutes</option>
                    <option>90 minutes</option>
                  </select>
                </div>
                <div>
                  <label className="text-gray-400 block mb-2">Feedback Detail Level</label>
                  <select className="w-full bg-[#0E1525] text-white rounded-lg px-4 py-2">
                    <option>Detailed</option>
                    <option>Brief</option>
                    <option>Comprehensive</option>
                  </select>
                </div>
                <div>
                  <label className="text-gray-400 block mb-2">Notification Settings</label>
                  <div className="space-y-2">
                    {['Interview recording', 'Email notifications', 'Interview reminders', 'New features'].map((setting) => (
                      <div key={setting} className="flex items-center">
                        <input 
                          type="checkbox" 
                          defaultChecked 
                          className="mr-2 bg-[#00E5FF] text-[#00E5FF] rounded"
                        />
                        <span className="text-white">{setting}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="bg-[#00E5FF] text-[#0E1525] px-4 py-2 rounded-lg hover:opacity-90">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfessionalProfile;