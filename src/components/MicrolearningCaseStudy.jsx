import React, { useState } from 'react';
import { ChevronLeft, Clock, Medal, Menu, BookOpen, Play, ArrowRight, CheckCircle, AlertCircle, Check } from 'lucide-react';

const MicrolearningCaseStudy = ({ sectionNavLinks, projectInfo, challenge, strategy, outcomes, insights }) => {
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
                  {/* Your title */}
                </h1>
              </div>
              
              <div className="h-px w-16 bg-gray-200"></div>
              
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                {/* Your description */}
              </p>
            </div>
          </div>

          {/* Challenge Section */}
          <div id="challenge" className="mb-32">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">Challenge</h2>
              <p className="text-gray-600 leading-relaxed">
                Intel's technical documentation was comprehensive but overwhelming. New developers 
                struggled to find entry points, and experienced developers had trouble keeping up 
                with updates.
              </p>

              <div className="pl-6 border-l-2 border-red-100 space-y-6">
                <div className="space-y-2">
                  <p className="text-2xl font-semibold text-red-600">15%</p>
                  <p className="text-gray-600">Documentation completion rate</p>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-semibold text-red-600">6 weeks</p>
                  <p className="text-gray-600">Average onboarding time</p>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-semibold text-red-600">30%</p>
                  <p className="text-gray-600">Knowledge retention rate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Strategy Section */}
          <div id="strategy" className="mb-32">
            <div className="space-y-16">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">Strategy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We studied how developers actually learn and retain information, then rebuilt our 
                  content around those patterns.
                </p>
              </div>

              <div className="grid gap-16">
                <div className="space-y-3">
                  <p className="text-lg font-medium text-gray-900">Learning Pattern Analysis</p>
                  <p className="text-gray-600 leading-relaxed">
                    Through comprehensive research, we uncovered how developers naturally consume 
                    and retain technical information.
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-lg font-medium text-gray-900">Microlearning Architecture</p>
                  <p className="text-gray-600 leading-relaxed">
                    We broke down complex topics into focused, 5-minute learning modules that 
                    build upon each other.
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-lg font-medium text-gray-900">Interactive Components</p>
                  <p className="text-gray-600 leading-relaxed">
                    Each module includes hands-on exercises and real-world examples to reinforce learning.
                  </p>
                </div>
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
                        </div>
                      </div>
                    </div>
                    <div className="p-6 space-y-6">
                      <div className="grid gap-4">
                        <div className="p-4 bg-green-50 rounded-lg">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium text-green-900">Authentication Basics</h4>
                            </div>
                            <div className="text-sm text-green-700">
                              <span>5 min • Completed</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 bg-blue-50 rounded-lg">
                          <div className="space-y-1">
                            <h4 className="font-medium text-blue-900">Your First API Call</h4>
                            <div className="text-sm text-blue-700">
                              <span>5 min • Interactive</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 border border-gray-100 rounded-lg">
                          <div className="space-y-1">
                            <h4 className="font-medium text-gray-900">Handling Responses</h4>
                            <div className="text-sm text-gray-600">
                              <span>5 min • Up next</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-sm text-gray-600">
                          <span>Progress: 40% • Est. time remaining: 15 min</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <p className="text-sm text-gray-600">
                {selectedView === 'before' ? (
                  "The original documentation presented everything at once, overwhelming users with information."
                ) : (
                  "The new interface breaks content into achievable modules with clear progress tracking."
                )}
              </p>

              {/* Continue with metrics and other sections */}
            </div>
          </div>

          {/* Insights Section */}
          <div id="insights" className="mb-32">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">Insights</h2>
              <div className="grid gap-12">
                <div className="border-t pt-8">
                  <div className="flex items-baseline gap-8">
                    <p className="text-3xl font-semibold text-blue-600">50%</p>
                    <div className="space-y-1">
                      <p className="font-medium text-gray-900">Faster Learning</p>
                      <p className="text-gray-600">Reduction in time-to-competency</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-8">
                  <div className="flex items-baseline gap-8">
                    <p className="text-3xl font-semibold text-blue-600">85%</p>
                    <div className="space-y-1">
                      <p className="font-medium text-gray-900">Better Retention</p>
                      <p className="text-gray-600">Improvement in knowledge retention</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-8">
                  <div className="flex items-baseline gap-8">
                    <p className="text-3xl font-semibold text-blue-600">3x</p>
                    <div className="space-y-1">
                      <p className="font-medium text-gray-900">Higher Engagement</p>
                      <p className="text-gray-600">Increase in documentation completion</p>
                    </div>
                  </div>
                </div>
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