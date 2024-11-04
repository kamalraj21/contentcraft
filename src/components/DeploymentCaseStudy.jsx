import React, { useState } from 'react';
import { ChevronLeft, Settings, AlertCircle, Check, HelpCircle } from 'lucide-react';

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
                <span className="text-sm sm:text-base">Back Home</span>
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
                  Simplifying AI Deployment
                </h1>
              </div>
              
              <div className="h-px w-16 bg-gray-200"></div>
              
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                How we transformed complex AI deployment workflows into an intuitive experience,
                reducing deployment time by 30% and improving user satisfaction by 85%.
              </p>
            </div>
          </div>

          {/* Challenge Section */}
          <div id="challenge" className="mb-24 sm:mb-32">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Challenge</h2>
              <p className="text-gray-600 leading-relaxed">{challenge.description}</p>

              <div className="grid gap-4">
                {challenge.painPoints.map((point, index) => (
                  <div key={index} className="p-4 bg-red-50 rounded-lg">
                    <div className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
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
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Strategy</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our approach focused on creating an intuitive experience while maintaining
                  powerful functionality for advanced users.
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
                  The redesigned deployment experience has transformed how teams deploy AI models.
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
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm mx-0 sm:-mx-6 lg:-mx-8">
                {selectedView === 'before' ? (
                  // Before Interface
                  <div className="bg-white">
                    <div className="border-b border-gray-200 p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium text-gray-900">Model Deployment</h3>
                        <Settings className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                    <div className="p-6 space-y-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="block text-sm text-gray-700">
                            Container Registry Path
                          </label>
                          <input 
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="gcr.io/project-id/model-name:version"
                            disabled
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="block text-sm text-gray-700">
                            Resource Configuration
                          </label>
                          <textarea 
                            className="w-full p-2 border border-gray-300 rounded font-mono text-sm"
                            rows={4}
                            defaultValue={`{
  "compute": "n1-standard-4",
  "min_replicas": 1,
  "max_replicas": 5,
  "accelerator": "NVIDIA_TESLA_T4"
}`}
                            disabled
                          />
                        </div>

                        <div className="flex items-start gap-2 text-red-600 text-sm">
                          <AlertCircle className="w-4 h-4 mt-0.5" />
                          <span>Invalid configuration. Check compute requirements.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // After Interface
                  <div className="bg-white">
                    <div className="border-b border-gray-200 p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium text-gray-900">Deploy Your Model</h3>
                        <button className="text-sm text-blue-600 hover:text-blue-700">
                          Advanced Settings
                        </button>
                      </div>
                    </div>
                    <div className="p-6 space-y-6">
                      <div className="p-4 bg-blue-50 rounded-lg space-y-2">
                        <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
                          <Check className="w-4 h-4" />
                          <span>Recommended Configuration</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Based on your model size and traffic patterns, we've selected optimal settings
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <label className="block text-sm font-medium text-gray-700">
                              Computing Power
                            </label>
                            <p className="text-sm text-gray-500">4 CPUs, 16GB RAM</p>
                          </div>
                          <button className="p-1 text-gray-400 hover:text-gray-600">
                            <HelpCircle className="w-5 h-5" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <label className="block text-sm font-medium text-gray-700">
                              Auto-scaling
                            </label>
                            <p className="text-sm text-gray-500">1-5 instances</p>
                          </div>
                          <button className="p-1 text-gray-400 hover:text-gray-600">
                            <HelpCircle className="w-5 h-5" />
                          </button>
                        </div>
                      </div>

                      <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Deploy Model
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <p className="text-sm text-gray-600">
                {selectedView === 'before' ? (
                  "The original interface exposed technical configurations upfront, overwhelming users with choices."
                ) : (
                  "The new interface uses smart defaults and progressive disclosure, showing complex options only when needed."
                )}
              </p>

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
                  Key learnings from simplifying complex deployment workflows:
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