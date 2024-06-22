import React, { Children } from 'react'

export const Slots = {
  HEADER: 1,
  CONTENT: 2,
  FOOTER: 3,
}

export const SideBarLayout = ({ children, className = '' }) => {
  return (
    <div
      aria-label="layout"
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <header>
        {Children.map(children, child => {
          if (React.isValidElement(child) && Slots.HEADER === child?.props.slot) {
            return child
          }
          return null
        })}
      </header>
      <div className={`d-flex justify-content-between container-fluid ${className}`}>
        <main className="flex-grow-3">
          {Children.map(children, child => {
            if (React.isValidElement(child) && Slots.CONTENT === child?.props.slot) {
              return child
            }
            return null
          })}
        </main>
      </div>
      <footer style={{ marginTop: 'auto' }}>
        {Children.map(children, child => {
          if (React.isValidElement(child) && Slots.FOOTER === child?.props.slot) {
            return child
          }
          return null
        })}
      </footer>
    </div>
  )
}

SideBarLayout.Slot = ({ children, className }) => {
  return <div className={className}>{children}</div>
}
