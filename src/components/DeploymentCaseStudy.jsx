import React, { useState } from 'react';
import { ChevronLeft, Settings, AlertCircle, Check, HelpCircle } from 'lucide-react';
import ScrollProgressBar from './ScrollProgressBar'; 

const DeploymentCaseStudy = ({ 
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
                  Simplifying AI Deployment
                </h1>
              </div>
              
              <div className="h-px w-16 bg-gradient-to-r from-violet-200 to-pink-200"></div>
              
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                How we transformed complex AI deployment workflows into an intuitive experience,
                reducing deployment time by 30% and improving user satisfaction by 85%.
              </p>
            </div>
          </div>

          {/* Challenge Section */}
          <div id="challenge" className="mb-24 sm:mb-32">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-3xl font-semibold text-violet-900">Challenge</h2>
              <p className="text-slate-600 leading-relaxed">{challenge.description}</p>

              <div className="grid gap-4">
                {challenge.painPoints.map((point, index) => (
                  <div key={index} className="p-4 bg-white/60 backdrop-blur-sm border border-violet-100 rounded-lg hover:bg-white/80 transition-colors duration-300">
                    <div className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-violet-700 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-slate-600">{point}</span>
                    </div>
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
                  Our approach focused on creating an intuitive experience while maintaining
                  powerful functionality for advanced users.
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
                  The redesigned deployment experience has transformed how teams deploy AI models.
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
                        <h3 className="text-lg font-medium text-violet-900">Deployment Settings</h3>
                        <Settings className="w-5 h-5 text-slate-400" />
                      </div>
                    </div>
                    <div className="p-6 space-y-6">
                      {/* Complex Configuration UI */}
                      <div className="space-y-4">
                        <div className="p-4 border border-violet-100 rounded-lg bg-white/60">
                          <label className="block text-sm font-medium text-violet-900 mb-2">
                            Instance Configuration
                          </label>
                          <input 
                            type="text"
                            className="w-full p-2 border border-violet-200 rounded bg-white"
                            placeholder="e.g., t2.micro"
                          />
                        </div>
                        
                        <div className="p-4 border border-violet-100 rounded-lg bg-white/60">
                          <label className="block text-sm font-medium text-violet-900 mb-2">
                            Memory Allocation
                          </label>
                          <input 
                            type="text"
                            className="w-full p-2 border border-violet-200 rounded bg-white"
                            placeholder="Enter RAM in GB"
                          />
                        </div>
                      </div>

                      <button className="w-full py-2 px-4 bg-gradient-to-r from-violet-200 to-pink-200 hover:from-violet-300 hover:to-pink-300 text-violet-900 rounded-lg transition-all duration-300">
                        Deploy
                      </button>
                    </div>
                  </div>
                ) : (
                  // After Interface
                  <div>
                    <div className="border-b border-violet-200 p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium text-violet-900">Quick Deploy</h3>
                        <Settings className="w-5 h-5 text-slate-400" />
                      </div>
                    </div>
                    <div className="p-6 space-y-6">
                      <div className="p-4 bg-gradient-to-r from-violet-200/30 to-pink-200/30 rounded-lg border border-violet-100 space-y-2">
                        <div className="flex items-center gap-2 text-violet-700 text-sm font-medium">
                          <Check className="w-4 h-4" />
                          <span>Recommended Configuration</span>
                        </div>
                        <p className="text-sm text-slate-600">
                          Based on your model size and traffic patterns, we've selected optimal settings
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-white/60 rounded-lg border border-violet-100">
                          <div className="space-y-1">
                            <label className="block text-sm font-medium text-violet-900">
                              Computing Power
                            </label>
                            <p className="text-sm text-slate-600">4 CPUs, 16GB RAM</p>
                          </div>
                          <button className="p-1 text-slate-400 hover:text-violet-700 transition-colors">
                            <HelpCircle className="w-5 h-5" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-white/60 rounded-lg border border-violet-100">
                          <div className="space-y-1">
                            <label className="block text-sm font-medium text-violet-900">
                              Auto-scaling
                            </label>
                            <p className="text-sm text-slate-600">1-5 instances</p>
                          </div>
                          <button className="p-1 text-slate-400 hover:text-violet-700 transition-colors">
                            <HelpCircle className="w-5 h-5" />
                          </button>
                        </div>
                      </div>

                      <button className="w-full py-2 bg-gradient-to-r from-violet-200 to-pink-200 hover:from-violet-300 hover:to-pink-300 text-violet-900 rounded-lg transition-all duration-300">
                        Deploy Model
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <p className="text-sm text-slate-600">
                {selectedView === 'before' ? (
                  "The original interface exposed technical configurations upfront, overwhelming users with choices."
                ) : (
                  "The new interface uses smart defaults and progressive disclosure, showing complex options only when needed."
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
                  Key learnings from simplifying complex deployment workflows:
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
                "Technical complexity doesn't have to mean complicated user experience. 
                With thoughtful content design, we can make powerful tools accessible to everyone."
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DeploymentCaseStudy;