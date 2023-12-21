import React, { useState, useEffect } from 'react';

function AlertCustome({ alertType, alertMessage }) {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAlert(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  const getVariant = (type) => {
    switch (type) {
      case 'danger':
        return 'alert-danger';
      case 'success':
        return 'alert-success';
      case 'warning':
        return 'alert-warning';
      default:
        return 'alert-info';
    }
  };

  return showAlert ? (
    <div className={`alert ${getVariant(alertType)}`} role="alert">
      {alertMessage}
    </div>
  ) : null;
}

export default AlertCustome;
