import React, { useState } from 'react';
import { ChevronLeft, Settings, AlertCircle, Check, HelpCircle, Clock, Medal, BookOpen, Play, ArrowRight, CheckCircle, Menu } from 'lucide-react';

const MicrolearningCaseStudy = ({ sectionNavLinks, projectInfo, challenge, strategy, outcomes, insights }) => {
  const [selectedView, setSelectedView] = useState('after');

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Left Side Navigation */}
            <div className="flex items-center space-x-4 sm:space-x-8">
              <a 
                href="/contentcraft" 
                className="flex items-center text-gray-500 hover:text-blue-600 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                <span className="text-sm sm:text-base">Home</span>
              </a>
            </div>

            {/* Right Side Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              {sectionNavLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-sm lg:text-base text-gray-500 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16 sm:pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Opening */}
          <div className="mb-16 sm:mb-32">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2">
                <p className="text-blue-600 text-sm sm:text-base">
                  {projectInfo.client} • {projectInfo.timeline}
                </p>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                 Byte-Sized Brilliance: Making Tech Learning Effortless
                </h1>
              </div>
              
              <div className="h-px w-16 bg-gray-200"></div>
              
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                How we transformed dense technical documentation into engaging microlearning experiences, 
                reducing learning time by 50% and tripling developer engagement.
              </p>
            </div>
          </div>

          {/* Challenge Section */}
          <div id="challenge" className="mb-24 sm:mb-32">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Challenge</h2>
                <p className="text-gray-600 leading-relaxed">{challenge.description}</p>
              </div>

              <div className="space-y-4">
                {challenge.painPoints.map((point, index) => (
                  <div key={index} className="flex items-center p-4 bg-red-50 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mr-3" />
                    <p className="text-gray-600">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Strategy Section */}
          <div id="strategy" className="mb-24 sm:mb-32">
            <div className="space-y-12 sm:space-y-16">
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Strategy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We studied how developers actually learn and retain information, then rebuilt our 
                  content around those patterns.
                </p>
              </div>

              <div className="grid gap-12 sm:gap-16">
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
          <div id="results" className="mb-24 sm:mb-32">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Results</h2>
                <p className="text-gray-600 leading-relaxed">
                  The redesigned microlearning experience has transformed how teams learn and retain information.
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
                        <h3 className="text-lg font-medium text-gray-900">API Documentation</h3>
                        <Menu className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                    <div className="p-6 space-y-6">
                      <div className="prose prose-sm max-w-none">
                        <h4 className="text-gray-900 font-medium">Introduction to APIs</h4>
                        <p className="text-gray-600 mt-2">
                          This comprehensive guide covers all aspects of our API infrastructure, 
                          including authentication mechanisms, endpoint specifications, rate limiting 
                          policies, and error handling procedures...
                        </p>
                        <div className="mt-4 text-gray-400 text-sm">
                          Estimated reading time: 45 minutes
                        </div>
                      </div>
                      
                      <div className="border-t pt-6">
                        <h5 className="font-medium text-gray-900">Table of Contents</h5>
                        <ul className="mt-2 space-y-2 text-sm text-gray-600">
                          <li>1. Authentication Overview (10 pages)</li>
                          <li>2. Endpoint Reference (25 pages)</li>
                          <li>3. Rate Limiting (8 pages)</li>
                          <li>4. Error Codes (12 pages)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  // After Interface
                  <div className="bg-white">
                    <div className="border-b border-gray-200 p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium text-gray-900">Getting Started with APIs</h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">2/5 completed</span>
                          <Medal className="w-5 h-5 text-yellow-400" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6 space-y-6">
                      <div className="grid gap-4">
                        <div className="p-4 bg-green-50 rounded-lg flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium text-green-900">Authentication Basics</h4>
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            </div>
                            <div className="flex items-center gap-2 text-sm text-green-700">
                              <Clock className="w-4 h-4" />
                              <span>5 min • Completed</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 bg-blue-50 rounded-lg flex items-center justify-between">
                          <div className="space-y-1">
                            <h4 className="font-medium text-blue-900">Your First API Call</h4>
                            <div className="flex items-center gap-2 text-sm text-blue-700">
                              <Play className="w-4 h-4" />
                              <span>5 min • Interactive</span>
                            </div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-blue-400" />
                        </div>

                        <div className="p-4 border border-gray-100 rounded-lg">
                          <div className="space-y-1">
                            <h4 className="font-medium text-gray-900">Handling Responses</h4>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Clock className="w-4 h-4" />
                              <span>5 min • Up next</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <BookOpen className="w-4 h-4" />
                          <span>Progress: 40% • Est. time remaining: 15 min</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Metrics */}
              <div className="grid gap-6 sm:gap-12 pt-8 sm:pt-12">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="border-t pt-6 sm:pt-8">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-8">
                      <p className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-2 sm:mb-0">
                        {outcome.metric}
                      </p>
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
          <div id="insights" className="mb-24 sm:mb-32">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Insights</h2>
                <p className="text-gray-600 leading-relaxed">
                  Key learnings from transforming technical learning:
                </p>
              </div>

              <div className="space-y-6">
                {insights.map((insight, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
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
                "By embracing microlearning principles, we didn't just improve documentation – 
                we transformed how developers learn and grow at Intel."
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MicrolearningCaseStudy;