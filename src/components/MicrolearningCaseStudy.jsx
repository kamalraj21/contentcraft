import React, { useState } from 'react';
import { Clock, Medal, Menu, BookOpen, Play, ArrowRight, CheckCircle, AlertCircle, Check } from 'lucide-react';
import ScrollProgressBar from './ScrollProgressBar'; 

const MicrolearningCaseStudy = ({ projectInfo, challenge, strategy, outcomes, insights }) => {
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
                  Byte-Sized Brilliance: Making Tech Learning Effortless
                </h1>
              </div>
              
              <div className="h-px w-16 bg-gradient-to-r from-violet-200 to-pink-200"></div>
              
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                How we transformed dense technical documentation into engaging microlearning experiences, 
                reducing learning time by 50% and tripling developer engagement.
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
                  We studied how developers actually learn and retain information, then rebuilt our 
                  content around those patterns.
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
                  The redesigned microlearning experience has transformed how teams learn and retain information.
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

              {/* Learning Interface Mockup */}
              <div className="border border-violet-200 rounded-xl overflow-hidden shadow-sm bg-white/80 backdrop-blur-sm">
                {selectedView === 'before' ? (
                  // Before Interface - Keeping original content
                  <div>
                    <div className="border-b border-violet-200 p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium text-violet-900">API Documentation</h3>
                        <Menu className="w-5 h-5 text-slate-400" />
                      </div>
                    </div>
                    <div className="p-6 space-y-6">
                      <div className="prose prose-slate max-w-none">
                        <p className="text-slate-600">
                          Long blocks of technical content that require significant time to read and understand...
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  // After Interface - Keeping original content with updated styling
                  <div>
                    <div className="border-b border-violet-200 p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium text-violet-900">API Basics</h3>
                        <div className="flex items-center gap-2">
                          <Medal className="w-5 h-5 text-violet-700" />
                          <span className="text-sm text-violet-700 font-medium">2/5 Complete</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 space-y-6">
                      {/* Learning Modules */}
                      <div className="space-y-4">
                        <div className="p-4 bg-violet-50/80 rounded-lg border border-violet-100">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-violet-700" />
                              <h4 className="font-medium text-violet-900">Authentication Basics</h4>
                            </div>
                            <span className="text-sm text-violet-700 font-medium">Completed</span>
                          </div>
                        </div>

                        <div className="p-4 bg-gradient-to-r from-violet-200/30 to-pink-200/30 rounded-lg border border-violet-100">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <Play className="w-5 h-5 text-violet-700" />
                              <h4 className="font-medium text-violet-900">Making Your First API Call</h4>
                            </div>
                            <span className="text-sm text-violet-700 font-medium">In Progress</span>
                          </div>
                        </div>

                        <div className="p-4 bg-white/60 rounded-lg border border-violet-100">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <BookOpen className="w-5 h-5 text-slate-400" />
                              <h4 className="font-medium text-violet-900">Error Handling</h4>
                            </div>
                            <span className="text-sm text-slate-600">Up Next</span>
                          </div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="bg-violet-50/80 rounded-lg p-4 border border-violet-100">
                        <div className="flex items-center justify-between text-sm text-violet-700 mb-2">
                          <span className="font-medium">Progress: 40%</span>
                          <span>Est. time remaining: 15 min</span>
                        </div>
                        <div className="h-2 bg-violet-100 rounded-full">
                          <div className="h-2 w-2/5 bg-gradient-to-r from-violet-200 to-pink-200 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

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
                  Key learnings from transforming technical learning:
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
                "By embracing microlearning principles, we didn't just improve documentation – 
                we transformed how developers learn and grow."
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MicrolearningCaseStudy;