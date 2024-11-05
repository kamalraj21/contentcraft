import React, { useState } from 'react';
import { ChevronLeft, AlertCircle, Clock, Check, Search } from 'lucide-react';
import ScrollProgressBar from './ScrollProgressBar';

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
    <div className="min-h-screen bg-gradient-to-r from-violet-200/20 to-pink-200/20">
      <ScrollProgressBar />
      <main className="pt-16 sm:pt-24 pb-24 sm:pb-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Opening */}
          <div className="mb-16 sm:mb-32">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2">
                <p className="text-violet-700 text-sm sm:text-base font-medium">
                  {projectInfo.client} • {projectInfo.timeline}
                </p>
                <h1 className="text-3xl sm:text-4xl font-bold text-violet-900 leading-tight">
                  Modernizing Technical Documentation
                </h1>
              </div>
              
              <div className="h-px w-16 bg-gradient-to-r from-violet-200 to-pink-200"></div>
              
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                How we transformed fragmented documentation into a unified knowledge hub, 
                improving user satisfaction by 35% and reducing maintenance overhead by 40%.
              </p>
            </div>
          </div>

          {/* Challenge Section */}
          <div id="challenge" className="mb-24 sm:mb-32">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-semibold text-violet-900">Challenge</h2>
                <p className="text-slate-600 leading-relaxed">{challenge.description}</p>
              </div>

              <div className="space-y-4">
                {challenge.painPoints.map((point, index) => (
                  <div key={index} className="flex items-center p-4 bg-white/60 backdrop-blur-sm border border-violet-100 rounded-lg hover:bg-white/80 transition-colors duration-300">
                    <AlertCircle className="w-5 h-5 text-violet-700 flex-shrink-0 mr-3" />
                    <p className="text-slate-600">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Strategy Section */}
          <div id="strategy" className="mb-24 sm:mb-32">
            <div className="space-y-12 sm:space-y-16">
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-semibold text-violet-900">Strategy</h2>
                <p className="text-slate-600 leading-relaxed">
                  Our approach focused on creating a scalable and user-centered documentation system.
                </p>
              </div>

              <div className="grid gap-12 sm:gap-16">
                {strategy.steps.map((step, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-200 to-pink-200 flex items-center justify-center text-violet-900 font-medium">
                        {index + 1}
                      </div>
                      <p className="text-lg font-medium text-violet-900">{step.action}</p>
                    </div>
                    <p className="text-slate-600 leading-relaxed pl-11">
                      {step.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div id="results" className="mb-24 sm:mb-32">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-semibold text-violet-900">Results</h2>
                <p className="text-slate-600 leading-relaxed">
                  See how our documentation system evolved to better serve users.
                </p>
              </div>

              {/* View Toggle */}
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setSelectedView('before')}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                    selectedView === 'before' 
                      ? 'bg-gradient-to-r from-violet-200 to-pink-200 text-violet-900 font-medium shadow-sm' 
                      : 'text-slate-600 hover:text-violet-900 hover:bg-white/60'
                  }`}
                >
                  Before
                </button>
                <button
                  onClick={() => setSelectedView('after')}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                    selectedView === 'after' 
                      ? 'bg-gradient-to-r from-violet-200 to-pink-200 text-violet-900 font-medium shadow-sm' 
                      : 'text-slate-600 hover:text-violet-900 hover:bg-white/60'
                  }`}
                >
                  After
                </button>
              </div>

              {/* Interface Mockup */}
              <div className="border border-violet-200 rounded-xl overflow-hidden shadow-sm bg-white/80 backdrop-blur-sm">
                {selectedView === 'before' ? (
                  // Before Interface
                  <div>
                    <div className="border-b border-violet-200 p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium text-violet-900">Documentation Portal</h3>
                        <span className="text-sm text-slate-600">Last updated: Unknown</span>
                      </div>
                    </div>
                    <div className="p-6 space-y-6">
                      <div className="space-y-4">
                        <div className="border border-violet-200 rounded-lg p-3">
                          <input 
                            type="text"
                            className="w-full text-sm text-slate-600"
                            placeholder="Search documentation..."
                            disabled
                          />
                        </div>
                        
                        <div className="space-y-4">
                          <div className="p-4 bg-white/60 border border-violet-100 rounded-lg">
                            <p className="text-sm text-slate-500">Last updated: Unknown</p>
                            <h4 className="text-violet-900 mt-2">API Reference</h4>
                            <p className="text-sm text-slate-600 mt-1">Technical documentation for API v2.0</p>
                          </div>
                          
                          <div className="p-4 bg-white/60 border border-violet-100 rounded-lg">
                            <p className="text-sm text-slate-500">Last updated: 6 months ago</p>
                            <h4 className="text-violet-900 mt-2">User Guide</h4>
                            <p className="text-sm text-slate-600 mt-1">Getting started with the platform</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // After Interface
                  <div>
                    <div className="border-b border-violet-200 p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium text-violet-900">Documentation Hub</h3>
                        <span className="text-sm text-slate-600">Last updated 2 hours ago</span>
                      </div>
                    </div>
                    <div className="p-6 space-y-6">
                      <div className="relative">
                        <Search className="absolute left-3 top-3 w-5 h-5 text-violet-700" />
                        <input 
                          type="text"
                          className="w-full pl-10 pr-4 py-2 border border-violet-200 rounded-lg bg-white/60"
                          placeholder="Search by task or keyword..."
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-gradient-to-r from-violet-200/30 to-pink-200/30 rounded-lg border border-violet-100">
                          <h4 className="font-medium text-violet-900">Quick Start</h4>
                          <p className="text-sm text-slate-600 mt-1">Get up and running in 5 minutes</p>
                        </div>
                        <div className="p-4 bg-gradient-to-r from-violet-200/30 to-pink-200/30 rounded-lg border border-violet-100">
                          <h4 className="font-medium text-violet-900">Popular Tasks</h4>
                          <p className="text-sm text-slate-600 mt-1">Most common user guides</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {['Getting Started', 'API Reference', 'Best Practices'].map((item, index) => (
                          <div 
                            key={index}
                            className="p-4 bg-white/60 border border-violet-100 rounded-lg hover:bg-white/80 transition-colors cursor-pointer"
                          >
                            <div className="flex items-center justify-between">
                              <div className="space-y-1">
                                <h4 className="font-medium text-violet-900">{item}</h4>
                                <p className="text-sm text-slate-600">Updated today</p>
                              </div>
                              <Clock className="w-5 h-5 text-violet-700" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <p className="text-sm text-slate-600">
                {selectedView === 'before' ? (
                  "The original documentation was fragmented and difficult to navigate."
                ) : (
                  "The new system provides intuitive navigation and real-time updates."
                )}
              </p>

              {/* Metrics */}
              <div className="grid gap-6 sm:gap-12 pt-8 sm:pt-12">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="border-t border-violet-200 pt-6 sm:pt-8">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-8">
                      <p className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-violet-700 to-pink-600 bg-clip-text text-transparent mb-2 sm:mb-0">
                        {outcome.metric}
                      </p>
                      <div className="space-y-1">
                        <p className="font-medium text-violet-900">{outcome.label}</p>
                        <p className="text-slate-600">{outcome.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Insights Section */}
          <div id="insights" className="mb-24 sm:mb-32">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-semibold text-violet-900">Insights</h2>
                <p className="text-slate-600 leading-relaxed">
                  Key learnings from modernizing technical documentation:
                </p>
              </div>

              <div className="space-y-6">
                {insights.map((insight, index) => (
                  <div key={index} className="flex items-start p-4 bg-white/60 backdrop-blur-sm border border-violet-100 rounded-lg hover:bg-white/80 transition-colors duration-300">
                    <Check className="w-5 h-5 text-violet-700 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-slate-600">{insight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Closing Quote */}
          <div>
            <div className="space-y-6">
              <div className="h-px w-16 bg-gradient-to-r from-violet-200 to-pink-200"></div>
              <p className="text-xl text-slate-600 leading-relaxed italic">
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

