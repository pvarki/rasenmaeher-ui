import { useState, useEffect } from 'react';

const useFetchFqdn = () => {
  const [fqdn, setFqdn] = useState('');

interface HealthCheckResponse {
    dns: string;
}

useEffect(() => {
    fetch('/api/v1/healthcheck')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data: HealthCheckResponse) => {
            setFqdn(data.dns);
        })
        .catch(error => {
            console.error('Failed to fetch FQDN:', error);
        });
}, []);

  return fqdn;
};

export default useFetchFqdn;
