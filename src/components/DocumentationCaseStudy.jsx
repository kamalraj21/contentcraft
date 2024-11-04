import React, { useState } from 'react';
import { ChevronLeft, Search, FolderOpen, FolderCheck, CheckCircle, Clock } from 'lucide-react';

const DocumentationCaseStudy = ({ 
  sectionNavLinks,
  projectInfo,
  challenge,
  strategy,
  implementation,
  outcomes,
  insights
}) => {
  const [selectedView, setSelectedView] = useState('after');

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Left Side Navigation */}
            <div className="flex items-center space-x-8">
              <a 
                href="/contentcraft" 
                className="flex items-center text-gray-500 hover:text-blue-600 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                Back Home
              </a>
            </div>

            {/* Right Side Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {sectionNavLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-16">
        <div className="max-w-2xl mx-auto px-4">
          {/* Opening */}
          <div className="mb-32">
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-blue-600">{projectInfo.client} • {projectInfo.timeline}</p>
                <h1 className="text-4xl font-bold text-gray-900">
                  Modernizing Technical Documentation
                </h1>
              </div>
              
              <div className="h-px w-16 bg-gray-200"></div>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                How we transformed fragmented documentation into a unified knowledge hub, 
                improving user satisfaction by 35% and reducing maintenance overhead by 40%.
              </p>
            </div>
          </div>

          {/* Challenge Section */}
          <div id="challenge" className="mb-32">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">Challenge</h2>
              <p className="text-gray-600 leading-relaxed">{challenge.description}</p>

              <div className="grid gap-4">
                {challenge.painPoints.map((point, index) => (
                  <div key={index} className="p-4 bg-red-50 rounded-lg">
                    <div className="flex items-start">
                      <span className="text-gray-700">{point}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Strategy Section */}
          <div id="strategy" className="mb-32">
            <div className="space-y-16">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">Strategy</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our approach focused on creating a scalable and user-centered documentation system.
                </p>
              </div>

              <div className="grid gap-16">
                {strategy.steps.map((step, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                        {index + 1}
                      </div>
                      <p className="text-lg font-medium text-gray-900">{step.action}</p>
                    </div>
                    <p className="text-gray-600 leading-relaxed pl-11">
                      {step.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div id="results" className="mb-32">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">Results</h2>
                <p className="text-gray-600 leading-relaxed">
                  See how our documentation system evolved to better serve users.
                </p>
              </div>

              {/* View Toggle */}
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setSelectedView('before')}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedView === 'before' 
                      ? 'bg-red-50 text-red-600' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Before
                </button>
                <button
                  onClick={() => setSelectedView('after')}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedView === 'after' 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  After
                </button>
              </div>

              {/* Interface Mockup */}
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                {selectedView === 'before' ? (
                  // Before Interface
                  <div className="bg-white">
                    <div className="border-b border-gray-200 p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium text-gray-900">Documentation Portal</h3>
                        <span className="text-sm text-gray-500">Last updated: Unknown</span>
                      </div>
                    </div>
                    <div className="p-6 space-y-6">
                      <div className="space-y-4">
                        <div className="border border-gray-200 rounded p-3">
                          <input 
                            type="text"
                            className="w-full text-sm text-gray-600"
                            placeholder="Search documentation..."
                            disabled
                          />
                        </div>
                        
                        <div className="space-y-4">
                          <div className="p-4 bg-gray-50 rounded">
                            <p className="text-sm text-gray-400">Last updated: Unknown</p>
                            <h4 className="text-gray-900 mt-2">API Reference</h4>
                            <p className="text-sm text-gray-600 mt-1">Technical documentation for API v2.0</p>
                          </div>
                          
                          <div className="p-4 bg-gray-50 rounded">
                            <p className="text-sm text-gray-400">Last updated: 6 months ago</p>
                            <h4 className="text-gray-900 mt-2">User Guide</h4>
                            <p className="text-sm text-gray-600 mt-1">Getting started with the platform</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // After Interface
                  <div className="bg-white">
                    <div className="border-b border-gray-200 p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium text-gray-900">Documentation Hub</h3>
                        <span className="text-sm text-gray-500">Last updated 2 hours ago</span>
                      </div>
                    </div>
                    <div className="p-6 space-y-6">
                      <div className="relative">
                        <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input 
                          type="text"
                          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg"
                          placeholder="Search by task or keyword..."
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-900">Quick Start</h4>
                          <p className="text-sm text-blue-700 mt-1">Get up and running in 5 minutes</p>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-900">Popular Tasks</h4>
                          <p className="text-sm text-green-700 mt-1">Most common user guides</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {['Getting Started', 'API Reference', 'Best Practices'].map((item, index) => (
                          <div 
                            key={index}
                            className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                          >
                            <div className="flex items-center justify-between">
                              <div className="space-y-1">
                                <h4 className="font-medium text-gray-900">{item}</h4>
                                <p className="text-sm text-gray-600">Updated today</p>
                              </div>
                              <Clock className="w-5 h-5 text-gray-400" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <p className="text-sm text-gray-600">
                {selectedView === 'before' ? (
                  "The original documentation was fragmented and difficult to navigate."
                ) : (
                  "The new system provides intuitive navigation and real-time updates."
                )}
              </p>

              {/* Metrics */}
              <div className="grid gap-12 pt-12">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="border-t pt-8">
                    <div className="flex items-baseline gap-8">
                      <p className="text-3xl font-semibold text-blue-600">{outcome.metric}</p>
                      <div className="space-y-1">
                        <p className="font-medium text-gray-900">{outcome.label}</p>
                        <p className="text-gray-600">{outcome.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Insights Section */}
          <div id="insights" className="mb-32">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">Insights</h2>
                <p className="text-gray-600 leading-relaxed">
                  Key learnings from modernizing technical documentation:
                </p>
              </div>

              <div className="space-y-6">
                {insights.map((insight, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">{insight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Closing Quote */}
          <div>
            <div className="space-y-6">
              <div className="h-px w-16 bg-gray-200"></div>
              <p className="text-xl text-gray-600 leading-relaxed">
                "By focusing on user tasks and maintaining a single source of truth, we've created 
                documentation that truly serves its purpose: helping users succeed."
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DocumentationCaseStudy;