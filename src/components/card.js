import React from 'react'

function card() {
  return (
    <div>
    <section class="card-area">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="single-card card-style-two">
              <div class="row no-gutters align-items-center">
                <div class="col-sm-6">
                  <div class="card-image">
                    <img src="../assets/images/card/card-2.jpg" alt="Image" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="card-content">
                    <h4 class="card-title">
                      <a href="javascript:void(0)">Item title is here</a>
                    </h4>
                    <p class="text">
                      Short description for the ones who look for something new
                    </p>

                    <div class="card-btn rounded-buttons">
                      <a
                        class="btn primary-btn rounded-full"
                        href="javascript:void(0)"
                      >
                        GET STARTED
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
export default card