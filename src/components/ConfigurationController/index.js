// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const ToggleShowContent = () => {
        onToggleShowContent(showContent)
      }

      const ToggleShowLeftNavbar = () => {
        onToggleShowLeftNavbar(showLeftNavbar)
      }

      const ToggleShowRightNavbar = () => {
        onToggleShowRightNavbar(showRightNavbar)
      }

      return (
        <div className="top-section">
          <div className="header">
            <h1 className="heading">Layout</h1>
            <div className="input-container">
              <div className="input-item-container">
                <input
                  id="Content"
                  type="checkbox"
                  className="input"
                  checked={showContent}
                  onChange={ToggleShowContent}
                />
                <label className="label-text" htmlFor="Content">
                  Content
                </label>
              </div>
              <div className="input-item-container">
                <input
                  id="left"
                  type="checkbox"
                  className="input"
                  checked={showLeftNavbar}
                  onChange={ToggleShowLeftNavbar}
                />
                <label className="label-text" htmlFor="left">
                  Left Navbar
                </label>
              </div>
              <div className="input-item-container">
                <input
                  id="right"
                  type="checkbox"
                  className="input"
                  checked={showRightNavbar}
                  onChange={ToggleShowRightNavbar}
                />
                <label className="label-text" htmlFor="right">
                  Right Navbar
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
