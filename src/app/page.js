import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className="py-10 space-y-16">
      {/* Hero Section */}
      <div className="hero bg-base-200 rounded-3xl p-10 mt-6 shadow-sm">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome to Next App</h1>
            <p className="py-6 whitespace-pre-wrap">
              This is the home page of your practice application. Enjoy building great things!
            </p>
            <Link href="/foods" className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </div>

      {/* Dummy Cards Section */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="card bg-base-100 shadow-xl border border-base-200">
              <div className="card-body">
                <h2 className="card-title">Feature {item}</h2>
                <p>This is a dummy description for feature card number {item} to showcase layout structure.</p>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-outline btn-sm">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;