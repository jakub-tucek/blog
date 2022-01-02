import type { FC } from 'react';
import React from 'react';

export const Footer: FC = () => {
  return (
    <>
      <div className="page-footer pt-5">
        <div className="form-holder">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-5 left">
                y
              </div>
              <div className="col-xl-5 col-lg-6 right form-holder-container" data-sal="fade">
                x
              </div>
            </div>
          </div>
        </div>
        <footer className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <p className="text-white">
                  x
                </p>
              </div>
            </div>
            <div className="footer-nav mt-5">
              <div className="row justify-content-between">
                <div className="col-lg-8 left d-flex justify-content-between">
                  <a href="/about">About</a>
                  <a href="/">Home</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
