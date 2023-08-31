import React from "react";

const Product = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            One place to manage all your social media
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Stress-free social media management
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Let's face it, client-agency workflow can be a pain in the backside.
            Sharing post-drafts and content calendars, never-ending feedback
            loops, blame-game when a mistake happens...
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" />
                  </svg>
                </div>
                One place to manage all your social media
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Schedule all your client's social media profiles from a single
                drag-and-drop calendar. Share the calendar with them to keep
                them up to date on what is going on.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" />
                  </svg>
                </div>
                Organize your team across roles & places
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Create the perfect post together with designers, copywriters,
                editors, and translators in minutes. Working across remote teams
                has never been easier
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path />
                  </svg>
                </div>
                Get posts approved with a single click or comment
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Make sure your content is approved before publishing thanks to a
                fast and straightforward approval process. Say bye to
                never-ending email loops and communication errors.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" />
                  </svg>
                </div>
                Treat your team to a user-friendly workflow
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                If there's one thing people get excited about right away, it's
                how easy to use Kontentino is. A robust set of features is
                smartly placed so that both pro and beginner users are
                productive from day 1.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Product;
