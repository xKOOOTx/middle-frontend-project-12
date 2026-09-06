export const login = async (values) => {
      const response = await fetch('/api/v1/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(values),
      });

      if (!response.ok) {
            throw new Error('Unable to login');
      }

      return response.json();
}