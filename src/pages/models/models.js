import React from "react";
import { Link } from "react-router-dom";
import image from "../../images/trending.jpg"

const models = () => {
  return (
    <>
      <section style={{ marginTop: "100px" }}>
        <div class="container">
          <div class="row text-center">
            <div class="col-xl-3 col-sm-6 mb-5">
              <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 class="mb-0">Manuella Nevoresky</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                <ul class="social mb-0 list-inline mt-3">
                  <li class="list-inline-item"><Link href="#" class="social-link"><i class="fab fa-facebook-f"></i></Link></li>
                  <li class="list-inline-item"><Link href="#" class="social-link"><i class="fab fa-twitter"></i></Link></li>
                  <li class="list-inline-item"><Link href="#" class="social-link"><i class="fab fa-instagram"></i></Link></li>
                  <li class="list-inline-item"><Link href="#" class="social-link"><i class="fab fa-linkedin"></i></Link></li>
                </ul>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-5">
              <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-2.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 class="mb-0">Samuel Hardy</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                <ul class="social mb-0 list-inline mt-3">
                  <li class="list-inline-item"><Link href="#" class="social-link"><i class="fab fa-facebook-f"></i></Link></li>
                  <li class="list-inline-item"><Link href="#" class="social-link"><i class="fab fa-twitter"></i></Link></li>
                  <li class="list-inline-item"><Link href="#" class="social-link"><i class="fab fa-instagram"></i></Link></li>
                  <li class="list-inline-item"><Link href="#" class="social-link"><i class="fab fa-linkedin"></i></Link></li>
                </ul>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-5">
              <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-1.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 class="mb-0">Tom Sunderland</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                <ul class="social mb-0 list-inline mt-3">
                  <li class="list-inline-item"><Link href="#" class="social-link"><i class="fab fa-facebook-f"></i></Link></li>
                  <li class="list-inline-item"><Link href="#" class="social-link"><i class="fab fa-twitter"></i></Link></li>
                  <li class="list-inline-item"><Link href="#" class="social-link"><i class="fab fa-instagram"></i></Link></li>
                  <li class="list-inline-item"><Link href="#" class="social-link"><i class="fab fa-linkedin"></i></Link></li>
                </ul>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-5">
              <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-7.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 class="mb-0">John Tarly</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                <ul class="social mb-0 list-inline mt-3">
                  <li class="list-inline-item"><Link href="#" class="social-link"><i class="fab fa-facebook-f"></i></Link></li>
                  <li class="list-inline-item"><Link href="#" class="social-link"><i class="fab fa-twitter"></i></Link></li>
                  <li class="list-inline-item"><Link href="#" class="social-link"><i class="fab fa-instagram"></i></Link></li>
                  <li class="list-inline-item"><Link href="#" class="social-link"><i class="fab fa-linkedin"></i></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default models;
