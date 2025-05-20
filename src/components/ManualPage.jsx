"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

const ManualPage = () => {
  const [formData, setFormData] = useState({
    brand: "",
    condition: "",
    pairs: "",
    reward: "voucher",
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Simple validation
    if (!formData.brand || !formData.condition || !formData.pairs) {
      alert("Please fill in all required fields")
      return
    }

    // Show success message
    alert(`Unique code generated! Your estimated reward is £${formData.pairs * 10}.`)
  }

  return (
    <div className="mobile-container">
      <header className="header">
        <div className="logo">
          <img src="/placeholder.svg?height=24&width=24" alt="Logo" />
        </div>
        <button className="menu-button">
          <img src="/placeholder.svg?height=32&width=32" alt="Menu" />
        </button>
      </header>

      <div className="tabs">
        <Link to="/scan" className="tab">
          Scan
        </Link>
        <Link to="/manual" className="tab active">
          Manual
        </Link>
      </div>

      <main className="main-content manual-content">
        <form id="manual-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h2 className="section-title">Select Brand</h2>
            <div className="select-wrapper">
              <select id="brand" className="form-select" value={formData.brand} onChange={handleChange}>
                <option value="" disabled>
                  Brand
                </option>
                <option value="nike">Nike</option>
                <option value="adidas">Adidas</option>
                <option value="puma">Puma</option>
                <option value="reebok">Reebok</option>
                <option value="converse">Converse</option>
                <option value="other">Other</option>
              </select>
              <div className="select-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2 className="section-title">Select Condition</h2>
            <div className="select-wrapper">
              <select id="condition" className="form-select" value={formData.condition} onChange={handleChange}>
                <option value="" disabled>
                  Condition
                </option>
                <option value="new">New</option>
                <option value="like-new">Like New</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
                <option value="poor">Poor</option>
              </select>
              <div className="select-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2 className="section-title">How many Pairs of Shoes?</h2>
            <input
              type="number"
              id="pairs"
              className="form-input pairs-input"
              placeholder="e.g 2"
              value={formData.pairs}
              onChange={handleChange}
            />
          </div>

          <div className="form-section">
            <h2 className="section-title-small">Which Reward would you like?</h2>
            <div className="select-wrapper">
              <select id="reward" className="form-select" value={formData.reward} onChange={handleChange}>
                <option value="voucher">Voucher</option>
                <option value="cash">Cash</option>
                <option value="merchandise">Merchandise</option>
                <option value="donation">Donation</option>
              </select>
              <div className="select-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>

          <div className="form-actions">
            <a href="#" className="proceed-link">
              Proceed to scan and estimate Rewards
            </a>
            <button type="submit" className="generate-button">
              Generate a Unique Code
            </button>
          </div>
        </form>
      </main>

      <nav className="bottom-nav">
        <Link to="/" className="nav-item">
          <img src="/assets/home-icon-active- (1).svg" width="32" height="32" alt="" />
          <span>Home</span>
        </Link>
        <Link to="/manual" className="nav-item active">
          <img src="/assets/recyclenav.svg" width="32" height="32" alt="" />
          <span>Recycle</span>
        </Link>
        <Link to="#" className="nav-item">
          <img src="/assets/explore_24px.svg" width="32" height="32" alt="" />
          <span>Discover</span>
        </Link>
        <Link to="/profile" className="nav-item">
          <img src="/assets/profile.svg" width="32" height="32" alt="" />
          <span>Profile</span>
        </Link>
      </nav>
    </div>
  )
}

export default ManualPage
