import { react } from "react";
import "./topProjects.css";

const TopProjects = () => {
  return (
    <div className="topProjects">
      <h1>Our Plans</h1>
      <div class="projects_container">
        <div class="table basic">
          <div class="price-section">
            <div class="price-area">
              <div class="inner-area">
                <span class="text">$</span>
                <span class="price">29</span>
              </div>
            </div>
          </div>
          <div class="package-name"></div>
          <ul class="features">
            <li>
              <span class="list-name">One Selected Template</span>
              <span class="icon check">
                <i class="fas fa-check"></i>
              </span>
            </li>
            <li>
              <span class="list-name">100% Responsive Design</span>
              <span class="icon check">
                <i class="fas fa-check"></i>
              </span>
            </li>
            <li>
              <span class="list-name">Credit Remove Permission</span>
              <span class="icon cross">
                <i class="fas fa-times"></i>
              </span>
            </li>
            <li>
              <span class="list-name">Lifetime Template Updates</span>
              <span class="icon cross">
                <i class="fas fa-times"></i>
              </span>
            </li>
          </ul>
          <div class="btn">
            <button>Purchase</button>
          </div>
        </div>
        <div class="table premium">
          <div class="ribbon">
            <span>Recommend</span>
          </div>
          <div class="price-section">
            <div class="price-area">
              <div class="inner-area">
                <span class="text">$</span>
                <span class="price">59</span>
              </div>
            </div>
          </div>
          <div class="package-name"></div>
          <ul class="features">
            <li>
              <span class="list-name">Five Existing Templates</span>
              <span class="icon check">
                <i class="fas fa-check"></i>
              </span>
            </li>
            <li>
              <span class="list-name">100% Responsive Design</span>
              <span class="icon check">
                <i class="fas fa-check"></i>
              </span>
            </li>
            <li>
              <span class="list-name">Credit Remove Permission</span>
              <span class="icon check">
                <i class="fas fa-check"></i>
              </span>
            </li>
            <li>
              <span class="list-name">Lifetime Template Updates</span>
              <span class="icon cross">
                <i class="fas fa-times"></i>
              </span>
            </li>
          </ul>
          <div class="btn">
            <button>Purchase</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProjects;
